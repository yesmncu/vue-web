import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created () {
    AOS.init();
 
  }
}).$mount('#app')
