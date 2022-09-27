// @ts-check

import path from "node:path";

import adapter from "@sveltejs/adapter-static";
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
    alias: {
      "$/app.scss": path.resolve("src/app.scss"),
      $components: path.resolve("src/components"),
      $data: path.resolve("src/data"),
      $styles: path.resolve("src/styles"),
    },
  },
};
