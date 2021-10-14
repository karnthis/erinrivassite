<template>
  <v-main>
    <v-toolbar color="grey darken-1" dark>
      <v-app-bar-nav-icon @click="$emit('nav-icon-click')" class="d-flex d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title>Erin Rivas</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" text>About</v-btn>
        <v-btn to="/projects" text>Projects</v-btn>
        <v-menu :nudge-width="100">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>Contact</v-btn>
          </template>
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-list text>
              <v-list-item-group
                color="indigo"
              >
                <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :href="item.url"
                  target="_blank"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.label"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </v-main>
</template>

<script>
export default {
  name: 'RouterBar',
  methods: {
    DrawerState () {
      this.drawer = !this.drawer
      return this.drawer
    }
  },
  data: () => {
    return {
      drawer: false,
      group: null,
      menuItems: [
        {
          label: 'Email',
          url: 'mailto:me@erinrivas.com'
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/erin-rivas'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/karnthis'
        }
      ]
    }
  }
}
</script>

<style>
</style>
