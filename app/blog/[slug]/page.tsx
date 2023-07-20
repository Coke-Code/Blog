import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import Toc from "@/app/components/toc";
import Ad from "@/app/components/ad";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}
export async function generateMetadata({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug)!;

	return {
		title: project.title,
		description: project.description,
	};
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);
	if (!project) {
		notFound();
	}
	const views =
		(await redis.get<number>(["pageviews", "blog", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen dark:bg-zinc-950">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />
			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
			<Toc project={project} />
			<Ad project={project} />
		</div>
	);
}
