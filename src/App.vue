<template>
  <div id="app">
    <Header/>
    <transition name="slide-fade">
    <router-view class="min-100"/>
    </transition>
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
  min-height: 60vh;
}
.slide-fade-enter-active {
   transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   animation-timing-function: linear;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  animation-timing-function: linear;
}

.slide-fade-enter{
  transform: rotateZ(-45deg) rotateX(30deg) translateY(-100%) translateX(-100%) scale(.14);
  opacity: 0;
  
 
  
}
.slide-fade-enter-to {
 transform: translateX(0px);
 opacity: 1;
 
 
  
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotateZ(-45deg) rotateX(30deg) translateY(100%) translateX(100%) scale(.14);
  
   opacity: 0;
}
</style>
