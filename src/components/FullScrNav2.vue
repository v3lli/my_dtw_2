<template>
  <div class="main-header justify-content-between align-items-center">
    <div class="brand-name">
      <strong> Emeka Onyejesi ™ </strong>
    </div>
    <nav
      id="menu"
      class="nav align-items-center text-center justify-content-center"
      :class="showNav ? 'show' : ''"
    >
      <ul>
        <li>
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li>
          <a class="nav-link" href="#">Collections</a>
        </li>
        <li>
          <a class="nav-link" href="#">Publications</a>
        </li>
        <li>
          <a class="nav-link" href="#">Diary</a>
        </li>
        <li>
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li>
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <fa
        v-if="!showNav"
        @click="toggleNav"
        class="cross fa-color fa-lg"
        icon="times"
      />
    </nav>
    <fa v-if="showNav" @click="toggleNav" class="hamburger fa-lg" icon="bars" />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["toNav"],
  data: () => {
    return {
      showNav: true,
    };
  },
  methods: {
    toggleNav: function () {
      this.showNav = !this.showNav;
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

nav ul {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;

  list-style: none;
  margin: 35px 0;
  /* display: inline-block; */
}

nav ul li {
  width: 33.33%;
  height: 50%;
  padding: 36px;
  margin-bottom: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  float: left;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

nav ul a {
  display: block;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 17px;
  background: red;
  color: #fff;
  pointer-events: none;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-48%);
  transform: translateY(-48%);

  text-decoration: none;
  font-size: 40px;
  color: #fff;
  padding: 10px;
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
}

nav {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.2;
  top: 0;
  left: 0;
  transition: 1s;
}

.cross {
  position: absolute;
  color: #fff;
  top: 35px;
  right: 40px;
  font-size: 70px;
  cursor: pointer;
}
.show {
  top: -100vh;
}
.hide {
  top: 0;
}
</style>
