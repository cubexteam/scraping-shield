# 🍯 Honeypot Traps

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐⭐☆☆☆ | **Effectiveness:** ⭐⭐⭐☆☆

Hidden fields and links invisible to humans but visited by bots. When triggered, silently ban the IP.

## Examples
- [`form.html`](./form.html) — Hidden honeypot form field
- [`trap.js`](./trap.js) — Trap URL handler + IP ban logic (Express)

## Pros
- Zero friction for real users
- Bot gets banned silently — doesn't know it was caught

## Cons
- Doesn't stop all bots (some ignore hidden elements)
- Needs persistent IP storage (Redis recommended)
