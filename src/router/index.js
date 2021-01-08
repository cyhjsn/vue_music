import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'
import HotSong from '../views/HotSong.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/hotsong',
    name: 'HotSong',
    component: HotSong
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
