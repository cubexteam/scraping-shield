# ⏰ Request Timing Analysis

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐⭐☆☆ | **Effectiveness:** ⭐⭐⭐⭐☆

Bots make requests at perfectly uniform intervals — humans don't.  
This method tracks timing patterns between requests per IP. If the intervals are too mechanical, the request is flagged or blocked.

Unlike most other methods, this one **does not rely on headers, IP reputation, or JavaScript** — it's purely behavioral.

## How it works

1. Server records the timestamp of each request per IP
2. After N requests, it calculates the standard deviation of intervals
3. Very low deviation = bot-like behavior → block or challenge
4. High deviation = human-like behavior → allow

## Examples

- [`analyzer.go`](./analyzer.go) — Core timing analyzer (pure Go, no dependencies)
- [`middleware.go`](./middleware.go) — Drop-in `net/http` middleware

## Pros
- Works regardless of headers, User-Agent, or IP reputation
- No client-side changes needed
- Catches bots that correctly spoof all browser signals

## Cons
- Needs enough requests per IP to build a reliable pattern (min ~5–10)
- May flag users on slow connections or with browser extensions
- Requires in-memory or Redis storage per IP
- 
