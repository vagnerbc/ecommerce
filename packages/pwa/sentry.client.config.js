// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
const SENTRY_ENVIRONMENT = process.env.APP_NAME || 'development'
const SENTRY_TRACE = process.env.SENTRY_TRACE_RATE || 1.0

Sentry.init({
  dsn: SENTRY_DSN || '',
  tracesSampleRate: SENTRY_TRACE,
  environment: SENTRY_ENVIRONMENT
})
