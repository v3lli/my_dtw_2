<template>
  <Landing class="w-100"/>
  <Page25 class="w-100"/>
</template>
<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import Page25 from '@/components/Page25.vue'

export default {
  name: 'Home',
  data(){
  },
  components: {
    Landing,
    Page25
  }
}
</script>
<style scoped>
</style>
