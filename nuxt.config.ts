// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxtjs/sitemap'],
  devtools: {
    enabled: true
  },
  app: {
    head: {
      titleTemplate: '%s | Somsom Jastip',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'Somsom Jastip menyediakan layanan jastip barang yang cepat, aman, dan terpercaya. Pesan layanan kami sekarang!' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Somsom Jastip' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'id_ID' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'somsom-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://somsom-jastip.vercel.app'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  sitemap: {
    enabled: true
  }
})
