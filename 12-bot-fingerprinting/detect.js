// Detect headless browsers and bots via browser signals

async function detectBot() {
  const signals = []

  // Selenium / WebDriver flag
  if (navigator.webdriver) signals.push('webdriver')

  // Headless Chrome check
  if (window.chrome === undefined && navigator.userAgent.includes('Chrome')) {
    signals.push('headless_chrome')
  }

  // No plugins = likely headless
  if (navigator.plugins.length === 0) signals.push('no_plugins')

  // No languages set
  if (navigator.languages.length === 0) signals.push('no_languages')

  // Mouse movement check
  let mouseMoved = false
  document.addEventListener('mousemove', () => { mouseMoved = true }, { once: true })

  await new Promise(resolve => setTimeout(resolve, 2000))
  if (!mouseMoved) signals.push('no_mouse_movement')

  return { isBot: signals.length >= 2, signals }
}

async function init() {
  const result = await detectBot()
  await fetch('/api/fingerprint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result)
  })
  if (result.isBot) {
    // Show captcha or restrict access
    document.getElementById('captcha-container')?.classList.remove('hidden')
  }
}

init()
