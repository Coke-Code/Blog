"use client";
import { useState, useEffect } from "react";
export type themeType = "light" | "dark" | "system";
export const useTheme = () => {
	const [theme, setTheme] = useState<themeType>("light");

	useEffect(() => {
		const storedTheme = window.localStorage.getItem("theme") as themeType;
		if (storedTheme) {
			setTheme(storedTheme);
		} else {
			const isDarkMode = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			setTheme(isDarkMode ? "dark" : "light");
		}
	}, []);

	const toggleTheme = (theme: themeType) => {
		const newTheme = theme;
		setTheme(newTheme);
		window.localStorage.setItem("theme", newTheme);
	};

	return { theme, toggleTheme };
};
