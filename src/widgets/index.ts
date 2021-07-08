import { App } from "vue";

 const widgets = import.meta.globEager('./**/*.vue');


export function installWidgets(app: App<Element>) {
    for (const key in widgets) {
        if (widgets.hasOwnProperty(key)) {
            const index = key.lastIndexOf("/");
            let name = key;
            if (index > -1) {
                name = key.substring(index + 1);
            }
            app.component(name.replace(/(\.\/|\.vue)/g, ""), widgets[key].default)
        }
    }
}