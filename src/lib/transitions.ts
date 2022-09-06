import { cubicOut } from "svelte/easing";

export function doubleSlide(
  node: HTMLElement,
  { delay = 0, duration = 400, easing = cubicOut, color = "#F13830" } = {}
) {
  const style = getComputedStyle(node);
  const width_value = parseFloat(style["width"]);
  return {
    delay,
    duration,
    easing,
    css: (t: number) =>
      "overflow: hidden;" +
      `transform: translateX(${Math.max(0, t - 0.5) * 2 * width_value}px);` +
      `width: ${(0.5 - Math.abs(t - 0.5)) * 2 * width_value}px;` +
      `background-color: ${color};` +
      "z-index: 2;",
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

export function floatObj(
  node: HTMLElement,
  { delay = 0, duration = 1300, easing = cubicOut } = {}
) {
  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) =>
      `transform: translateY(-${u * 30}px);` + `opacity: ${t * 100}%;`,
  };
}
