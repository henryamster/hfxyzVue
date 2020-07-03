<template>
<div class="footer-container">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="footer-clip" preserveAspectRatio="none">
    <polygon fill="white" points="100,0  0,0 100,100"/>
  </svg>
 <footer class="footer">
    <div class="content">
      <div>
        <h1 class="has-text-centered dgray hfdd is-size-4">Henry Fritz <br/> <span class="is-size-6">Design & Development</span></h1>
       
        <div class="columns">
          <div class="column columns ">
            <div class="column is-1 is-size-1 is-hidden-mobile left-arrow-pad-left">
               <a @click="goBack()"> ◀ </a>
            </div>
            <div class="column is-2"><div class="navArrows is-hidden-tablet nameCard"><a @click="goBack()"> ◀ </a>
           <a @click="goForward()"> ▶ </a></div></div>
             
            <div class="column is-6 info-block nameCard">
              <ul class="unbulleted info-list">
                <li>
                  <p class=" name is-marginless is-paddingless dgray">Henry Fritz</p>
                  <p class=" dgray">Richmond, KY</p>
                </li>
                <li>
                  <a
                    href="mailto:HenryAmsterFritz@Gmail.com?"
                    target="_top"
                  >henryamsterfritz@gmail.com</a>
                </li>
                <li>
                  <a href="tel:1-859-200-8540">859.200.8540</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-1 is-size-2 has-text-centered">
          
          </div>
          <div class="column is-3 has-text-centered  is-hidden-mobile">
            <img
              src="https://66.media.tumblr.com/cf1dbd71f9ffbf7c226bbc237b3fc14d/tumblr_pj78czO5RG1xgv4g2o3_400.gif"
              alt
              class="spin hand"
            >
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
  color: #dadcdd !important;
 
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

.footer-clip{background:var(--footer-grad-bottom);
 position: absolute;
    top:-30px;
  }
.footer-container{
    position: relative;
    margin-top:30px;
  --footer-grad-bottom: #222;
}
svg {
 
  width: 100%;
  height: 32px;
}
footer{

  /* transform: skewY(-2deg);
  transform-origin: top left; */
  padding: 0 !important;
  background: linear-gradient(360deg, rgb(26, 26, 26), var(--footer-grad-bottom));
  color:rgb(255, 255, 255) !important;
}
footer a{
  color:#feffaf;
  
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
