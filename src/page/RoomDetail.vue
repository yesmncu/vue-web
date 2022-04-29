<template>
  <div>
    <div class="headerBanner">
        <div class="headTitle">Superior Jakuzili Nehir Manzaralı Oda</div>
    </div>

    <div class="roomsDetailPage">
  <div class="container">
      <RoomGallery />
  </div>


  <div class="container-sm">
    <div class="subText">
      <strong>Oda Hakkında</strong>
      <p>Superior Jakuzili Nehir Manzaralı Oda, Ana binamızın orta katında Nehir Manzaralıdır. İçerisinde Çift kişilik Queen Yatak, TV, Minibar, 2 Adet Berjer, Jakuzi, Duşa Kabinli Banyo ve Klima bulunmaktadır. Kış aylarında Isıtma sistemimiz doğalgazlıdır. Tüm odalarımızda Şampuan, Duş jeli, Saç kremi, havlu, tek kullanımlık terlik ve 24 Saat Sıcak Su mevcuttur. Tüm konaklama seçeneklerimize kahvaltı dahildir.</p>
    </div>


    <div class="roomDetailProperty">
      <ul>
        <li class="price"> <p><strong>400 TL</strong>'den başlayan fiyatlar </p> </li>
        <li> <span>Ücretsiz Kahvaltı</span> </li>
        <li> <span>Tüm Kartlara Taksit Seçeneği</span> </li>
        <li> <span>Otelde Ödeme İmkanı</span> </li>
      </ul>
    </div>


    <div class="hotelPropertySect">
    <div class="subText"> <strong>Oda Özellikleri</strong> </div>
    <ul>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Nehir Manzaralı </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Jakuzili </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Minibar </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Led Tv </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Wc </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> 24 Saat sıcak su </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Duş </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Ücretsiz Wi-Fi </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Banyo Malzemeleri </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Saç Kurutma Makinesi </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Çift Kişilik Yatak </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Terlik </li>
      <li> <i><img src="../assets/images/icons/green-tick.svg" alt=""></i> Havlu </li>
    </ul>
  </div>

  </div>


  
<OtherRoomSlide/>



</div>
      

  </div>
</template>

<script>

import RoomGallery from '@/components/RoomGallery.vue'
import OtherRoomSlide from '@/components/OtherRoomSlide.vue'


export default {
  name: 'RoomDetailPage',
  components: { 
      RoomGallery,
      OtherRoomSlide,
  },
  mounted () {
  document.body.classList.add('subPage')
  document.body.classList.add('subRoom')
  }
}
</script>
