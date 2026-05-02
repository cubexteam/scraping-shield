// User-Agent filter middleware for Express

const BLOCKED = ['python-requests','python-urllib','scrapy','curl','wget','libwww-perl','go-http-client','java/','ruby','perl/']
const ALLOWED_BOTS = ['googlebot','yandexbot','bingbot']

function filterUserAgent(req, res, next) {
  const ua = (req.headers['user-agent'] || '').toLowerCase()

  if (ALLOWED_BOTS.some(b => ua.includes(b))) return next()
  if (!ua) return res.status(403).json({ error: 'Forbidden' })
  if (BLOCKED.some(b => ua.includes(b))) return res.status(403).json({ error: 'Forbidden' })
  if (!ua.includes('mozilla') && !ua.includes('webkit')) return res.status(403).json({ error: 'Forbidden' })

  next()
}

module.exports = filterUserAgent
// Usage: app.use(filterUserAgent)
