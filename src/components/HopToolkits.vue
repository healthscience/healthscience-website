<template>
  <v-container grid-list-lg>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">Toolkits</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">BentoBox DS</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                  A graphical interface to connect to the Health Oracle Network and manage visualisation. No coding skills are required. Demo videos
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
                <h3 class="headline mb-0 font-weight-bold">Network Library</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                  A graphical interface to desribe new reference (smart) contracts entering the network. Demo video The Network Library is a DaMaHub project.
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
