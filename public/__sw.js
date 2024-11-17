// const { match } = require("assert");
// const { log } = require("console");
// const { request } = require("http");
// const { keys, map } = require("next-pwa/cache");
// const { headers } = require("next/headers");

const CACHE_NAME = "pwa-cache-v1";

const urlsToCache = [
  "/", // Page d'accueil
  "/favicon.ico",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Installer le Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Ouverture du cache");
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.error("Erreur lors de l'installation :", error);
    })
  );
});

// Activer le Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Suppression de l'ancien cache", cache);
            return caches.delete(cache);
          }
        })
      );
    }).catch((error) => {
      console.error("Erreur lors de l'activation :", error);
    })
  );
});

// Intercepter les requêtes réseau
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch((error) => {
          console.error("Erreur réseau :", error);
          return new Response("Vous êtes hors ligne et la ressource n'est pas dans le cache.", {
            headers: { "Content-Type": "text/plain" },
          });
        })
      );
    })
  );
});
