import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.icons8.com"],
  },

  turbopack: {},
  webpack(config) {
    // 👇 Exclude svg from Next.js default image handling
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
