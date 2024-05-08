import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'VueComponentsLibrary',
      fileName: 'ui-library',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        intro: 'import "./style.css";',
        globals: {
          vue: 'Vue'
        }
      }

    }
  }
})
