<template>
<header class="header">
  <div class="container">
    <div class="logo"><router-link to="/"><img src="../assets/images/logo.svg" alt="Logo"></router-link></div>
    <div class="topMenu">
      <ul>
        <li><router-link to="/otelimiz">Otelimiz</router-link></li>
        <li><router-link to="/odalar">Odalar</router-link></li>
        <li><router-link to="/aktiviteler">Aktiviteler</router-link></li>
        <li><router-link to="/galeri">Galeri</router-link></li>
        <li><router-link to="/iletisim">İletişim</router-link></li>
      </ul>
    </div>
    <div class="headerRight">
      <div class="headerResBtn"><a href=""><i><img src="../assets/images/icons/res.svg" alt=""></i> <span>REZERVASYON</span> </a></div>
      <div class="headerLang">
        <strong>TR</strong>
        <ul>
            <li><a href="#">EN</a></li>
            <li><a href="#">RU</a></li>
        </ul>
    </div>
    <div class="menuBtn" @click="mobilMenu"> <span></span> <span></span> <span></span> </div>
    </div>
  </div>
</header>
</template>
<script>
export default {
  name: 'HeaderView',
  data () {
      return {
          
      }
    },
    methods: {
      mobilMenu() {
        const body = document.querySelector("body")
        body.classList.toggle("topMenuOpen");
      },
      bodyScroll(){
          let bodySticky = document.querySelector("body");
            if (window.scrollY > 100) {
            bodySticky.classList.add('sticky'); 
              } else if (window.scrollY < 100) {
                bodySticky.classList.remove('sticky');
            }
      }
    },
    created () {
      window.addEventListener('scroll', this.bodyScroll);

    },
    destroyed () {
      window.removeEventListener('scroll', this.bodyScroll);
    },

      watch:{
        $route (to, from){
            const body = document.querySelector("body")
            body.classList.remove("topMenuOpen");
          }
      },

}
</script>
