import { Variants } from "framer-motion";

export const wrapperAnimation: (
	stagger: number,
	childDelay: number,
	minHeight?: string,
	maxHeight?: string
) => Variants = (stagger, childDelay, minHeight, maxHeight) => {
	return {
		hidden: { opacity: 0, height: minHeight },
		show: {
			opacity: 1,
			height: maxHeight,
			transition: {
				staggerChildren: stagger,
				delayChildren: childDelay,
			},
		},
	};
};

export const entryAnimation: (
	x: number | string,
	y: number | string,
	duration: number,
	bounce: number
) => Variants = (x = 0, y = 0, duration, bounce) => {
	return {
		hidden: {
			opacity: 0,
			x: x,
			y: y,
		},
		show: {
			opacity: 1,
			y: "0",
			x: "0",
			transition: {
				duration,
				type: "spring",
				bounce,
			},
		},
	};
};
