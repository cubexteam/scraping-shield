// Client-side: fetch token then use it for API calls

async function getCSRFToken() {
  const res = await fetch('/api/csrf-token')
  const { token } = await res.json()
  return token
}

async function loadProducts() {
  const token = await getCSRFToken()
  const res = await fetch('/api/products', {
    headers: { 'X-CSRF-Token': token }
  })
  return res.json()
}
