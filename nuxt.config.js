export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - NuxtStarter` : 'NuxtStarter'
      },
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  srcDir: 'src/',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  optimization: {
    minimize: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      minimize: false,
    },
    html: {
      minify: { minifyCSS: false },
    },
    extractCSS: true,
    minifyCSS: false,
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      css: ({ isDev }) =>
        isDev ? '[name].css' : 'css/[name].[contenthash:7].css',
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]',
    },
    splitChunks: {
      layouts: true,
      pages: false,
      commons: true,
    },
  },
}
