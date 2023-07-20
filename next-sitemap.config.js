const fs = require("fs");
const path = require("path");

const getAllPosts = () => {
	const dir = path.resolve(__dirname, "./content/blog/");
	let allBlogPosts = [];
	try {
		const files = fs.readdirSync(dir);
		allBlogPosts = files
			.filter((v) => v.endsWith(".mdx"))
			.map((v) => v.replace(".mdx", ""));
	} catch (err) {
		console.log(err);
	}
	return allBlogPosts;
};

module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.wissbell.com",
	generateRobotsTxt: true, // (optional)
	additionalPaths: async (config) => {
		const result = ["/", "/about", "/contact"].map((v) =>
			config.transform(config, v),
		);
		const allBlogPosts = getAllPosts();
		const blogs = allBlogPosts.map((post) =>
			config.transform(config, `blog/${post}`),
		);
		const routes = await Promise.all(result.concat(blogs));
		return routes;
	},
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
};
