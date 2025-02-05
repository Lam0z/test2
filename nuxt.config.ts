// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    // nitro: {
    //     prerender: {
    //         routes: ["/"], // Указываем страницы для статической генерации
    //     },
    // },
    // app: {
    //     baseURL: "/test2/", // Укажите название репозитория
    // },
    // devtools: { enabled: true },

    modules: ["@vueuse/nuxt", "@nuxt/fonts"],
    fonts: {
        families: [{ name: "Raleway", provider: "google" }],
    },
});
