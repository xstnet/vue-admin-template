import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: resolve('env'),
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@page': resolve('./src/pages')
    }
  }
});
