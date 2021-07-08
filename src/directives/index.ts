import type { App } from "vue";
const directives = import.meta.globEager('./**/index.ts');

export function installDirective(app:App) {
    for (const key in directives) {
        if (directives.hasOwnProperty(key)) {
            app.use(directives[key].default)
        }
    }
}