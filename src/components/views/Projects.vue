<template>
  <div>
    <div class="column ">
      <h2 class="pageAnchor">//Projects</h2>
    </div>
    <h4 class="anc">Work Projects</h4>
    <div class="column work-projects columns">
      <Project
        title="Naming Convention Tool"
        subhead="Meijer Infrastructure, Grand Rapids, MI"
        description="Created an end-to-end system for automating and deploying naming and tagging conventions for cloud resources, wrote technical documentation for both the created conventions as well as the implementation of the system, built with Node.js/Express and ARM templating. Implemented oAuth flow, a JSON rules-creation engine, and created stateful components that are populated from a JSON database at runtime for maintainability."
        img="https://i.imgur.com/ibU9wz0.png"
        class="column is-5 is-offset-1"
        v-bind:tags="['JSON','ARM','Node','Express', 'oAuth', 'Bulma', 'ES6', 'Azure', 'HTML5', 'Deployment']"
      />
      <Project
        title="Habitat For Humanity Website"
        subhead="Habitat for Humanity of Madison & Clark Counties, Richmond, Ky"
        link="https://hfhmcc.org"
        description="Assessed the business needs and devised and constructed a full web solution. Developed a content hierarchy, broke up the work into individual trackable tasks and monitored the process, drew up wireframes and coded, tested, and deployed a website built upon Wordpress with a fully custom theme. Produced technical documentation during and after deployment. "
        img="https://i.imgur.com/MVFXlYw.png"
        class="column is-5"
        v-bind:tags="['Wordpress', 'PHP', 'MySQL', 'Bulma', 'SCSS', 'ES6', 'Webhosting', 'DNS configuration','Wireframing', 'Deployment']"
      />
      <div class="is-1 column"></div>
    </div>
    <h4 class="anc">Personal Projects</h4>
    <div class="column columns personal-projects">
      <Project
        title="Vue Personal Webpage"
        subhead="It's this site!"
        description="Built a personal website with Vue as a testament that just because I'm not a big frameworks guy, I can use them."
        class="column is-5 is-offset-1"
        img="https://i.imgur.com/NSlrHkI.png"
        link="https://henryfritz.xyz"
        v-bind:tags="['Vue', 'Vuex', 'Firebase', 'oAuth', 'ES6', 'Webpack', 'eslint', 'Bulma']"
      />
      <Project
        title="Amazon Product Data Scraper"
        subhead="For use with Generative Neural Networks"
        description="A Node.js CLI that allows for images and product data to be scraped based on product names. Segments results into directories on a per query basis. Built for use with a GAN to generate latent-space products to terrify my friends."
        class="column is-5"
        img="https://i.imgur.com/vrWOSpj.jpg"
        link="https://github.com/henryamster/amazonWebScraper"
        v-bind:tags="['ES6', 'puppeteer']"
      />
      <div class="is-1 column"></div>
    </div>
    <h4 class="anc">Pens from
      <a href="https://codepen.io">Codepen</a>
    </h4>
    <div class="columns codepens">
      <Codepen slug="RwbKzEP" class="column is-10 is-offset-1"/>
      <div class="is-1"></div>
    </div>
    <div class="columns codepens">
      <Codepen slug="oKzBym" class="column is-offset-1 is-5"/>
      <Codepen slug="gNOMVe" class="column is-5"/>
      <div class="is-1"></div>
    </div>
    <div class="columns codepens">
      <Codepen slug="EqwZEM" class="column is-offset-1 is-5"/>
      <Codepen slug="RwbKger" class="column is-5"/>
      <div class="is-1"></div>
    </div>
  </div>
</template>
<script>
import Project from "../reusables/Project.vue";
import Codepen from "../reusables/Codepen.vue";
export default {
  components: {
    Project,
    Codepen
  }
};
</script>
<style >
.anc{
  font-size:2.3em;
   text-align: center;
  background:#222;
  color:white;
  font-weight: 800;
  padding: 1em;
  margin-bottom: 1em;
}
.anc::before, .anc::after{
  content:"⌬";
 font-weight: 100;
 
}
</style>

