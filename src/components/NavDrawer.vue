<template>
  <v-navigation-drawer
    v-model="drawerOpen"
    absolute
    temporary
  >
    <v-list
      nav
    >
      <v-list-item-group
        v-model="group"
      >

        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>

        <v-list-item to="/projects">
          <v-list-item-icon>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://github.com/karnthis" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Github</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://linkedin.com/erinrivas" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LinkedIn</v-list-item-title>
        </v-list-item>

        <v-list-item href="mailto:me@erinrivas.com">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Email Me</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  data: () => {
    return {
      group: null
      // drawerOpen: !this.drawerOpen
    }
  },
  props: ['drawerOpen']
}
</script>

<style>
</style>
