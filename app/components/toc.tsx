"use client";
import { Project } from "@/.contentlayer/generated";
import React, { useMemo, useRef, useState } from "react";
import { useEffect } from "react";
interface TocProps {
	project: Project;
}
export default function Toc({ project }: TocProps) {
	const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);
	const contentReady = useRef(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsHeaderIntersecting(entry.isIntersecting),
			),
		[],
	);

	useEffect(() => {
		observer.observe(document.querySelector("header")!);

		return () => {
			observer.disconnect();
		};
	}, [observer]);

	useEffect(() => {
		if (contentReady.current) return;
		const timer = setTimeout(() => {
			contentReady.current = true;
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	if (!project.toc) return null;

	function clsx(...args: string[]) {
		return args.filter(Boolean).join(" ");
	}
	const visible = useMemo(() => {
		if (!contentReady.current) return "opacity-0";
		return isHeaderIntersecting ? "opacity-0" : "opacity-100";
	}, [isHeaderIntersecting]);

	return (
		<div
			className={clsx(
				"fixed hidden xl:block w-80 overflow-y-auto h-5/6 top-20 left-20 transition ease-in duration-150",
				visible,
			)}
		>
			<h3 className="font-bold text-lg pl-2">目录</h3>
			<div>
				{project.headings.map(
					(heading: {
						slug: string | undefined;
						level: number;
						text: string;
					}) => {
						return (
							<div key={`#${heading.slug}`}>
								<a
									className="data-[level=two]:pl-2 data-[level=two]:text-base data-[level=three]:pl-4 data-[level=three]:text-sm dark:text-white text-black"
									data-level={heading.level}
									href={heading.slug}
								>
									{heading.text}
								</a>
							</div>
						);
					},
				)}
			</div>
		</div>
	);
}
