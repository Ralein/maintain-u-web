import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Transpile dotted-map to prevent Turbopack panics
  transpilePackages: ['dotted-map'],
};

export default nextConfig;
