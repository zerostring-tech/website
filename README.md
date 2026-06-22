# Zero String Tech Ventures — Website

Marketing site for [Zero String Tech Ventures](https://www.zerostring.tech), built with [Hugo](https://gohugo.io/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Stack

- **Hugo** (extended) as the static site generator
- **Tailwind CSS v4** via Hugo Pipes (`css.PostCSS`), configured in [`assets/css/main.css`](assets/css/main.css) and [`postcss.config.js`](postcss.config.js)
- Content lives under [`content/`](content/), with structured data (projects, values, social links, etc.) under [`data/`](data/)

## Local development

Requires [Hugo extended](https://gohugo.io/installation/) and [Node.js](https://nodejs.org/).

```bash
npm install
hugo server
```

Site will be available at `http://localhost:1313/`.

## Build

```bash
npm install
hugo --gc --minify
```

Output is written to `public/`.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml). The site is served at the custom domain configured in [`static/CNAME`](static/CNAME).

## License

All rights reserved — see [LICENSE](LICENSE).
