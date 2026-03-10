import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Permettre les images locales dans /public
    unoptimized: false,
  },
}

export default nextConfig
