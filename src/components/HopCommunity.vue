<template>
  <v-container grid-list-lg>
    <v-responsive class="d-flex align-top text-center fill-height">
      <v-row
        no-gutters
        id="community"
      >
        <v-col
          align-self="center"
        >
          <v-sheet xs12 class="text-h6 pa-2" color="pink-darken-4">Community</v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <v-card xs12 class="rounded-lx ma-2" color="indigo-lighten-5">
            <v-card-title primary-title>
              <h3 class="headline mb-0 font-weight-bold">Developers</h3>
            </v-card-title>
            <div style="word-break: break-word" class="spacing-playground pa-6 ">
              The open source code can be found on <a href="https://github.com/healthscience">github</a> There are two main projects, <a href="https://github.com/healthscience/hop">HOP</a> and the graphical toolkit <a href="https://github.com/healthscience/bentoboxds">BentoBoxDS</a>. 
            </div>
          </v-card> 
        </v-col>
      </v-row> 
      <v-row>
        <v-col col="12">
          <v-card xs12 class="rounded-lx ma-2" color="indigo-lighten-5">
            <v-card-title primary-title>
              <h3 class="headline mb-0 font-weight-bold">Documentation</h3>
            </v-card-title>
            <div style="word-break: break-word" class="spacing-playground pa-3">
              <a href="https://bentobox-ds.gitbook.io/bentobox-ds-hop">Documenation</a> is taking shape.  Introductory slides to the project <a href="https://design.penpot.app/#/view/af2058fc-4f53-80f4-8004-0aa0de9860e9?page-id=54a57300-7af0-8082-8004-3389f4f18d39&section=interactions&index=0&share-id=1119b522-e725-81a5-8004-338f1577876d">HOP</a> and the <a href="https://bentoboxds.org">BentoBox-DS toolkit</a>. An overview architecture <a href="https://design.penpot.app/#/view/9c5ceddf-c68c-8036-8001-c4a8028297f1?page-id=9c5ceddf-c68c-8036-8001-c4a8028297f2&section=interactions&index=0&share-id=d5fc0283-ef1c-80fa-8002-38a7c22fe740">diagram</a> on the key concepts and components.
            </div>
          </v-card>
        </v-col>  
      </v-row>
      <v-row>
        <v-col col="12">
          <v-card xs12 class="rounded-lx ma-2" color="indigo-lighten-5">
            <v-card-title primary-title>
              <h3 class="headline mb-0 font-weight-bold">Peer to Peer</h3>
            </v-card-title>
            <div style="word-break: break-word" class="spacing-playground pa-3">
              The main messaging & video collaboration space uses <a href="https://keet.io/">Keet.io</a> See community discord for gathering times.
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
