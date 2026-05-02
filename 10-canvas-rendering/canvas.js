// Render sensitive data on HTML Canvas — invisible to simple scrapers
// HTML: <canvas id="price-42" data-price="1499" width="150" height="40"></canvas>

function renderPriceOnCanvas(canvas) {
  const price = canvas.dataset.price
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = 'bold 22px Arial'
  ctx.fillStyle = '#e53e3e'
  ctx.textBaseline = 'middle'
  ctx.fillText(`${price} ₽`, 0, canvas.height / 2)
}

// Secure version: price fetched from server, never in HTML
async function renderSecurePrice(canvas, productId, csrfToken) {
  const res = await fetch(`/api/price/${productId}`, {
    headers: { 'X-CSRF-Token': csrfToken }
  })
  const { price } = await res.json()
  const ctx = canvas.getContext('2d')
  ctx.font = 'bold 22px Arial'
  ctx.fillStyle = '#e53e3e'
  ctx.textBaseline = 'middle'
  ctx.fillText(`${price} ₽`, 0, canvas.height / 2)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('canvas[data-price]').forEach(renderPriceOnCanvas)
})
