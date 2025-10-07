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
            <h3 class="pa-2 m-1">HOP TECHNOLOGY</h3>      
          </v-card-title> 
          <div style="word-break: break-word" class="spacing-playground pa-5">
            The protocol HOP task is to establish coherence on health. This is a complex challenge. The follow sections setout the technologies used and why? Note: HOP is at the experimental BETA stage of development.
          </div>
        </v-card>
      </v-row>
            <v-row
        no-gutters
      >
        <v-card color="indigo-lighten-5 ma-2">
          <v-card-title primary-title>
            <h3 class="pa-2">Coherence Ledger</h3>
          </v-card-title>
          <div style="word-break: break-word" class="spacing-playground pa-5">
           Each peer has their own unique coherence ledger, a ledger construct beyond blockchain.  A ledger entry has two parts, a unique proofs of work hash and a hash of the results produced by that work.   Each peer performs a distinct task tailored to its role (e.g., heart health, to monitoring air quality or river flow), and random checks of existing proofs are shared peer-to-peer to catch bad actors. This minimizes computational overhead while maintaining trust, unlike blockchain’s uniform and resource-heavy consensus. It’s like an ecosystem where each organism contributes uniquely but is periodically audited by the collective to ensure integrity. This lightweight, adaptive approach suits a dynamic system like HOP.
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
          <div style="word-break: break-word;" class="spacing-playground pa-5">
            SafeFlow-ECS blends an entity-component-system (ECS) from game development with a data science compute engine.  The ECS produces a loop cycle akin to role the Forth scripting plays in Bitcoin.  A HOP-query delivers module contracts e.g. a network experiment the question being asked, data source, computation and visualization style.  Each modules holds a reference contract that Entity systems can act upon and store the data in a componment and personal datastore.
          </div>
          <div style="word-break: break-word" class="spacing-playground pa-5">
            DML - Decentralised Machine Learning: evolutionary or genetic algorithms are designed for being distributed and HOP specialises in their use.  Combined with a proof of work challenge protocol the network coheres machine learning models to scale to the reach needed to solve problems.
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
          <div style="word-break: break-word" class="spacing-playground pa-5">
            Reference contracts are the building blocks, think of them a small digital lego blocks that are wrapped and ordered by container module contracts.  These contract are used to build context for computations - a HOPquery. A HOPquery is a set of module contracts, e.g  question, data packaging, computation and visualizsation.  Within each module contract, reference contracts describe data, what computation should be applied and which visualisation style is required.  The purpose of the two contract design is to provide guarantees on context and on data interoperability amongst peers and over time.  Network experiments module contracts are public by design but with each peer making their own private and privacy preserving instantiziation.
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
      <v-row
        no-gutters
      >
        <v-col cols="12">
          <v-card color="indigo-lighten-5 ma-2">
            <v-card-title primary-title>
              <h3 class="">Sovereign data from TINY devices</h3>
            </v-card-title>
            <div style="word-break: break-word" class="spacing-playground pa-3">
              From fitness trackers, to home air quality devices to DNA sequencing etc. Do-It-Yourself, DIY tiny devices are monitoring with sensors that are getting more accurate and reliable data to perform analysis and machine learning with.  Sovereign hardware that perform direct storage to a peers personal datastore work with HOP.
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
