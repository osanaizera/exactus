import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    /* O esboço do site da Exaktus é um ficheiro estático em public/esboco. */
    return [{ source: "/esboco", destination: "/esboco/index.html" }];
  },
};

export default nextConfig;
