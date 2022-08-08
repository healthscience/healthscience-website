<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color pink lighten-5">Peer to Peer Data Science</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <v-flex xs12 sm12 md6>
                 <v-row
                  align="center"
                  justify="center"
                >
                  <v-card
                    height="300"
                    width="250"
                  >
                    <v-row justify="center">
                      <v-btn
                        color="success"
                        class="mt-12"
                        @click="overlay = !overlay"
                      >
                        Get-ALPHA--{{ userOs }}
                      </v-btn>

                      <v-overlay
                        :absolute="relative"
                        :value="overlay"
                      >
                        <v-btn
                          color="success"
                          @click="downloadWithAxios('test/alpha/BentoBox-x86_64.AppImage', 'BentoBox')"
                        >
                          <div id="download">
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
                          <a href="https://www.healthscience.network/test/alpha/BentoBox-x86_64.AppImage" target="_blank">Checksum</a> --- Note Experimental software
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
                <h3 class="headline mb-0 font-weight-bold">BentoBox DS</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3 font-weight-regular">
                  Chart data and share.  Learn <a href="https://bentobox.healthscience.network">more</a>
                  <v-card href="https://youtube.com/playlist?list=PLNaKqNNZpYPNBA9rN-E34CFWu_3rPdy9p">
                    <v-card-title>video demos</v-card-title>
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
    absolute: true,
    overlay: false
  }),
  mounted () {
    this.userAgent = navigator.userAgent || ''
    this.userOs = navigator.platform || ''
  },
  methods: {
    linkClick () {
      console.log('go to webpage')
    },
    downloadCode () {
      console.log('download a file')
      axios({
        url: 'http://localhost/hop/code/BentoBox-x86_64.AppImage',
        method: 'GET',
        responseType: 'blob'
      }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]))
        var docUrl = document.createElement('x')
        docUrl.href = FILE
        docUrl.setAttribute('download', 'file.pdf')
        document.body.appendChild(docUrl)
        docUrl.click()
      })
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
  .downloadicon {
    transform: rotate(180deg);
  }

  .downloadsection {
    background-color: lightgrey;
    border: 1px solid red;
  }
</style>
