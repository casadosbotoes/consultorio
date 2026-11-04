import type { NextConfig } from "next";

/**
 * - Ambiente de desenvolvimento/sandbox: output "standalone".
 * - Deploy no GitHub Pages: defina a variável de ambiente NEXT_OUTPUT=export
 *   para gerar um site estático na pasta ./out (usado por .github/workflows/deploy.yml).
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        // Caminho do repositório no GitHub Pages (vazio quando não definido)
        ...(process.env.NEXT_BASE_PATH
          ? { basePath: process.env.NEXT_BASE_PATH }
          : {}),
      }
    : {
        output: "standalone" as const,
        images: { qualities: [75, 80, 82] },
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
