<template>
  <div class="main-header justify-content-between align-items-center">
    <div class="brand-name">
      <strong> Emeka Onyejesi ™ </strong>
    </div>
    <nav
      id="menu"
      class="nav"
      :class="showNav ? 'show' : ''"
    >
      <ul>
        <li>
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li @mouseenter="showCollectionSubmenu"  @mouseleave="hideCollectionSubmenu" >
          <a v-if="hideCollection" class="nav-link" href="#">Collections</a>
          <ul v-if="showCollection" class="sub my-auto d-flex flex-column align-items-center w-100">
                <li class="mx-auto"><a class="mx-auto" href="">Halo</a></li>
                <li><a href="" class="mx-auto">Soldier Come, Soldier Go</a></li>
                <li><a href="" class="mx-auto">Painted Eyes Licked Clean</a></li>
                <li><a href="" class="mx-auto">How they See Us</a></li>
            </ul>
        </li>
        <li @mouseenter="showPublicationSubmenu"  @mouseleave="hidePublicationSubmenu" >
          <a v-if="hidePublication" class="nav-link" href="#">Publications</a>
          <ul v-if="showPublication" class="sub mx-auto d-flex flex-column justify-content-center align-items-center">
                <li><a href="" class="mx-auto">Utero</a></li>
                <li><a href="" class="mx-auto">27</a></li>
                <li><a href="" class="mx-auto">Demon Days</a></li>
            </ul>
        </li>
        <li>
          <a class="nav-link" href="#">Diary</a>
        </li>
        <li @mouseenter="showContactSubmenu"  @mouseleave="hideContactSubmenu">
          <a v-if="hideContact" class="nav-link" href="#">Contact</a>
          <ul v-if="showContact" class="sub mx-auto d-flex flex-column justify-content-center align-self-center">
                <li><a href="" class="mx-auto">Instagram</a></li>
                <li><a href="" class="mx-auto">FaceBook</a></li>
                <li><a href="" class="mx-auto">Twitter</a></li>
            </ul>
        </li>
        <li>
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <fa
        v-if="!showNav"
        @click="toggleNav"
        class="cross fa-color fa-sm"
        icon="times"
      />
    </nav>
    <fa v-if="showNav" @click="toggleNav" class="hamburger fa-md" icon="bars" />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["toNav"],
  data: () => {
    return {
      showNav: true,
      
      contactMneu: false,

      showCollection: false,
      hideCollection: true,

      showPublication: false,
      hidePublication: true,

      showContact: false,
      hideContact: true,
    };
  },
  methods: {
    toggleNav: function () {
      this.showNav = !this.showNav;
    },
    toggleCollection: function (){
        this.collectiionMenu = !this.collectiionMenu;
    },
    showCollectionSubmenu() {
        this.showCollection = true;
        this.hideCollection = false;
    },
    hideCollectionSubmenu() {
        this.showCollection = false;
        this.hideCollection = true;
    },

    showPublicationSubmenu(){
        this.showPublication = true;
        this.hidePublication = false;
    },
    hidePublicationSubmenu(){
        this.showPublication = false;
        this.hidePublication = true;
    },
    showContactSubmenu(){
        this.showContact = true;
        this.hideContact = false;
    },
    hideContactSubmenu(){
        this.showContact = false;
        this.hideContact = true;
    },
    togglePublication: function (){
        this.publicationMenu = !this.publicationMenu;
    },
    
  },
};
</script>

<style scoped>
.main-header {
  height: 70px;
  width: 100%;
  padding: 3.5rem;
  z-index: 2;
  background-color: transparent;
  /* background: rgba(14, 13, 13, 0.43); */
  position: absolute;
  color: whitesmoke;
  border-bottom: 3px solid transparent;
  transition: border-bottom 1s;
}

.brand-name {
  font-size: 20px;
}

nav ul{
  display: block;
  position: relative;
  width: 100%;
  height: 98%;
  color: #fff;
  text-align: center;
  list-style: none;
  text-align: center;
  /* display: inline-block; */
}



nav ul li {
  width: 33.33%;
  height: 50%;
  padding: 24px;
  /* margin-bottom: 0; */
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  transition: 1.5s;
}

.sub li{
    display: block;
    width: 100%;
    height: unset;
    border-top: unset;
    border-right: unset;
    text-align: center;
    margin: 0 auto;
    top: 18%;
    transition: 1.5s;
}


.sub li a {
    font-size: 15px;
    width: fit-content;
    transition: 1.5s;
}

.sub{
    height: 75%;
    margin: 0 auto;
}

nav ul a {
  display: block;
  /* letter-spacing: 0.1em; */
  font-weight: 600;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-48%);
  transform: translateY(-48%);

  text-decoration: none;
  font-size: 20px;
  color: #fff;
  letter-spacing: 5px;
  position: relative;
}

.main-header:hover {
  border-color: white;
}

nav ul a::after {
  content: "";
  height: 3px;
  width: 0;
  background: lightgreen;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.5s;
}

nav ul a:hover::after {
  width: 100%;
  color: white;
}

nav {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 1;
  top: 0;
  left: 0;
  transition: 1.5s;
}

.cross {
  position: absolute;
  color: #fff;
  top: 35px;
  right: 40px;
  font-size: 40px;
  cursor: pointer;
}
.show {
  top: -100vh;
}
.hide {
  top: 0;
}
</style>
