<template>
    <div>
        <div class="know">
                <p> IN A BLACK AND WHITE WORLD..</p>
        </div>
            <hr class="line">
        <div class="feed container w-100" v-if= "posts">
            <Layout01 :grid="getFirstFivePost"/>
            <Layout01 :grid="getSecondFivePost"/>
            <!-- <Layout01 :grid="posts"/>
            <Layout01 :grid="posts"/>
            <Layout01 :grid="posts"/> -->
            <!-- <img alt="" v-for="(post, index) in posts" :key="index" :src ="post.media_url"> -->
                <!-- <ImageGridSingle v-for="(image, index) in images" :key="index" :imageurl="image"/> -->
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
import Layout01 from './Layouts/Layout01.vue'
// import ImageGridSingle from './ImageGridSingle.vue';
export default {
    computed:{
        getFirstFivePost() {
            let newPosts = null;
            if (this.posts.length > 0) {
                newPosts = this.posts.slice(0, 5)
            }
            console.log(newPosts)
            return newPosts;
        },
        getSecondFivePost() {
            let newPosts = null;
            if (this.posts.length > 0) {
                newPosts = this.posts.slice(6, 11)
            }
            return newPosts;
        },
        getThirdFivePost() {
            let newPosts = [];
            if (this.posts.length > 10) {
                newPosts = this.posts.slice(12, 17)
            }
            return newPosts;
        },
        getFourthFivePost() {
            let newPosts = [];
            if (this.posts.length > 15) {
                newPosts = this.posts.slice(15, 5)
            }
            return newPosts;
        },
        getFifthFivePost() {
            let newPosts = [];
            if (this.posts.length > 20) {
                newPosts = this.posts.slice(20, 5)
            }
            return newPosts;
        },
    },
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
        posts:null,
        current:"https://graph.instagram.com/v11.0/5871478969560922/media?fields=caption,id,media_type,media_url&access_token=IGQVJWVFlLbkdUWkVGMklFZA2hWNTJMdXFfRk40a0NhUXVfaXR4ZAnVZAaHo5YURYUWtKMFA0dzJyek1GSjI0aVZAYaUNmYXZAsbjdhYkpVc0tRY0lFY1I3NG1hX2M2X2d1bEpXUTE5c2lkTGdRWEJYa1dtUwZDZD",
        next:''

    }
    },
    methods:{
        getposts(){
            axios.get(this.current)
            .then((response)=>{
                console.log(response.data)
                this.posts = response.data.data
                this.next = response.data.paging.next
            })
        },
    },
    mounted(){
        this.getposts();
    },
    components:{
        Layout01,
        //ImageGridSingle
    }

};
</script>
<style scoped>
.feed{
    width: 100%;
    max-width: 120rem; 
    padding: 0 1.5rem;
}
</style>