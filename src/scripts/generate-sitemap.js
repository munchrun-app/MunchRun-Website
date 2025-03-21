const fs = require('fs');
const path = require('path');

// Base URL of your website
const BASE_URL = 'https://www.munchrun.com.au';

// List of all routes in your application
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/drivers',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/restaurants',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/faq',
    priority: 0.6,
    changefreq: 'monthly',
  }
  // Add any dynamic routes here
];

// Get current date for lastmod
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(
  path.resolve(__dirname, '../../public/sitemap.xml'),
  sitemap
);

console.log('Sitemap generated successfully!');
