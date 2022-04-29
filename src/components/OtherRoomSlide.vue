<template>
<div class="roomDetailSlideSect">
    <div class="subText"> <strong>Diğer Odalarımız</strong> </div>

    <VueSlickCarousel v-bind="settings" class="roomDetailSlide">
          <div class="roomItem">
            <router-link to="/oda-detay">
              <div class="bgHidden">
                <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/standart-oda.jpg') + ')'}"></div>
              </div>
              <div class="bottomText">
               <div class="title">
                 <span>2 Kişilik - 25 m²</span>
                 <strong>Standart Oda</strong>
               </div>
               <div class="price">
                 <div class="priceActive">
                   <strong>250 TL</strong>
                   'den başlayan fiyatlar
                 </div>
                 <span>300 TL</span>
               </div>
              </div>
            </router-link>
          </div>
          <div class="roomItem">
            <router-link to="/oda-detay">
              <div class="bgHidden">
                <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
              </div>
              <div class="bottomText">
               <div class="title">
                 <span>2 Kişilik - 30 m²</span>
                 <strong>Nehir Manzaralı Oda</strong>
               </div>
               <div class="price">
                 <div class="priceActive">
                   <strong>350 TL</strong>
                   'den başlayan fiyatlar
                 </div>
                 <span>440 TL</span>
               </div>
              </div>
            </router-link>
          </div>
          <div class="roomItem">
            <router-link to="/oda-detay">
              <div class="bgHidden">
                <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/jakuzili-ve-somineli-deluxe-oda.jpg') + ')'}"></div>
              </div>
              <div class="bottomText">
               <div class="title">
                 <span>2 Kişilik - 35 m²</span>
                 <strong>Jakuzili ve Şömineli Deluxe Oda</strong>
               </div>
               <div class="price">
                 <div class="priceActive">
                   <strong>400 TL</strong>
                   'den başlayan fiyatlar
                 </div>
                 <span>520 TL</span>
               </div>
              </div>
            </router-link>
          </div>
          <div class="roomItem">
            <router-link to="/oda-detay">
              <div class="bgHidden">
                <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
              </div>
              <div class="bottomText">
               <div class="title">
                 <span>2 Kişilik - 30 m²</span>
                 <strong>Nehir Manzaralı Oda</strong>
               </div>
               <div class="price">
                 <div class="priceActive">
                   <strong>350 TL</strong>
                   'den başlayan fiyatlar
                 </div>
                 <span>440 TL</span>
               </div>
              </div>
            </router-link>
          </div>
      </VueSlickCarousel>


</div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'OtherRoomSlide',
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
            "variableWidth": true,
            "responsive": [
                {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1,
                    "adaptiveHeight": true,
                    "variableWidth": false,
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
