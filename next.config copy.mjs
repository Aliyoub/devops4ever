// next.config.mjs

import nextPwa from 'next-pwa';
import path from 'path';

/**
 * Exemple de configuration pour générer le Service Worker
 * dans un projet Next.js (v14.2.7) utilisant ES Modules.
 */
const runtimeCaching = [
  {
    // Mise en cache d'une ressource JSON (ou autre type)
    urlPattern: /^https:\/\/example\.com\/data\.json$/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'my-data-cache',
      expiration: {
        maxAgeSeconds: 60 * 60 * 24, // 1 jour
      },
    },
  },
  {
    // Cache pour les images
    urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'image-cache',
      expiration: {
        maxEntries: 50,
      },
    },
  },
];

// On wrappe la config avec nextPwa
const withPWA = nextPwa({
  dest: 'public',       // Génération du Service Worker dans /public
  register: true,
  skipWaiting: true,
  runtimeCaching,       // Nos règles pour la mise en cache
  // disable: process.env.NODE_ENV === 'development', // Désactiver en dev si nécessaire
});

/**
 * Configuration Next.js (ES Modules).
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Autres options si besoin...
};

export default withPWA(nextConfig);
