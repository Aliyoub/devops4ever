// const { match } = require("assert");
// const { log } = require("console");
// const { request } = require("http");
// const { url } = require("inspector");
// const { keys, map } = require("next-pwa/cache");

const CACHE_NAME = 'nextjs-cache-v1';

// Cache des fichiers critiques générés par Next.js
const urlsToCache = [
  '/', // Page d'accueil
  '/favicon.ico',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Ajouter dynamiquement les ressources de Next.js (JS/CSS)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((error) => {
        console.error('Erreur lors de l\'ajout des ressources au cache:', error);
      });
    })
  );
});

// Supprimer les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Gestion des requêtes (Next.js dynamique + fichiers statiques)
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Gestion des fichiers statiques de Next.js (dans .next/static/)
  if (requestUrl.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response; // Retourner depuis le cache
          }

          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone()); // Mettre à jour le cache
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Gestion des autres requêtes
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
