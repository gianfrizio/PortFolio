import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
    // When using `output: 'export'` (static export), Next's Image Optimization API
    // is not available. Set `unoptimized: true` to use the <Image /> component
    // without the optimization API (it will render the image as-is).
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'export',
};

export default nextConfig;
