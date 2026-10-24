export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function sitePath(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export function imagePath(filename) {
  return `${basePath}/images/${encodeURIComponent(filename).replaceAll('%2F', '/')}`;
}
