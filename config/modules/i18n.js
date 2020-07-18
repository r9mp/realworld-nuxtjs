/*
 * I18N - Translation module configuration
 * https://nuxt-community.github.io/nuxt-i18n/
 */

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US/index.js'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR/index.js'
    }
  ],
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'en',
  seo: false, // SEO is enabled through layouts: layouts/*.vue
  baseUrl: 'https://realworld.nuxtjs.com',
  strategy: 'prefix_except_default',
  parsePages: false,
  pages: {
    'errors/404': {
      en: '/errors/404',
      fr: '/erreurs/404'
    },
    'dashboard/index': {
      en: '/dashboard',
      fr: '/dashboard'
    }
  }
}
