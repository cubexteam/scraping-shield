# 🔑 CSRF Tokens

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐⭐☆☆ | **Effectiveness:** ⭐⭐⭐⭐⭐

Every API request requires a dynamic one-time token issued only to browser sessions. A scraper that doesn't first fetch the token page gets a 403.

## Examples
- [`server.js`](./server.js) — Token generation and validation middleware
- [`client.js`](./client.js) — Fetching token before each API call

## Pros
- Very effective — token must be obtained from a previous request
- Tokens expire and are single-use

## Cons
- Adds one round-trip per API call
- Needs shared storage (Redis) across multiple server instances
