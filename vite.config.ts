import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import legacy from "@vitejs/plugin-legacy";
import styleImport from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx'

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),

    styleImport({
      libs: [{
        libraryName: 'element-plus', 
        resolveStyle: (name) => {
          name = name.substr(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  base: "",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("src"),
      },
    ],
  },
  // esbuild: {
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment",
  // },
  clearScreen: false,
  server: {
    open: false,
    proxy: {},
  },
});
