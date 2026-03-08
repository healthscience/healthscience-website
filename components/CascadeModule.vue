<template>
  <div class="lego-module col-span-12">
    <h2 class="text-2xl mb-8 border-b border-pine pb-2 inline-block">The Consilience Weave</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div v-for="(step, index) in cascade" :key="index" class="p-4 border border-pine/30 hover:border-neon transition-colors group">
        <div class="text-xs text-pine mb-2 font-mono">0{{ index + 1 }} // {{ step.level }}</div>
        <h3 class="text-lg mb-4 group-hover:text-neon">{{ step.title }}</h3>
        <p class="text-sm text-gray-400 leading-relaxed">{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cascade = [
  {
    level: 'CELLULAR',
    title: 'SafeFlow-ECS',
    description: 'The reactive state machine governing biological data integrity at the source.'
  },
  {
    level: 'HUMAN',
    title: 'Besearch Emulations',
    description: 'Von Mises-inspired economic emulations for sovereign health discovery.'
  },
  {
    level: 'BIOREGIONAL',
    title: 'Peer-to-Peer DML',
    description: 'Decentralized Machine Learning that respects the boundaries of the local bioregion.'
  },
  {
    level: 'GAIA',
    title: 'Protocol of Coherence',
    description: 'The global alignment layer where individual health resonance scales to planetary stability.'
  }
]
</script>
