import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export so `next build` generates `out/` for FTP deploy
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
