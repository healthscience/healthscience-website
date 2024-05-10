<template>
  <v-container grid-list-lg>
    <v-layout row id="learn">
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">Learn</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">About</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  Our mission is to build technologies that empowers data ownership, control & agency - peer to peer
                </div>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  Build collective intelligence networks to the scale required to solve problems: self, community, bioregions or for the whole earth.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">SafeFlow-ECS & DML</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  A novel combination of an entity component system design and a data science computation engine. The engine takes in data, tidies and categories it before applying a computation and preparing the data format for presentation e.g. charting.
                </div>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  DML - Decentralised Machine Learning: evolutionary or genetic algorithms are designed for being distributed and HOP specialises in their use.  Combined with a proof of work challenge protocol the network coheres machine learning models to scale to the reach needed to solve problems.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">KBLedger</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  The Knowledge Bundle Ledger stores entries that guarantees reproducibilty and opens up the opportunity to perform decentralised machine learning.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Module & Reference Contracts</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  A limited set of data building block contracts that can be combined to describe data, what computation should be applied and which visualisation style is required.  These contracts provide guarantees on data interoperability amongst peers.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
        <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Peer to Peer Data Infrastructure</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  HOP works on any peer to peer data infrastructure e.g. <a href="https://docs.holepunch.to/">Holepunch</a>  open source project.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HopLearn'
}
</script>

<style scoped>
</style>
