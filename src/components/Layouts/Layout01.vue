<template>
    <div class="grid_1">
        <GridItemA/>
        <GridItemB/>
        <GridItemC/>
        <GridItemD/>
        <GridItemE/>
    </div>  
</template>

<script>
import GridItemA from '../GridItems/GridItemA.vue'
import GridItemB from '../GridItems/GridItemB.vue'
import GridItemC from '../GridItems/GridItemC.vue'
import GridItemD from '../GridItems/GridItemD.vue'
import GridItemE from '../GridItems/GridItemE.vue'

export default {
    components: {
            GridItemA, 
            GridItemB, 
            GridItemC, 
            GridItemD, 
            GridItemE
        },
          
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
