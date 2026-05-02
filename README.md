# 🛡️ scraping-shield

> 🇷🇺 [Читать на русском](./README_RU.md)

A practical cookbook of techniques to protect your website from scrapers and bots.  
Every method has its own folder with a description, pros/cons, and ready-to-use code examples.

**Not a framework. Not a library. A cookbook.**  
Pick the method you need, read it, copy the example into your stack.

---

## 👤 Author

**cubexteam** — [github.com/cubexteam](https://github.com/cubexteam)  
Repository: [github.com/cubexteam/scraping-shield](https://github.com/cubexteam/scraping-shield)

---

## 📁 Repository Structure

```
scraping-shield/
├── 01-cloudflare/
│   ├── README.md / README_RU.md
│   └── worker.js
├── 02-rate-limiting/
│   ├── README.md / README_RU.md
│   ├── nginx.conf
│   ├── express.js
│   └── fastapi.py
├── 03-user-agent-filter/
│   ├── README.md / README_RU.md
│   ├── nginx.conf
│   └── express.js
├── 04-captcha/
│   ├── README.md / README_RU.md
│   ├── turnstile.html
│   └── verify.js
├── 05-honeypot/
│   ├── README.md / README_RU.md
│   ├── form.html
│   └── trap.js
├── 06-js-rendering/
│   ├── README.md / README_RU.md
│   ├── client.js
│   └── server.js
├── 07-csrf-tokens/
│   ├── README.md / README_RU.md
│   ├── client.js
│   └── server.js
├── 08-random-css-classes/
│   ├── README.md / README_RU.md
│   ├── webpack.config.js
│   └── component.jsx
├── 09-css-font-trick/
│   ├── README.md / README_RU.md
│   ├── generate_font.py
│   └── style.css
├── 10-canvas-rendering/
│   ├── README.md / README_RU.md
│   └── canvas.js
├── 11-junk-text/
│   ├── README.md / README_RU.md
│   └── obfuscate.js
├── 12-bot-fingerprinting/
│   ├── README.md / README_RU.md
│   └── detect.js
├── 13-datacenter-ip-block/
│   ├── README.md / README_RU.md
│   ├── nginx.conf
│   └── middleware.js
├── 14-tls-fingerprinting/
│   ├── README.md / README_RU.md
│   ├── nginx.conf
│   └── worker.js
├── 15-fake-data/
│   ├── README.md / README_RU.md
│   └── middleware.js
├── 16-json-obfuscation/
│   ├── README.md / README_RU.md
│   ├── server.js
│   └── client.js
└── 17-request-timing/
    ├── README.md / README_RU.md
    ├── analyzer.go
    └── middleware.go
```

---

## 📋 Methods

| # | Method | Difficulty | Effectiveness | Folder |
|---|--------|-----------|---------------|--------|
| 01 | ☁️ Cloudflare | ⭐☆☆☆☆ | ⭐⭐⭐⭐⭐ | [01-cloudflare](./01-cloudflare/) |
| 02 | ⏱️ Rate Limiting | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [02-rate-limiting](./02-rate-limiting/) |
| 03 | 🔍 User-Agent Filter | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | [03-user-agent-filter](./03-user-agent-filter/) |
| 04 | 🤖 Captcha | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [04-captcha](./04-captcha/) |
| 05 | 🍯 Honeypot Traps | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | [05-honeypot](./05-honeypot/) |
| 06 | ⚡ JS-Rendered Data | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | [06-js-rendering](./06-js-rendering/) |
| 07 | 🔑 CSRF Tokens | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐⭐ | [07-csrf-tokens](./07-csrf-tokens/) |
| 08 | 🎲 Random CSS Classes | ⭐⭐⭐☆☆ | ⭐⭐⭐☆☆ | [08-random-css-classes](./08-random-css-classes/) |
| 09 | 🔤 CSS Font Trick | ⭐⭐⭐⭐☆ | ⭐⭐⭐☆☆ | [09-css-font-trick](./09-css-font-trick/) |
| 10 | 🎨 Canvas Rendering | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | [10-canvas-rendering](./10-canvas-rendering/) |
| 11 | 🗑️ Hidden Junk Text | ⭐⭐☆☆☆ | ⭐⭐☆☆☆ | [11-junk-text](./11-junk-text/) |
| 12 | 🧬 Bot Fingerprinting | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ | [12-bot-fingerprinting](./12-bot-fingerprinting/) |
| 13 | 🏢 Datacenter IP Block | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [13-datacenter-ip-block](./13-datacenter-ip-block/) |
| 14 | 🔒 TLS Fingerprinting | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | [14-tls-fingerprinting](./14-tls-fingerprinting/) |
| 15 | 🎭 Fake Data for Bots | ⭐⭐⭐☆☆ | ⭐⭐⭐☆☆ | [15-fake-data](./15-fake-data/) |
| 16 | 🔀 JSON Key Obfuscation | ⭐⭐⭐☆☆ | ⭐⭐☆☆☆ | [16-json-obfuscation](./16-json-obfuscation/) |
| 17 | ⏰ Request Timing Analysis | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | [17-request-timing](./17-request-timing/) |

---

## 🚀 Where to Start

**Stage 1 — Quick wins (1 day)**
- [01-cloudflare](./01-cloudflare/) — Bot Fight Mode, WAF rules
- [02-rate-limiting](./02-rate-limiting/) — Nginx / Express / FastAPI
- [03-user-agent-filter](./03-user-agent-filter/) — Block known scraper signatures

**Stage 2 — Medium protection (1 week)**
- [05-honeypot](./05-honeypot/) — Silent bot detection
- [06-js-rendering](./06-js-rendering/) — Hide prices and contacts
- [07-csrf-tokens](./07-csrf-tokens/) — Protect API endpoints

**Stage 3 — Serious protection (1 month)**
- [12-bot-fingerprinting](./12-bot-fingerprinting/) — Detect headless browsers
- [13-datacenter-ip-block](./13-datacenter-ip-block/) — Block AWS/GCP/DO
- [04-captcha](./04-captcha/) — Cloudflare Turnstile
- [17-request-timing](./17-request-timing/) — Behavioral timing analysis (Go)

**Stage 4 — Maximum protection**
- [14-tls-fingerprinting](./14-tls-fingerprinting/) — JA3/JA4 detection
- [09-css-font-trick](./09-css-font-trick/) — Visual number obfuscation
- [15-fake-data](./15-fake-data/) — Feed bots garbage data

---

## ⚠️ Notes

- **No method is 100% bulletproof** — a determined scraper with a headless browser will eventually bypass most of these
- **Never block search engine bots** — Googlebot, YandexBot, Bingbot must be able to crawl your site
- **Test on real users** — aggressive protection can hurt legitimate UX
- **Combine methods** — 5–7 layers together make scraping economically unviable

---

## 📄 License

MIT — free to use in any project.
