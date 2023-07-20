import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	path: {
		type: "string",
		resolve: (doc) => `/${doc._raw.flattenedPath}`,
	},
	slug: {
		type: "string",
		resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
	readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
	headings: {
		type: "list",
		resolve: async (doc) => {
			const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
			const slugger = new GithubSlugger();
			const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
				({ groups }) => {
					const flag = groups?.flag;
					const content = groups?.content;
					return {
						level:
							flag?.length === 1 ? "one" : flag?.length === 2 ? "two" : "three",
						text: content,
						slug: content ? slugger.slug(content) : undefined,
					};
				},
			);
			return headings;
		},
	},
};

export const Project = defineDocumentType(() => ({
	name: "Project",
	filePathPattern: "./blog/**/*.mdx",
	contentType: "mdx",

	fields: {
		published: {
			type: "boolean",
		},
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		date: {
			type: "date",
		},
		url: {
			type: "string",
		},
		hot: {
			type: "boolean",
		},
		repository: {
			type: "string",
		},
		toc: {
			type: "boolean",
			required: false,
			default: true,
		},
		ad: {
			type: "string",
		},
	},
	computedFields,
}));

export const Page = defineDocumentType(() => ({
	name: "Page",
	filePathPattern: "pages/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: "./content",
	documentTypes: [Page, Project],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
});
