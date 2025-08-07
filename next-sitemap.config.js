// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000', // 🔁 Replace with your real domain
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
};
