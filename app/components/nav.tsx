"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Theme  from "./theme";
export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "dark:bg-zinc-900/0 bg-white border-transparent "
						: "bg-zinc-900/500  dark:border-zinc-800  border-slate-200"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/blog"
							className="duration-200 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-zinc-100"
						>
							博客
						</Link>
						<Link
							href="/about"
							className="duration-200 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-zinc-100"
						>
							关于
						</Link>
						<Link
							href="/contact"
							className="duration-200 dark:text-zinc-400 text-zinc-600 hover:text-black dark:hover:text-zinc-100"
						>
							联系
						</Link>
						<Theme iconSize={20}></Theme>
					</div>

					<Link
						href="/"
						className="duration-200 dark:text-zinc-300 text-zinc-800 hover:text-zinc-600 hover:text-black  dark:hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
