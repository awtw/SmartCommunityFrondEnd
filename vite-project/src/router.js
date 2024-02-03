import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: "/", name: "Index", component: () => import("./App.vue")},
    {path: "/Home", name: "Home", component: () => import("./components/Home.vue")},
    {path: "/Hello", name: "Hello", component: () => import("./components/HelloWorld.vue")},
    {path: "/module", name: "Module", component: () => import("./components/Module.vue")},
    {path: "/Person", name: "Person", component: () => import("./components/Person.vue")},
    {path: "/Login", name: "Login", component: () => import("./components/Login.vue")},
    {path: "/LightModule", name: "LightModule", component: () => import("./components/LightModule.vue")},
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router