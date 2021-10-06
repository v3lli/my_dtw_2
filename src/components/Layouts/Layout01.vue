<template>
    <div class="grid_1">
        <GridItemA :article="grid[0]"/>
        <GridItemB :article="grid[1]"/>
        <GridItemC :article="grid[2]"/>
        <GridItemD :article="grid[3]"/>
        <GridItemE :article="grid[4]"/>
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
    props: ["grid"],
    mounted(){
        // console.log(this.grid)
        }
};
</script>

<style scoped>
    .grid_1{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        /* grid-template-columns: repeat(8, 1fr); */
        /* grid-template-rows: repeat(8, 5vw); */
        grid-gap:1.5rem;
        justify-items: stretch;
        align-items: stretch;
        grid-auto-flow: dense;
    }
</style>
