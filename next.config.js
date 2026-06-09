/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces ./out for Azure Static Web Apps.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
