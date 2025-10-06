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
            <v-card-title>MORE ON LAB {{ $route.params.id }}</v-card-title>
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
            Work being done to setup network around projects:
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center" v-if="$route.params.id === 'nature'">
        <v-col
          cols="12"
          sm="12"
          lg="12"
        >
          <v-sheet class="pa-2 ma-2 bg-green">
            <v-card style="min-height: 70vh;">
              <v-card-title><h3>Nature</h3></v-card-title>
              <div id="nature-projects" class="pa-3">
                <a href="https://caleai.com" target="_blank">Cale</a> -- create daisy world peer to peer.  First step in building a decentralised climate model simulation. This will allow each peer to autonomously update the status of a daisy for the part of the world and then all the updates are shared so a whole world update can be dispaly by each peer.  This will require a challenge of each peer proof of work, of daisy computations and then the aggregration of state in a controlled time period e.g. every 24hrs. The world will be rendered in 3D to show the location and state of each daisy and world climate status presented in BentoBoxes.
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row v-if="$route.params.id === 'environment'">
        <v-col
          cols="12"
          sm="12"
          lg="12"
        >
          <v-sheet class="pa-2 ma-2 bg-red">
            <v-card style="min-height: 70vh;">
              <v-card-title><h3>Environment</h3></v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Farming:</h2>
                Farming has one of the largest impacts on land and our oceans. Building bioregion or watershed simulations will allow us a better gain insights into these complex environments for life.
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Buildings:</h2> From the design to their place in the environment, their impact of sound, wind or air flow or the flows and conversation of people.  BentoBoxes can be used aggregate data and provide simulations of outcomes before buildings are built.
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Travel:</h2> People move around the world more than ever.  What cues are required to find the right places to be and to assess the quality of the buildings to be lived in?
              </div>
              <div id="nature-projects" class="pa-3">
                <a href="https://algotecture.net" target="_blank">AlgotectureLAB</a> Booking space based on cues to space utilisation and the coordination of 3D design.
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center" v-if="$route.params.id === 'life'">
        <v-col
          cols="12"
          sm="12"
          lg="12"
        >
          <v-sheet class="pa-2 ma-2 bg-pink">
            <v-card style="min-height: 70vh;">
              <v-card-title>Life</v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Food</h2>
                Nutrition that sustains the energy and vitality of life.  Food connects us to plants and animals, the soil and weather of Earth. Our inner health is reflected by the food we consume and the way it is grown.
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Movement</h2>
                Life can be describe as matter that moves and self replicates.  What sort of activity should be practice to enjoy our sport to aging well?
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Sleep/mind</h2>
                The body needs to repair and sleep does this.
              </div>
              <div id="nature-projects" class="pa-3">
                <h2>Besearch</h2>
                Besearch diagrams show the flows of data and compute require to build in context simulations to aid decicion making in the present.
                <v-img src="../assets/besearch-flows.png" width="60vw" center>
                </v-img>            
              </div>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row v-if="$route.params.id === 'culture'">
        <v-col
          cols="12"
          sm="12"
          lg="12"
        >
          <v-sheet class="pa-2 ma-2 bg-grey">
            <v-card style="min-height: 70vh;">
              <v-card-title><h1>Sovereign Culture</h1></v-card-title>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Sovereign hardware: data storage</h2>
                Examples include <a href="https://umbrel.com/" target="_blank">Umbrel</a>, <a href="https://start9.com/" target="_blank">Start9</a> to a <a href="https://www.raspberrypi.org/" target="_blank">raspberryPi</a> They provide a place to not only store data but also a place for applications that empower that data e.g. <a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a>
              </div>
              <div id="nature-projects" class="pa-3">
                <h2>Sovereign hardware: quantum</h2>
                Random numbers are critical inputs to cryptography, especially when deployed on the public Internet. Secondly, in our AI age if we want responsive AI then <a href="https://www.extropic.ai/">local quantum</a> processing speeds are a requirement to timely responses.
              </div>
              <div id="nature-projects" class="pa-3">
                <h2>E-commerce</h2>
                 e-commerce time series AI agents can enhance the independence of online retailers.
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Money</h2>
                HOP is a coherence ledger. There is no monetary incentive built into the protocol, think of HOP as having a computation currency, a guide book to the best knowledge on the network.  Those seeking monetisation can bridge to the lightening network or use HOP as part of a wider peer experience. 
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>Work</h2>
                The Besearch process may prove out to be a key 'work' activity of the future.
              </div>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                <h2>The arts, music, entertainment</h2>
                Performing and being an audience members, the arts touch our heart, minds and souls directly.  What could be more important to our health?
              </div>
            </v-card> 
          </v-sheet>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'

  const storeApp = useAppStore()

  const props = defineProps({
    labcue: String
  })
  
  /* computed */
  const activeLab = computed(() => {
    return storeApp.labCue
  })


</script>
