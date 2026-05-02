// CSRF token generation and validation middleware (Express)
const crypto = require('crypto')

// In production use Redis instead of Map
const tokens = new Map()

// Issue a token
app.get('/api/csrf-token', (req, res) => {
  const token = crypto.randomBytes(32).toString('hex')
  const expires = Date.now() + 5 * 60 * 1000 // 5 minutes
  tokens.set(token, { ip: req.ip, expires })
  setTimeout(() => tokens.delete(token), 5 * 60 * 1000)
  res.json({ token })
})

// Middleware: require valid token
function requireToken(req, res, next) {
  const token = req.headers['x-csrf-token']
  if (!token || !tokens.has(token)) {
    return res.status(403).json({ error: 'Invalid token' })
  }
  const { expires } = tokens.get(token)
  if (Date.now() > expires) {
    tokens.delete(token)
    return res.status(403).json({ error: 'Token expired' })
  }
  tokens.delete(token) // single-use
  next()
}

app.get('/api/products', requireToken, (req, res) => {
  res.json({ products: [] })
})
