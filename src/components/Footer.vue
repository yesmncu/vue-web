<template>
    <footer class="footer">
  <div class="footerSocial">
    <ul>
      <li><a href="#"> <img src="../assets/images/social/instagram.svg" alt=""> </a></li>
      <li><a href="#"> <img src="../assets/images/social/facebook.svg" alt=""> </a></li>
      <li><a href="#"> <img src="../assets/images/social/twitter.svg" alt=""> </a></li>
      <li><a href="#"> <img src="../assets/images/social/youtube.svg" alt=""> </a></li>
    </ul>
  </div>
  <div class="container-md">
      <div class="footerCenter">
        <div class="footerLogo">
          <a href="#"> <img src="../assets/images/logo.svg" alt=""> </a>
          <p>Ağva Göksu nehri kenarında 2016 yılında komple yenilenmiş bir bina ve geniş bir bahçe içerisinde hizmet veren Ağva Nehir Evi toplamda 7 odası ile hizmet vermekte olup, 1 adet kapalı restaurant ve 1 adet açık iskele restaurant ile hizmet vermektedir.</p>
        </div>
        <div class="footerMenus">
            <div class="footerMenu">
              <div class="footerTitle">Kurumsal</div>
              <ul>
                <li><router-link to="/otelimiz">Hakkımızda</router-link></li>
                <li><router-link to="/odalar">Odalar</router-link></li>
                <li><router-link to="/aktiviteler">Aktiviteler</router-link></li>
                <li><router-link to="/galeri">Foto Galeri</router-link></li>
                <li><router-link to="/iletisim">İletişim</router-link></li>
              </ul>
            </div>
            <div class="footerMenu">
              <div class="footerTitle">Gizlilik</div>
              <ul>
                <li><a href="#">Gizlilik Politikası</a></li>
                <li><a href="#">KVKK</a></li>
                <li><a href="#">Aydınlatma Metni</a></li>
                <li><a href="#">Çevre Politikası</a></li>
              </ul>
            </div>
        </div>
        <div class="footerContact">
          <div class="footerTitle">İletişim Bilgileri</div>
          <ul>
            <li> <a>Ağva Merkez Mah. Yakuplu Cad. No:228 Ağva / Şile / İSTANBUL</a> </li>
            <li> <a href="tel:02166060016"> <i><img src="../assets/images/icons/tel.svg" alt=""></i> 0(216) 606 00 16 </a> </li>
            <li> <a href="mailto:info@agvanehirevi.com"> <i><img src="../assets/images/icons/mail.svg" alt=""></i> info@agvanehirevi.com </a> </li>
          </ul>
        </div>
      </div>
  </div>
  <div class="footerCopyright">
    <div class="container-md">
        <p>© Ağva Nehir Evi 2022 - Tüm hakları saklıdır.</p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>
