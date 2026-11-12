// Turns TanStack Start's SPA output into a folder GitHub Pages can serve:
//  - index.html  : the app shell, served at the site root
//  - 404.html    : same shell, so unknown URLs / refreshes still load the app
//  - .nojekyll   : stops GitHub from ignoring files that start with "_"
import { copyFileSync, existsSync, writeFileSync } from "node:fs";

const dir = "dist/client";
const shell = `${dir}/_shell.html`;
if (!existsSync(shell)) {
  console.error(`Expected ${shell} but it was not found. Did "vite build" succeed?`);
  process.exit(1);
}
copyFileSync(shell, `${dir}/index.html`);
copyFileSync(shell, `${dir}/404.html`);
writeFileSync(`${dir}/.nojekyll`, "");
console.log("GitHub Pages files written to", dir);
