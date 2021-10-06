<template>
    <figure class="grid_item_11">
        <img class="grid_img" :src ="article.media_url">
    </figure>
</template>

<script>
export default {
    props: ["article"], 
    mounted(){
        console.log(this.article)
    }
};
</script>

<style>
    .grid_img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .grid_item_11{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-column-end: 4;
        width: 100%;
        height: 100%;
    }
</style>