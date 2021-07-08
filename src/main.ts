import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/route";
import "element-plus/packages/theme-chalk/src/base.scss";
import { installWidgets } from "@/widgets";
import { installDirective } from "@/directives";

import {
  ElInput,
  ElButton,
  ElTable,
  ElTableColumn,
  ElCheckbox,
  ElSelect,
  ElOption
} from "element-plus";

const ElComponets = [ElInput,ElOption, ElButton, ElCheckbox, ElTable, ElTableColumn,ElSelect];

const app = createApp(App)
  .use(store)
  .use(router);
ElComponets.forEach(component => {
  const name = component.name;
  app.component(name, component);
});
installWidgets(app);
installDirective(app);
app.mount("#app");


