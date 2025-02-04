// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    // target: "static", // Генерируем статический сайт
    app: {
        baseURL: "/test2/", // Укажите название репозитория
    },
});
