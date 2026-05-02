// Cloudflare Worker with JA3 TLS fingerprint checking

const KNOWN_BOT_FINGERPRINTS = [
  'e7d705a3286e19ea42f587b344ee6865', // python-requests
  'b32309a26951912be7dba376398abc3b', // curl
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ja3 = request.cf?.tlsClientHello?.ja3
  if (ja3 && KNOWN_BOT_FINGERPRINTS.includes(ja3)) {
    return new Response('Forbidden', { status: 403 })
  }
  return fetch(request)
}
