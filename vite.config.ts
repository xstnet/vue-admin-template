import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ],
      dts: 'src/components.d.ts'
    })
  ],
  envDir: resolve('env'),
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@page': resolve('./src/pages')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/theme/element/index.scss" as *;`
      }
    }
  }
});
