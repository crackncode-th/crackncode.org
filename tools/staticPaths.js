import fs from "node:fs/promises";

/** @type {Array<`/${string}`>} */
const paths = (await fs.readdir("src/data/ranking")).map(
  (path) => `/ranking/${path.replace(".csv", "")}`
);

export default paths;
