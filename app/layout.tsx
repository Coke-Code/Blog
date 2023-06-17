import "../global.css";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
export const metadata: Metadata = {
	title: {
		default: "wissbell.com",
		template: "%s | wissbell.com",
	},
	description: "书里总爱写到喜出望外的傍晚",
	openGraph: {
		title: "wissbell.com",
		description: "书里总爱写到喜出望外的傍晚",
		url: "https://www.wissbell.com",
		siteName: "wissbell.com",
		images: [
			{
				url: "https://www.wissbell.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "zh-CN",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon.ico",
	},
};

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh-CN" className={[calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
