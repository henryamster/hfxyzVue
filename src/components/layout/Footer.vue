<template>
  <footer class="footer">
    <div class="content">
      <div>
        <h1 class="has-text-centered">Henry Fritz Design & Development</h1>
        <div class="columns">
          <div class="column ">
            <div class="column is-1 is-size-2 is-hidden-mobile">
               <a @click="goBack()"> ◀ </a>
            </div>
            <div class="column is-4 ">
              <ul class="unbulleted">
                <li>
                  <strong class="is-size-4">Henry Fritz</strong>
                  <p>Richmond, KY</p>
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
          <div class="column is-3 is-size-2 has-text-centered">
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
          <div class="column is-1 is-size-2 is-hidden-mobile"> 
            <a @click="goForward()"> ▶ </a></div>
        </div>
      </div>
    </div>
  </footer>
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
