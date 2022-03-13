import Vue from 'vue'
import VueRouter from 'vue-router'
import ROUTES from "./routes"

Vue.use(VueRouter)

const routes = [
  ROUTES.HOME,
  ROUTES.TODO_HOME,
  ROUTES.ABOUT
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
