import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Production: proxy /api/* to the backend via API_URL env var
  async rewrites() {
    const apiUrl = process.env.API_URL;
    if (apiUrl) {
      return [
        {
          source: '/api/:path*',
          destination: `${apiUrl}/api/:path*`,
        },
      ];
    }
    return [];
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  },
};

export default nextConfig;
