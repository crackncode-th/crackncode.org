import { cubicOut } from "svelte/easing";

export function doubleSlide(
  node: HTMLElement,
  { delay = 0, duration = 400, easing = cubicOut } = {}
) {
  const style = getComputedStyle(node);
  const width_value = parseFloat(style["width"]);
  return {
    delay,
    duration,
    easing,
    css: (t: number) => {
      return (
        "overflow: hidden;" +
        `transform: translateX(${Math.max(0, t - 0.5) * 2 * width_value}px);` +
        `width: ${(0.5 - Math.abs(t - 0.5)) * 2 * width_value}px;` +
        "background-color: #F13830;" +
        "z-index: 2;"
      );
    },
  };
}

export function doubleSlide_txt(
  node: HTMLElement,
  { delay = 0, duration = 400, easing = cubicOut } = {}
) {
  return {
    delay,
    duration,
    easing,
    css: (t: number) => `opacity: ${t <= 0.5 ? 0 : 100}%;`,
  };
}

export function drawLogo(
  node: SVGPathElement,
  { delay = 0, duration = 1500, easing = cubicOut } = {}
) {
  const len = node.getTotalLength();
  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `stroke-dasharray: ${t * len} ${u * len};`,
  };
}

export function drawLogoRect(
  node: SVGPathElement,
  { delay = 0, duration = 1500, easing = cubicOut } = {}
) {
  const len = node.getTotalLength();
  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `stroke-dasharray: ${t * len} ${u * len};`,
  };
}
