export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/base.scss',
    '~/assets/css/fonts.scss',
    '~/assets/css/Global.scss',
    '~/assets/css/size.scss',
    '~/assets/sass/color.sass'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ]
 })