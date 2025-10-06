<template>
  <v-container class="pa-0">
    <v-row class="fill-height">
      <v-col class="pa-0">
        <v-card class="rounded-lg" color="pink-lighten-5">
          <div class="mission-statement-container">
            <v-card-title class="text-center text-h6 indigo--text mission-statement">
              HOP - gaia intelligences shape health
            </v-card-title>
          </div>

          <v-card-text class="text-body-1">
            <div class="text-center">
              <div class="sub-parag">
                Health Oracle Protocol is Gaian Intelligences in Action
              </div>
            </div>
            <div class="text">
              <div class="sub-parag">
              HOP embodies the principles of Gaia theory—a self-regulating, decentralized system where individual actions align with collective well-being. Coherence networks for human to bioregion to Earth as a whole  health are built peer to peer.
              </div>
              <div class="sub-parag">
                As we enter the age of AGI and super intelligence, the creation of Gaia Intelligences provides an alternative to centralized AI compute chatbots and agents.  A Tiny HOP to gaia intelligences sets out the vision in more depth. https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence By enabling peers to contribute and validate data, HOP shifts power from centralized authorities (e.g., tech giants, governments) to individuals and communities. This has profound implications for equity, transparency, and trust in a local first, human-first, data-driven networks.
              </div>
            </div>

            <v-divider class="my-4" />

            <div class="text">
              <v-card-title class="text-center text-h6 indigo--text learning-title-container">
                Besearch cycles: learning 24/7 @all scales
              </v-card-title>
              <v-card-text class="text-body-1">
                <div class="text">
                  <div class="sub-parag">
                    Besearch is new kind of n=1 science method combined with machine learning.  See diagram and read more at https://beebeehop.any.org/besearch .
                    </div>
                    <div class="sub-parag">
                    Think of Besearch as an agentic cycle: blending cutting-edge science with contextual BentoBox data to proactively explore solution spaces, running simulations for present and future outcomes (including community ripples and even second/third-order effects). It is a natural evolution of the N=1 ethos and hyper-personalized yet scalable, like a cell's metabolic cycle informing a bioregion's homeostasis in the Gaian framework.
                  </div>
                  <div class="sub-parag">
                  </div>
                </div>
              </v-card-text>
            </div>
            <v-card-text class="text-body-1">
               Learn more in the LAB<router-link to="/lab" class="text-decoration-none">
                <v-btn variant="text" color="purple">LAB</v-btn>
              </router-link>.
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

.sub-parag {
  display: grid;
  grid-template-columns: 1fr;
  margin: 1em;
  border: 1px solid red;
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
