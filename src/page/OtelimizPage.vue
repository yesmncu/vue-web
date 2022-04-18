<template>
<div>
  <div class="headerBanner">
  <div class="headTitle" data-aos="fade-up" data-aos-duration="800">OTELİMİZ</div>
</div>
<div class="ourHotelPage">
  <div class="container-sm">
    <div class="subText">
      <p>Ağva Nehir Evi Butik Otel, Ağva Göksu Nehri kenarında 2016 yılından bugüne siz değerli misafirlerimizin hizmetindedir. Ağva her mevsim başka güzeldir! Bu nedenle Ağva Nehir Evi Butik Otel ve birçok Ağva Otelleri yılın 12 ayı açıktır. Göksu Nehrine En Yakın Otel yapılarından biri olan Ağva Nehir Evi Butik Otel, Eşsiz Nehir ve Dağ Manzarasını bir arada sizlere sunuyor. Jakuzili veya Şömineli Oda seçenekleri ile tamamen kafa dinleyebileceğiniz, Nehir Kenarında Serpme Kahvaltı hizmeti alabileceğiniz, Doğa yürüşü yaparak Ağva Sahiline ulaşabileceğiniz imkanlara sahipsiniz.</p>
      <p>Ağva Nehir Evi Butik Otel, Muhteşem Karadeniz manzaralı Kilimli koyuna 5 km, Ağvanın diğer gözdesi olan Yeşilçay Nehrine 1 km, Ağva merkez ve sahiline 1 km, Şile Saklıgöle 30 km, Hacıllı şelalesine 15 km mesafededir. </p>
    </div>
  </div>
  <div class="container-md">
    <div class="hotelPageTrailer" :style="{'background-image': 'url(' + require('../assets/images/hotelTrailerBg.jpg') + ')'}"> <a href="#">
      <div class="playBtn"> <i><img src="../assets/images/icons/playBtn.svg" alt=""></i> <span>TANITIM FİLMİ</span> </div>
      </a> </div>
  </div>
  <div class="container-sm">
    <div class="hotelPropertySect">
      <div class="subText"> <strong>Otel Olanakları</strong> </div>
      <ul>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Ücretsiz Kahvaltı </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Ücretsiz Wi-Fi </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Yetişkin Oteli (+16) </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Isıtma </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Teras </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Ortak TV Alanı </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Ücretsiz Otopark </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Klima </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Lobi </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Açık Restoran </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Deniz Bisikleti </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Bisiklet </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Kapalı Restoran </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Bahçe </li>
        <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> 7/24 Resepsiyon </li>
      </ul>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'OtelimizPage',
  mounted () {
  document.body.classList.add('subPage')  
  }
}
</script>
