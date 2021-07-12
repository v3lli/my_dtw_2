<template>
  <Landing class="w-100"/>
  <ImageGrid/>
</template>
<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import ImageGrid from '@/components/ImageGrid.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    ImageGrid
  }
}
</script>

<style scoped>
.banner{
  display: absolute;
  top: -10;
  z-index: -1;
}
</style>
