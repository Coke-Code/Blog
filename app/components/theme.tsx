"use client";
import { type themeType } from "@/util/theme";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "react-feather";
import { useTheme } from "next-themes";
type themeMap = {
	[key in themeType]: string;
};
interface ThemeProps {
	iconSize?: number;
}
export default function Theme(props: ThemeProps) {
	const { theme, setTheme } = useTheme();
	const [showTheme, setShowTheme] = useState(false);
	const themeMap: themeMap = {
		light: "明亮",
		dark: "黑暗",
		system: "自动",
	};
	const handleSwitchTheme = (theme: themeType) => {
		setShowTheme(false);
		if (theme) {
			setTheme(theme);
		}
	};
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => setHasMounted(true), []);
	const ModeIcon = () => {
		if (!hasMounted) return null;
		switch (theme) {
			case "light":
				return <Sun size={props.iconSize} />;
			case "dark":
				return <Moon size={props.iconSize} />;
			case "system":
				return <Monitor size={props.iconSize} />;
			default:
				return <Sun size={props.iconSize} />;
		}
	};
	return (
		<div className="relative flex items-center">
			<button
				type="button"
				onClick={() => setShowTheme(!showTheme)}
				onKeyDown={() => setShowTheme(!showTheme)}
				aria-expanded="true"
				aria-haspopup="true"
				className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
			>
				<ModeIcon />
			</button>
			{showTheme && (
				<ul
					className="absolute text-sm duration-500  z-150 top-full left-1/2 -translate-x-1/2  dark:bg-black bg-white border dark:border-zinc-800 border-zinc-200 rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8"
					aria-orientation="vertical"
					role="listbox"
				>
					<li
						onClick={() => handleSwitchTheme("light")}
						onKeyDown={() => handleSwitchTheme("light")}
						role="option"
						className="text-zinc-500 hover:text-zinc-300 py-1 px-2 flex items-center cursor-pointer"
					>
						<Sun size={15} />
						<span className="ml-4">{themeMap.light}</span>
					</li>
					<li
						onClick={() => handleSwitchTheme("dark")}
						onKeyDown={() => handleSwitchTheme("dark")}
						data-theme='dark'
						role="option"
						className="text-zinc-500 hover:text-zinc-300 py-1 px-2 flex items-center cursor-pointer"
					>
						<Moon size={15} />
						<span className="ml-4">{themeMap.dark}</span>
					</li>
					<li
						onClick={() => handleSwitchTheme("system")}
						onKeyDown={() => handleSwitchTheme("system")}
						data-theme='system'
						role="option"
						className="text-zinc-500 hover:text-zinc-300 py-1 px-2 flex items-center cursor-pointer"
					>
						<Monitor size={15} />
						<span className="ml-4">{themeMap.system}</span>
					</li>
				</ul>
			)}
		</div>
	);
}
