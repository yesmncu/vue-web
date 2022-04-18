<template>
  <div>
  <section class="homeSect1">
  <div class="container">
    <HomeSlide />
  </div>
  <div class="homeScrollDown"> <span>Aşağı Kaydır</span> <i><img src="../assets/images/icons/arrowDown.svg" alt=""></i> </div>
</section>
<section class="homeAboutSect">
  <div class="container-md">
    <div class="aboutText" data-aos="fade-up" data-aos-duration="800">
      <div class="title"> <span>HAKKIMIZDA</span> <strong>Güzel bir hafta sonu için...</strong> </div>
      <p>Şıklığın konfor ile buluştuğu keyifli bir dinlenme ortamı sunan Ağva Nehir Evi Butik Otel, İstanbul’dan çok uzaklaşmadan huzur dolu bir tatil yapmak isteyen değerli misafirlerimiz için oldukça güzel bir konaklama alternatifi sunuyor. </p>
      <p>Misafirlerimizin kendini evinde hissetmesini sağlayan olanakları ve güler yüzlü personelleri ile beğenilen tesisimiz, Ağva’da Göksu Nehri kıyısında yer alıyor. Modern ve şık şekilde dekore edilmiş odalara sahip olan otelimizin, nehir ya da dağ manzaralı odalarında kalabilirsiniz...</p>
    </div>
    <div class="aboutBg">
      <div class="tree" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"><img src="../assets/images/tree.png" alt=""></div>
      <div class="bg bg1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"><img src="../assets/images/aboutBg1.jpg" alt=""></div>
      <div class="bg bg2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"><img src="../assets/images/aboutBg2.jpg" alt=""></div>
    </div>
  </div>
</section>

<HomeRoomSect data-aos="fade-up" data-aos-duration="800" />

<section class="homeTrailerSect">
  <div class="homeTrailerBg" :style="{'background-image': 'url(' + require('../assets/images/homeTrailerBg.jpg') + ')'}"> <a href="#">
    <div class="playBtn" data-aos="zoom-in" data-aos-duration="800"> <i><img src="../assets/images/icons/playBtn.svg" alt=""></i> </div>
    </a> </div>
  <div class="homeTrailerText"> <strong data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">İki Nehir Arasındaki Cennet</strong>
    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Sizi, ailenizi ya da sevdiklerinizi, mavinin ve yeşilin her tonuyla buluşturan  Ağva Nehir Evi Butik Otel’de; konforu yeniden tanımlamınızı sağlayacak odalarımızda tatilin tadını sonuna kadar çıkarabileceğiniz özel bir deneyim yaşayacaksınız.</p>
    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Göksu Nehri’nin eşsiz manzarası ve hizmet kalitesiyle fark yaratan otelimiz, mükemmel bir tatil için her şeyi düşündü, size de tatilin tadını çıkarmak kaldı.
      Siz sadece sevdiklerinizle birlikte unutulmaz anılar bırakmaya hazır olun! </p>
    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">Bilgi ve rezervasyon için <strong>0216 606 00 16</strong> arayıp yerinizi hemen ayırtın.</p>
  </div>
</section>

<HomeCommentSect data-aos="fade-up" data-aos-duration="800"/>

<section class="homeActiviteSect">
  <div class="container-md">
    <div class="titleStyle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"> <strong>Aktiviteler</strong>
      <p>Ağva turları Ağva'nın cennet doğası ve yeryüzü şekillerinden dolayı çeşitlidir. Ağva nehir turizmi ile meşhurdur.</p>
    </div>
    <div class="activiteScroll_m" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      <ul class="homeActiviteList">
        <li> <a href="javascript:void(0)">
          <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeActivites/1.jpg') + ')'}"></div>
          <div class="text"> <strong>Ağva Nehir Gezisi</strong>
            <p>Göksu nehrinde tekne turları yapabilir yada deniz bisikleti  ile nehrin keyfini çıkarabilirsiniz.</p>
          </div>
          </a> </li>
        <li> <a href="javascript:void(0)">
          <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeActivites/3.jpg') + ')'}"></div>
          <div class="text"> <strong>Doğa Yürüyüşü</strong>
            <p>Göksu nehrinde tekne turları yapabilir yada deniz bisikleti  ile nehrin keyfini çıkarabilirsiniz.</p>
          </div>
          </a> </li>
        <li> <a href="javascript:void(0)">
          <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeActivites/2.jpg') + ')'}"></div>
          <div class="text"> <strong>Bisiklet Gezintisi</strong>
            <p>Göksu nehrinde tekne turları yapabilir yada deniz bisikleti  ile nehrin keyfini çıkarabilirsiniz.</p>
          </div>
          </a> </li>
        <li> <a href="javascript:void(0)">
          <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeActivites/5.jpg') + ')'}"></div>
          <div class="text"> <strong>Karadenizde Yüzmek</strong>
            <p>Göksu nehrinde tekne turları yapabilir yada deniz bisikleti  ile nehrin keyfini çıkarabilirsiniz.</p>
          </div>
          </a> </li>
        <li> <a href="javascript:void(0)">
          <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/homeActivites/4.jpg') + ')'}"></div>
          <div class="text"> <strong>Balık Tutma</strong>
            <p>Göksu nehrinde tekne turları yapabilir yada deniz bisikleti  ile nehrin keyfini çıkarabilirsiniz.</p>
          </div>
          </a> </li>
      </ul>
    </div>
  </div>
  <div class="homeActivites"><img src="../assets/images/homeActivitesBg.png" alt=""></div>
</section>
  </div>
</template>

<script>


import HomeSlide from '@/components/HomeSlide.vue'
import HomeRoomSect from '@/components/HomeRoomSect.vue'
import HomeCommentSect from '@/components/HomeComment.vue'


export default {
  name: 'HomePage',
  components: { 
    HomeSlide,
    HomeRoomSect,
    HomeCommentSect,
  },
   mounted () {
  document.body.classList.remove('subPage')  
  },
  destroyed () {
      window.removeEventListener('scroll', this.bodyScroll);
    }
}
</script>
