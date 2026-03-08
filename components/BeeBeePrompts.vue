<template>
  <div class="lego-module col-span-12 md:col-span-6 bg-pine/10">
    <div class="font-mono text-xs text-neon mb-4">BEEBEE_AGENT_PROMPT > v0.1</div>
    
    <div class="space-y-6">
      <!-- Step 1: Capture -->
      <div v-if="step >= 1" class="animate-pulse">
        <label class="block text-xs uppercase text-pine mb-2">Capture</label>
        <div class="flex items-center gap-2">
          <span class="text-neon">></span>
          <input 
            v-model="bioregion" 
            @keyup.enter="nextStep(2)"
            placeholder="What is your local bioregion?" 
            class="bg-transparent border-none outline-none text-white w-full"
            :disabled="step > 1"
          />
        </div>
      </div>

      <!-- Step 2: Context -->
      <div v-if="step >= 2" class="border-t border-pine pt-4">
        <label class="block text-xs uppercase text-pine mb-2">Context</label>
        <p class="text-sm italic text-gray-400">Aligning with local HeliClock for {{ bioregion }}...</p>
        <div class="h-1 bg-pine mt-2 overflow-hidden">
          <div class="h-full bg-neon w-1/2 animate-[slide_2s_infinite]"></div>
        </div>
      </div>

      <!-- Step 3: Compose -->
      <div v-if="step >= 3" class="border-t border-pine pt-4">
        <label class="block text-xs uppercase text-pine mb-2">Compose</label>
        <button 
          @click="complete"
          class="bg-neon text-forest px-4 py-2 text-xs font-bold uppercase hover:bg-white transition-colors"
        >
          Generate Peer-Lego Contract
        </button>
      </div>
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
