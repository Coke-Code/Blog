import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Clock, Eye, View } from "lucide-react";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/blog/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 dark:text-zinc-200 text-zinc-600 group-hover:text-black dark:group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>刚刚</span>
						)}
					</span>
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl dark:text-zinc-100 text-zinc-900 group-hover:text-back text-zinc-200 dark:group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-500 dark:group-hover:text-zinc-200  group-hover:text-zinc-700">
					{project.description}
				</p>
				<div className="flex items-center justify-start mt-4">
					<span className="flex items-center gap-1 text-xs text-zinc-500">
						<Clock className="w-3 h-3" />
						<span className="ml-1">
							大约
							{project.readingTime.words}个字,预计花
							{project.readingTime.minutes.toFixed(1)}分钟
						</span>
					</span>
				</div>
			</article>
		</Link>
	);
};
