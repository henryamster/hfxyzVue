<template>
  <div>
    <p
      v-code-pen="{class: 'codepen', 'data-height':'465', 'data-theme-id':0, 'data-slug-hash': slug, 'data-default-tab':'result', 'data-user':'henryamster', 'data-embed-version':'2', 'data-pen-title':'Test'}"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    slug: String
  }
};
</script>
<style>
iframe {
  height: 400px;
}
</style>