module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.wissbell.com",
	generateRobotsTxt: true, // (optional)
	additionalPaths: async (config) => [
		await config.transform(config, "/additional-page"),
	],
};
