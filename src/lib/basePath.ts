export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// `next/link` and `next/image` prepend the base path already; use this only for
// URLs built by hand, such as references to files in `public/`.
export function withBasePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
