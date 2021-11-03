<template>
  <v-container grid-list-lg>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Learn</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">About</h3>
                <div class="spacing-playground pa-6">
                  We are building a novel coherence protocol that allow peers, communities and businesses to combine their collective intelligence.
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
                <h3 class="headline mb-0 font-weight-bold">safeFLOW</h3>
                <div class="spacing-playground pa-3">
                  An Entity Component System software for data science is at the heart of the protocol.  Takes in Reference (smart) Contracts and manages data and compute flows required to prepare visualisation.
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
                <div class="spacing-playground pa-3">
                  A ledger to provide proof evidence. A complete cycle of data and compute proofs produce a hash of the entry plus the hash of the results data.
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
                <h3 class="headline mb-0 font-weight-bold">Modular Reference (smart) Contracts</h3>
                <div class="spacing-playground pa-3">
                  A limited set of data structures to desribe datatypes, datapacking, compute and visualisation information. These are combined by utilty modules to produce network experiment ref. contracts that give guarantees on data interoperabilty.
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
