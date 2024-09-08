<template>
  <v-container grid-list-lg>
    <v-responsive class="d-flex align-top text-center fill-height">
      <v-row
        no-gutters
        id="fourlab"
      >
        <v-col
        >
          <v-card style="height: 60px;">
            <v-card-title>LAB</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        id="fourlab"
      >
        <v-col
        >
          <v-card style="min-height: 60px;">
            To aid collaboration and build initial coherence test networks of N=1 experiments, four LAB categories have been created around the Cues of:
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col
          cols="12"
          sm="3"
          lg="4"
        >
          <v-sheet class="pa-2 ma-2 bg-green">
            <v-card style="height: 360px;">
              <v-card-title>Nature</v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Project that use HOP in connection with nature, build bioregions to climate model simulations.
              </div>
              <div id="nature-projects" class="pa-3">
                <a href="https://caleai.com" target="_blank">Cale</a> -- create daisy world peer to peer.  First step in building a decentralised climate model simulation.
              </div>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          lg="4"
        >
          <v-sheet class="pa-2 ma-2 bg-red">
            <v-card style="height: 360px;">
              <v-card-title>Environment</v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Projects that use HOP in connection with the built environment, design spaces & builidings and there utilisations etc.
              </div>
              <div id="nature-projects" class="pa-3">
                <a href="https://algotecture.net" target="_blank">AlgotectureLAB</a> Booking space based on cues to space utilisation and the coordination of 3D design.
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center">
        <v-col
          cols="12"
          sm="3"
          lg="4"
        >
          <v-sheet class="pa-2 ma-2 bg-pink">
            <v-card style="height: 360px;">
              <v-card-title>Life</v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Projects that use HOP in connection with human and other forms of life.
              </div>
              <div id="nature-projects" class="pa-3">
                <a href="#" target="_blank">ALAB</a> Besearch network building around health topics.
              </div>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          lg="4"
        >
          <v-sheet class="pa-2 ma-2 bg-grey">
            <v-card style="height: 360px;">
              <v-card-title>Culture</v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Projects that use HOP in connection with cultural inventions e.g. education to the economy.
              </div>
              <div id="nature-projects" class="pa-3">
                <a href="#" target="_blank">LAB</a> e-commerce time series AI agents 
              </div>
            </v-card> 
          </v-sheet>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: 'lab'
}
</script>

<style scoped>
</style>