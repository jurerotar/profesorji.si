
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { name: 'http-equiv', content: 'text/html; charset=UTF-8' },
      { name: 'monetization', content: '$ilp.uphold.com/44LefdKYfgnr' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://profesorji.si/logoOpenGraph1200x630.jpg' },
      { name: 'og:image:secure_url', content: 'https://profesorji.si/logoOpenGraph1200x630.jpg' },
      { name: 'og:image:type', content: 'image/jpg' },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:image:alt', content: 'Profesorji.si' },
      { name: 'twitter:image', content: 'https://profesorji.si/logoTwitter1200x600.jpg' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-config', content: '/fav/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:"180x180", href: '/fav/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:"32x32", href: '/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:"16x16", href: '/fav/favicon-16x16.png' },
      { rel: 'manifest', href: '/fav/site.webmanifest' },
      { rel: 'shortcut icon', href: '/fav/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
}
