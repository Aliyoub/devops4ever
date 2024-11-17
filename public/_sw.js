// const { match } = require("assert");
// const { log } = require("console");
// const { request } = require("http");
// const { keys, map } = require("next-pwa/cache");
// const { images } = require("../next.config");
// const { cache, version } = require("react");


// ==========================================================================================================

// Que fait cette ligne ?
// Elle définit le nom du cache que le Service Worker utilisera pour stocker les ressources de votre application.
// Pourquoi est-ce important ?
// Ce nom est utilisé pour identifier les données mises en cache. Si vous mettez à jour votre application, vous pouvez changer ce nom pour invalider les caches obsolètes.

const CACHE_NAME = "pwa-cache-v1";

// ==========================================================================================================

// Que fait cette ligne ?
// Elle définit une liste d'URLs que le Service Worker mettra en cache lors de son installation.
// Pourquoi est-ce important ?
// Ces ressources seront disponibles hors ligne. Vous pouvez ajouter ici toutes les ressources critiques pour que votre application fonctionne hors connexion (CSS, JavaScript, images, etc.).

const urlsToCache = [
  "/", // Page d'accueil
  "/home", // Page d'accueil
  "/favicon.ico",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// ==========================================================================================================
// Installer le Service Worker

// Que fait cette section ?
// Cet événement est déclenché lorsque le Service Worker est installé.
// Il ouvre un cache nommé CACHE_NAME et ajoute les URLs définies dans urlsToCache.
// Pourquoi est-ce important ?
// Cela garantit que les ressources critiques sont mises en cache dès l'installation du Service Worker.
// Détails des fonctions utilisées :
// caches.open(CACHE_NAME) : Ouvre un espace de stockage nommé CACHE_NAME.
// cache.addAll(urlsToCache) : Ajoute les ressources listées à ce cache.
// event.waitUntil() : Attend la fin de la promesse avant de terminer l'installation.

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Ouverture du cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// ==========================================================================================================
// Activer le Service Worker

// Que fait cette section ?
// Cet événement est déclenché lorsque le Service Worker est activé.
// Elle vérifie tous les caches existants et supprime ceux qui ne correspondent pas au CACHE_NAME actuel.
// Pourquoi est-ce important ?
// Cela permet d'éliminer les caches obsolètes et d'assurer que seule la dernière version des ressources est utilisée.
// Détails des fonctions utilisées :
// caches.keys() : Récupère une liste de tous les noms de caches existants.
// cacheNames.map() : Parcourt tous les noms de caches et les compare avec CACHE_NAME.
// caches.delete(cache) : Supprime les caches qui ne correspondent pas.

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
    })
  );
});

// ==========================================================================================================
// Intercepter les requêtes réseau

// Que fait cette section ?
// Cet événement est déclenché chaque fois qu'une requête réseau est effectuée.
// Le Service Worker intercepte ces requêtes et essaie de trouver une réponse dans le cache.
// Si la ressource n'est pas dans le cache, elle est récupérée via une requête réseau (fetch).
// Pourquoi est-ce important ?
// Cela permet de fournir les ressources hors ligne si elles sont disponibles dans le cache. Sinon, le Service Worker laisse le réseau gérer la requête.
// Détails des fonctions utilisées :
// caches.match(event.request) : Recherche dans le cache une ressource correspondant à la requête.
// fetch(event.request) : Si la ressource n'est pas dans le cache, elle est demandée au réseau.

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retourner la réponse du cache si elle existe, sinon effectuer une requête réseau
      return response || fetch(event.request);
    })
  );
});
