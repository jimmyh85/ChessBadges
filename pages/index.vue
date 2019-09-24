<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        badges
      </h1>
      <h2 class="subtitle">
        My grand Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
      <div>
         <input v-model="team_url"> 
         <input v-model="logo_url">
         <button @click="getPlayers">Create Badges!</button> 
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      team_url: 'https://www.schachbund.de/SchachBL/bedm.php?liga=olob&nummer=6',
      logo_url: 'http://www.schachfreunde-neuberg.de/SFR-Logo.png'
    }
  },
  methods: {
    getPlayers() {
      
      alert('yeah')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
