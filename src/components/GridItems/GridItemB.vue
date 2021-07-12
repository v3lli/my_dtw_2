<template>
    <figure class="grid_item_12">
        <img class="grid_img">
    </figure>
</template>

<script>
export default {
    
};
</script>

<style>
    .grid_img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .grid_item_12{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-column-end: 9;
    }
</style>