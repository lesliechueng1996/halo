/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
      },
    ],
  },
};

module.exports = removeImports(nextConfig);
