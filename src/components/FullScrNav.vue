<template>
    <div class="main-header justify-content-between align-items-center"> 
        <div class="brand-name"><strong> Emeka Onyejesi ™ </strong></div>
        <nav id="menu" class="nav align-items-center text-center justify-content-center" :class="showNav ? 'show' : '' ">
            <ul>
                <a class="nav-link" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Collections</a>
                <a class="nav-link" href="#">Publications</a>
                <a class="nav-link" href="#">Diary</a>
                <a class="nav-link" href="#">Contact</a>
            </ul>
            <fa  v-if="!showNav" @click="toggleNav" class="cross fa-color fa-lg" icon = "times"/>
        </nav>
        <fa v-if="showNav" @click="toggleNav" class="hamburger fa-lg" icon = "bars"/>
    </div>
</template>

<script>
 export default {
     name: 'Navbar',
     props:["toNav"],
     data: () => {
    return{
      showNav: true 
      
    }
  },
  methods:{
    toggleNav: function () {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style scoped>
.main-header
{
    height: 70px;
    width: 100%;
    padding: 3.5rem;
    z-index:2;
    background-color: transparent;
    /* background: rgba(14, 13, 13, 0.43); */
    position: absolute;
    color: whitesmoke;
    border-bottom: 3px solid transparent ;
    transition: border-bottom 1s;
}

.brand-name{
    font-size: 20px;
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

.main-header:hover{
    border-color: white;
}

nav ul a::after{
    content:'';
    height: 3px;
    width: 0;
    background: lightgreen;
    position: absolute;
    bottom: 0;
    left : 0;
    transition: width 0.5s;
}

nav ul a:hover::after{
    width: 100%;

}

nav {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.20;
    top: 0;
    left: 0;
    transition: 1s;
}

.cross{    
    position : absolute;
    color: #fff;
    top: 35px;
    right: 40px;
    font-size: 70px;
    cursor: pointer;

}
.show {
    top: -100vh;
}
.hide{
    top: 0;
}
 .line{

 }
</style>
