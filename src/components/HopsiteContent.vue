<template>
  <v-container fluid fill-height class="hop-content">
    <hop-protocol></hop-protocol>
    <hop-learn></hop-learn>
    <hop-toolkits></hop-toolkits>
    <hop-usecases></hop-usecases>
  </v-container>
</template>

<script>
import HopProtocol from '@/components/HopProtocol'
import HopLearn from '@/components/HopLearn'
import HopToolkits from '@/components/HopToolkits'
import HopUsecases from '@/components/HopUsecases'

export default {
  name: 'HopContent',
  components: {
    HopProtocol,
    HopLearn,
    HopToolkits,
    HopUsecases
  }
}
</script>

<style scoped>
.hop-content {
    border-radius:50px;
    background-color: white;
    opacity: 70%;
    width: 90%;
    height: 100%;
}
</style>
