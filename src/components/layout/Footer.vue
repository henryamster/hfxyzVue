<template>
<div class="footer-container">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="footer-clip" preserveAspectRatio="none">
    <polygon fill="#fff" points="100,0  0,0 100,100"/>
  </svg>
 <footer class="footer">
    <div class="content">
      <div>
       
        <div class="columns">
          <div class="column columns ">
            <div class="column is-1 is-size-1 is-hidden-mobile left-arrow-pad-left">
               <a @click="goBack()"> ◀ </a>
            </div>
            <div class="column is-9"> <h1 class="has-text-centered dgray hfdd is-size-4">Henry Fritz <br/> <span class="is-size-6">Design & Development</span></h1>
       </div>
            <div class="column is-2"><div class="navArrows is-hidden-tablet nameCard"><a @click="goBack()"> ◀ </a>
           <a @click="goForward()"> ▶ </a></div></div>
            
          </div>
          
          <div class="column is-1 is-size-1 is-hidden-mobile"> 
            <a @click="goForward()"> ▶ </a></div>
        </div>
      </div>
    </div>
  </footer>
</div>
 
</template>
<script>
export default {
   methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    goForward(){
      window.history.length > 1 ?
      this.$router.go(1):
      this.$router.push('/')
    }
  }
}
</script>
<style>
.hand{
  height:80px;
  width:auto;
}
.hfdd{
  font-weight: 100 !important;
    line-height: 4.125;
    font-family: 'Quicksand';
}
.left-arrow-pad-left{
  margin-left:20px;
}
.dgray{
  color: #4d4d4d !important;
 
}
@media (max-width: 768px) {
.info-block{
 max-width: 80%;
}
}
.name{
  font-family: "Pinyon Script";
  font-size:3em;
  line-height: 1.3;
  color: floralwhite;
}



@media screen and (max-width: 768px) {
.info-list{
font-size:1.2em !important;
}

}

.footer-clip{
  background:#fafafa;
 position: absolute;
    top:-30px;
  }
.footer-container{
    position: relative;
    margin-top:30px;
  /* --footer-grad-bottom: #222; */
}
svg {
 
  width: 100%;
  height: 32px;
}
footer{

  /* transform: skewY(-2deg);
  transform-origin: top left; */
  padding: 0 !important;
  background: #eee;
  color:rgb(255, 255, 255) !important;
}
footer a{
  color:#383838;
  
}
footer a:hover{
animation: pop .6s forwards;
}

.nameCard{
  width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    line-height: .94em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navArrows{
  font-size:3em;
}
</style>
