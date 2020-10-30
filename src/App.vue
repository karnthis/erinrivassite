<template>
  <v-app>
    <RouterBar></RouterBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import RouterBar from './components/RouterBar'

export default {
  name: 'App',

  components: {
    RouterBar
  },

  data: () => ({
    //
  })
}
</script>

<style>
#app {
  background-color: lightskyblue;
}
</style>
