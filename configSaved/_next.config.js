import withPWA from 'next-pwa';
import { GenerateSW } from 'workbox-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  webpack: (config, { dev, isServer }) => {
    // Only add GenerateSW in production on the client-side
    if (!dev && !isServer) {
      if (!config.plugins.find((plugin) => plugin.constructor.name === 'GenerateSW')) {
        config.plugins.push(
          new GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/], // Example exclusions
          })
        );
      }
    }
    return config;
  },
};

// Wrap with PWA for additional configuration
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(nextConfig);
