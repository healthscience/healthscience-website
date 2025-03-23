<template>
  <v-container class="pa-0">
    <v-row class="fill-height">
      <v-col class="pa-0">
        <v-card class="rounded-lg" color="pink-lighten-5">
          <div class="mission-statement-container">
            <v-card-title class="text-center text-h6 indigo--text mission-statement">
              HOP - Sovereign intelligences shape health
            </v-card-title>
          </div>

          <v-card-text class="text-body-1">
            <div class="text-center">
              HOP makes it possible to build coherence networks peer to peer. 21st century technology opens up a new paradigm for health. This can happen as data and scientific understanding of nature has advanced and is now combined with machine learning. However, there is a choice to be made: Do we want to be the primary agent in our health or do we want to outsource our sovereignty to the cloud & corporations? HOP and the no-code toolkit BentoBoxDS provides a way to choose agency and sovereignty. Through self experimentation and building networks of collective intelligence peer to peer the understanding and application of science to health will advance rigorously.
            </div>

            <v-divider class="my-4" />

            <div class="learning-title-container">
              <v-card-title class="text-center text-h6 indigo--text learning-title">
                Learning 24/7 @all scales
              </v-card-title>
            </div>

            <v-card-text class="text-body-1">
              A sovereign peer can learn much in isolation but can learn much more in a network. The health of a bioregion to a model of the climate requires a new level of computational coherence and HOP (health oracle protocol) has be designed to make that possible. Check out the HOP <router-link to="/lab" class="text-decoration-none">
                <v-btn variant="text" color="purple">LAB</v-btn>
              </router-link> for projects. Lastly, the monetary incentives of health reward treating disease and exploiting nature. HOP has no monetary incentive built-in, our focus is on empowering the coherence of computations with sovereign data that shapes health.
            </v-card-text>

            <v-card-actions class="justify-center">
              <v-row class="mt-8" align="center" justify="center">
                <v-col cols="12" md="4">
                  <v-btn to="#learn" variant="outlined" color="pink-darken-4" block>
                    Learning
                  </v-btn>
                </v-col>
                <v-col cols="12" md="4">
                  <v-btn to="#toolkit" variant="outlined" color="pink-darken-4" block>
                    Toolkit
                  </v-btn>
                </v-col>
                <v-col cols="12" md="4">
                  <v-btn to="#community" variant="outlined" color="pink-darken-4" block>
                    Community
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
.v-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 !important;
}

.text-body-1 {
  word-break: break-word;
  line-height: 1.6;
}

.mission-statement-container {
  background-color: #880E4F;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mission-statement {
  font-family: 'Arial', sans-serif;
  font-size: 2.2em;
  font-weight: 600;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
    0 0 20px rgba(0, 255, 255, 0.3),
    0 0 30px rgba(0, 255, 255, 0.1);
  animation: glow 2s ease-in-out infinite alternate;
}

.learning-title-container {
  background: linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.learning-title {
  font-family: 'Arial', sans-serif;
  font-size: 2em;
  font-weight: 600;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.3),
      0 0 30px rgba(0, 255, 255, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.6),
      0 0 30px rgba(0, 255, 255, 0.4),
      0 0 40px rgba(0, 255, 255, 0.2);
  }
}

@media (max-width: 600px) {
  .v-card-actions {
    padding: 0;
  }
}
</style>
