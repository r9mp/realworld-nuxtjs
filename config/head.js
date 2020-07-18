/*
 * Default metas
 * https://nuxtjs.org/api/configuration-head
 */

export const head = {
  title: 'Fullstack Example - Nuxt.js',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
}
