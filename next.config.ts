import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // O cache de build grava o valor das variáveis de ambiente lidas no código,
    // e o scanner de segredos do Netlify reprova o deploy ao encontrá-lo.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
