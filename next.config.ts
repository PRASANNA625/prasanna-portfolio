import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Next.js doesn't walk up to
    // the unrelated package.json in the parent home directory.
    root: path.join(__dirname),
  },
};

export default nextConfig;
