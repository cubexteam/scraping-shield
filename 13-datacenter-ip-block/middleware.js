// Block requests from datacenter IPs using ipinfo.io (Express)
// Set IPINFO_TOKEN in your environment

const ipCache = new Map()

async function isDatacenterIP(ip) {
  if (ipCache.has(ip)) return ipCache.get(ip)
  try {
    const res = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`)
    const data = await res.json()
    const datacenterOrgs = ['amazon','aws','google','microsoft','azure','digitalocean','linode','vultr','hetzner','ovh']
    const org = (data.org || '').toLowerCase()
    const result = datacenterOrgs.some(d => org.includes(d))
    ipCache.set(ip, result)
    return result
  } catch {
    return false
  }
}

async function blockDatacenters(req, res, next) {
  if (await isDatacenterIP(req.ip)) {
    return res.status(403).json({ error: 'Access denied' })
  }
  next()
}

module.exports = blockDatacenters
// Usage: app.use(blockDatacenters)
