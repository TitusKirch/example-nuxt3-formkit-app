export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
  runtimeConfig: {
    formKitApiKey: (process.env.FORMKIT_API_KEY as string) || "",
  },
});
