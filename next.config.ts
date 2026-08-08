import type { NextConfig } from "next";
import fs from "fs";

const projectRoot = fs.realpathSync(process.cwd());

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.context = projectRoot;
    return config;
  },
};

export default nextConfig;