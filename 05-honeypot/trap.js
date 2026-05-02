// Honeypot trap handler for Express
const bannedIPs = new Set() // Use Redis in production

function banIP(ip) {
  bannedIPs.add(ip)
  console.log(`[honeypot] Banned IP: ${ip}`)
}

// Middleware: block banned IPs
function checkBanned(req, res, next) {
  if (bannedIPs.has(req.ip)) return res.status(403).send('Forbidden')
  next()
}

// Form submission: check honeypot field
app.post('/submit', checkBanned, (req, res) => {
  if (req.body.website) {
    banIP(req.ip)
    // Return 200 so bot thinks it succeeded
    return res.status(200).json({ success: true })
  }
  // Handle real submission...
  res.json({ success: true })
})

// Trap URL: any visitor is a bot
app.get('/trap-page', (req, res) => {
  banIP(req.ip)
  res.status(404).send('Not found')
})

app.use(checkBanned)
