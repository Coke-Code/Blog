"use client";
import { Project } from "@/.contentlayer/generated";
import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { XCircle } from "lucide-react";
interface TocProps {
	project: Project;
}
export default function Ad({ project }: TocProps) {
	const [hidden, setHidden] = useState(false);
	const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsHeaderIntersecting(entry.isIntersecting),
			),
		[],
	);
	const closeAd = () => {
		setHidden(true);
	};
	useEffect(() => {
		observer.observe(document.querySelector("header")!);

		return () => {
			observer.disconnect();
		};
	}, [observer]);
	if (!project.ad) return null;

	return !(hidden && isHeaderIntersecting) ? (
		<div className="fixed hidden xl:block w-80 overflow-y-auto h-5/6 top-20 right-20">
			<div className="w-3/4 ml-auto">
				<div
					className="cursor-pointer align-center inline-flex"
					onClick={closeAd}
					onKeyDown={closeAd}
				>
					<XCircle className="w-4 h-4" />
					<h3 className="font-bold text-xs dark:text-white text-black pl-1">
						广告
					</h3>
				</div>
				<img
					className="w-full object-cover h-96"
					src="/logo.png"
					alt="赞助广告"
				/>
			</div>
		</div>
	) : null;
}
