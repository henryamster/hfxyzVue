<template>
  <div >
    <h3 class="is-size-3 pinyon">{{title}}</h3>
    <p class="is-size-7">{{subhead}}</p>
    <a v-if="link" :href="link">
      <img v-if="img" :src="img">
    </a>
    <img v-else :src="img">
    <p class="content">{{description}}</p>
    <p v-if="link" class="link-project">
      Click
      <a :href="link">here</a> to view the project
    </p>
    <p v-if="tags">
      <span class="is-size-7 tag" v-bind:key="tag.id" v-for="tag in tags">
        <strong class="has-text-link has-background-light">{{tag}} &#32;</strong>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    subhead: String,
    description: String,
    img: String,
    link: String,
    tags: Array
  }
};
</script>
<style>

.pinyon{
    
    
}
p.link-project {
  text-align: center;
  padding-top: 1em;
  font-weight: 800;
}
.post{
    padding:8px;   
    border-radius:8px;

}
.content{
    padding-top:25px;
}
</style>

