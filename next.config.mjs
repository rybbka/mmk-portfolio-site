/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  experimental: {
    optimizeCss: true
  }
};

export default config;
