<template>
  <v-main>
    <v-container fluid>
      <v-layout row wrap fill-height>
        <v-flex xs12 sm6 offset-(sm3|md0) md4 pa-2 v-for="project in Projects" :key="project.key">
          <v-card height="100%" class="flexcard" color="grey darken-2">
            <v-card-title primary-title class="white--text">{{ project.name }} - {{ project.status }}</v-card-title>

            <v-card-text class="grow white--text">{{ project.summary }}</v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {
      Projects: [
        {
          code: 'yaebp',
          liveURL: '',
          name: 'Yet Another Express Boilerplate',
          summary:
            'A drop-and-go starting point for new Express/Mongo-based projects.',
          status: 'Stable'
        },
        {
          code: 'dev-op-boilerplate',
          liveURL: '',
          name: 'DevOps Boilerplate',
          summary:
            'Upload and run a single file to a virgin ubuntu server, and have a fully configured docker environment in minutes.',
          status: 'Stable'
        },
        {
          code: 'make-random',
          liveURL: '',
          name: 'Make Random',
          summary:
            'Make Random is a lightweight Node.js Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) module to help with generating random numbers and other values using the power of Crypto.',
          status: 'Stable'
        },
        {
          code: 'no-more-missing-eggs',
          liveURL: '',
          name: 'No More Missing Eggs (NMME)',
          summary:
            'A management tool for your pantry and your shopping. Track expirations, stock levels, missing recipe ingredients and more.',
          status: 'Pre-Alpha'
        },
        {
          code: 'esiil',
          liveURL: '',
          name: 'ESIIL | ESI Interface Library',
          summary:
            'ESIIL was created to simplify use of the EVE Swagger Interface API, and offers access to both Public and Authenticated routes. It is currently a work in progress, and not all routes are implemented.',
          status: 'Beta'
        },
        {
          code: 'gitbuilder',
          liveURL: '',
          name: 'Git Initializer',
          summary: 'Project to initialize git repos of 10k+ items',
          status: 'Stable'
        }
      ]
    }
  }
}
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
