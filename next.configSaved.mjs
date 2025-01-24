import withPWA from 'next-pwa';

const nextConfig = withPWA({
    // reactStrictMode: true,
    // swcMinify: true,
    pwa: {
        dest: "public", // Le service worker sera généré dans le dossier public
        register: true, // Enregistre automatiquement le service worker
        skipWaiting: true, // Active immédiatement la nouvelle version du service worker
        disable: process.env.NODE_ENV === 'development', // Désactive en mode dev
        cacheOnFrontEndNav: true, // Met en cache lors de la navigation côté client
    }
});

export default nextConfig;