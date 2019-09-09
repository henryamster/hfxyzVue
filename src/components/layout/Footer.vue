<template>
<div class="footer-container">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="footer-clip" preserveAspectRatio="none">
    <polygon fill="white" points="100,0  0,0 100,100"/>
  </svg>
 <footer class="footer">
    <div class="content">
      <div>
        <h1 class="has-text-centered dgray is-size-4">Henry Fritz Design & Development</h1>
        <div class="columns">
          <div class="column columns ">
            <div class="column is-1 is-size-1 is-hidden-mobile left-arrow-pad-left">
               <a @click="goBack()"> ◀ </a>
            </div>
            <div class="column is-6 info-block">
              <ul class="unbulleted ">
                <li>
                  <strong class="is-size-4  dgray">Henry Fritz</strong>
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
           <div class="navArrows is-hidden-tablet"><a @click="goBack()"> ◀ </a>
           <a @click="goForward()"> ▶ </a></div>
          </div>
          <div class="column is-3 has-text-centered">
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
.left-arrow-pad-left{
  margin-left:20px;
}
.dgray{
  color: #7f888f !important;
 
}
@media (max-width: 768px) {

}


.info-block{
 line-height: 1;
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
  color:#7f888f;
  
}
footer a:hover{
animation: pop .6s forwards;
}
</style>
