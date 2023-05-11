<template>
  <v-container fluid fill-height>
    <div class="hop-waves">
      <hop-protocol></hop-protocol>
      <hop-learn></hop-learn>
      <hop-toolkits></hop-toolkits>
      <!-- <hop-usecases></hop-usecases> -->
      <hop-community></hop-community>
    </div>
  </v-container>
</template>

<script>
import HopProtocol from '@/components/HopProtocol'
import HopToolkits from '@/components/HopToolkits'
import HopLearn from '@/components/HopLearn'
import HopCommunity from '@/components/HopCommunity'
// import HopUsecases from '@/components/HopUsecases'

export default {
  name: 'Hopsite-Content',
  components: {
    HopProtocol,
    HopLearn,
    HopToolkits,
    HopCommunity
    // HopUsecases
  }
}
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
</style>
