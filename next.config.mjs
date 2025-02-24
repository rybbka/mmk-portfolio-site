/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  // Force production mode for CSS optimization
  env: {
    NODE_ENV: 'production',
  },
};

export default config;
