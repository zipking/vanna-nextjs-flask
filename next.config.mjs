/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/**/*",
        "node_modules/@esbuild/**/*",
        "node_modules/terser/**/*",
        "node_modules/webpack/**/*",
        "node_modules/@next/**/*",
        "/vercel/.cache/yarn/v6/**/*",
      ],
      "/*": ["public/static/work/**/*.png"],
      "/**": ["public/static/work/**/*.png"],
    },
  },
};

export default nextConfig;
