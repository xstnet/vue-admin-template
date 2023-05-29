/// <reference types="./vite-env-override.d.ts" />
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
