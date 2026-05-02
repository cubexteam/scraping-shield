# 🛡️ scraping-shield

> 🇬🇧 [Read in English](./README.md)

Практический сборник методов защиты веб-сайта от парсеров и ботов.  
Каждый метод — отдельная папка с описанием, плюсами/минусами и готовыми примерами кода.

**Не фреймворк. Не библиотека. Кулинарная книга.**  
Берёшь нужный метод, читаешь, копируешь пример под свой стек.

---

## 👤 Автор

**cubexteam** — [github.com/cubexteam](https://github.com/cubexteam)  
Репозиторий: [github.com/cubexteam/scraping-shield](https://github.com/cubexteam/scraping-shield)

---

## 📁 Структура репозитория

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
└── 16-json-obfuscation/
    ├── README.md / README_RU.md
    ├── server.js
    └── client.js
```

---

## 📋 Методы защиты

| # | Метод | Сложность | Эффективность | Папка |
|---|-------|-----------|---------------|-------|
| 01 | ☁️ Cloudflare | ⭐☆☆☆☆ | ⭐⭐⭐⭐⭐ | [01-cloudflare](./01-cloudflare/) |
| 02 | ⏱️ Rate Limiting | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [02-rate-limiting](./02-rate-limiting/) |
| 03 | 🔍 Фильтрация User-Agent | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | [03-user-agent-filter](./03-user-agent-filter/) |
| 04 | 🤖 Капча | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [04-captcha](./04-captcha/) |
| 05 | 🍯 Honeypot-ловушки | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | [05-honeypot](./05-honeypot/) |
| 06 | ⚡ JS-рендеринг данных | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | [06-js-rendering](./06-js-rendering/) |
| 07 | 🔑 CSRF-токены | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐⭐ | [07-csrf-tokens](./07-csrf-tokens/) |
| 08 | 🎲 Рандомные CSS-классы | ⭐⭐⭐☆☆ | ⭐⭐⭐☆☆ | [08-random-css-classes](./08-random-css-classes/) |
| 09 | 🔤 CSS Font Trick | ⭐⭐⭐⭐☆ | ⭐⭐⭐☆☆ | [09-css-font-trick](./09-css-font-trick/) |
| 10 | 🎨 Canvas-рендеринг | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | [10-canvas-rendering](./10-canvas-rendering/) |
| 11 | 🗑️ Скрытый мусорный текст | ⭐⭐☆☆☆ | ⭐⭐☆☆☆ | [11-junk-text](./11-junk-text/) |
| 12 | 🧬 Fingerprinting ботов | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ | [12-bot-fingerprinting](./12-bot-fingerprinting/) |
| 13 | 🏢 Блокировка IP датацентров | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | [13-datacenter-ip-block](./13-datacenter-ip-block/) |
| 14 | 🔒 TLS Fingerprinting | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | [14-tls-fingerprinting](./14-tls-fingerprinting/) |
| 15 | 🎭 Ложные данные для ботов | ⭐⭐⭐☆☆ | ⭐⭐⭐☆☆ | [15-fake-data](./15-fake-data/) |
| 16 | 🔀 Обфускация JSON-ключей | ⭐⭐⭐☆☆ | ⭐⭐☆☆☆ | [16-json-obfuscation](./16-json-obfuscation/) |

---

## 🚀 С чего начать

**Этап 1 — Быстрый старт (1 день)**
- [01-cloudflare](./01-cloudflare/) — Bot Fight Mode, WAF-правила
- [02-rate-limiting](./02-rate-limiting/) — Nginx / Express / FastAPI
- [03-user-agent-filter](./03-user-agent-filter/) — Блокировка известных парсеров

**Этап 2 — Средняя защита (1 неделя)**
- [05-honeypot](./05-honeypot/) — Тихая детекция ботов
- [06-js-rendering](./06-js-rendering/) — Скрыть цены и контакты
- [07-csrf-tokens](./07-csrf-tokens/) — Защита API-эндпоинтов

**Этап 3 — Серьёзная защита (1 месяц)**
- [12-bot-fingerprinting](./12-bot-fingerprinting/) — Детекция headless-браузеров
- [13-datacenter-ip-block](./13-datacenter-ip-block/) — Блокировка AWS/GCP/DO
- [04-captcha](./04-captcha/) — Cloudflare Turnstile

**Этап 4 — Максимальная защита**
- [14-tls-fingerprinting](./14-tls-fingerprinting/) — JA3/JA4 детекция
- [09-css-font-trick](./09-css-font-trick/) — Визуальная обфускация цифр
- [15-fake-data](./15-fake-data/) — Кормить ботов мусором

---

## ⚠️ Важно

- **Абсолютной защиты не существует** — упорный парсер с headless-браузером обойдёт большинство методов
- **Не блокируй поисковых ботов** — Googlebot, YandexBot, Bingbot должны индексировать сайт
- **Тестируй на реальных пользователях** — агрессивная защита портит UX живым людям
- **Комбинируй методы** — 5–7 слоёв вместе делают парсинг нерентабельным

---

## 📄 Лицензия

MIT — можно использовать в любом проекте.
