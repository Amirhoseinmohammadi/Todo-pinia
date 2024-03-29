// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt','@nuxtjs/tailwindcss',],
    css: [
        '@/assets/css/tailwind.css',
      ],
      buildDir: 'dist',
      target: 'static',
      generate: {
        fallback: true,
      }

})
