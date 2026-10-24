import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export deployed to Netlify.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
