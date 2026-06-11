const path = require('path')

const polyfillStub = path.join(__dirname, 'lib/modern-polyfill.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '../build/polyfills/polyfill-module': polyfillStub,
      'next/dist/build/polyfills/polyfill-module': polyfillStub,
    }
    return config
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './lib/modern-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './lib/modern-polyfill.js',
    },
  },
}

module.exports = nextConfig
