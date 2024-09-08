<template>
  <v-container grid-list-lg>
    <v-responsive class="d-flex align-top text-center fill-height">
      <v-row
        no-gutters
        id="learn"
      >
        <v-col
          align-self="center"
        >
          <v-sheet xs12 class="text-h6 pa-2" color="pink-darken-4">Learning</v-sheet>
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2 m-1">BentoBoxDS - Open to all</h3>      
          </v-card-title> 
          <div style="word-break: break-word" class="spacing-playground pa-3">
            <a href="https://bentoboxds.org" target="_blank">BentoBoxDS</a> is a no-code graphical toolkit that opens up and lowers the barrier to using HOP.  From the founding of the project this was given an equal priority to ensure the widest early and equality of access to the technology.  See the Tookit section for more information.
          </div>
        </v-card>
      </v-row>
      <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2 m-1">HOP</h3>      
          </v-card-title> 
          <div style="word-break: break-word" class="spacing-playground pa-3">
            The protocol HOP task is to establish coherence on health. This is a complex challenge.  Each peer will have a unique proof of work so we require more from a protocol than computation coordination.  We need to build the right data sets with the right peers with the right computational models.  HOP has been designed to build and scale coherence networks around health.
          </div>
        </v-card>
      </v-row>
      <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2">SafeFlow-ECS & DML</h3>
          </v-card-title>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            A novel combination of an entity component system design and a data science computation engine. The engine takes in data, tidies and categories it before applying a computation and preparing the data format for presentation e.g. charting.
          </div>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            DML - Decentralised Machine Learning: evolutionary or genetic algorithms are designed for being distributed and HOP specialises in their use.  Combined with a proof of work challenge protocol the network coheres machine learning models to scale to the reach needed to solve problems.
          </div>
        </v-card>
      </v-row>
      <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2">KBLedger</h3>
          </v-card-title>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            The Knowledge Bundle Ledger records proof of work & results and stores entries that guarantees reproducibilty. This opens up the opportunity to perform decentralised machine learning.
          </div>
        </v-card>
      </v-row>
      <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2">Library - module & reference contracts</h3>
          </v-card-title>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Reference contracts are the building blocks that module contracts use to build context for computations. A HOPquery is build of module contracts.  The reference contracts describe data, what computation should be applied and which visualisation style is required.  The purpose of the two contract design is to provide guarantees on context and on data interoperability amongst peers and over time.
          </div>
        </v-card>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col cols="12">
          <v-card color="indigo-lighten-5 ma-2">
            <v-card-title primary-title>
              <h3 class="">Peer to Peer Data Infrastructure</h3>
            </v-card-title>
            <div style="word-break: break-word" class="spacing-playground pa-3">
              HOP works on any peer to peer data infrastructure and with personal datastores e.g. <a href="https://docs.holepunch.to/">Holepunch</a>, <a href="https://www.autonomi.com/">autonomi</a> open source projects etc.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: 'HopLearn'
}
</script>

<style scoped>
</style>
