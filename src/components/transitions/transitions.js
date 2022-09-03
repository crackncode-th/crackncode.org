import { cubicOut } from "svelte/easing";

export function doubleSlide(node, {
	delay = 0,
	duration = 1500,
	easing = cubicOut,
} = {}) {
	const style = getComputedStyle(node);
	const width_value = parseFloat(style['width']);
	return {
		delay,
		duration,
		easing,
		css: t =>
			'overflow: hidden;' +
            `transform: translateX(${Math.max(0, t - 0.5) * 2 * width_value}px);` +
			`width: ${(0.5 - Math.abs(t - 0.5)) * 2 * width_value}px;` +
            'background-color: #F13830;' +
            'z-index: 2;'
	};
}

export function doubleSlide_txt(node, {
	delay = 0,
	duration = 1500,
	easing = cubicOut,
} = {}) {
	const style = getComputedStyle(node);
	return {
		delay,
		duration,
		easing,
		css: t =>
			`opacity: ${t <= 0.5 ? 0 : 100}%;`
	};
}

export function drawLogo(node, {
	delay = 0,
	duration = 1500,
	easing = cubicOut,
} = {}) {
	let len = node.getTotalLength();
	return {
		delay,
		duration,
		easing,
		css: (t, u) => 
			`stroke-dasharray: ${t * len} ${u * len};`
	};
}

export function drawLogoRect(node, {
	delay = 0,
	duration = 1500,
	easing = cubicOut,
} = {}) {
	let len = node.getTotalLength();
	return {
		delay,
		duration,
		easing,
		css: (t, u) => 
			`stroke-dasharray: ${t * len} ${u * len};`
	};
}