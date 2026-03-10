<template>
  <div class="snap-container relative bg-transparent">
    <SpiralBackground />
    
    <!-- Theme Toggle -->
    <div class="fixed top-4 right-4 z-50">
      <button @click="toggleTheme" class="p-2 rounded-full bg-module border border-pine/30 text-primary hover:border-neon/50 transition-colors shadow-lg">
        <svg v-if="$colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </button>
    </div>

    <!-- Hero Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-forest/40 border-b border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <HeroModule />
        <div class="lego-module col-span-12 md:col-span-4 flex flex-col items-start justify-center border-l-2 border-l-neon bg-gradient-to-br from-pine/10 to-transparent">
          <div class="text-xs font-mono text-neon mb-2 tracking-widest uppercase">Network Status</div>
          <div class="text-3xl font-light mb-1 text-primary">Heli Clock</div>
          <div class="text-sm text-secondary">Digital Solar Time</div>
          <div class="bento-grid">
            <heli-clock birth-orbital="45"></heli-clock>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Participate & Demos Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-forest/40 border-y border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <CallToParticipate />
        <div class="lego-module col-span-12 md:col-span-4 flex flex-col items-start justify-center bg-transparent border border-pine/30">
          <div class="text-xs font-mono text-secondary/70 mb-2 tracking-widest uppercase">Orrery Status</div>
          <div class="text-2xl font-light text-secondary flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            WAITING
          </div>
        </div>
        <CascadeModule />
      </div>
    </section>

    <!-- Interaction Section  beebee live -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-forest/40 border-t border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <BeeBeePrompts />
        <div class="lego-module col-span-12 md:col-span-6 flex flex-col justify-center items-start bg-gradient-to-r from-pine/10 to-transparent border-none shadow-none">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-primary tracking-tight">Join the <br/><span class="font-bold">Consilience Weave.</span></h2>
          <p class="text-secondary text-lg mb-8 max-w-md">
            Secure your node in the biological navigation system and begin resonating value.
          </p>
          <button class="lego-button">
            Download
          </button>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <div class="lego-module col-span-12 md:col-span-8 bg-gradient-to-b from-pine/5 to-transparent">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-1 bg-pine/30"></div>
            <h3 class="text-neon font-mono text-sm tracking-widest uppercase">TECHNICAL - HOP // BENTO_BOX_DS</h3>
            <div class="h-px flex-1 bg-pine/30"></div>
          </div>
          
          <p class="text-secondary leading-relaxed mb-10 text-lg font-light">
            HOP 
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="(item, index) in bentoItems" 
              :key="index"
              @click="selectedBentoIndex = index"
              class="p-5 border rounded-lg transition-all cursor-pointer group"
              :class="selectedBentoIndex === index ? 'border-neon bg-pine/10' : 'border-pine/20 hover:border-neon/50 hover:bg-pine/10'"
            >
              <div class="text-xs font-mono text-pine group-hover:text-neon mb-2">{{ item.tag }}</div>
              <div class="text-lg text-primary font-medium">{{ item.title }}</div>
            </div>
          </div>

          <!-- Bento Detail Reveal -->
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
            mode="out-in"
          >
            <div v-if="selectedBentoIndex !== null" :key="selectedBentoIndex" class="mt-8 p-6 border border-neon/30 rounded-xl bg-pine/5 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-1 h-6 bg-neon"></div>
                <h4 class="text-xl text-primary font-medium">{{ bentoItems[selectedBentoIndex].title }}</h4>
              </div>
              <p class="text-secondary leading-relaxed">
                {{ bentoItems[selectedBentoIndex].details }}
              </p>
            </div>
          </Transition>
        </div>
        <VisionModule />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const selectedBentoIndex = ref(null)

const bentoItems = [
  {
    tag: 'DIRECT',
    title: 'BentoBoxDS & BeeBee',
    details: 'The core data structure and interface for the Health Science Network, enabling seamless interaction with biological data.'
  },
  {
    tag: 'WARM RELATE',
    title: 'Search & Simulation: Besearch & Emulation',
    details: 'Advanced search capabilities combined with biological emulations to discover and validate health insights.'
  },
  {
    tag: 'LEGO KNOWLEDGE',
    title: 'The Library: Contracts & Composition',
    details: 'A modular repository of smart contracts and composable biological logic for building complex health protocols.'
  },
  {
    tag: 'HEART',
    title: 'The Metabolism: safeFLOW-ecs & Compute',
    details: 'The engine of the network, managing data flow and computational resources with biological integrity.'
  },
  {
    tag: 'TINY_REASONERS',
    title: 'The Synthesis: Consilience Weave & Coherence Ledger',
    details: 'Synthesizing diverse data streams into a unified coherence ledger for planetary-scale health alignment.'
  },
  {
    tag: 'P2P_AGGREGATION',
    title: 'The Fabric: NEAT & Warm Networking',
    details: 'A decentralized networking layer that facilitates peer-to-peer data aggregation and warm relationship mapping.'
  },
  {
    tag: 'GUIDE BOOK',
    title: 'The Value Layer: Cue Currency & RGB',
    details: 'The economic layer of the protocol, utilizing Cue Currency and RGB for sovereign value exchange.'
  },
  {
    tag: 'PROTOCOL',
    title: 'View all',
    details: 'Explore the full technical specification and documentation of the HOP protocol.'
  }
]
</script>

<style scoped>

.bento-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 10vw;
  height: 10vh;
}

</style>
