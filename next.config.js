const withTypescript = require('@zeit/next-typescript')
const lang = require(`./assets/i18n_text/${process.env.LANG_TYPE || 'ZH'}.json`)

module.exports = withTypescript({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.tsx$/,
      enforce: 'pre',
      use: [
        {
          loader: 'tslint-loader',
        }
      ]
    })
    return config
  },
  publicRuntimeConfig: {
    lang
  }
})