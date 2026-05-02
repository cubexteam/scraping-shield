// Load prices via JS after page load
// HTML should contain: <span class="price" data-product-id="42">Loading...</span>

document.addEventListener('DOMContentLoaded', async () => {
  const priceElements = document.querySelectorAll('.price[data-product-id]')

  for (const el of priceElements) {
    try {
      const res = await fetch(`/api/price/${el.dataset.productId}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      if (!res.ok) throw new Error('Failed')
      const { price } = await res.json()
      el.textContent = `${price} ₽`
    } catch {
      el.textContent = 'Price on request'
    }
  }
})
