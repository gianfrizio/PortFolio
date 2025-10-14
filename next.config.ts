import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'export',
};

export default nextConfig;
