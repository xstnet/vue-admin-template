/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
