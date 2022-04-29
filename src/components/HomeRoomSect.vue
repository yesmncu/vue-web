<template>
    <section class="homeRoomSect">
    <div class="container-md">
        <div class="titleStyle"> <strong>Konaklama</strong>
        <p>Her zevke uygun, rahat, konforlu ve lüks odanız günün belli bir zamanı için değil, her zaman için hazırlandı.</p>
        </div>
       
        <VueSlickCarousel v-bind="settings" class="homeRoomSlide">
        <div class="roomItem"> <router-link to="/oda-detay">
                    <div class="bgHidden">
                    <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/standart-oda.jpg') + ')'}"></div>
                    </div>
                    <div class="bottomText">
                    <div class="title"> <span>2 Kişilik - 25 m²</span> <strong>Standart Oda</strong> </div>
                    <div class="price">
                        <div class="priceActive"> <strong>250 TL</strong> 'den başlayan fiyatlar </div>
                        <span>300 TL</span> </div>
                    </div>
                   </router-link> </div>
                <div class="roomItem"> <router-link to="/oda-detay">
                    <div class="bgHidden">
                    <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
                    </div>
                    <div class="bottomText">
                    <div class="title"> <span>2 Kişilik - 30 m²</span> <strong>Nehir Manzaralı Oda</strong> </div>
                    <div class="price">
                        <div class="priceActive"> <strong>350 TL</strong> 'den başlayan fiyatlar </div>
                        <span>440 TL</span> </div>
                    </div>
                    </router-link> </div>
                <div class="roomItem"> <router-link to="/oda-detay">
                    <div class="bgHidden">
                    <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/jakuzili-ve-somineli-deluxe-oda.jpg') + ')'}"></div>
                    </div>
                    <div class="bottomText">
                    <div class="title"> <span>2 Kişilik - 35 m²</span> <strong>Jakuzili ve Şömineli Deluxe Oda</strong> </div>
                    <div class="price">
                        <div class="priceActive"> <strong>400 TL</strong> 'den başlayan fiyatlar </div>
                        <span>520 TL</span> </div>
                    </div>
                    </router-link> </div>
                <div class="roomItem"> <router-link to="/oda-detay">
                    <div class="bgHidden">
                    <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
                    </div>
                    <div class="bottomText">
                    <div class="title"> <span>2 Kişilik - 30 m²</span> <strong>Nehir Manzaralı Oda</strong> </div>
                    <div class="price">
                        <div class="priceActive"> <strong>350 TL</strong> 'den başlayan fiyatlar </div>
                        <span>440 TL</span> </div>
                    </div>
                    </router-link> </div>
         </VueSlickCarousel>

    </div>
    </section>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'HomeRoomSect',
  components: { VueSlickCarousel },
  data() {
      return {
          settings: {
            "dots": true,
            "centerMode": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 500,
            "centerPadding": "0px",
            "responsive": [
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "adaptiveHeight": true,
                    arrows:false,
                }
                },
                {
                "breakpoint": 900,
                "settings": {
                    "centerMode": false,
                    "slidesToShow": 2,
                    arrows:false,
                }
                },
                {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 3,
                }
                },
             ]
            }
      }
  }
}
</script>