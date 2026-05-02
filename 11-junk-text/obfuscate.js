// Insert invisible junk spans inside price elements
// User sees "1499 ₽", scraper reads "1XYZQ499 ₽"

function obfuscatePrice(priceElement, price) {
  const junk = ['X', 'Y', 'Z', 'Q', 'W', 'V']
  let html = ''
  for (const digit of price.toString()) {
    const randomJunk = junk[Math.floor(Math.random() * junk.length)]
    html += digit
    html += `<span aria-hidden="true" style="position:absolute;opacity:0;font-size:0;pointer-events:none">${randomJunk}</span>`
  }
  priceElement.innerHTML = html + ' ₽'
}

document.querySelectorAll('.price[data-value]').forEach(el => {
  obfuscatePrice(el, el.dataset.value)
})
