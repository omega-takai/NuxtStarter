import Sass from 'sass'
import Fiber from 'fibers'

const loaderSetting = {
  loaders: {
    scss: {
      implementation: Sass,
      sassOptions: {
        fiber: Fiber,
      },
    },
  },
}

// SEE: https://ja.nuxtjs.org/faq/github-pages/
const baseDir = process.env.BASE_DIR || '/'
const routerBase = process.env.BASE_DIR
  ? {
      router: {
        base: baseDir,
      },
      generate: {
        fallback: true, // '404.html' を使用したい場合
        dir: 'public',
      },
    }
  : {}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${baseDir}favicon.ico` },
    ],
  },
  /**
   * Doc: https://ja.nuxtjs.org/api/configuration-srcdir/
   */
  srcDir: 'src/',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
  ],
  /**
   * Global CSS
   */
  css: ['@/assets/style/global.scss'],
  /**
   * Style Resources
   * Do not import actual styles.
   * Use this module only to import
   * variables, mixins, functions (et cetera)
   * as they won't exist in the actual build.
   */
  styleResources: {
    scss: [
      './src/assets/style/variables.scss',
      './src/assets/style/mixins.scss',
      './src/assets/style/functions.scss',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * See: https://ja.nuxtjs.org/api/configuration-server
   */
  server: {
    port: 8000, // デフォルト: 3000
    timing: false,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    ...loaderSetting,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' },
      },
    },
  },
  ...routerBase,
}
