<template>
  <div class="supply-chain-tile p-5 border border-amber-500/30 rounded-xl bg-amber-500/5 backdrop-blur-sm hover:border-amber-500/60 transition-all">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
        <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      </div>
      <h4 class="text-amber-500 font-medium tracking-wide uppercase text-sm">Supply Chain Manifest</h4>
    </div>
    
    <ul class="space-y-3">
      <li v-for="(item, index) in manifest" :key="index" class="flex items-start gap-3">
        <div class="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-2"></div>
        <div>
          <span class="text-primary text-sm font-medium block">{{ item.component }}</span>
          <span class="text-secondary/70 text-xs italic">{{ item.source }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  manifest: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>

</style>