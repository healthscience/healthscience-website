<template>
  <v-container fluid fill-height>
    <div class="hop-waves">
      <hop-protocol></hop-protocol>
      <hop-learn></hop-learn>
      <hop-toolkits></hop-toolkits>
      <hop-usecases></hop-usecases>
    </div>
  </v-container>
</template>

<script>
import HopProtocol from '@/components/HopProtocol'
import HopLearn from '@/components/HopLearn'
import HopToolkits from '@/components/HopToolkits'
import HopUsecases from '@/components/HopUsecases'

export default {
  name: 'Hopsite-Content',
  components: {
    HopProtocol,
    HopLearn,
    HopToolkits,
    HopUsecases
  }
}
</script>

<style>
.hop-waves {
  background: url('../assets/waves-meet-network.png');
  background-position: top center;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
}
</style>
