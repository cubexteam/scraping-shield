// Cloudflare Worker — block requests with a low bot score
// Deploy via: Cloudflare Dashboard → Workers → Create Worker

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const cf = request.cf

  // Block if bot management score is below threshold
  // Score 0 = definitely a bot, 100 = definitely human
  if (cf?.botManagement?.score !== undefined && cf.botManagement.score < 30) {
    return new Response('Access denied', { status: 403 })
  }

  // Block known datacenter ASNs (Amazon, Google Cloud)
  const blockedASNs = [14618, 16509, 15169]
  if (blockedASNs.includes(cf?.asn)) {
    return new Response('Access denied', { status: 403 })
  }

  // Block if Cloudflare threat score is high
  if (cf?.threatScore !== undefined && cf.threatScore > 10) {
    return new Response('Access denied', { status: 403 })
  }

  return fetch(request)
}
