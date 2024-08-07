export default {
  ssr: true,
  build: {
    terser: true, // Минификация JavaScript
    extractCSS: true // Извлечение CSS
  },
  render: {
    static: {
      maxAge: 86400 // Устанавливает кэширование на 24 часа
    }
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    '~/plugins/js/index.js', '~/plugins/smoothscroll.client.js'
  ],
  devtools: { enabled: false },
  css: ["~/assets/styles/global.scss"],
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-swiper", "@vite-pwa/nuxt"],
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
      { path: '/api/sendMessage', handler: '~/server/middleware/sendMessage.js' }
    ],
    buildModules: [
      '@nuxt/typescript-build',
      '@pinia/nuxt',
    ],
  }
}