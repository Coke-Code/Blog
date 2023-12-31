import { Github, Mail, Satellite } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:wissbell@163.com",
		label: "Email",
		handle: "wissbell@163.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Coke-Code",
		label: "Github",
		handle: "Coke-Code",
	},
	{
		icon: <Satellite size={20} />,
		href: "",
		label: "Wechat",
		handle: "wissbell",
	},
];

export const metadata: Metadata = {
	title: "联系他山之石",
	description: "用老派的方式联系我，在我拒绝两次后，第三次我会回复",
};
export default function Example() {
	return (
		<div className=" bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 from-slate-50/0 via-slate-100 to-slate-50/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-8 md:mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl dark:text-zinc-200 text-zinc-700 dark:group-hover:text-white group-hover:text-black font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 dark:group-hover:text-zinc-200 group-hover:text-zinc-600">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
