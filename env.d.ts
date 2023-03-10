/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// eslint-disable-next-line no-unused-vars
declare interface Window {
  APP_config: any
}
