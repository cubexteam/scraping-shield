# 🔍 User-Agent Filter

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐☆☆☆ | **Effectiveness:** ⭐⭐⭐☆☆

Block requests from known scraping libraries by checking the `User-Agent` header. Most naive scrapers don't bother setting a realistic browser UA.

## Examples
- [`nginx.conf`](./nginx.conf) — Nginx map-based UA filtering
- [`express.js`](./express.js) — Express middleware

## Pros
- Simple, zero-dependency
- Blocks a large share of lazy scrapers

## Cons
- Trivially bypassed by setting a fake UA string
- Not reliable as a standalone method — use alongside others
