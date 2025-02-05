// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = "/test2/";
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    ssr: false, // Отключаем SSR для статической генерации
    app: {
        baseURL: baseURL, // Укажите имя вашего репозитория
        buildAssetsDir: "assets", // Папка для статических файлов
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: `${baseURL}/favicon.ico`,
                }, // путь к favicon
            ],
        },
    },
    modules: ["@vueuse/nuxt", "@nuxt/fonts"],
    fonts: {
        families: [{ name: "Raleway", provider: "google" }],
    },
});
