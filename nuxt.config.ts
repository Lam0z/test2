// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    ssr: false, // Отключаем SSR для статической генерации
    app: {
        baseURL: "/test2/", // Укажите имя вашего репозитория
        buildAssetsDir: "assets", // Папка для статических файлов
    },
    modules: ["@vueuse/nuxt", "@nuxt/fonts"],
    fonts: {
        families: [{ name: "Raleway", provider: "google" }],
    },
});
