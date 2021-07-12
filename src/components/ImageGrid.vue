<template>
    <div>
        <div class="know">
                <p> IN A BLACK AND WHITE WORLD..</p>
        </div>
            <hr class="line">
        <div class="feed container w-100 image-in-two">
            <img alt="" v-for="(post, index) in posts" :key="index" :src ="post.media_url">
                <!--<ImageGridSingle v-for="(image, index) in images" :key="index" :imageurl="image"/>-->
                <!--<div class="column">
                        <img src="../assets/images/IMG_0348.jpeg">
                        <img src="../assets/images/IMG_3724.jpg">
                        <img src="../assets/images/IMG_3987.jpg">
                    </div>
                <div class="column">
                    <img src="../assets/images/_MG_7625-Edit-Edit-Edit.jpg">
                    <img src="../assets/images/_MG_8349.jpg">
                    <img src="../assets/images/IMG_7278.jpg">
                </div>
                <div class="column">
                    <img src="../assets/images/Canon EOS 40D3024.jpg">
                    <img src="../assets/images/IMG_7579.jpg">
                    <img src="../assets/images/IMG_4596.jpg">
                </div> -->
            </div>
        </div>
</template>

<script>
import axios from 'axios'
// import ImageGridSingle from './ImageGridSingle.vue';
export default {
    data() {
    return {
        images: [
            {
                image_src:"../assets/Images/IMG_7652.jpg"
            },
            {
                image_src:"../assets/Images/IMG_4988.jpg"
            },
            {
                image_src:"../assets/Images/Canon_EOS_40D1195.jpg"
            }
        ], 
        posts:[],
    }
    },
    methods:{
        getposts(){
            axios.get('https://graph.instagram.com/v11.0/5871478969560922/media?fields=caption,id,media_type,media_url&access_token=IGQVJWVFlLbkdUWkVGMklFZA2hWNTJMdXFfRk40a0NhUXVfaXR4ZAnVZAaHo5YURYUWtKMFA0dzJyek1GSjI0aVZAYaUNmYXZAsbjdhYkpVc0tRY0lFY1I3NG1hX2M2X2d1bEpXUTE5c2lkTGdRWEJYa1dtUwZDZD')
            .then((response)=>{
                console.log(response.data)
                this.posts = response.data.data
                console.log(this.posts[0].data.media_url)
            })
        }
    },
    mounted(){
        this.getposts();
    }

};

</script>
<style scoped>
.image-in-two{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    max-width: 768px;
}

</style>