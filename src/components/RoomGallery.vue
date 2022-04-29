<template>
<VueSlickCarousel v-bind="settings" class="roomGallery">
    <div class="item"> 
    <a class="bg" :style="{'background-image': 'url(' + require('../assets/images/room-gallery/1.jpg') + ')'}" :href="require('../assets/images/room-gallery/1.jpg')" data-fancybox="rooms"></a> 
    </div>
    <div class="item"> 
        <a class="bg" :style="{'background-image': 'url(' + require('../assets/images/room-gallery/2.jpg') + ')'}" :href="require('../assets/images/room-gallery/2.jpg')" data-fancybox="rooms"></a> 
    </div>
    <div class="item"> 
        <a class="bg" :style="{'background-image': 'url(' + require('../assets/images/room-gallery/3.jpg') + ')'}" :href="require('../assets/images/room-gallery/3.jpg')" data-fancybox="rooms"></a> 
    </div>
    <div class="item"> 
        <a class="bg" :style="{'background-image': 'url(' + require('../assets/images/room-gallery/2.jpg') + ')'}" :href="require('../assets/images/room-gallery/2.jpg')" data-fancybox="rooms"></a> 
    </div>
  </VueSlickCarousel>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'


export default {
  name: 'RoomGallery',
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
                     arrows:true,
                }
                },
             ]
            }
      }
  }
}

</script>

