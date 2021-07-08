import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/pages/HelloWorld.vue';

const Pages = import.meta.glob('../pages/**/*.vue');
const Views: {[prop: string]: any} = {};
for (const path in Pages) {
  if (Pages.hasOwnProperty(path)) {
    const i = path.lastIndexOf('/');
    Views[path.substring(i, path.length - 4)] = Pages[path]
  }
}


const routes: RouteRecordRaw[] = [{
    path: '',
    component: Views['/HomePage'],
},   { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/home'}]

export default createRouter({
    history: createWebHistory(),
    routes
})
