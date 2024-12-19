/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reinoush.com', // Remplacez par l'URL de votre site
  generateRobotsTxt: true, // Générer un fichier robots.txt
  sitemapSize: 7000, // Diviser le sitemap si le nombre d'URLs dépasse cette limite (optionnel)
  changefreq: 'daily', // Fréquence de mise à jour (optionnel)
  priority: 0.7, // Priorité des URLs (optionnel)
  generateIndexSitemap: false, // Option pour activer/désactiver un index du sitemap
};
