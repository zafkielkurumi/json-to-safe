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
  ElOption,
  ElMessage,
} from "element-plus";

const ElComponets = [
  ElInput,
  ElOption,
  ElButton,
  ElCheckbox,
  ElTable,
  ElTableColumn,
  ElSelect,
];
const plugins = [ElMessage];

const app = createApp(App)
  .use(store)
  .use(router);

  app.config.globalProperties.$message = ElMessage;

  app.config.errorHandler = (err: any) => {
    ElMessage.error(`${err?.message ?? err}`)
  }

ElComponets.forEach(component => {
  const name = component.name;
  app.component(name, component);
});
plugins.forEach(plugin => {
  app.use(plugin);
});
installWidgets(app);
installDirective(app);
app.mount("#app");
