/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://example.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/640/480/food'
      }
    ]
  }
};

export default nextConfig;
