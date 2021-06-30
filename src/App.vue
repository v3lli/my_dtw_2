<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar,
    
  },
}
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
   url(./fonts/Rajdhani/Rajdhani-Light.ttf) format("truetype");
}

#app {
  font-family: Rajdhani, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
