// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro, VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves a project site from https://<user>.github.io/<repo>/, so the build needs
// to know the repo name. The deploy workflow sets BASE_PATH; locally it stays "/".
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  // Static output for GitHub Pages: no server, just HTML/JS/CSS/images.
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
  },
  vite: { base },
});
