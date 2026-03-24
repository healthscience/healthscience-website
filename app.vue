<template>
  <div class="snap-container relative bg-transparent">
    <!-- Plugin Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showPluginPage" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showPluginPage = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <PluginHOP 
          @open-reson="showResonAgentPage = true; showPluginPage = false" 
          @open-onthefly="showOnTheFlyPage = true; showPluginPage = false"
        />
      </div>
    </Transition>

    <!-- ResonAgent Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showResonAgentPage" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showResonAgentPage = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <ResonAgentMaths @open-playground="showPlaygroundPage = true; showResonAgentPage = false" />
      </div>
    </Transition>

    <!-- Geometry Playground Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showPlaygroundPage" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showPlaygroundPage = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <GeometryPlayground />
      </div>
    </Transition>

    <!-- OnTheFly Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showOnTheFlyPage" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showOnTheFlyPage = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <OnTheFly />
      </div>
    </Transition>

    <!-- Roadmap Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showRoadmap" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showRoadmap = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <VersionVision />
      </div>
    </Transition>

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
    <section class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-b border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <HeroModule />
        <div class="lego-module col-span-12 md:col-span-4 flex flex-col items-center justify-center border-l-2 border-l-neon bg-gradient-to-br from-pine/10 to-transparent text-center">
          <div class="inline-block px-3 py-1 border border-pine/50 rounded-full text-xs font-mono text-pine mb-6 bg-pine/5">
            HOP v1.0 experimental
          </div>
          <div class="text-5xl md:text-2xl font-light mb-6 leading-tight text-primary tracking-tight">The Health Oracle Protocol (HOP)</div>
          <div class="text-xs font-mono text-neon mb-2 tracking-widest uppercase">Network Status</div>
          <div class="text-3xl font-light mb-1 text-primary">Heli Clock</div>
          <div class="text-sm text-secondary mb-4">Digital Solar Time</div>
          <div class="bento-grid flex justify-center">
            <heli-clock birth-orbital="45"></heli-clock>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Participate & Demos Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-forest/40 border-y border-pine/20 overflow-hidden">
      <!-- Coming Soon Watermark -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-20">
        <span class="text-8xl md:text-[14rem] font-black text-secondary uppercase tracking-[0.1em] text-center leading-none">
          Coming<br />Soon
        </span>
      </div>
      <div class="hop-grid w-full max-w-7xl mx-auto relative z-10">
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

    <!-- Architecture Section -->
    <section class="snap-section p-4 md:p-12 relative z-10">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <div class="lego-module col-span-12 md:col-span-8 bg-gradient-to-b from-pine/5 to-transparent">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-1 bg-pine/30"></div>
            <h3 class="text-neon font-mono text-sm tracking-widest uppercase">HEALTH ORACLE PROTOCOL - PeerStack</h3>
            <div class="h-px flex-1 bg-pine/30"></div>
          </div>

          <div class="mb-12">
            <p class="text-secondary/80 text-lg mb-8 font-light italic">
              <span @click="showRoadmap = true" class="text-neon cursor-pointer hover:underline font-mono text-sm uppercase tracking-widest mr-2">PROTOCOL road map.</span>
              The protocol modules & mathematics that empower the navigation.
            </p>
            

          </div>

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

              <!-- Conditional Rendering for 'PROTOCOL' / 'View all' -->
              <div v-if="bentoItems[selectedBentoIndex].tag === 'PROTOCOL'" class="space-y-6">
                <div v-for="(item, idx) in allBentoDetails" :key="idx" class="border-l border-neon/20 pl-4">
                  <div class="text-sm font-bold text-primary/80 mb-1">{{ item.title }}</div>
                  <p class="text-secondary leading-relaxed text-sm">
                    {{ item.details }}
                  </p>
                </div>
                <div class="mt-6 pt-6 border-t border-neon/10">
                  <p class="text-secondary leading-relaxed italic mb-4">
                    {{ bentoItems[selectedBentoIndex].details }}
                  </p>
                  <button @click="window.open('https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence', '_blank')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
                    Open Documentation
                  </button>
                </div>
              </div>

              <!-- Standard Rendering -->
              <div v-else>
                <p class="text-secondary leading-relaxed">
                  {{ bentoItems[selectedBentoIndex].details }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <VisionModule />
      </div>
    </section>

    <!-- Strategic Plugins Section -->
    <TechnicalModularMap 
      @open-plugin="showPluginPage = true" 
      @open-reson="showResonAgentPage = true" 
      @open-onthefly="showOnTheFlyPage = true" 
      @open-playground="showPlaygroundPage = true" 
    />

    <!-- Interaction Section  beebee live -->
    <BorealComputation />

    <section class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-t border-pine/20">
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

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BorealComputation from './components/BorealComputation.vue'
import ContributePeers from './components/ContributePeers.vue'
import PluginHOP from './components/technical/pluginHOP.vue'
import ResonAgentMaths from './components/technical/resonAgentMaths.vue'
import GeometryPlayground from './components/technical/geometryPlayground.vue'
import OnTheFly from './components/technical/ontheFly.vue'
import VersionVision from './components/roadmap/versionVision.vue'

const colorMode = useColorMode()

const showPluginPage = ref(false)
const showResonAgentPage = ref(false)
const showPlaygroundPage = ref(false)
const showOnTheFlyPage = ref(false)
const showRoadmap = ref(false)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const selectedBentoIndex = ref(null)

const allBentoDetails = computed(() => {
  return bentoItems
    .filter(item => item.tag !== 'PROTOCOL')
    .map(item => ({ title: item.title, details: item.details }))
})

const bentoItems = [
  {
    tag: 'DIRECT',
    title: 'BentoBoxDS & BeeBee',
    details: 'The Atomic Interface. BeeBee is the lightweight message-bus that binds the BentoBox visual state to the underlying hardware sensors. It ensures the "View" is never decoupled from the "Vitals.'
  },
  {
    tag: 'WARM RELATE',
    title: 'Besearch science & Emulations',
    details: 'Moving beyond "Search" to Resonance Mapping. Emulation is the process of running a local "What If" scenario—sensing a biological state before committing the body to it.'
  },
  {
    tag: 'LEGO KNOWLEDGE',
    title: 'The Library',
    details: 'Composable Biological Logic. This is a repository of signed scripts (Reference & Module Contracts) that Peers can "Snap" into their stack. It treats knowledge as modular, executable code that form a HOPquery that SafeFlow-ECS systems utilise.'
  },
  {
    tag: 'HEART',
    title: 'SafeFlow-ECS',
    details: 'The State Engine. Using an Entity Component System (ECS) to manage biological entities. It handles the high-frequency "Pulse" of the Peer, calculating transitions in the "Energy Budget."'
  },
  {
    tag: 'TINY_REASONERS',
    title: 'Consilience & Coherence',
    details: 'The Synthesis Layer. Tiny Reasoners are local agents that filter noise and extract "Cues" from raw data, feeding them into the Coherence Ledger for verification then performing a consilience weave.'
  },
  {
    tag: 'P2P_AGGREGATION',
    title: 'NEAT-HOP & Peer to Peer',
    details: 'NEAT evolutionary & decentralized machine learning (DML) learning allows Peers to establish coherence across the network by establishing trust in data through "immune system" like sampling.'
  },
  {
    tag: 'GUIDE BOOK',
    title: 'Cue Currency & RGB',
    details: 'Cue currency is a unit of computational knowledge. The Coherence Ledger combined with parts of the RGB (beyond blockchain - client side verification) to issue "Cues." A guidebook to the best knowledge, that acts as directed.'
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
