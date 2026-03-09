<template>
  <div class="col-span-12 relative mt-12">
    <div class="flex items-center gap-4 mb-8">
      <h2 class="text-xl font-light text-primary">Examples of Life-straps</h2>
      <div class="h-px flex-1 bg-pine/20"></div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
      <button 
        v-for="(step, index) in cascade" 
        :key="index" 
        @click="selectedIndex = index"
        class="text-left p-6 border rounded-xl bg-module transition-all duration-300 group relative overflow-hidden cursor-pointer flex flex-col h-full"
        :class="selectedIndex === index ? 'border-neon shadow-[0_0_15px_rgba(0,243,255,0.1)] bg-pine/10' : 'border-pine/30 hover:border-neon/50 hover:bg-pine/5'"
      >
        <div class="text-xs text-secondary/70 mb-4 font-mono uppercase tracking-widest">0{{ index + 1 }} // {{ step.level }}</div>
        <h3 class="text-xl mb-3 text-primary font-medium group-hover:text-neon transition-colors">{{ step.title }}</h3>
        <p class="text-sm text-secondary leading-relaxed flex-grow">{{ step.description }}</p>
        
        <div class="mt-6 pt-4 border-t border-pine/20 text-xs text-secondary/70 group-hover:text-primary transition-colors flex items-center justify-between w-full">
          <span class="uppercase tracking-widest">Explore Design</span>
          <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </button>
    </div>

    <!-- Detail Section -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
      mode="out-in"
    >
      <div :key="selectedIndex" class="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-start border border-pine/20 rounded-2xl p-8 bg-module/50 backdrop-blur-sm">
        <div class="md:col-span-4 aspect-video bg-pine/10 rounded-xl overflow-hidden border border-pine/20 relative group">
          <div class="absolute inset-0 flex items-center justify-center text-pine/40">
            <span v-if="!cascade[selectedIndex].media">Media Placeholder for {{ cascade[selectedIndex].title }}</span>
            <img v-else :src="cascade[selectedIndex].media" :alt="cascade[selectedIndex].title" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="md:col-span-1 space-y-4">
          <div class="text-xs text-neon font-mono uppercase tracking-widest">Commentary</div>
          <h4 class="text-lg text-primary font-medium">{{ cascade[selectedIndex].title }}</h4>
          <p class="text-sm text-secondary leading-relaxed">
            {{ cascade[selectedIndex].commentary }}
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedIndex = ref(0)

const cascade = [
  {
    level: 'DEMO_01',
    title: 'Swim for Longevity',
    description: 'How to achieve resonancePulse with metabolism cell to bioregion.',
    commentary: 'This module demonstrates the synchronization of individual metabolic rhythms with larger bioregional cycles, creating a feedback loop of health and sustainability.',
    media: null
  },
  {
    level: 'DEMO_02',
    title: 'Heart emulation',
    description: 'How from humble geometry beginnings the network learns how a heart works.',
    commentary: 'By mapping geometric primitives to biological functions, we can simulate complex organ behavior and understand the underlying principles of life-support systems.',
    media: null
  },
  {
    level: 'DEMO_03',
    title: 'River flows in a bioregion',
    description: 'Trace a river from source to sea and add data on waterflow to rainfall.',
    commentary: 'Visualizing the hydrological cycle within a specific bioregion allows us to monitor water health and predict the impact of environmental changes on local ecosystems.',
    media: null
  },
  {
    level: 'DEMO_04',
    title: 'Daisy world peer to peer',
    description: 'James Lovelock original daisy world help expliain his Gaia Hypothesis.  Emulate the earths and suns resonancePulse.',
    commentary: 'A peer-to-peer implementation of the Daisyworld model, illustrating how self-regulating systems emerge from simple interactions between life and its environment.',
    media: null
  }
]
</script>