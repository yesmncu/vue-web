<template>
<div>
 <div class="headerBanner">
  <div class="headTitle" data-aos="fade-up" data-aos-duration="800">AKTİVİTELER</div>
</div>
<div class="activitiesPage">
  <div class="container">
  <ul>
    <li>
      <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/activite-list/1.jpg') + ')'}"></div> 
      <div class="text"> 
        <strong>AĞVA NEHİR GEZİSİ</strong> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida libero a lorem rutrum ultricies. Etiam sit amet mi a augue facilisis tincidunt. Integer nec est quis velit rutrum scelerisque. Nunc luctus neque congue, semper tellus quis, egestas libero.</p>
        <p>Donec placerat iaculis quam eu pulvinar. Suspendisse sit amet enim nisi. Nam id felis at mauris efficitur eleifend. Vestibulum ut finibus odio. Donec pretium felis quis sodales lobortis. Phasellus porttitor tortor ac eleifend tincidunt. Nulla elementum ante dui, iaculis iaculis turpis posuere sed. Ut at magna quam.</p>
      </div> 
    </li>
    <li>
      <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/activite-list/2.jpg') + ')'}"></div> 
      <div class="text"> 
        <strong>BİSİKLET GEZİSİ</strong> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida libero a lorem rutrum ultricies. Etiam sit amet mi a augue facilisis tincidunt. Integer nec est quis velit rutrum scelerisque. Nunc luctus neque congue, semper tellus quis, egestas libero.</p>
        <p>Donec placerat iaculis quam eu pulvinar. Suspendisse sit amet enim nisi. Nam id felis at mauris efficitur eleifend. Vestibulum ut finibus odio. Donec pretium felis quis sodales lobortis. Phasellus porttitor tortor ac eleifend tincidunt. Nulla elementum ante dui, iaculis iaculis turpis posuere sed. Ut at magna quam.</p>
      </div> 
    </li>
    <li>
      <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/activite-list/3.jpg') + ')'}"></div> 
      <div class="text"> 
        <strong>DOĞA YÜRÜŞÜ</strong> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida libero a lorem rutrum ultricies. Etiam sit amet mi a augue facilisis tincidunt. Integer nec est quis velit rutrum scelerisque. Nunc luctus neque congue, semper tellus quis, egestas libero.</p>
        <p>Donec placerat iaculis quam eu pulvinar. Suspendisse sit amet enim nisi. Nam id felis at mauris efficitur eleifend. Vestibulum ut finibus odio. Donec pretium felis quis sodales lobortis. Phasellus porttitor tortor ac eleifend tincidunt. Nulla elementum ante dui, iaculis iaculis turpis posuere sed. Ut at magna quam.</p>
      </div> 
    </li>
    <li>
      <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/activite-list/4.jpg') + ')'}"></div> 
      <div class="text"> 
        <strong>BALIK TUTMA</strong> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida libero a lorem rutrum ultricies. Etiam sit amet mi a augue facilisis tincidunt. Integer nec est quis velit rutrum scelerisque. Nunc luctus neque congue, semper tellus quis, egestas libero.</p>
        <p>Donec placerat iaculis quam eu pulvinar. Suspendisse sit amet enim nisi. Nam id felis at mauris efficitur eleifend. Vestibulum ut finibus odio. Donec pretium felis quis sodales lobortis. Phasellus porttitor tortor ac eleifend tincidunt. Nulla elementum ante dui, iaculis iaculis turpis posuere sed. Ut at magna quam.</p>
      </div> 
    </li>
    <li>
      <div class="bg" :style="{'background-image': 'url(' + require('../assets/images/activite-list/5.jpg') + ')'}"></div> 
      <div class="text"> 
        <strong>KARADENİZDE YÜZMEK</strong> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida libero a lorem rutrum ultricies. Etiam sit amet mi a augue facilisis tincidunt. Integer nec est quis velit rutrum scelerisque. Nunc luctus neque congue, semper tellus quis, egestas libero.</p>
        <p>Donec placerat iaculis quam eu pulvinar. Suspendisse sit amet enim nisi. Nam id felis at mauris efficitur eleifend. Vestibulum ut finibus odio. Donec pretium felis quis sodales lobortis. Phasellus porttitor tortor ac eleifend tincidunt. Nulla elementum ante dui, iaculis iaculis turpis posuere sed. Ut at magna quam.</p>
      </div> 
    </li>
  </ul>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'AktivitelerPage',
  mounted () {
  document.body.classList.add('subPage')  
  }
}
</script>
