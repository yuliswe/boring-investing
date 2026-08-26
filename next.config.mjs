// @ts-check

const repository = 'boring-investing';
const isProduction = process.env.NODE_ENV === 'production';
// GitHub Pages serves a project site from a sub-path named after the repository,
// so production assets need a base path that development served from `/` does not.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProduction ? `/${repository}` : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Without this, Next walks up and picks the parent tree's lockfile when the
  // app is built inside a git worktree.
  outputFileTracingRoot: import.meta.dirname,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
