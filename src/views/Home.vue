<template>
  <div class="hop-waves">
    <menu-navigation />
    <hopsite-content></hopsite-content>
  </div>
</template>

<script>
import MenuNavigation from '@/components/MenuNavigation'
import HopsiteContent from '@/components/HopsiteContent'

export default {
  name: 'Hopsite-Content',
  components: {
    MenuNavigation,
    HopsiteContent
  }
}
</script>

<style>
.hop-waves {
  background: url('../assets/waves-meet-network.png');
  background-repeat: repeat;
  width: 100%;
  height: 100%;
}
</style>
