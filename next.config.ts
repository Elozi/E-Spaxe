import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['images.unsplash.com', 'images.asos-media.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com", 
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", 
      },
        {
        protocol: "https",
        hostname: "zephansandco.com", 
      },
        {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", 
      },
      
    ],
  },
};

export default nextConfig;

