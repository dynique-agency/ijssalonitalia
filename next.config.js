/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  // Security headers (voor static export worden deze via Cloudflare geconfigureerd)
  async headers() {
    return []
  },
  // Disable source maps in production voor security
  productionBrowserSourceMaps: false,
  // Compress output
  compress: true,
  // PoweredBy header verwijderen
  poweredByHeader: false,
}

module.exports = nextConfig





