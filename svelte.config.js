// @ts-check

import adapter from "@sveltejs/adapter-netlify";
import path from "node:path";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    alias: {
      $components: path.resolve("src/components"),
    },
  },
};
