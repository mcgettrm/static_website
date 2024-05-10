// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [{
      code: "en-GB",
      iso: "en-GB",
      name: "English(UK)",
      file: "en-GB.json"
    },
    {
      code: "fr-FR",
      iso: "fr-FR",
      name: "Français(FR)",
      file: "fr-FR.json"
    },
    {
      code: "es-ES",
      iso: "es-ES",
      name: "Español(ES)",
      file: "es-ES.json"
    },
    {
      code: "zh-CN",
      iso: "zh-CN",
      name: "中文(简体)",
      file: "zh-CN.json"
    },
  ],
    defaultLocale: 'en-GB',
    langDir: "locales",
    strategy: "prefix_except_default",
  }
})