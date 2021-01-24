<template>
    <iframe width="560" height="315" :src="slug" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>
<script>
export default {
    props:{
        slug: String
    }
}
</script>
<style >

</style>