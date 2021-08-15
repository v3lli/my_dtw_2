<template>
  <div :style = "bgImg" class="landing w-100">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
      return{
          bgImg: 
          {
              backgroundImage:"url("+require("../assets/Images/IMG_3769.gif")+")",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              backgroundAttachment:"fixed",
              backgroundPosition:"center",
          },
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#hello{
  background-color: black;
}

.landing{
    height: 100vh;
    width: 100%;
}
</style>
