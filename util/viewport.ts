import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref: React.RefObject<HTMLElement>) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting),
			),
		[],
	);

	useEffect(() => {
		observer.observe(ref.current!);

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
}
