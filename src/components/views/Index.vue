<template>
  <div class="page has-background-primaryautoheight ">
    <video
      autoplay
      muted
      loop
      id="videoBG"
      class=" inv column is-paddingless is-marginless videobg columnsh"
    >
      <!-- <source src="https://i.imgur.com/e3nMuy8.mp4" type="video/mp4" /> -->
       <source src="  https://firebasestorage.googleapis.com/v0/b/henryfritz-30302.appspot.com/o/bon.m4v?alt=media&token=402395e0-7ca7-447d-aacd-1173a084ac3a" type="video/mp4" />
    
    </video>
    
    <div class="logo-container slide-from-left">
      <div class="logo">
        <span class="logo-hf">Henry&nbsp;Fritz</span>
        <span class="logo-dd">Design &amp; Development</span>
        <span class="logo-tl">Web Design/ Development, Graphic Design, &amp; 3D Motion Graphics</span>
      </div>
    </div>

    <Blog class="has-background-white" posts="2" />
    <!-- <div class="landing">
<img src="/img/me.0abd350e.png" alt="Photo of Henry Fritz" class="landingPhoto">
    </div> -->
  </div>
</template>

<script>
import Blog from "./Blog";
export default {
  components: {
    Blog
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Text|Lexend+Mega|Pinyon+Script&display=swap");
img{
      box-shadow: 0px 4px 6px 1px #1515152e;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* position: absolute; */
  top: 20%;
  min-height: 20vh;
}
.landing{
display: flex;
    align-content: center;
    width: 100vh;
    transform: translateY(6px);
}
img.landingPhoto {
    height: 211px;
    /* z-index: 80000000; */
    transform: translateX(-37px)translateY(41px)rotateZ(10deg);
    opacity: 8%;
}
@keyframes stretcher {
  0% {
 
    border-radius: 0;
    color: black;
 
  }
  65% {
    color: thistle;
  }
  80% {
    color: rgb(238, 212, 255);
  }
  100% {
    
  }
}
.bgcycle {
  
  animation: bgcyc 30s infinite ;
  /* animation-timing-function: linear; */
}
@keyframes bgcyc{
0%
{
filter: hue-rotate(0deg) invert(100%);
}

100%{
filter: hue-rotate(1540deg) invert(100%);
}
}
.logo {
  /* backdrop-filter:  blur(10.3px) saturate(180%) contrast(190%) invert(77%) brightness(162%); */
  display: block;
  color: rgb(37, 32, 32);
  /* margin: 40px auto 0 auto; */
  /* border:.4px rgba(114, 114, 114, 0.534) solid; */
  animation: stretcher 2s forwards;
  animation-timing-function: linear;
  font-size: 32px;
  /* background: radial-gradient( rgba(146, 145, 145, 0.185) 60%, rgba(145, 145, 145, 0.548) 70%,rgba(247, 247, 247, 0.644) 90%); */
  /* animation: reflect 7s infinite; */
  display: inline-block;
  /* border-radius: 4em; */
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.445),
    0.05em 0.04em rgba(49, 49, 49, 0.2),
    -0.08em 0.08em rgba(252, 168, 168, 0.158);

  /* text-shadow:.  ;
     filter:blur(.6px); */
  text-align: center;
  /* animation:slide-in 3.3s ease-in; */
  padding: 40px;
  box-shadow: inset 10 10 50px rgba(253, 253, 253, 0.966),
    3px 3px rgba(199, 199, 199, 0.6);
}
.logo-hf {
    margin-top: 63.1px;
    font-family: "Pinyon Script";
    display: block;
    font-size: 3.6em;
    font-weight: 800;
    line-height: 0.55em;
    z-index: 300;
    padding: 2px;
}

.logo-dd {
     display: block;
    font-family: "Quicksand";
    font-size: 1.75em;
    /* padding-top: 2.2em; */
    line-height: -0.1em;
    font-weight: 100;
    letter-spacing: -3px;
}

.logo-tl {
        display: block;
    font-family: "Quicksand";
    font-size: .6em;
    letter-spacing: -0.055em;
    line-height: .3;
}

.logo--width {
  display: inline-block;
  max-width: 60%;
}

.autoheight {
  min-height: 12px;
  height: auto !important;
}
.container {
  min-height: 30vh;
  /* background: linear-gradient(
    0deg,
    rgba(170, 215, 241, 1) 0%,
    rgba(215, 133, 133, 1) 55%,
    rgba(189, 189, 189, 1) 78%,
    rgba(192, 235, 209, 1) 97%
  ); */
  overflow: hidden;
  min-width: 100%;
}

.cursive {
  font-family: "Pinyon Script";
}

@keyframes spin {
  0% {
    transform: rotateX(12deg);
    filter: hue-rotate(10deg);
  }
  50% {
    transform: rotateX(26deg);
    filter: hue-rotate(-10deg);
  }
  100% {
    transform: rotateX(12deg);
    filter: hue-rotate(10deg);
  }
}

@keyframes reflect {
  0% {
    filter: brightness(160%) hue-rotate(150deg) invert(100%) blur(0px)
      contrast(73%);
  }
  50% {
    filter: brightness(160%) hue-rotate(180deg) invert(100%) blur(0.2px)
      contrast(73%);
  }
  100% {
    filter: brightness(160%) hue-rotate(150deg) invert(100%) blur(0px)
      contrast(73%);
  }
}
.inv{
    filter: invert(100%) hue-rotate(-141deg) drop-shadow(53px 6px 20px rgb(75,75,75));
    -o-object-fit: cover;
    object-fit: cover;
    max-height: 60vh;
    border-radius: 0 0% 80px 80px;
    
    box-shadow: 4px 1px 6px 5px #4c4c4c;
    background: linear-gradient(45deg, #131313, #272727);
    width: 80%;
    margin-left: 10% !important;
    animation: slideIn 3s;
}
@keyframes slideIn{
  0%{
    transform: translateY(-300%);
  opacity: 0%;
  }
  29%{
    opacity: 0%;
  }
  30%{
    opacity: 100%;
  }
  100%{
    transform: translateY(0%);
    opacity: 100%;
  }
}
.spin {
  /* animation: spin 2s infinite; */
}
.reflect {
  /* animation: reflect 7s infinite;
  animation-timing-function: linear; */
}
@media screen and (max-width: 768px) {
  .logo {
    font-size: 18px;
    padding-top: 22px;
    margin: 10px auto 0 auto;
    transform: scale(0.85);
  }
  .logo-container {
    top: 12%;
  }
  .iso-container {
    transform: scale(0.95);
    width: 100%;
    display: none;
  }
  .brand-words {
    margin-top: 0;
    font-size: 3em;
    margin: 0 auto;
  }
  .flippy {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .logo {
    font-size: 42px;
  }
}


.brand-words {
  line-height: 1.1em;
  margin-left: 20px;
  margin-top: 50px;
  letter-spacing: -0.054em;
  color: white;
  font-size: 25px;

  text-shadow: 1px 2px hsla(0deg, 0%, 50%, 1);
}
.floor {
  color: white;
  font-size: 1em;
  min-height: 12%;
  background: linear-gradient(hsl(95deg, 100%, 70%), hsl(195deg, 100%, 70%));
}

.min60vh {
  min-height: 60vh;
}
.flippy {
  transform: scaleX(-1);
}
ul.unbulleted {
  list-style: none;
}
label {
  font-size: 1.2em;
}
input,
textarea {
  width: 100%;
  font-size: 1em;
  font-family: "Century Gothic";
  font-weight: 800;
  border: 0;
  padding: 4px;
  border-radius: 5px;
  background: #fcfcfc;
  margin: 2px;
  border-bottom: 3px solid #dcdcdc;
}
#submit {
  margin: 20px 0 20px 0;
}
#alert {
  color: red;
  font-weight: 800;
}
.hand {
  max-height: 140px;
  width: auto;
  text-align: right;
}
* {
  --color1: rgb(235, 235, 235);
  --color2: rgb(211, 211, 211);
}
.pageAnchor {
  transform: skew(22deg);
  padding-left: 20px;
  width: 40%;
  color: rgb(78, 78, 78);
  font-weight: 800;
  background: linear-gradient(90deg, var(--color1), var(--color2));
  box-shadow: 2px 3px 7px 1px #abababab;
}
.slide-from-left{
  animation: slideleft 1.5s  ;
}
.slide-from-right{
  animation: slideright 1.5s;
}
@keyframes slideleft{
  0%{
    transform: translateX(-100vh);
  }
  100%{
    transform: translateX(0);
  }
}
@keyframes slideright{
  0%{
    transform: translateX(100vh);
  }
  100%{
    transform: translateX(0);
  }
}
@media screen and (max-width: 1087px){
.navbar .navbar-menu  {
 background-color: #eee;
}
}
</style>
