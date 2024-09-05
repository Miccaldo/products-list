/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://example.com',
  },
};

export default nextConfig;
