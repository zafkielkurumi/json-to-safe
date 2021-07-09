import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const VITE_BASE_URL =  import.meta.env.VITE_BASE_URL as string;
console.log(VITE_BASE_URL)

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
    redirect: '/home'
}, {
    path: '/home',
    component: Views['/HomePage'],
},  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/home'}]

export default createRouter({
    history: createWebHistory(VITE_BASE_URL),
    routes
})
