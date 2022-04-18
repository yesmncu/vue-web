<template>
  <div id="app">
    <HeaderView />
      <router-view data-aos="fade-in" data-aos-duration="800" />
    <FooterView/>
  </div>
</template>

<script>
import HeaderView from '@/components/Header.vue'
import FooterView from '@/components/Footer.vue'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>


<style>
  @import './assets/css/styles.css';
</style>