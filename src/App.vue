<template>
  <v-app>
    <RouterBar @nav-icon-click="openDrawer"></RouterBar>
    <NavDrawer :drawer-open="drawerOpen"></NavDrawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import RouterBar from './components/RouterBar'
import NavDrawer from './components/NavDrawer'

export default {
  name: 'App',

  components: {
    RouterBar,
    NavDrawer
  },

  methods: {
    openDrawer () {
      this.drawerOpen = !this.drawerOpen
      // return this.drawerOpen
      return true
    }
  },

  data: () => ({
    drawerOpen: false
  })
}
</script>

<style>
html, body {
  overflow: visible;
}
#app {
  background-color: lightskyblue;
}
</style>
