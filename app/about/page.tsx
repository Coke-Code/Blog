import Image from "next/image";
import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const metadata: Metadata = {
	title: "关于他山之石",
	description: "脚踏实地是人生常态",
};

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 from-slate-50 via-slate-200/10 to-slate-50">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<div className="p-4 relative flex flex-col items-center gap-4 md:gap-8 md:py-24  lg:pb-48  md:p-16">
						<div className="flex flex-col group items-center">
							<Image
								src={"/wissbell.svg"}
								alt="avatar"
								width="100"
								height="100"
								className="h-16 w-16 md:h-24 md:w-24  rounded-full dark:invert invert group-hover:invert dark:group-hover:invert transition duration-1000 ease-in"
							/>
							<div>
								<p className="text-zinc-500 mt-8 max-md:text-white group-hover:text-white text-sm text-center transition duration-700 ease-in">
									他山之石
								</p>
								<p className="text-zinc-500 mt-2 max-md:text-white group-hover:text-white text-sm text-center transition duration-700 ease-in">
									英特纳雄耐尔就一定要实现
								</p>
							</div>
							<div className="text-zinc-700 mt-10 max-md:text-zinc-400 group-hover:text-zinc-400 text-xs text-center leadings-2 md:leading-5 transition duration-700 ease-in">
								<p>前端开发工程师</p>
								<p>深圳</p>
							</div>
						</div>
						<div className="flex max-w-3xl mt-12 md:mt-4 items-baseline gap-y-8 flex-col md:flex-row">
							<h2
								id=":r6:"
								className="text-sm w-full flex-1 md:basis-1/4 font-semibold text-zinc-100 text-center md:text-left"
							>
								站点改版信息
							</h2>
							<div className="flex-1 md:basis-3/4">
								<div className="space-y-16">
									<article className="group relative flex flex-col items-start">
										<h3 className="text-base font-semibold tracking-tight text-zinc-100">
											<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/Coke-Code/Blog"
											>
												<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
												<span className="relative z-10">他山之石</span>
											</a>
										</h3>
										<p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
											<span
												className="absolute inset-y-0 left-0 flex items-center"
												aria-hidden="true"
											>
												<span className="h-4 w-0.5 rounded-full bg-zinc-500" />
											</span>
											2023-06-01
										</p>
										<div className="relative z-10 mt-2 text-sm text-zinc-400">
											<p className="group-hover:text-white">
												在现实与假寐中两难
											</p>
											<p className="mt-4 text-zinc-700 break-all max-md:text-zinc-400 group-hover:text-zinc-400 text-xs  transition duration-700 ease-in">
												基于Next.js + TailwindCSS编写的SSG博客方案，采用Github
												Action自动部署，专注于内容。
											</p>
										</div>
										<div
											aria-hidden="true"
											className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
										>
											源码地址
											<svg
												viewBox="0 0 16 16"
												fill="none"
												aria-hidden="true"
												className="ml-1 h-4 w-4 stroke-current"
												role="img"
											>
												<title>split</title>
												<path
													d="M6.75 5.75 9.25 8l-2.5 2.25"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
									</article>

									<article className="group relative flex flex-col items-start">
										<h3 className="text-base font-semibold tracking-tight text-zinc-100">
											<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://gitee.com/coke-code/sight"
											>
												<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
												<span className="relative z-10">癸</span>
											</a>
										</h3>
										<p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5">
											<span
												className="absolute inset-y-0 left-0 flex items-center"
												aria-hidden="true"
											>
												<span className="h-4 w-0.5 rounded-full bg-zinc-500" />
											</span>
											2019-03-25
										</p>
										<div className="relative z-10 mt-2 text-sm text-zinc-400">
											<p className="group-hover:text-white">
												书里总爱写到喜出望外的傍晚。
											</p>
											<p className="mt-4 text-zinc-700 break-all max-md:text-zinc-400 group-hover:text-zinc-400 text-xs  transition duration-700 ease-in">
												基于Nuxt.js + Vercel
												Design设计语言编写的SSR博客方案。支持多语言切换、文章搜索、主题模式切换以及Lottie动画等功能，基于内容繁杂、编码质量以及SEO性能等原因现已废弃。
											</p>
										</div>
										<div
											aria-hidden="true"
											className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
										>
											源码地址
											<svg
												viewBox="0 0 16 16"
												fill="none"
												aria-hidden="true"
												className="ml-1 h-4 w-4 stroke-current"
											>
												<title>arrow</title>
												<path
													d="M6.75 5.75 9.25 8l-2.5 2.25"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
