// Rate limiting for Node.js / Express
// npm install express-rate-limit

const rateLimit = require('express-rate-limit')
const express = require('express')
const app = express()

// Global limiter: 100 requests per 15 minutes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
  handler: (req, res) => {
    console.log(`Rate limit hit from: ${req.ip}`)
    res.status(429).json({ error: 'Too many requests' })
  }
})

// API limiter: 20 requests per minute
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: { error: 'API rate limit exceeded' }
})

app.use(globalLimiter)
app.use('/api/', apiLimiter)
