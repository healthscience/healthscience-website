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
                <div style="word-break: break-word" class="spacing-playground pa-6 ">
                  We are building a peer to peer choherence protocol based on open source software and toolkits that empower everyone to control & understand data that shapes our world.
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
                <h3 class="headline mb-0 font-weight-bold">safeFLOW-ECS</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  A novel combination of an entity component system design and a data science computation engine. This engine takes in data, tidies and categories it before applying a computation and preparing the data format for presentation e.g. charting.
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
                <h3 class="headline mb-0 font-weight-bold">Modular Reference Contracts</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  A set of graphical non-coding tools allows data to be described, computed and visualised. This provides guarantee on data interoperability amongst peers.
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
                <h3 class="headline mb-0 font-weight-bold">Datastore Independent</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  HOP is datastore API independent.  The reference implementation uses the <a href="https://hypercore-protocol.org/">Hypercore Protocol</a>.
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
