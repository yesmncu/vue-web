<template>
    <VueSlickCarousel v-bind="settings" class="homeSlide">
       <div class="item">
        <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeSlide/1.jpg') + ')'}"></div>
        <div class="slogan"> <span>AĞVA NEHİR EVİ BUTİK OTEL</span> <strong>Ağva’da huzurlu bir
          tatil deneyimi yaşayın!</strong> </div>
      </div>
      <div class="item">
        <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeSlide/1.jpg') + ')'}"></div>
        <div class="slogan"> <span>AĞVA NEHİR EVİ BUTİK OTEL</span> <strong>Ağva’da huzurlu bir
          tatil deneyimi yaşayın!</strong> </div>
      </div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'HomeSlide',
  components: { VueSlickCarousel },
  data() {
      return {
          settings: {
              arrows:false,
              dots:true,
              "speed": 500,
              "autoplay": true,
          }
      }
  }
}
</script>
