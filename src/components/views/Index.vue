<template>
  <div class="page has-background-primary autoheight">
    <video
      autoplay
      muted
      loop
      id="videoBG"
      class="container reflect column is-paddingless is-marginless columnsh"
    >

      <source src="https://i.imgur.com/Ua8bNJA.mp4" type="video/mp4">
    </video>
        <div class="logo column is-8 is-offset-3">
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
</template>

<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Text|Lexend+Mega|Pinyon+Script&display=swap");
.logo{
    display: block;
    color: white;
    position: absolute;
    top: 130px;
    font-size: 32px;
    padding-top:3em;
        color:salmon;
     text-shadow:.03em .04em hsla(0deg,80%,42%, 0.6) ;
    margin: 0 auto;
}

.logo-hf{
 font-family: 'Pinyon Script';
     display: block;
     font-size: 2.8em;
     font-weight: 800;
     letter-spacing: -.055em;
     line-height: .3em;

   animation: reflect 12s infinite;
}

.logo-dd{
  
    display: block;
   font-family: 'Lexend Mega';
     font-size: .75em;
     padding-top:2em;
     font-weight: 100;
     animation: reflect 14s infinite;
}

.logo-tl{
    display: block;
font-size: .36em;
font-weight: 800;
animation: reflect 16s infinite;
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
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
  100% {
    filter: hue-rotate(0deg);
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
    font-size: 24px;
    margin: 2em 2em;
    padding-top: 0;
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
    font-size: 48px;
   
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
