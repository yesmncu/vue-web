<template>
 <div>
     <div class="headerBanner">
  <div class="headTitle" data-aos="fade-up" data-aos-duration="800">GALERİ</div>
</div>
<div class="galleryPage"> 
  <div class="container">
    <ul>
      <li> <a class="bg" :href="require('../assets/images/gallery/1.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/1.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/2.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/2.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/3.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/3.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/4.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/4.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/5.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/5.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/6.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/6.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/7.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/7.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/8.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/8.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/9.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/9.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/10.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/10.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/11.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/11.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/12.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/12.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/13.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/13.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/14.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/14.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/15.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/15.jpg"> </a> </li>
      <li> <a class="bg" :href="require('../assets/images/gallery/16.jpg')" data-fancybox="gallery"> <img src="../assets/images/gallery/16.jpg"> </a> </li>
    </ul>
    </div>
    </div>
  </div>
</template>
    
<script>
  export default {
  name: 'GaleriPage',
  mounted () {
  document.body.classList.add('subPage')  
  }
}
</script>