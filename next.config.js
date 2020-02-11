const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPreact = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        )
      }

      if (options.isServer) {
        config.externals = ["react", "react-dom", ...config.externals]
      }

      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: "preact/compat",
        react$: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom$": "preact/compat"
      })

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

const withSass = require('@zeit/next-sass')

module.exports = withSass(
  withPreact(
    withBundleAnalyzer({
      env: {
        FULLSTORY: process.env.FULLSTORY,
      },
      exportTrailingSlash: true,
    })
  )
)
