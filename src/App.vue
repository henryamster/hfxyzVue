<template>
  <div id="app">
    <Header/>
    <transition name="slide-fade">
    <router-view class="min-100 card"/>
    </transition>
    <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet">
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

#app{
  background: linear-gradient(45deg, #eeeeee, #98989880);
}
.min-100 {
  min-height: 80vh;
  box-shadow:12px 12px 24px rgba(0,0,0,0.2);
}

.navbar-burger{
margin-left: auto;
margin-right:30px;
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
  transform: rotateZ(-90deg) rotateX(90deg) translateY(-100%) translateX(-30%) scale(.14);
  opacity: 0;
  
 
  
}
.slide-fade-enter-to {
 transform: translateX(0px);
 opacity: 1;
 
 
  
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: rotateZ(-90deg) rotateX(90deg) translateY(100%) translateX(100%) scale(.14);
  
   opacity: 0;
}
</style>
