# Nuxt.js example

This repository will help you to start with Nuxt.js.

Core principles:

- Server Side Rendering
- AntDesign (like Bootstrap or Material)
- Auth0
- I18n (translations)
- Errors handling
- Tests (TU & E2E)
- SEO
- Common plugins (lodash, vee-validate, vee-lazyload)

Feel free copy/paste code from this repository. It's MIT licenced.

Don't start your projects from it, prefer [create-nuxt-app](https://nuxtjs.org/guide/installation/), it's a great tool!

## Build Setup

### Add an env file

This repository uses .env files for configuration. Copy paste the following lines in a file named `.env` in the root directory.

```dotenv
BASE_URL=http://realworld.nuxtjs.com:3333

# Auth0
AUTH0_DOMAIN=# Example: nuxt-js.eu.auth0.com
AUTH0_CLIENT_ID=# Example: gI6lVM0y2HqwgBI5ujO9YmGyt4y3yPhU
```

### Auth0 (facultative)

First, create a tenant at [Auth0](https://auth0.com/). Then, create an application (Regular Web Application) and specify AUTH\_\* environment variables in .env file.

[More info here](https://github.com/nuxt/example-auth0) about the application configuration.

## Define local dns (facultative)

Add the local dns `realworld.nuxtjs.com`.

```bash
$ sudo vi /etc/hosts
```

Example: `127.0.0.1 localhost realworld.nuxtjs.com`

If you want to change the local dns name, don't forget to edit BASE_URL environment variable in .env file.

## Time to launch mate!

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3333
$ yarn dev

# build for production and launch server
$ yarn build && yarn start
```

You can access the project locally at : [localhost:3333](http://localhost:3333/) or [realworld.nuxtjs.com:3333](http://realworld.nuxtjs.com:3333/) if you defined the local dns.

## Used dependencies

- [Nuxt.js](https://nuxtjs.org): the intuitive vue framework. In this repo, used with SSR and to connect express as a server middleware.
- [Nuxt i18n](https://github.com/nuxt-community/nuxt-i18n): i18n for your Nuxt project (translations).
- [Nuxt Axios module](https://github.com/nuxt-community/axios-module/): secure and Easy Axios integration with Nuxt.js.
- [Nuxt Auth module (Auth0 config)](https://auth.nuxtjs.org/): Zero-boilerplate authentication support for Nuxt.js.
- [Nuxt Dotenv module](https://github.com/nuxt-community/dotenv-module): loads your .env file into your application context.
- [Nuxt Toast module](https://github.com/nuxt-community/modules/tree/master/packages/toast): responsive Touch Compatible Toast plugin for Nuxt.js using vue-toasted.
- [Nuxt Component Cache module](https://github.com/nuxt-community/modules/tree/master/packages/component-cache): vue-server-renderer has built-in support for component-level caching. This module automatically adds a LRU cache to project.
- [Nuxt Device module](https://github.com/nuxt-community/device-module): injects flags that indicate a device type into the context and the component instance.
- [Nuxt Sitemap module](https://github.com/nuxt-community/sitemap-module): automatically generate or serve dynamic sitemap.xml for Nuxt.js projects.
- [Nuxt Robots.txt module](https://github.com/nuxt-community/robots-module): a Nuxt.js module thats inject a middleware to generate a robots.txt file.
- [Vue Vee Validate module](https://logaretm.github.io/vee-validate/): template based form validation framework for vue.js.
- [Vue Cookie Law module](https://github.com/apertureless/vue-cookie-law): EU Cookie Law Plugin for Vue.js.
- [Vue lazyloading module](https://github.com/hilongjw/vue-lazyload): vue module for lazyloading images in your applications.
- [Vue loadash module](https://github.com/Ewocker/vue-lodash): a small wrapper for integrating lodash to Vuejs.
- [Nuxt Style Resources module](https://github.com/nuxt-community/style-resources-module/): share variables, mixins, functions across all style files (no @import needed).
- [sass-loader](https://webpack.js.org/loaders/sass-loader/): loads a Sass/SCSS file and compiles it to CSS.
- [node-sass](https://github.com/sass/node-sass): node.js bindings to libsass.
- [Cypress - E2E](https://www.cypress.io/)
- [Jest - UT](https://jestjs.io/)

## Dependencies configuration

### robots.txt

Two possible configurations are implemented in this repo: with the robots.txt module and with static files.

Static files config: all included files are automatically served by Nuxt and are accessible through your project root URL. (static/robots.txt will be available at localhost:3000/robots.txt).

[Nuxt Robots.txt module](https://github.com/nuxt-community/robots-module): inject a middleware to generate a robots.txt file. The JS translation of static/robots.txt file is available in config/modules/robots.js.

In both cases, if you do not use a sitemap, don't forget to remove it from the robots.txt.

## Awesome repositories

To find nice dependencies, don't forget to check these repositories:

- [Awesome Nuxt.js](https://github.com/nuxt-community/awesome-nuxt): a curated list of awesome things related to Nuxt.js.
- [Nuxt Community](https://github.com/nuxt-community/): modules & Projects from Nuxt.js Community.
- [Awesome Vue.js](https://github.com/vuejs/awesome-vue): a curated list of awesome things related to Vue.js.
- [Awesome Express](https://github.com/rajikaimal/awesome-express): a curated list of express.js resources.
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs): delightful Node.js packages and resources.

## License

[MIT License](https://github.com/r9mp/nuxtjs-fullstack-example/blob/master/LICENSE)

Copyright (c) Romain POUSSIER
