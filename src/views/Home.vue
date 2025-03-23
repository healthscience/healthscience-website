<template>
  <v-container fluid fill-height>
    <div class="hop-waves">
      <v-row class="fill-height">
        <v-col class="pa-0">
          <v-container max-width="1200" class="pa-0 mx-auto">
            <hop-protocol></hop-protocol>
            <hop-learn></hop-learn>
            <hop-toolkits></hop-toolkits>
            <!-- <hop-usecases></hop-usecases> -->
            <hop-community></hop-community>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import HopProtocol from '@/components/HopProtocol'
import HopToolkits from '@/components/HopToolkits'
import HopLearn from '@/components/HopLearn'
import HopCommunity from '@/components/HopCommunity'
// import HopUsecases from '@/components/HopUsecases'

</script>

<style>
.hop-waves {
  background: url('../assets/waves-meet-network.png');
  background-color: 'purple lighten-5';
  background-position: center center;
  background-repeat: repeat-y;
  width: 100%;
  height: 100%;
}

.v-container.max-width-1200 {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 !important;
  width: calc(100% - 256px) !important;
  max-width: 1200px !important;
}

@media (min-width: 1264px) {
  .v-container.max-width-1200 {
    padding: 0 2rem !important;
  }
}
</style>
