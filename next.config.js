/** @type {import('next').NextConfig} */

// Import du plugin next-pwa
const withPWA = require('next-pwa')({
  dest: 'public',    // Où seront générés les fichiers PWA, y compris le Service Worker
  register: true,    // Enregistrer automatiquement le Service Worker
  skipWaiting: true, // Permet au Service Worker d'être actif immédiatement
  // disable: process.env.NODE_ENV === 'development', // Désactiver la PWA en mode dev si nécessaire
});

// Configuration Next.js + options supplémentaires
const nextConfig = withPWA({
  reactStrictMode: true,

  // Configuration pour définir des headers HTTP personnalisés
  async headers() {
    return [
      {
        source: '/styles.css',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Clés pouvant être utilisées par Tailwind CSS (si vous l'intégrez dans Next.js)
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  // Configuration Webpack supplémentaire
  webpack: (config, { isServer }) => {
    // Exemple : désactiver "fs" côté client pour éviter les erreurs de modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
});

module.exports = nextConfig;
