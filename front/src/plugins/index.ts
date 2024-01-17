/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: any) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
