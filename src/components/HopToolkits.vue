<template>
  <v-container grid-list-lg>
    <v-responsive class="d-flex align-top text-center fill-height" width="100%">
      <v-row
        no-gutters
        id="toolkit"
      >
        <v-col
         cols="12"
          align-self="center"
        >
          <v-sheet xs12 class="text-h6 pa-2" color="pink-darken-4">Toolkit BentoBoxDS</v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
        >     
          <v-card color="indigo-lighten-5 ma-2">
            <v-card-title primary-title align="center">
              <v-sheet  xs12 class="rounded-lx" color="indigo-lighten-5">
                  <v-img src="../assets/logo-bentobox.png" width="300px">
                  </v-img>
              </v-sheet>
            </v-card-title>
              <v-sheet xs12 class="rounded-lx" color="indigo-lighten-5">
                  <h3 class="headline mb-0 font-weight-bold">BentoBoxDS</h3>
                  <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                    A graphical interface to connect to the Health Oracle Network, manage visualisation and conribute to network. No coding skills are required. Learn <a href="https://bentoboxds.org">more</a>
                    <v-card href="https://youtu.be/OZXilez2hK8" color="indigo-lighten-5">
                      <v-card-title>video demos</v-card-title>
                    </v-card>
                  </div>
              </v-sheet>
              <toolkit-download></toolkit-download>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import ToolkitDownload from '@/components/demoDownload.vue'

export default {
  name: 'HopLearn',
  components: {
    ToolkitDownload
  }
}
</script>

<style scoped>
</style>
