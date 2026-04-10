/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://superiorstone.co",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/services"),
    await config.transform(config, "/gallery"),
    await config.transform(config, "/contact"),
  ],
};
