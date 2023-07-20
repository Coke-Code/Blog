"use client";
import lottie from "lottie-web";
import astronaut from "@/animate/astronaut.json";
import { use, useEffect } from "react";
export default function Astronaut(props: { className?: string }) {
	const initLottie = (data: unknown, loop = true) => {
		const lottieEl = document.getElementById("lottie")!;
		lottie.loadAnimation({
			container: lottieEl,
			renderer: "svg",
			loop,
			autoplay: true,
			animationData: data,
		});
	};
	const animateLottie = () => {
		initLottie(astronaut);
	};
	useEffect(() => {
		animateLottie();
	}, []);
	return <div {...props} id="lottie" />;
}
