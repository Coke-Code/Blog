import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Theme from "./components/theme";
const navigation = [
	{ name: "博客", href: "/blog" },
	{ name: "关于", href: "/about" },
	{ name: "联系", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<nav className="my-16 animate-fade-in z-10">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
					<Theme iconSize={15} />
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="p-2 text-4xl text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				他山之石
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">在现实与假寐中两难</h2>
				<small className="absolute bottom-0 w-full text-center left-0 mb-10 text-xs text-zinc-500">
					<Link
						target="_blank"
						href="https://beian.miit.gov.cn"
						className="underline duration-500 hover:text-zinc-300"
					>
						粤ICP备2023022974号
					</Link>{" "}
					Copyright 2021 wissbell.com 版权所有
				</small>
			</div>
		</div>
	);
}
