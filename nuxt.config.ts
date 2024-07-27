// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["@/assets/scss/main.scss", "aos/dist/aos.css"],
    plugins: [{ src: "~/plugins/aos.ts", mode: "client" }],
});
