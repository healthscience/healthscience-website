<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-sheet xs12 sm12 md12>
        <v-card class="back-transparent">
          <v-card-title primary-title>
            <v-sheet xs12 sm12 md6>
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
            </v-sheet>
            <v-sheet xs12 sm12 md6>
              <v-row
               align="center"
               justify="center"
               >
                <h3 class="headline mb-0 font-weight-bold">Toolkit & HOP in action</h3>
                <v-sheet xs12 sm12 md5 class="open-left">
                  <!-- <v-img src="../assets/bbtoolkit.png" max-width="500" class="left-perspective">
                  </v-img> -->
                  <iframe width="500" height="315" src="https://www.youtube.com/embed/OZXilez2hK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-sheet>
                <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                  <v-card href="https://bentoboxds.org">
                    <v-card-title>Learn more & usecases</v-card-title>
                  </v-card>
                </div>
              </v-row>
            </v-sheet>
          </v-card-title>
        </v-card>
      </v-sheet>
    </v-layout>
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
        window.open('https://github.com/healthscience/bentoboxds/releases/download/v0.2.6/bentoboxds-0.2.6.AppImage', '_blank')
      } else if (this.userOs === 'IOS') {
        this.oscodemiss = true
        window.open('https://github.com/healthscience/bentoboxds/releases/download/v0.2.6/bentoboxds-0.2.6-macos.dmg', '_blank')
      } else if (this.userOs === 'Win32') {
        window.open('https://github.com/healthscience/bentoboxds/releases/download/v0.2.6/bentoboxds-0.2.6-win-setup.exe', '_blank')
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
