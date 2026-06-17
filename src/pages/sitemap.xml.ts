import { servicePages } from '../data/services';
import { siteUrl } from '../lib/site';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const buildUrl = (path: string) => `${siteUrl}${path}`;

const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  ...servicePages.map((service) => ({
    path: `/${service.slug}/`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
] as const;

export const GET = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${escapeXml(buildUrl(route.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
