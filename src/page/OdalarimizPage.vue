<template>
  <div>
     <div class="headerBanner">
  <div class="headTitle" data-aos="fade-up" data-aos-duration="800">ODALARIMIZ</div>
</div>
<div class="roomsPage">
  <div class="container">
    <ul>
      <li>
        <div class="roomItem"> <a href="#">
          <div class="bgHidden">
            <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/standart-oda.jpg') + ')'}"></div>
          </div>
          <div class="bottomText">
            <div class="title"> <span>2 Kişilik - 25 m²</span> <strong>Standart Oda</strong> </div>
            <div class="price">
              <div class="priceActive"> <strong>250 TL</strong> 'den başlayan fiyatlar </div>
              <span>300 TL</span> </div>
          </div>
          </a> </div>
      </li>
      <li>
        <div class="roomItem"> <a href="#">
          <div class="bgHidden">
            <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/jakuzili-ve-somineli-deluxe-oda.jpg') + ')'}"></div>
          </div>
          <div class="bottomText">
            <div class="title"> <span>2 Kişilik - 30 m²</span> <strong>Giriş Kat Nehir Manzaralı Oda</strong> </div>
            <div class="price">
              <div class="priceActive"> <strong>350 TL</strong> 'den başlayan fiyatlar </div>
              <span>420 TL</span> </div>
          </div>
          </a> </div>
      </li>
      <li>
        <div class="roomItem"> <a href="#">
          <div class="bgHidden">
            <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
          </div>
          <div class="bottomText">
            <div class="title"> <span>2 Kişilik - 25 m²</span> <strong>Superior Jakuzili Nehir Manzaralı Oda</strong> </div>
            <div class="price">
              <div class="priceActive"> <strong>400 TL</strong> 'den başlayan fiyatlar </div>
              <span>500 TL</span> </div>
          </div>
          </a> </div>
      </li>
      <li>
        <div class="roomItem"> <a href="#">
          <div class="bgHidden">
            <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/rooms/nehir-manzarali-oda.jpg') + ')'}"></div>
          </div>
          <div class="bottomText">
            <div class="title"> <span>2 Kişilik - 30 m²</span> <strong>Superior Şömineli Nehir Manzaralı Oda</strong> </div>
            <div class="price">
              <div class="priceActive"> <strong>500 TL</strong> 'den başlayan fiyatlar </div>
              <span>600 TL</span> </div>
          </div>
          </a> </div>
      </li>
    </ul>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'OdalarimizPage',
  mounted () {
  document.body.classList.add('subPage')  
  }
}
</script>
