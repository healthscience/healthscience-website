<template>
  <div class="lego-module col-span-12 md:col-span-6 bg-module border border-pine/30">
    <div class="flex items-center justify-between mb-8 border-b border-pine/20 pb-4">
      <div class="font-mono text-xs text-secondary tracking-widest uppercase">Terminal</div>
      <div class="font-mono text-xs text-neon flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-neon"></span>
        BEEBEE_AGENT > v0.1
      </div>
    </div>
    
    <div class="space-y-8">coming soon beebee
      <!-- Step 1: Capture 
      <div v-if="step >= 1" class="animate-pulse">
        <label class="block text-xs uppercase text-secondary/70 mb-3 tracking-widest">01 // Capture</label>
        <div class="flex items-center gap-3 bg-forest border border-pine/30 px-4 py-3 rounded-md focus-within:border-neon/50 transition-colors">
          <span class="text-neon font-mono">></span>
          <input 
            v-model="bioregion" 
            @keyup.enter="nextStep(2)"
            placeholder="Enter local bioregion..." 
            class="bg-transparent border-none outline-none text-primary w-full placeholder-secondary/50 font-mono text-sm"
            :disabled="step > 1"
          />
        </div>
      </div> -->

      <!-- Step 2: Context
      <div v-if="step >= 2" class="pt-2">
        <label class="block text-xs uppercase text-secondary/70 mb-3 tracking-widest">02 // Context</label>
        <div class="bg-forest border border-pine/30 p-4 rounded-md">
          <p class="text-sm font-mono text-secondary mb-3">> Aligning with local HeliClock for {{ bioregion }}...</p>
          <div class="h-1 bg-pine/30 overflow-hidden rounded-full">
            <div class="h-full bg-neon w-1/2 animate-[slide_2s_infinite]"></div>
          </div>
        </div>
      </div>-->

      <!-- Step 3: Compose 
      <div v-if="step >= 3" class="pt-2">
        <label class="block text-xs uppercase text-secondary/70 mb-3 tracking-widest">03 // Compose</label>
        <button 
          @click="complete"
          class="lego-button w-full"
        >
          Generate Peer-Lego Contract
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)
const bioregion = ref('')

const nextStep = (s) => {
  if (bioregion.value) step.value = s
  if (s === 2) {
    setTimeout(() => {
      step.value = 3
    }, 1500)
  }
}

const complete = () => {
  alert('Contract Generated. Welcome to the Network.')
}
</script>

<style scoped>
@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
</style>
