<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">Peer to Peer Data Science
      <h6 class="text-center mt-4">Control, understand & participate in data that shapes the world.</h6>
      <p class="body-1 mt-6 mx-6">
        We are working on an open source coherence protocol HOP (Health Oracle Protocol) and a non-coding graphical interface toolkit that enables more people to participate in controlling and understanding data that shapes the health of individuals, communities & nature.
      </p>
      <p>
        <v-row class="mt-8">
          <v-spacer />
          <v-col md="4">
            <v-card href="#toolkit" class="pink--text darken-4--text text-center">
              Toolkits
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card href="#learn" class="pink--text darken-4--text text-center">
              Learn
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card href="#community" class="pink--text darken-4--text text-center">
              Community
            </v-card>
          </v-col>
          <v-spacer />
        </v-row>
      </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card class="back-transparent">
          <v-card-title primary-title>
            <v-flex xs12 sm12 md6>
                 <v-row
                  align="center"
                  justify="center"
                >
                  <v-card
                    height="00"
                    width="250"
                  >
                    <v-row justify="center">
                      <v-btn
                        color="success"
                        class="mt-12"
                        @click="overlay = !overlay"
                      >
                        Get-ALPHA--{{ userOs }}
                        <div id="nocodeavaiable" v-if="oscodemiss === true">
                          Code NOT available
                        </div>
                      </v-btn>
                      <p class="subtitle-1">Mobile AI Apps coming soon</p>
                      <v-overlay
                        :absolute="absolute"
                        :value="overlay"
                      >
                        <v-btn
                          color="success"
                          @click="downloadLink"
                        >
                          <div id="downloadsection">
                            BBHOP-Download-ALPHA--{{ userOs }}
                            <v-icon class="downloadicon"
                              large
                              color="orange darken-2"
                            >
                              mdi-arrow-up-bold-box-outline
                           </v-icon>
                          </div>
                        </v-btn>
                        <div id="checksumterms" class="downloadsection">
                          <router-link class="downspace" to="/checksum">Checksum</router-link>
                          <router-link class="downspace" to="/terms">Terms & Conditions</router-link>
                        </div>
                        <v-btn
                          color="grey"
                          @click="overlay = false">
                          Close
                        </v-btn>
                      </v-overlay>
                    </v-row>
                  </v-card>
                </v-row>
            </v-flex>
            <v-flex xs12 sm12 md6>
                <h3 class="headline mb-0 font-weight-bold">Toolkit & HOP in action</h3>
                <v-flex xs12 sm12 md5 class="open-left">
                  <!-- <v-img src="../assets/bbtoolkit.png" max-width="500" class="left-perspective">
                  </v-img> -->
                  <iframe width="500" height="315" src="https://www.youtube.com/embed/OZXilez2hK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-flex>
                <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                  <v-card href="https://bentobox.healthscience.network">
                    <v-card-title>Learn more & usecases</v-card-title>
                  </v-card>
                </div>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-row no-gutters>
      <v-spacer />
      <v-col
        cols="1"
        sm="1"
        md="1"
      >
        <v-card
          class="pa-0"
          outlined
          color="transparent"
        >
          <v-img src="../assets/logo.png" width="80px" center>
          </v-img>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HopProtocol',
  data: () => ({
    userAgent: '',
    userOs: '',
    absolute: false,
    overlay: false,
    oscodemiss: true
  }),
  mounted () {
    this.userAgent = navigator.userAgent || ''
    this.userOs = navigator.platform || ''
    this.codeavailable()
  },
  methods: {
    codeavailable () {
      if (this.userOs === 'Linux x86_64') {
        this.oscodemiss = false
      } else if (this.userOs === 'IOS') {
        this.oscodemiss = true
      } else if (this.userOs === 'Win32') {
        this.oscodemiss = false
      }
    },
    downloadLink () {
      // which os for download?
      if (this.userOs === 'Linux x86_64') {
        this.oscodemiss = true
        window.open('https://github.com/healthscience/diyhstoolkit/releases/download/v0.7.6/BentoBox-x86_64.AppImage', '_blank')
      } else if (this.userOs === 'IOS') {
        this.oscodemiss = true
        window.open('', '_blank')
      } else if (this.userOs === 'Win32') {
        window.open('https://github.com/healthscience/diyhstoolkit/releases/download/v0.7.6/BentoBox-DS-alpha.exe', '_blank')
        this.oscodemiss = true
      }
    },
    forceFileDownload (response, title) {
      console.log(title)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', title)
      document.body.appendChild(link)
      link.click()
    },
    downloadWithAxios (url, title) {
      axios({
        method: 'get',
        url,
        responseType: 'arraybuffer'
      })
        .then((response) => {
          this.forceFileDownload(response, title)
        })
        .catch(() => console.log('error occured'))
    }
  }
}
</script>

<style scoped>
  .back-transparent {
    opacity: 0.9;
  }

  .downloadsection {
    width: 400px;
    border: 2px solid blue;
  }

  .downloadicon {
    transform: rotate(180deg);
  }

  .downloadsection {
    background-color: lightgrey;
    border: 1px solid red;
    padding-top: 1em;
    padding-left: .6em;
    height: 80px;
  }

  .downspace {
    padding-right: 1em;
  }

  .open-left {
    perspective: 1000px;
  }

  .left-perspective {
    width: 360px;
    transform: rotateY(-14deg);
  }
</style>
