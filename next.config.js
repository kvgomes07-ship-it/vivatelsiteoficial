/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization settings
  images: {
    // Use Next.js Image Optimization
    unoptimized: false,
    // Enable WebP format
    formats: ['image/avif', 'image/webp'],
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression and optimizations
  compress: true,
  
  // SWR settings for better caching
  headers: async () => {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Disable server-side source maps in production for smaller bundle
  productionBrowserSourceMaps: false,

  // Enable experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Optimized redirects
  redirects: async () => {
    return []
  },
}

module.exports = nextConfig
