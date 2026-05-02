# ⚡ JS-Rendered Data

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐⭐☆☆ | **Effectiveness:** ⭐⭐⭐⭐☆

Load sensitive data (prices, contacts) via JavaScript after page load. Simple HTTP scrapers never execute JS and see only a placeholder.

## Examples
- [`client.js`](./client.js) — Fetch prices after page load
- [`server.js`](./server.js) — API endpoint with header validation

## Pros
- Invisible to curl/requests-based scrapers
- Easy to implement on top of existing pages

## Cons
- Headless browsers (Playwright, Puppeteer) execute JS and bypass this
- Requires JS-enabled clients (screen readers may be affected)
