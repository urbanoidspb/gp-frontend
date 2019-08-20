import HTTPS from "./modules/https/";

const events = HTTPS.get('/events')
.then(res => res.data.map(event => '/events/' + event.id));

const news = HTTPS.get('/news')
.then(res => res.data.map(newsitem => '/news/' + newsitem.id));

const albums = HTTPS.get('/albums')
.then(res => res.data.map(album => '/gallery/' + album.id));

module.exports = {
  mode: 'universal',
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'spb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: "google-site-verification", content: "Ee2oIsGZ9bDapcGvWcEgLGhhto4NqjBtDzwoAJIc_Lc" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap' }
    ],
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    gzip: true,
    routes () {
      return Promise.all([events, news, albums]).then(function (ally) {
        return ally[0].concat(ally[1].concat(ally[2]))
      });
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
};

