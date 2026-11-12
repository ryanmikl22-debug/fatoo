# Happy Birthday, Fatoom ♥

A birthday letter and photo memories page, built with TanStack Start, React, TypeScript and Tailwind CSS.

## Put it on GitHub Pages

1. Create a new repository on GitHub and push this project to its `main` branch.
2. In the repository go to **Settings → Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
3. Push to `main` (or open the **Actions** tab and run **Deploy to GitHub Pages**). After a minute or two the site is live at:
   - `https://<your-username>.github.io/<repository-name>/`

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it automatically on every push to `main`. It reads the repository name itself, so you never need to edit a path. (If you name the repo `<your-username>.github.io`, the site is served from the root instead, and that is handled too.)

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```sh
npm install
npm run dev
```

Then open the address it prints.

To test the exact build that GitHub Pages serves:

```sh
npm run build:pages
```

The finished site is in `dist/client/`.

## Editing

- The letter text and page layout live in `src/routes/index.tsx`.
- The photos live in `src/assets/`. Replace a file with another image of the same name, or add a new one and import it at the top of `src/routes/index.tsx`.
