const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_TRAVEL_API: process.env.GOOGLE_TRAVEL_API,
  },
})
