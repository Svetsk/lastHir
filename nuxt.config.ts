export default {
  server: {
    host: '0.0.0.0'
  },
  devtools: { enabled: false },
  css: ["~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-swiper", "@vite-pwa/nuxt"],
  pwa: {
    /* your pwa options */
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      { src: '/js/index.js' }
    ],
    components: true,
    router: {
      middleware: 'preloader'
    },
    layouts: {
      admin: '@/layouts/admin-layout.vue'
    },
    serverMiddleware: [
      { path: '/api/pages', handler: '~/api/pages' },
    ],
  }
}