import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../page/HomePage.vue'
import OtelimizPage from '../page/OtelimizPage.vue'
import OdalarimizPage from '../page/OdalarimizPage.vue'
import AktivitelerPage from '../page/AktivitelerPage.vue'
import GaleriPage from '../page/GaleriPage.vue'
import IletisimPage from '../page/IletisimPage.vue'
import RoomDetailPage from '../page/RoomDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/otelimiz',
    name: 'otelimiz',
    component: OtelimizPage
  },
  {
    path: '/odalar',
    name: 'odalar',
    component: OdalarimizPage
  },
  {
    path: '/aktiviteler',
    name: 'aktiviteler',
    component: AktivitelerPage
  },
  {
    path: '/galeri',
    name: 'galeri',
    component: GaleriPage
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    component: IletisimPage
  },
  {
    path: '/oda-detay',
    name: 'oda-detay',
    component: RoomDetailPage
  },
  {
    path: '*',
    redirect:"/"
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
