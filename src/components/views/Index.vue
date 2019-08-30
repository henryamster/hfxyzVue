<template>
  <div class="page has-background-primaryautoheight">
    <video
      autoplay
      muted
      loop
      id="videoBG"
      class="container reflect column is-paddingless is-marginless  videobg  columnsh"
    >

      <source src="https://i.imgur.com/Ua8bNJA.mp4" type="video/mp4">
    </video>
    <div class="logo-container">
<div class="logo  " >
      <span class="logo-hf">
Henry Fritz
      </span>
      <span class="logo-dd">
        Design &amp; Development
      </span>
      <span class="logo-tl">
        Web Design/ Development, Graphic Design, &amp; 3D Motion Graphics
      </span>
    </div>
    </div>
        
    <Blog class="has-background-white" posts="2"/>
  </div>
</template>

<script>
import Blog from "./Blog";
export default {
  components:{
    Blog
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Text|Lexend+Mega|Pinyon+Script&display=swap");
.logo-container{
display: flex;
  align-items: center;
  justify-content: center;
width:100%;
  position: absolute;
  top: 20%;
  min-height:20vh;
  
}
@keyframes stretcher {
  0%{
  
    border-radius: 0;
    color:black;
    box-shadow:-13px -13px rgba(26, 26, 26, 0.6);
  }
  100%{
    box-shadow:3px 3px rgba(26, 26, 26, 0.6);
    
  }
}
.videobg{

}
.logo{
   backdrop-filter:  blur(10.3px) saturate(180%) contrast(190%) invert(77%) brightness(162%);
    display: block;
    color: rgb(250, 255, 226);
     margin: 40px auto 0 auto;
       border:.4px rgba(114, 114, 114, 0.534) solid;
     animation: stretcher 2s forwards;
   animation-timing-function: linear;
    font-size: 32px;
       background: radial-gradient( rgba(146, 145, 145, 0.185) 60%, rgba(145, 145, 145, 0.548) 70%,rgba(247, 247, 247, 0.644) 90%);
/* animation: reflect 7s infinite; */
      display:inline-block;
   border-radius: 4em;
        text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.445), .05em .04em rgba(214, 231, 167, 0.2), -.08em .08em rgba(252, 168, 168, 0.158);
  
     /* text-shadow:.  ;
     filter:blur(.6px); */
    text-align:center;
    /* animation:slide-in 3.3s ease-in; */
    padding:60px;
    box-shadow:  inset 10 10 50px rgba(253, 253, 253, 0.966),3px 3px rgba(199, 199, 199, 0.6);
}
.logo-hf {
  
  
margin-top: 40.1px;
        font-family: 'Pinyon Script';
    display: block;
    font-size: 2.8em;
    font-weight: 800;
    line-height: 0.25em;
   
    z-index: 300;
    padding: 2px;
   
}

.logo-dd {
  
    display: block;
    font-family: 'Lexend Mega';
    font-size: .75em;
    padding-top: 2.2em;
    line-height: 1.2em;
    font-weight: 100;
  
}

.logo-tl {
    display: block;
    font-family: "Lexend Mega";
    font-size: .41em;
        letter-spacing: -0.255em;
        
}

.logo--width {
  display: inline-block;
  max-width: 60%;
}

.autoheight{
  min-height: 12px;
  height:auto !important;
}
.container {
  min-height: 30vh;
  background: linear-gradient(
    0deg,
    rgba(170, 215, 241, 1) 0%,
    rgba(215, 133, 133, 1) 55%,
    rgba(189, 189, 189, 1) 78%,
    rgba(192, 235, 209, 1) 97%
  );
  overflow: hidden;
  min-width: 100%;
}



.cursive{
  font-family:'Pinyon Script'
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
    filter: hue-rotate(0deg) invert(100%) blur(0px);
  }
  50% {
    filter: hue-rotate(360deg) invert(100%) blur(.2px);
  }
  100% {
    filter: hue-rotate(0deg) invert(100%) blur(0px);
  }
}
.spin {
  animation:spin 2s infinite;
}
.reflect {
  animation: reflect 7s infinite;
  animation-timing-function: linear;
}
@media screen and (max-width: 768px) {
  .logo{
    font-size: 18px;
    padding-top:22px;
     margin: 10px auto 0 auto;
     transform: scale(0.85);
  }
  .logo-container{
    top: 12%;
  }
  .iso-container {
    transform: scale(0.95);
    width: 100%;
   display:none;
  }
  .brand-words {
    margin-top: 0;
    font-size: 3em;
    margin: 0 auto;
  }
  .flippy{
    display:none;
  }
}
@media screen and (min-width: 1024px) {
  .logo{
    font-size: 42px;
   
  }
}



.brand-words {
  line-height:1.1em;
  margin-left: 20px;
  margin-top: 50px;
  letter-spacing: -0.054em;
  color: white;
  font-size: 25px;

  text-shadow: 1px 2px hsla(0deg, 0%, 50%, 1);
}
.floor{
  color:white;
  font-size:1em;
  min-height:12%;
  background: linear-gradient(hsl(95deg, 100%,70%),hsl(195deg, 100%,70%));
}

.min60vh{
  min-height:60vh;
}
.flippy{
  transform: scaleX(-1);
}
ul.unbulleted{
  list-style: none;
}
label{
  font-size:1.2em;
}
input, textarea{
  width:100%;
  font-size:1em;
  font-family:'Century Gothic';
  font-weight:800;
  border:0;
  padding:4px;
  border-radius:5px;
  background:#FCFCFC;
  margin: 2px;
  border-bottom: 3px solid #DCDCDC;
}
#submit{
  margin:20px 0 20px 0;
}
#alert{
  color:red;
  font-weight: 800;
}
.hand{
  max-height:140px;
  width:auto;
  text-align:right;
}
*{
  --color1: hsl(140deg,50%, 60%);
   --color2: hsl(240deg,40%, 60%);
}
.pageAnchor{
  transform: skew(22deg);
  padding-left:20px;
  width:40%;
  color:whitesmoke;
  font-weight:800;
  background:linear-gradient(90deg, var(--color1),var(--color2));
}
</style>
