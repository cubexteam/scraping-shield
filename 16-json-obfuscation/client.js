// Client-side: decode obfuscated keys back to real names

const KEY_MAPPING = { x7f2:'price', p9m3:'title', k4n8:'description', w3q1:'phone', v6r5:'email' }

function deobfuscateKeys(data) {
  if (Array.isArray(data)) return data.map(deobfuscateKeys)
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [KEY_MAPPING[k] || k, deobfuscateKeys(v)])
    )
  }
  return data
}

async function loadProducts() {
  const res = await fetch('/api/products')
  const obfuscated = await res.json()
  return deobfuscateKeys(obfuscated)
  // Returns: [{ price: 1499, title: "Product", ... }]
}
