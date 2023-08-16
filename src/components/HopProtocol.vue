<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">
      <h6 class="text-center mt-4">Sovereign Data that shapes health</h6>
      <div style="word-break: break-word" class="spacing-playground body-1 mt-2 mx-6 pa-6 ">
        We are building a choherence protocol based on peer to peer open source software and toolkit that empower everyone to have sovereignity over data that shapes the health of the world.
      </div>
      <div style="word-break: break-word" class="spacing-playground body-1 mt-2 mx-6 pa-6 ">
        Bitcoin is healing the world of money and financial services.  The healthcare systems and bioregions of the world also need healing. Massive misallocation of fiat money has created misaligned incentives that reward treating disease and over exploiting nature. Bitcoin fixes the money, now we can also focus on fixing the data that shapes the health of our world too.
      </div>
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
