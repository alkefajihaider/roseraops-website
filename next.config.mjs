/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — outputs to ./out, deployable to Cloudflare Pages.
  output: 'export',

  // next/image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },

  // Emit /problem/ instead of /problem.html for cleaner static hosting.
  trailingSlash: true,

  // Don't fail production builds on lint warnings during static export.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
