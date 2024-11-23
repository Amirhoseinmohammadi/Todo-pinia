/** @format */

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  css: ["@/assets/css/tailwind.css"],
  buildDir: "dist", 
  target: "static", 
  ssr: false, 
  generate: {
    fallback: "404.html",
},
});
