<template>
    <div class="gallery w-100">
        <figure class="img" v-for="(post, index) in posts" :key="index">
            <img :src="post.media_url">
        </figure>
    </div>
</template>

<script>
// import GridItem from '../GridItems/GridItem.vue'
export default{
    components:{
        //  GridItem
    },
    props: ["posts"],
}
</script>

<style scoped>
.gallery{
    position: relative;
    height: auto;
    width: 90%;
    margin: auto;
    padding: 45px 0;
    display: grid;
    grid-template-columns:  auto auto auto auto;
     
}
.gallery .img{
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9 );
	border-radius: 2px;
}
.gallery .img:first-child{
	grid-column-start: span 2;
	grid-row-start: span 2;
}
.main .gallery .img:nth-child(2n+3){
	grid-row-start: span 2;
}
.main .gallery .img:nth-child(4n+5){
	grid-column-start: span 2;
	grid-row-start: span 2;
}
.gallery .img:nth-child(6n+7){
	grid-row-start: span 1;
}
.gallery .img:nth-child(8n+9){
	grid-column-start: span 1;
	grid-row-start: span 1;
}

.gallery .img:first-child(10n+11){
	grid-column-start: span 2;
	grid-row-start: span 2;
}

.gallery .img:first-child(12n+13){
	grid-column-start: span 4;
	grid-row-start: span 4;
}
/* .gallery .img:nth-child(10n+11){
	grid-column-start: span 1;
	grid-row-start: span 1;
} */
.gallery .img img{
	height: 100%;
	width: 100%;
	object-fit: cover;
	filter: brightness(0.5) grayscale(100);
	border-radius: 2px;
	transition: 0.3s ease-in-out;
}

.gallery .img:hover img{
	filter: brightness(1) grayscale(0);
}


</style>
