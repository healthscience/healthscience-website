<template>
  <div class="super-node p-6 border-2 border-neon/50 rounded-xl bg-forest/90 backdrop-blur-md min-w-[280px] transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
       :class="{ 'border-neon shadow-[0_0_50px_rgba(0,255,255,0.4)] scale-105': data.isHighlighted }">
    
    <div class="absolute -top-3 -right-3 w-8 h-8 bg-neon/20 rounded-full flex items-center justify-center animate-pulse">
      <div class="w-3 h-3 bg-neon rounded-full"></div>
    </div>

    <div class="flex items-center gap-3 mb-4">
      <div class="w-1 h-6 bg-neon"></div>
      <h3 class="text-primary font-bold text-lg tracking-wide">{{ data.label }}</h3>
    </div>
    
    <p class="text-secondary/80 text-sm mb-4 italic">{{ data.logic }}</p>
    
    <div class="flex flex-wrap gap-2 mt-4">
      <span v-if="data.codeSnippet" class="px-3 py-1 bg-neon/10 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest rounded">CODE SNAP</span>
      <span v-if="data.manifest" class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-mono uppercase tracking-widest rounded">MANIFEST</span>
    </div>
    
    <!-- Vue Flow Handles -->
    <Handle type="target" position="top" class="w-3 h-3 bg-neon border-none" />
    <Handle type="source" position="bottom" class="w-3 h-3 bg-neon border-none" />
    <Handle type="target" position="left" class="w-3 h-3 bg-neon border-none" />
    <Handle type="source" position="right" class="w-3 h-3 bg-neon border-none" />
  </div>
</template>

<script setup>
import { Handle } from '@vue-flow/core';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.super-node:hover {
  border-color: rgba(0, 255, 255, 0.8);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
}
</style>
