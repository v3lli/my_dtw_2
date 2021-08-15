<template>
    <figure class="grid_item_15">
        <img class="grid_img" :src = article.media_url>
    </figure>
</template>

<script>
export default {
    props: ["article"]
};
</script>

<style>
    .grid_img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .grid_item_15{
        grid-column-start: 7;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-column-end: 6;
        width: 100%;
        height: 100%;

    }
</style>