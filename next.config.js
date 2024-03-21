/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        pathname: '**',
        port: '3000',
        protocol: 'http'
      },
      {
				protocol: "https",
				hostname: "digital-hippo-eta.vercel.app",
			},
      {
        protocol: "https",
        hostname: "digital-hippo-f4lv.onrender.com"
      }
    ]
  }
}

module.exports = nextConfig
