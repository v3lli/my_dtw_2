<template>
    <div class="banner container">
         <h5 class = "mt-5"> In A Black And White World..</h5>
            <hr class="line">
            <p>True Colors Show</p>
        <div class="feed container main" v-if= "posts">
            <Layout25 class="gallery" :posts= "getAllPost"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Layout25 from './Layouts/Layout25.vue'

export default {
    computed:{
        getAllPost() {
            let newPosts = null;
            if (this.posts.length > 0) {
                newPosts = this.posts
            }
            console.log(newPosts)
            return newPosts;
        }
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
        current:"https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=IGQVJVWmFxbEJSQzVtdUdaSDBmY0xteG1GUUxjVTJKemExTURMLTdNclVUVXNXNnN1cTBOaThobEJYMmxDRVhrZAWdtNmZACUXZAGMFc3cUF3cmtoWDdlRTMyYkJDcmgyekNtY2lKRVhDSFN0VGxTSTZAXcQZDZD",
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
        Layout25,
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

.main{
	position: relative;
	height: 100%;
	width: 100%;
}

.main h1{
	position: relative;
	height: auto;
	width: 550px;
	left: 50%;
	transform: translateX(-50%);
	margin:5% 0 2% 0;
	text-align: center;
	font-size: 2.8em;
	font-weight: 650;
	letter-spacing: 1.5px;
	color:#017bf5;
	border-left: 5px solid #017bf5;
	border-right: 5px solid #017bf5;
	background:rgba(0, 0, 0, 0.05);
}

.main .gallery{
	position: absolute;
	height: auto;
	width: 90%;
	margin: auto;
	padding: 45px 0;
	display: grid;
	grid-template-columns: auto auto auto auto; /*i write auto four time because we want four rows*/
	grid-gap: 2vh;
	grid-auto-flow: dense;
    /* z-index: 90; */
}
.banner, .banner .gallery, .banner .feed{
    background-color: transparent;
    color: whitesmoke;
}


</style>