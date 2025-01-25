// next.config.mjs

import nextPwa from 'next-pwa';
import path from 'path';

// Définition de nos règles de cache (runtimeCaching)
const runtimeCaching = [
  {
    // On cible l'URL de l'API qui renvoie le HTML pré-rendu
    // urlPattern: /^https?:\/\/localhost:3000\/(home|quiz)$/,
    
    // Cible uniquement les fichiers minifiés du répertoire .next
    urlPattern: /^https?:\/\/localhost:3000\/_next\/.*\.(?:min\.js|min\.css)$/,
    // urlPattern: /^https?:\/\/localhost:3000\/sounds\/incorrect-answer.mp3$/,
    urlPattern: /^\/sounds\/incorrect-answer.mp3$/,
    // urlPattern: /^\/api\/quiz\/cluster-architecture$/,
    // urlPattern: /^https?:\/\/localhost:3000\/api\/quiz\/cluster-architecture$/,
    // urlPattern: /^https?:\/\/localhost:3000\/quiz$/,
    // urlPattern: /^https?:\/\/localhost:3000\/api\/github-md$/,
  

    // StaleWhileRevalidate => on sert instantanément le contenu en cache et 
    // on fait une requête réseau en parallèle pour obtenir une version plus à jour, 
    // qui sera stockée pour les prochains accès.
    handler: 'StaleWhileRevalidate', // On veut servir la version en cache, puis raffraîchir
    handler: 'CacheFirst', // On veut servir la version en cache, puis raffraîchir
    options: {
      cacheName: 'component-render-cache',
      expiration: {
        maxAgeSeconds: 60 * 60 * 24, // 1 jour par exemple
      },
    },
  },
];

const withPWA = nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // buildExcludes: [/chunks\/.*$/, /.*\.map$/],  // Exclut les fichiers non minifiés
  // swcMinify: true,  // Minification activée avec SWC
  runtimeCaching, // nos règles de cache
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Webpack Configuration to Ignore Specific Files
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /components\/chart\/.*\.js$/,  // Ignore all JS files in ./components/chart/
        use: 'null-loader',
      },
      {
        test: /components\/settings\/.*\.js$/, // Ignore all JS files in ./components/settings/
        use: 'null-loader',
      }
    );
    return config;
  },
};

export default withPWA(nextConfig);
