/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  dataLayer?: unknown[]
  hj: any
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    APP_NAME: string
    DB_VERSION: number
    B2B_URI: string
    API_BASE_URL: string
    KEYCLOAK_CLIENT_ID: string
    GOOGLE_ANALYTICS_TRACKING_ID: string
    GOOGLE_ANALYTICS_DIMENSIONS: string
    HOTJAR_TRACKING_ID: number
    HOTJAR_TRACKING_VERSION: number
    SAC_CONTACT: string
    CHATBOT_URI: string
  }
}
