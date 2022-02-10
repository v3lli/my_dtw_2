<template>
<ul>
</ul>
</template>
<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'Albums',
  data(){
  return{
    albums:null,
    url:"http://127.0.0.1:3000/api/v1/albums"
}},
  methods:{
    getalbums(){
            axios.get(this.url)
            .then((response)=>{
                console.log(response.data.data)  
                this.albums = response.data.data.albums
                console.log(this.albums[0].name)
            })
        },
  },
  created(){
    this.getalbums()
  }
}
</script>
<style scoped>
</style>
