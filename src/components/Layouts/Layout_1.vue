<template>
    <div class="grid_1">
        <GridItem_11/>  
    </div>
</template>

<script>
import GridItem_11 from '../GridItems/GridItemA.vue';
export default {
  components: { GirdItem },
   
};
</script>

<style scoped>
    .grid_1{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 5vw);
        grid-gap:15px;

    }

</style>

