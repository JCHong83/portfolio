import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 Configuration

  // Ensure images from Sanity can be rendered
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
