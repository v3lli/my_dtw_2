<template>
    <div class="main-header d-flex justify-content-between align-items-center">
        
        <nav id="menu" class="nav align-items-center text-center justify-content-center" :class="showNav ? 'hjxchg' : '' ">
            <fa @click="toggleNav" v-if="!toNav" class="cross fa-lg" icon = "times"/>
            <ul>
                <a class="nav-link" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </ul>
        </nav>
    </div>
</template>

<script>
 export default {
     name: 'Navbar',
     props:["toNav"],
     data(){
    return {
      mobileView: false,
      showNav: false
    }}
  }
  

// Vue.createApp({
//   data(){
//     return {
//       counter: 0,
//       showNav: false
//     }
//   }
// }).mount('#basic-event')
 
</script>

<style scoped>
.main-header{
    height: 140px;
    margin-bottom: 2rem;
    width: 100%;
    padding: 3.5rem;
    z-index:2;
    /* background: rgba(14, 13, 13, 0.43); */
}

nav ul li{
    list-style: none;
    margin : 35px 0;   
}

nav ul a {
    text-decoration: none;
    font-size: 40px;
    color: #fff;
    padding: 10px;
    letter-spacing: 5px;
    position: relative;
}

nav ul a::after{
    content: '';
    height: 3px;
    width: 0;
    background: lightgreen;
    position: absolute;
    bottom: 0;
    left : 0;
}

nav ul a:hover::after{
    width: 100%;

}

nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: grey;
    z-index: 2;
    top: 0;
    left: 0;
    
}

#cross{    
        color: #fff;
        display: absolute;
        top: 0;
        right: 0;
        font-size: 100px;

}
.hjxchg {

}
 
</style>
