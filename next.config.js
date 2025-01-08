// next.config.mjs ou next.config.js (avec "type": "module" dans package.json)

/** @type {import('next').NextConfig} */

// 1. Importer next-pwa
import nextPwa from 'next-pwa';

// 2. Créer l'instance du plugin
const withPWA = nextPwa({
  dest: 'public',    // Où seront générés les fichiers PWA, y compris le Service Worker
  register: true,    // Enregistrer automatiquement le Service Worker
  skipWaiting: true, // Permet au Service Worker d'être actif immédiatement
  // disable: process.env.NODE_ENV === 'development', // Désactiver la PWA en mode dev si nécessaire
});

// 3. Définir les options Next.js
const nextConfig = {
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
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  // webpack: (config, { isServer }) => {
  //   // Ajouter un alias "@" vers le répertoire courant
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': __dirname,
  //   };

  //   // Exemple : désactiver fs côté client pour éviter les erreurs si des libs utilisent fs
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
};

// 4. Combiner la config
export default withPWA(nextConfig);

