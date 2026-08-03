/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 85, 90],
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  turbopack: {
    root: __dirname,
  },
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





