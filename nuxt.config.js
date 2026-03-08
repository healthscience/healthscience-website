// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  
  app: {
    head: {
      title: 'healthscience.network | Gaia Intelligences Shape Health',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The scientific authority for the Health Oracle Protocol (HOP).' }
      ],
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Ensure we are not using TypeScript
  typescript: {
    shim: false,
    typeCheck: false
  }
})
