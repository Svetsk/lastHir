export default {
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    '~/plugins/js/index.js',
  ],
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
      { src: '/js/index.js' },
    ],
    components: true,
    router: {
      middleware: 'preloader'
    },
    layouts: {
      admin: '@/layouts/admin-layout.vue'
    },
    serverMiddleware: [
      { path: '/api/sendMessage', handler: '~/server/api/sendMessage.js' }
    ],
    buildModules: [
      '@nuxt/typescript-build',
      '@pinia/nuxt',
    ],
  }
}