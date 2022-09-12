const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@ecommerce/design-system'])
const { withSentryConfig } = require('@sentry/nextjs');

const runtimeCaching = require('next-pwa/cache')
const webpack = require('webpack')

const envPaths = new Map([
  ['development', '.env.dev'],
  ['staging', '.env.stg'],
  ['production', '.env.prd'],
  ['test', '.env.test']
])

const { parsed: myEnv } = require('dotenv').config({
  path: envPaths.get(process.env.APP_NAME) || '.env'
})

const moduleExports = {
  ...withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
      reloadOnOnline: false
    }
  }),
  ...withTM({
    webpack: config => {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
      return config
    }
  })
};
const sentryWebpackPluginOptions = {
  silent: true
};
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
