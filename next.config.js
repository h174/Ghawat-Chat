/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }, env: {
    MONGODB_URI: 'mongodb+srv://hghawat83:<password>@cluster0.wy1e6lm.mongodb.net/?retryWrites=true&w=majority',
  }
}

module.exports = nextConfig