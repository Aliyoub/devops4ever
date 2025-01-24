// option avancée pour une personnalisation fine

module.exports = {
    globDirectory: 'public/',
    globPatterns: [
      '**/*.{css,js,html,png,jpg,jpeg,svg,webp,woff,woff2,eot,ttf,otf}'
    ],
    swDest: 'public/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:css)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'stylesheets',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  };