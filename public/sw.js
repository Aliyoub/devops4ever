// const { match } = require("assert");
// const { log } = require("console");
// const { request } = require("http");
// const { url } = require("inspector");
// const { keys, map } = require("next-pwa/cache");

const { default: identifier } = require("@mui/material/styles/identifier");
const { match } = require("assert");
const { request } = require("http");
const { keys, map } = require("next-pwa/cache");
const { pages } = require("next/dist/build/templates/app-page");
const { version } = require("os");
const { versions } = require("process");
const { cache } = require("react");

// ===========================================================================================
// Que fait cette ligne ?
// Elle définit un nom pour le cache. Le Service Worker utilise ce nom pour identifier le cache associé à cette version de votre application.
// Pourquoi est-ce important ?
// Lorsque vous mettez à jour votre application, vous pouvez modifier ce nom pour invalider les anciennes ressources et forcer le rechargement des nouvelles.
const CACHE_NAME = "nextjs-cache-v1";
// ===========================================================================================
// Cache des fichiers critiques générés par Next.js

// Que fait cette ligne ?
// Elle liste les ressources critiques (comme l'icône, le fichier manifest.json, et la page d'accueil /) qui seront mises en cache dès que le Service Worker sera installé.
// Pourquoi est-ce important ?
// Ces fichiers garantissent que l'application dispose de ses ressources de base même hors ligne.
const urlsToCache = [
  "/", // Page d'accueil
  "/home/",
  "/quiz/",
  "https://devops4ever.vercel.app/quiz",
  "app/quiz/page",
  "app/settings/page",
  "/favicon.ico",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];
// ===========================================================================================
// Ajouter dynamiquement les ressources de Next.js (JS/CSS)

// self.addEventListener('install', callback) :

// Attache un gestionnaire d'événement pour l'étape d'installation du Service Worker.
// Cet événement est déclenché lorsque le Service Worker est enregistré pour la première fois ou mis à jour.
// caches.open(CACHE_NAME) :

// Ouvre un espace de stockage nommé CACHE_NAME dans le cache du navigateur.
// cache.addAll(urlsToCache) :

// Ajoute toutes les URLs définies dans urlsToCache au cache.
// event.waitUntil() :

// Empêche le Service Worker de terminer l'installation avant que toutes les promesses à l'intérieur ne soient résolues.
// Pourquoi est-ce important ?

// Cette section s'assure que les fichiers critiques sont immédiatement mis en cache après l'installation.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((error) => {
        console.error("Erreur lors de l'ajout des ressources au cache:", error);
      });
    })
  );
});

// ===========================================================================================
// Supprimer les anciens caches

// self.addEventListener('activate', callback) :

// Attache un gestionnaire d'événement pour l'étape d'activation du Service Worker.
// Cet événement est déclenché lorsque le Service Worker est prêt à prendre le contrôle.
// caches.keys() :

// Récupère une liste de tous les noms de caches existants dans le navigateur.
// cacheNames.map() :

// Parcourt tous les caches existants.
// Condition if (cache !== CACHE_NAME) :

// Compare chaque cache existant avec le cache actif (CACHE_NAME).
// Si un cache ne correspond pas, il est supprimé.
// caches.delete(cache) :

// Supprime le cache obsolète.
// Pourquoi est-ce important ?

// Cela garantit que les utilisateurs utilisent toujours les versions les plus récentes de votre application et que les anciennes ressources ne consomment pas inutilement de l'espace.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Suppression de l'ancien cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// ===========================================================================================
// Gestion des requêtes (Next.js dynamique + fichiers statiques)


// self.addEventListener('fetch', callback) :

// Intercepte toutes les requêtes réseau effectuées par l'application.
// Gestion des fichiers Next.js (_next/static/) :

// Le Service Worker identifie les ressources statiques générées par Next.js.
// Il utilise une stratégie Cache First :
// Chercher dans le cache avec cache.match(event.request).
// Si la ressource n'est pas dans le cache, effectuer une requête réseau avec fetch(event.request).
// Ajouter la réponse réseau au cache avec cache.put().
// Gestion des autres requêtes :

// Le Service Worker utilise une stratégie Cache, Then Network :
// Retourner la réponse depuis le cache si elle existe (caches.match()).
// Sinon, effectuer une requête réseau.
// Pourquoi est-ce important ?
// Les fichiers statiques de Next.js sont rarement modifiés, donc une stratégie Cache First est appropriée.
// Les pages dynamiques ou API nécessitent des données actualisées, donc une stratégie Cache, Then Network garantit une expérience utilisateur fluide.
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Gestion des fichiers statiques de Next.js (dans .next/static/)
  if (requestUrl.pathname.startsWith("/_next/static/")) {
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
