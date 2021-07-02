<template>
<div class="container">
    <div class="brand-name"> Home (Uncategorized) </div>
    <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
    </a>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        
    }
}
</script>

<style scoped>
.main-header{
    height: 140px;
    margin-bottom: 2rem;
    width: 100%;
    padding: 3.5rem;
    z-index: 2;
    /* background: rgba(14, 13, 13, 0.43); */
}
</style>
