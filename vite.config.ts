import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintLoad from '@nabla/vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), vueJsx(), eslintLoad({})],
  base: './',
  publicDir: 'public',
  assetsInclude: ['**/*.md'],
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: './assets',
    commonjsOptions: {
      // esmExternals: true,
      transformMixedEsModules: true,
    },
  },
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 8080,
    open: false,
  },
})
