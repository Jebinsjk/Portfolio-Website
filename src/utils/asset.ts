/**
 * Returns a URL prefixed with the Vite base path so public-folder assets
 * resolve correctly on both localhost (base = '/') and GitHub Pages
 * (base = '/Portfolio-Website/').
 *
 * Usage:  src={asset('IMG_0865.PNG')}
 *         href={asset('JebinsKaran__Resume.pdf')}
 */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
