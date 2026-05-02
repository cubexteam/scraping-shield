# 🤖 Captcha

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐☆☆☆ | **Effectiveness:** ⭐⭐⭐⭐☆

Show a challenge to suspicious visitors. Recommended: **Cloudflare Turnstile** (invisible, free) or **hCaptcha** (free).

## Examples
- [`turnstile.html`](./turnstile.html) — Frontend widget
- [`verify.js`](./verify.js) — Server-side token verification (Node.js)

## Pros
- Highly effective against automated tools
- Turnstile is often invisible to real users

## Cons
- Adds friction for users
- Solving services exist (2captcha, etc.)
