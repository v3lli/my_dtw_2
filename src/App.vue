<template>
  <div>
    <FullScrNav class="nav" :toNav="!showNav"/>
  </div>
  <router-view/>
</template>

<script>
import FullScrNav from '@/components/FullScrNav.vue';

export default {
  data: () => {
    return{
      mobileView: false,
    }
  },
  methods:{
    viewhandler(){
      this.mobileView = window.innerWidth <= 990;
      },
  },
  components: {
    FullScrNav,
  },
  created(){
    this.viewhandler();
    window.addEventListener('resize', this.viewhandler);

  }
};
</script>

<style>
@font-face {
  font-family: "Abadi";
  src: local("Abadi"),
   url(./fonts/Abadi/ABALC.TTF) format("truetype");
}

@font-face {
  font-family: "Rajdhani";
  src: local("Rajdhani"),
   url(./fonts/Rajdhani/Rajdhani-Regular.ttf) format("truetype");
}

#app {
  font-family: Rajdhani, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */
.main-header{
  width: 100%;
}
.nav{
  z-index: 5;
  top: 0;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

*,
*::before,
*::after{

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
