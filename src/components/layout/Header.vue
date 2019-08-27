<template>
  <div id="nav">
    <b-navbar>
      <template slot="brand">
        <router-link to="/" class="navbar-brand">
          <a class="navbar-item is-size-1 column">
            HF
            <span class="is-size-7 column logo--width">Henry Fritz Design & Development</span>
          </a>
        </router-link>
      </template>
      <template slot="start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/About">About</router-link>
        <router-link class="navbar-item" to="/Contact">Contact</router-link>
        <router-link class="navbar-item" to="/Projects">Projects</router-link>
        <router-link class="navbar-item" to="/Blog">Blog</router-link>
        <router-link class="navbar-item" to="/Login">Login</router-link>
         
      </template>

      <template slot="end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Social Media</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="https://github.com/henryamster">Github</a>
            <a class="navbar-item" href="https://codepen.io/henryamster/">Codepen</a>
            <a class="navbar-item" href="https://www.instagram.com/henryamster/">Instagram</a>
            <a class="navbar-item" href="https://shellworld.bandcamp.com">Music</a>
            <a class="navbar-item" href="https://linkedin.com/in/henryfritz">LinkedIn</a>
          </div>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<style>
</style>
