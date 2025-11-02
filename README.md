# LevGogol.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deploy to GitHub Pages

This project is configured to deploy automatically to **GitHub Pages** using a GitHub Actions workflow located at `.github/workflows/deploy.yml`.

### Automatic deployment (recommended)

1. Ensure the repo name matches the pattern `<username>.github.io` for a user site. (Already satisfied here.)
2. Push changes to the `master` branch.
3. The workflow will build the site with `vite` and publish the contents of `dist` to GitHub Pages.
4. After the first run: In the repository settings under Pages, confirm the build succeeded. The site will be available at: `https://levgogol.github.io/`.

### Manual deployment (alternative)

You can also deploy manually using a git subtree to a `gh-pages` branch:

```sh
npm run deploy
```

This script will:

- Build the project
- Push the contents of `dist` as a subtree to the `gh-pages` branch

### Base path

`vite.config.ts` sets `base: '/'` because this is a user site served from the root domain. If you convert this to a project (e.g. `https://username.github.io/project`), change base to `/project/`.

### Custom domain (optional)

1. Add a `CNAME` file to `public/` with your domain name (e.g. `example.com`).
2. Set the same custom domain in the repository Settings -> Pages.
3. Commit and push. The file will be included in the build output.

### Cache / build troubleshooting

If a deploy looks stale:

```sh
rm -rf node_modules
npm ci
npm run build
```

### Updating dependencies

Keep Node at version specified in `engines`. For CI we use Node 20. To update deps:

```sh
npm outdated
npm update
```
