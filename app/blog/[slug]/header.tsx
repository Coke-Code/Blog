"use client";
import { ArrowLeft, Clock, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Theme from "../../components/theme";
type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		readingTime: {
			words: number;
			minutes: number;
		};
	};
	views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black dark:from-white dark:via-slate-100 dark:to-white"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10 dark:border-zinc-600  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between items-center gap-8">
						<span
							title="View counter for this page"
							className={`duration-200 hover:font-medium flex items-center gap-1 ${
								isIntersecting
									? "text-zinc-500 hover:text-zinc-300"
									: "text-zinc-500 hover:text-zinc-300"
							} `}
						>
							<Eye className="w-5 h-5" />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(
								views,
							)}
						</span>
						<Link target="_blank" href="https://github.com/coke-code">
							<Github
								className={`w-6 h-6 duration-200 hover:font-medium ${
									isIntersecting
										? "text-zinc-500 hover:text-zinc-300"
										: "text-zinc-500 hover:text-zinc-300"
								} `}
							/>
						</Link>
						<Theme />
					</div>

					<Link
						href="/blog"
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? " dark:text-zinc-400 dark:hover:text-black text-slate-200 hover:text-white"
								: "dark:tex-slate-100 dark:hover:text-white text-zinc-600 hover:text-zinc-200"
						} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold tracking-tight text-white dark:text-black sm:text-6xl font-display">
							{project.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300 dark:text-zinc-600">
							{project.description}
						</p>
					</div>

					<div className="flex mt-6 items-center text-xs text-zinc-300 dark:text-zinc-400">
						<Clock className="w-3 h-3" />
						<span className="ml-1">
							大约
							{project.readingTime.words}个字,预计花
							{project.readingTime.minutes.toFixed(1)}分钟
						</span>
					</div>

					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white dark:text-zinc-400 sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link target="_blank" key={link.label} href={link.href}>
									{link.label} <span aria-hidden="true">&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
