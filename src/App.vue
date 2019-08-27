<template>
  <div id="app">
    <Header/>
    <router-view class="min-100"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.min-100 {
  min-height: 100vh;
}
</style>
