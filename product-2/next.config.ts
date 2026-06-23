import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for @cloudflare/next-on-pages
  // Static pages prerender; client components (assessment, form) are islands
  images: {
    // next/image with Cloudflare Pages – use unoptimized for static export
    // or configure a Cloudflare Images loader when deploying
    unoptimized: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
