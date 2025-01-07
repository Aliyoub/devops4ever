// public/service-worker.js
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installation en cours...');
    // Pré-cache si nécessaire, etc.
    event.waitUntil(
      // Par exemple : caches.open('v1').then(...)
    );
  });
  
  self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activation en cours...');
    // Nettoyage des anciens caches si besoin
    event.waitUntil(
      // Par exemple : caches.keys().then(...)
    );
  });
  
  self.addEventListener('fetch', (event) => {
    // Intercepter les requêtes réseau, implémenter la logique de cache, etc.
    console.log('[Service Worker] Fetch...', event.request.url);
  });
  