// Server-side Turnstile verification (Node.js / Express)
// Set TURNSTILE_SECRET in your environment variables

async function verifyTurnstile(token, ip) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET,
      response: token,
      remoteip: ip
    })
  })
  const data = await res.json()
  return data.success
}

// Express route
app.post('/submit', async (req, res) => {
  const { token } = req.body
  const isHuman = await verifyTurnstile(token, req.ip)
  if (!isHuman) return res.status(403).json({ error: 'Captcha failed' })
  // Handle real request...
  res.json({ success: true })
})
