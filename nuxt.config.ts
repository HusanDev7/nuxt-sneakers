// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["@/assets/scss/main.scss"],
    modules: ['@vueuse/motion/nuxt'],
    
    runtimeConfig: {
        public: {
          motion: {
            directives: {
              'pop-bottom': {
                initial: {
                  scale: 0,
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }
              }
            }
          }
        }
      }
});
