# ☁️ Cloudflare

> 🇷🇺 [Читать на русском](./README_RU.md)

**Difficulty:** ⭐☆☆☆☆ | **Effectiveness:** ⭐⭐⭐⭐⭐

The fastest way to get baseline protection. Cloudflare acts as a proxy between users and your server, automatically filtering known bots before they even reach your backend.

## How it works

1. All traffic passes through Cloudflare's network
2. Cloudflare scores each request (bot score 0–100)
3. You define rules: block, challenge, or allow based on score

## Setup

1. Register at [cloudflare.com](https://cloudflare.com)
2. Add your domain and update NS records at your registrar
3. Enable **Bot Fight Mode**: Security → Bots → Bot Fight Mode → ON

## Examples

- [`worker.js`](./worker.js) — Cloudflare Worker that blocks low bot-score requests

## Pros
- Zero code required for basic setup
- Protects against DDoS, known bad IPs, credential stuffing
- Free tier is sufficient for most sites

## Cons
- Your traffic routes through Cloudflare (third-party dependency)
- Sophisticated bots can fake browser signals
- Some false positives with VPN users
