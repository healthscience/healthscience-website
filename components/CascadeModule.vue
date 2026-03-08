<template>
  <div class="col-span-12 relative mt-12">
    <div class="flex items-center gap-4 mb-8">
      <h2 class="text-xl font-light text-white">Reference Demos</h2>
      <div class="h-px flex-1 bg-pine/20"></div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
      <button v-for="(step, index) in cascade" :key="index" class="text-left p-6 border border-pine/30 rounded-xl bg-[#0a0f0d] hover:border-neon/50 hover:bg-pine/5 transition-all duration-300 group relative overflow-hidden cursor-pointer flex flex-col h-full">
        <div class="text-xs text-gray-500 mb-4 font-mono uppercase tracking-widest">0{{ index + 1 }} // {{ step.level }}</div>
        <h3 class="text-xl mb-3 text-white font-medium group-hover:text-neon transition-colors">{{ step.title }}</h3>
        <p class="text-sm text-gray-400 leading-relaxed flex-grow">{{ step.description }}</p>
        
        <div class="mt-6 pt-4 border-t border-pine/20 text-xs text-gray-500 group-hover:text-white transition-colors flex items-center justify-between w-full">
          <span class="uppercase tracking-widest">Explore Design</span>
          <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
const cascade = [
  {
    level: 'DEMO_01',
    title: 'SafeFlow-ECS',
    description: 'The reactive state machine governing biological data integrity at the source.'
  },
  {
    level: 'DEMO_02',
    title: 'Besearch Emulations',
    description: 'Von Mises-inspired economic emulations for sovereign health discovery.'
  },
  {
    level: 'DEMO_03',
    title: 'Peer-to-Peer DML',
    description: 'Decentralized Machine Learning that respects the boundaries of the local bioregion.'
  },
  {
    level: 'DEMO_04',
    title: 'Protocol of Coherence',
    description: 'The global alignment layer where individual health resonance scales to planetary stability.'
  }
]
</script>
