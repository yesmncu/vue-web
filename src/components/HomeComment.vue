<template>
 <section class="homeCommentSect">
  <div class="homeCommentHeader">
    <div class="titleStyle"> <strong>Konuklarımızın Yorumları</strong>
      <p>Otelimizde konaklayan konuklarımızdan %100 onaylı yorumlar.</p>
    </div>
  </div>

  <VueSlickCarousel v-bind="settings" class="homeCommentSlide">
    <div class="item">
      <div class="nail"><img src="../assets/images/icons/nail.svg" alt=""></div>
      <div class="profile">
        <div class="bg"></div>
        <strong>Yunus E.</strong> </div>
      <p>Otelin konumu çok güzeldi. Otel nehir kenarındaydı zaten otelin manzarası güzeldi. Odalar de nehir manzaralıydı.</p>
      <div class="stars">
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
        </div>
    </div>
    <div class="item">
      <div class="nail"><img src="../assets/images/icons/nail.svg" alt=""></div>
      <div class="profile">
        <div class="bg"></div>
        <strong>Refik Ç.</strong> </div>
      <p>Personeller ilgili odalar geniş ve temizdi. Konumu iyiydi. Evcil hayvan dostu.</p>
      <div class="stars"> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          </div>
    </div>
    <div class="item">
      <div class="nail"><img src="../assets/images/icons/nail.svg" alt=""></div>
      <div class="profile">
        <div class="bg"></div>
        <strong>Mehmet D.</strong> </div>
      <p>Sessiz huzurlu bir otel. Personelleri ilgili. Temizlik güzeldi. Her şey güzeldi bir sıkıntı yaşamadım.</p>
        <div class="stars"> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
        </div>
    </div>
    <div class="item">
      <div class="nail"><img src="../assets/images/icons/nail.svg" alt=""></div>
      <div class="profile">
        <div class="bg"></div>
        <strong>Serkan Y.</strong> </div>
      <p>Tesis temizdi. Personeller ilgiliydi. Konum olarak iyiydi.</p>
        <div class="stars"> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          <img src="../assets/images/icons/star.svg" alt=""> 
          </div>
    </div>
  </VueSlickCarousel>



</section>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'HomeCommentSect',
  components: { VueSlickCarousel },
  data() {
      return {
          settings: {
            "dots": true,
            "infinite": true,
            "speed": 500,
            "variableWidth": true,
            "responsive": [
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "adaptiveHeight": true,
                }
                },
                {
                "breakpoint": 900,
                "settings": {
                    "centerMode": false,
                    "slidesToShow": 2,
                }
                },
                {
                "breakpoint": 1024,
                "settings": {
                }
                },
             ]
            }
      }
  }
}
</script>