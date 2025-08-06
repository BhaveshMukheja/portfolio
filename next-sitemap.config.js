// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://yourdomain.com', // 🔁 Replace with your real domain
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
};
