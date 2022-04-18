<template>
    <div>
        <div class="contactMap">
  <div class="container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12054.897674352509!2d30.9362202!3d40.9437066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81658804a36f129f!2sNehir%20Evi%20Rafting%20D%C3%BCzce!5e0!3m2!1str!2str!4v1647896338200!5m2!1str!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</div>
<div class="contactPage">
  <div class="container">
      <div class="contactAddress">
        <ul>
          <li>
            <a href="#">
              <strong>Adres</strong>
              <p> <i><img src="../assets/images/icons/location.svg" alt=""></i> <span>Ağva Merkez Mah. Yakuplu Cad. No:228 <br> Ağva / Şile / İSTANBUL</span>  </p>
            </a>
          </li>
          <li>
            <a href="mailto:info@agvanehirevi.com">
              <strong>Email</strong>
              <p> <i><img src="../assets/images/icons/message.svg" alt=""></i>  <span>info@agvanehirevi.com</span>  </p>
            </a>
          </li>
          <li>
            <a href="tel:02166060016">
              <strong>Telefon</strong>
              <p> <i><img src="../assets/images/icons/tel-dark.svg" alt=""></i> <span>0(216) 606 00 16</span> </p>
            </a>
          </li>
          <li><a href="#" class="directions"> Yol Tarifi  Al</a> </li>
        </ul>
      </div>
      <div class="contactPage-formtext">
            <div class="text">
              <strong>Hemen Bizimle İletişime Geç</strong>
              <p>Sorularınız, yorumlarınız veya şikayetleriniz mi var? Konaklamanız öncesinde, sırasında ve sonrasında meydana gelen herhangi bir olay hakkında bize bilgi vermek için bu kısmı kullanabilirsiniz. </p>  
              <p>Görüşleriniz ve deneyimleriniz bizim için çok önemli ve biz de size olabildiğince çabuk cevap vermeye çalışıyoruz.</p>
            </div>

          <form class="formDefault">
            <ul>
                <li><input type="text" name="your_name" placeholder="Adınız" class="form-text"></li>
                <li><input type="text" name="your_surname" placeholder="Soyadınız" class="form-text"></li>
                <li><input type="tel" name="telephone" placeholder="Telefon Numaranız" class="form-text"></li>
                <li><input type="email" name="email" placeholder="Email Adresiniz" class="form-text"></li>
                <li> <textarea type="text" name="mesajınız" placeholder="Mesajınız"  class="form-text textarea"></textarea> </li>
                <li> <button class="form-submit"> Formu Gönder </button> </li>
            </ul>
        </form>
            <img src="../assets/images/contactPage-img.png" alt="" class="contactFormPage-img">
          </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
  name: 'IletisimPage',
  mounted () {
  document.body.classList.add('subPage')  
  }
}
</script>