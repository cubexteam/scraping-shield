// Obfuscate JSON response keys — rotate weekly (Express)

const KEY_MAPPING = {
  price:       'x7f2',
  title:       'p9m3',
  description: 'k4n8',
  phone:       'w3q1',
  email:       'v6r5'
}

function obfuscateKeys(data) {
  if (Array.isArray(data)) return data.map(obfuscateKeys)
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [KEY_MAPPING[k] || k, obfuscateKeys(v)])
    )
  }
  return data
}

app.get('/api/products', (req, res) => {
  const products = getProducts()
  res.json(obfuscateKeys(products))
  // Output: [{ x7f2: 1499, p9m3: "Product", ... }]
})
