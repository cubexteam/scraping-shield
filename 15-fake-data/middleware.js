// Feed fake data to suspicious requests (Express)

function suspiciousScore(req) {
  let score = 0
  if (!req.headers['accept-language']) score += 20
  if (!req.headers['accept-encoding']) score += 20
  if (!req.headers['referer'] && req.path !== '/') score += 15
  const ua = req.headers['user-agent'] || ''
  if (!ua.includes('Mozilla')) score += 25
  return score
}

function generateFakePrices() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    price: Math.floor(Math.random() * 10000) + 500
  }))
}

app.get('/api/prices', (req, res) => {
  if (suspiciousScore(req) > 50) {
    // Bot — return garbage data silently
    return res.json({ prices: generateFakePrices() })
  }
  res.json({ prices: getRealPrices() })
})
