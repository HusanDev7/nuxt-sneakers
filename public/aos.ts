import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
    console.log("AOS Plugin Initialized");
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
    });

    nuxtApp.hook("page:mounted", () => {
        console.log("Refreshing AOS");
        AOS.refresh();
    });
});
