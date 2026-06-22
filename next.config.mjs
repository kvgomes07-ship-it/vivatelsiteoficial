/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce types and lint for production quality
  typescript: {
    // Enforce types for production quality
    ignoreBuildErrors: false,
  },

  images: {
    // Enabled for better LCP and performance
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig

