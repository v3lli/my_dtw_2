<template>
  <div class="column">
    <img :src="`${imageurl.image_src}`" />
    <img :src="`${imageurl.image_src}`" />
    <img :src="`${imageurl.image_src}`" />
  </div>
</template>

<script>
export default {
    props: [
        "imageurl"
    ]
};
</script>

<style>
</style>