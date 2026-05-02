# 🎲 Random CSS Classes

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐⭐☆☆ | **Effectiveness:** ⭐⭐⭐☆☆

CSS class names are randomized on every build. A scraper targeting `.price` will break after the next deploy.

## Examples
- [`webpack.config.js`](./webpack.config.js) — Webpack CSS Modules with hashed class names
- [`component.jsx`](./component.jsx) — React component using CSS Modules

## Pros
- Breaks scrapers that rely on CSS selectors
- Zero runtime cost — handled at build time

## Cons
- Doesn't stop scrapers using visual/semantic analysis
- Requires a build tool (Webpack, Vite, etc.)
