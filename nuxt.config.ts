// https://nuxt.com/docs/api/configuration/nuxt-config

//import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    vite: {
        plugins: [
          Components({
            // add option {resolveIcons: true} as parameter for resolving problem with icons
            resolvers: [AntDesignVueResolver({resolveIcons: true})],
          }),
        ],
        ssr: {
          noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
        },  
      },
})


