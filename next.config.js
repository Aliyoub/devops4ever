/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
}
module.exports = nextConfig


// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // Où seront générés les fichiers PWA, y compris le Service Worker
  register: true, // Enregistrer automatiquement le Service Worker
  skipWaiting: true, // Permet au Service Worker d'être actif immédiatement
  // disable: process.env.NODE_ENV === 'development', // Désactiver le PWA en mode développement
  
});


module.exports = withPWA({
  // Autres configurations Next.js
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/question-answer',
        destination: '/revisions/history/question-answer',
      },
    ];
  },
});


const { plugins } = require('chart.js');
const { content } = require('googleapis/build/src/apis/content');
const { headers } = require('next/headers');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other Next.js configurations...
  
  webpack: (config, { dev, isServer }) => {
    // Only add GenerateSW in production on the client-side
    if (!dev && !isServer) {
      config.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          // Additional Workbox configuration here...
        })
      );
    }

    return config;
  },
};

module.exports = {
  async headers() {
    return [
      {
        source: "/styles.css", // Match your CSS file
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
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

};

