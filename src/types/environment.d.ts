declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_PUBLIC_KEY: string
    SUPABASE_API_URL: string
    APP_MAX_UPLOAD_LIMIT: string
    APP_MAX_PARAMETER_LIMIT: string
    CORS_ENABLED: string
  }
}