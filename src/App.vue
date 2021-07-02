<template>
  <div class= " d-flex justify-self-start mx-5 my-5" v-if="mobileView">
    <fa class="hamburger fa-lg" icon = "bars"/>
  </div>
  <MobileNav/>
  <Navbar v-if="!mobileView"/>
  <!-- <HelloWorld/> -->
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  data: () => {
    return{
      mobileView: false,
      showNav: false 
    }
  },
  methods:{
    viewhandler(){
      this.mobileView = window.innerWidth <= 990;
      
    }
  },
  components: {
    Navbar
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
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
