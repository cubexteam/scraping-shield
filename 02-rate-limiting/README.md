# ⏱️ Rate Limiting

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐☆☆☆ | **Effectiveness:** ⭐⭐⭐⭐☆

Limit the number of requests from a single IP over a time window. Scrapers need to send many requests fast — rate limiting makes bulk scraping slow and expensive.

## How it works

Each IP gets a request budget (e.g. 100 requests per 15 minutes). Exceeding the limit returns HTTP 429 Too Many Requests.

## Examples

- [`nginx.conf`](./nginx.conf) — Nginx `limit_req` module
- [`express.js`](./express.js) — Node.js with `express-rate-limit`
- [`fastapi.py`](./fastapi.py) — Python with `slowapi`

## Pros
- Easy to implement
- Works at the infrastructure level (Nginx) — no app code needed
- Effective against unsophisticated scrapers

## Cons
- Doesn't stop distributed scrapers (many IPs)
- Can affect legitimate users behind shared NAT
- Needs Redis for multi-instance deployments
