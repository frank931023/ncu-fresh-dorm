// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // layout: 'default',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})