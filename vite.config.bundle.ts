import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions()],
  build: {
    outDir: 'bundle',
    rollupOptions: {
      external: ['vue', 'ant-design-vue'],
      output: {
        exports: 'named',
      },
    },
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, '/lib/index.ts'),
      formats: ['es', 'umd'],
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
