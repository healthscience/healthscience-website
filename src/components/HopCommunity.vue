<template>
  <v-container grid-list-lg>
    <v-layout row id="community">
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">Community</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Developers</h3>
                <div style="word-break: break-word" class="spacing-playground pa-6 ">
                  The open source code can be found on <a href="https://github.com/healthscience">github</a> There are two main projects, the HOP protocol and the graphical desktop toolkit. Introductory slides to <a href="https://docs.google.com/presentation/d/1ApGHuiZKoXf3bih7InCP85XcG5S1S79bV74bz2O5dK8/edit?usp=sharing">HOP</a> and the <a href="https://bentoboxds.org">BentoBox-DS toolkit</a>. An overview <a href="https://docs.google.com/presentation/d/1ApGHuiZKoXf3bih7InCP85XcG5S1S79bV74bz2O5dK8/edit?usp=sharing">diagram</a> on the key concepts and architecture are on penpot.
                </div>
            </div><!-- <a href=""></a> -->
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Collaborate</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  The main messaging & video collaboration space uses <a href="https://keet.io/">Keet.io</a> See community discord for gathering times.
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
                <h3 class="headline mb-0 font-weight-bold">Datapreneurs</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  We are looking to support early adopter entrepreneurs to setup new businesses and uses cases.
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
                <h3 class="headline mb-0 font-weight-bold">AI mobile apps</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  The toolkit has a embryonic natural language process chat interface.  We are looking to find open source models to help improve its capabilties. This will open up the opportunity for mobile app developers to access the protocol and use it.
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
