// API endpoint that only serves data to browser-like requests (Express)

app.get('/api/price/:id', (req, res) => {
  // Reject requests without the browser header
  if (req.headers['x-requested-with'] !== 'XMLHttpRequest') {
    return res.status(403).json({ error: 'Forbidden' })
  }

  const price = getPriceFromDB(req.params.id)
  res.json({ price })
})
