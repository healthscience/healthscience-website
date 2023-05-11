<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">
      <h6 class="text-center mt-4">Sovereign Data that shapes the health of the world</h6>
      <p class="body-1 mt-6 mx-6">
        Empowers data ownership, control, agency - peer to peer
      </p>
      <p class="body-1 mt-6 mx-6">
        Build networks, self, community, bioregion, earth scales
      </p>
      <p>
        <v-row class="mt-8">
          <v-spacer />
          <v-col md="4">
            <v-card href="#learn" class="pink--text darken-4--text text-center">
              Learn
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card href="#toolkit" class="pink--text darken-4--text text-center">
              Toolkits
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card href="#community" class="pink--text darken-4--text text-center">
              Community
            </v-card>
          </v-col>
          <v-spacer />
        </v-row>
      </p>
      </v-flex>
    </v-layout>
    <v-row no-gutters>
      <v-spacer />
      <v-col
        cols="1"
        sm="1"
        md="1"
      >
        <v-card
          class="pa-0"
          outlined
          color="transparent"
        >
          <v-img src="../assets/logo.png" width="80px" center>
          </v-img>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HopProtocol',
  data: () => ({
  }),
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
