// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from 'vite-plugin-wasm';
import topLevelAwait from "vite-plugin-top-level-await";

export default defineNuxtConfig({
    ssr: false,
    vite: {
        plugins: [
            wasm(),
            topLevelAwait()
        ],
        optimizeDeps: {
            exclude: [
                "@syntect/wasm"
            ]
        }
    }
})
