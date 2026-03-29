<template>
  <div ref="scrollContainer" class="snap-container relative bg-transparent">
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

    <!-- Glossary Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showGlossary" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showGlossary = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <HOPglossary @close="showGlossary = false" />
      </div>
    </Transition>

    <!-- Maths Page Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="showMaths" class="fixed inset-0 z-[100] bg-forest overflow-y-auto">
        <button 
          @click="showMaths = false"
          class="fixed top-8 right-8 z-[110] p-4 bg-neon text-forest rounded-full font-mono text-sm hover:scale-110 transition-transform shadow-2xl"
        >
          CLOSE [ESC]
        </button>
        <HOPmaths @close="showMaths = false" />
      </div>
    </Transition>

    <SpiralBackground />
    
    <!-- Theme Toggle & Navigation -->
    <div class="fixed top-4 right-4 z-50 flex items-center gap-6">
      <nav class="hidden md:flex items-center gap-6 mr-2">
        <button @click="scrollToSection('bentoboxds')" class="text-[10px] font-mono text-secondary hover:text-neon uppercase tracking-widest transition-colors">BentoBoxDS</button>
        <button @click="scrollToSection('protocol')" class="text-[10px] font-mono text-secondary hover:text-neon uppercase tracking-widest transition-colors">Protocol</button>
      </nav>
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
          <div class="bento-grid flex justify-center mb-12">
            <heli-clock birth-orbital="45"></heli-clock>
          </div>
          <button @click="showRoadmap = true" class="lego-button scale-75">
            Roadmap
          </button>
        </div>
      </div>
    </section>

    <!-- Cues & Besearch Section -->
    <CuesBesearch @open-glossary="showGlossary = true" @open-maths="showMaths = true" />

    <!-- BentoBoxDS: The Vessel of Sovereign Intelligence -->
    <section id="bentoboxds" class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-y border-pine/20 overflow-hidden">
      <div class="w-full max-w-7xl mx-auto relative z-10">
        <!-- Section Header -->
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-4">
            <img src="/bblogo.png" alt="BentoBoxDS Logo" class="h-8 w-auto">
            <div class="text-2xl font-mono text-neon tracking-[0.3em] uppercase">BentoBoxDS</div>
          </div>
          <h2 class="text-xl md:text-2xl font-light text-primary mb-8 leading-tight">
            The Vessel of <span class="font-bold italic">Sovereign Intelligence</span>
          </h2>
          <div class="max-w-3xl space-y-6">
            <p class="text-lg text-secondary leading-relaxed font-serif italic">
              The <span class="font-mono text-sm uppercase text-neon tracking-wider">Health Oracle Protocol</span> is currently a silent <span class="font-mono text-sm uppercase text-neon tracking-wider">Orrery</span>—a high-resolution architecture waiting for a witness. To ensure uncorrupted data and true sovereignty, we begin at a <span class="font-mono text-sm uppercase text-neon tracking-wider">Baseline of Zero</span>.
            </p>
            <p class="text-lg text-secondary leading-relaxed">
              <span class="font-mono text-sm text-primary uppercase">BentoBoxDS</span> is the Cellular Container where the HOP Fabric is woven into a personal reality. It is a local-first environment that "Brings to Be" a biological experience on the fly, transforming cold data into <span class="italic font-serif text-primary">Information as Medicine.</span>
            </p>
          </div>
        </div>

        <!-- The Quadrant Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div 
            v-for="brick in bentoItems" 
            :key="brick.id"
            @click="toggleBrick(brick.id)"
            class="lego-module group cursor-pointer transition-all duration-500 border-pine/30 hover:border-neon/50 bg-pine/5 relative overflow-hidden"
            :class="{ 'border-neon ring-1 ring-neon/30 bg-neon/5': snappedBricks.includes(brick.id) }"
          >
            <!-- Calibration Glow -->
            <div class="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <!-- Daisyworld Node -->
            <div class="daisy-node daisy-white daisy-tr opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="relative z-10">
              <div class="text-[10px] font-mono text-neon mb-4 tracking-[0.2em] uppercase">{{ brick.tag }}</div>
              <h3 class="text-2xl font-light text-primary mb-3">{{ brick.title }}</h3>
              <p class="text-sm text-secondary/80 leading-relaxed font-serif italic mb-6">
                {{ brick.details }}
              </p>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full" :class="snappedBricks.includes(brick.id) ? 'bg-neon animate-pulse' : 'bg-secondary/30'"></span>
                <span class="text-[10px] font-mono text-secondary uppercase tracking-widest">
                  {{ snappedBricks.includes(brick.id) ? 'CALIBRATED' : 'WAITING FOR WITNESS' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary Narrative -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-t border-pine/10 pt-16">
          <div class="space-y-6">
            <h4 class="text-xs font-mono text-neon uppercase tracking-[0.2em]">II. Adopting the Bricks</h4>
            <p class="text-secondary leading-relaxed font-serif">
              Within this container, you do not "install software"; you adopt <span class="font-mono text-sm text-primary">Lego Bricks of Knowledge</span>.
            </p>
            <ul class="space-y-4 text-sm text-secondary/80">
              <li class="pl-4 border-l border-neon/30">
                <span class="text-primary font-medium block mb-1">The cueCube:</span>
                Your personal navigation stone. Use it to emulate health outcomes in the physical before they even manifest.
              </li>
              <li class="pl-4 border-l border-neon/30">
                <span class="text-primary font-medium block mb-1">The Library:</span>
                A global commons of verified science. Snap these reference blueprints into your Bento to strengthen your inner architecture.
              </li>
            </ul>
          </div>
          <div class="space-y-6">
            <h4 class="text-xs font-mono text-neon uppercase tracking-[0.2em]">III. The Witness of the Key</h4>
            <p class="text-secondary leading-relaxed font-serif">
              We use <span class="italic font-serif text-primary">Sovereign Cryptography</span> not to hide from the world, but to Witness your own truth.
            </p>
            <p class="text-sm text-secondary/80 leading-relaxed">
              Your <span class="font-mono text-sm text-primary uppercase">Secure ID</span> is the root of your existence in the Fabric—allowing you to find the "Lego Bricks" you need across the network without ever sacrificing your local storage or your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Participate & Demos Section (Restored) -->
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
    <section id="protocol" class="snap-section p-4 md:p-12 relative z-10">
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
              v-for="(item, index) in protocolItems" 
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
                <h4 class="text-xl text-primary font-medium">{{ protocolItems[selectedBentoIndex].title }}</h4>
              </div>

              <!-- Conditional Rendering for 'PROTOCOL' / 'View all' -->
              <div v-if="protocolItems[selectedBentoIndex].tag === 'PROTOCOL'" class="space-y-6">
                <div v-for="(item, idx) in allBentoDetails" :key="idx" class="border-l border-neon/20 pl-4">
                  <div class="text-sm font-bold text-primary/80 mb-1">{{ item.title }}</div>
                  <p class="text-secondary leading-relaxed text-sm">
                    {{ item.details }}
                  </p>
                </div>
                <div class="mt-6 pt-6 border-t border-neon/10">
                  <p class="text-secondary leading-relaxed italic mb-4">
                    {{ protocolItems[selectedBentoIndex].details }}
                  </p>
                  <button @click="openDocs" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
                    Open Documentation
                  </button>
                </div>
              </div>

              <!-- Standard Rendering -->
              <div v-else>
                <p class="text-secondary leading-relaxed">
                  {{ protocolItems[selectedBentoIndex].details }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
        <VisionModule />
      </div>
    </section>

    <!-- Strategic Plugins Section -->
    <div class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-y border-pine/20">
      <div class="w-full max-w-7xl mx-auto">
        <div class="mb-12">
          <h2 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-4">The Anatomy of the HOP Fabric</h2>
          <h3 class="text-2xl md:text-2xl font-light text-primary mb-8">Metabolic Journey</h3>
          <AnatomyDiagram @explore="showTechnicalMap = !showTechnicalMap" />
        </div>
        
        <Transition
          enter-active-class="transition duration-700 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-[2000px]"
          leave-active-class="transition duration-500 ease-in"
          leave-from-class="opacity-100 max-h-[2000px]"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="showTechnicalMap" class="overflow-hidden">
            <TechnicalModularMap 
              @open-plugin="showPluginPage = true" 
              @open-reson="showResonAgentPage = true" 
              @open-onthefly="showOnTheFlyPage = true" 
              @open-playground="showPlaygroundPage = true" 
            />
          </div>
        </Transition>
      </div>
    </div>

    <!-- Interaction Section  beebee live -->
    <BorealComputation />

    <section class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-t border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <BeeBeePrompts />
        <div class="lego-module col-span-12 md:col-span-6 flex flex-col justify-center items-start bg-gradient-to-r from-pine/10 to-transparent border-none shadow-none">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-primary tracking-tight">Join the <br/><span class="font-bold">Consilience Weave.</span></h2>
          <p class="text-secondary text-lg mb-8 max-w-md">
            Anchor a signature and add a life-strap story.
          </p>
          <a href="https://bentoboxds.org" target="_blank" class="lego-button">
            Download BentoBoxDS
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BorealComputation from './components/BorealComputation.vue'
import ContributePeers from './components/ContributePeers.vue'
import PluginHOP from './components/technical/pluginHOP.vue'
import ResonAgentMaths from './components/technical/resonAgentMaths.vue'
import GeometryPlayground from './components/technical/geometryPlayground.vue'
import OnTheFly from './components/technical/ontheFly.vue'
import VersionVision from './components/roadmap/versionVision.vue'
import AnatomyDiagram from './components/AnatomyDiagram.vue'
import CuesBesearch from './components/CuesBesearch.vue'
import HOPglossary from './components/learn/HOPglossary.vue'
import HOPmaths from './components/learn/HOPmaths.vue'

const colorMode = useColorMode()
const scrollContainer = ref(null)

const showPluginPage = ref(false)
const showResonAgentPage = ref(false)
const showPlaygroundPage = ref(false)
const showOnTheFlyPage = ref(false)
const showRoadmap = ref(false)
const showGlossary = ref(false)
const showMaths = ref(false)
const showTechnicalMap = ref(false)

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const openDocs = () => {
  if (typeof window !== 'undefined') {
    window.open('https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence', '_blank')
  }
}

const selectedBentoIndex = ref(null)
const snappedBricks = ref([])

const toggleBrick = (id) => {
  if (snappedBricks.value.includes(id)) {
    snappedBricks.value = snappedBricks.value.filter(b => b !== id)
  } else {
    snappedBricks.value.push(id)
  }
}

const allBentoDetails = computed(() => {
  return protocolItems
    .filter(item => item.tag !== 'PROTOCOL')
    .map(item => ({ title: item.title, details: item.details }))
})

const bentoItems = [
  {
    id: 'now-me',
    tag: 'PRIMARY ENERGY',
    title: 'Now Me',
    details: 'Your immediate metabolic pulse. The protein of your real-time existence.',
    meta: 'Real-time metabolic pulse / Vagus tone.'
  },
  {
    id: 'future-me',
    tag: 'GROWTH ENZYME',
    title: 'Future Me',
    details: 'Your evolutionary growth path. The enzymes of potential and emulation.',
    meta: 'cueCube emulations and search paths.'
  },
  {
    id: 'now-us',
    tag: 'SOCIAL FIBER',
    title: 'Now Us',
    details: 'Your resonance with the "Swimming Club." The fiber of peer-to-peer synchronization.',
    meta: 'P2P Swimming Club synchronization.'
  },
  {
    id: 'future-us',
    tag: 'LEGACY MINERAL',
    title: 'Future Us',
    details: 'Your contribution to the Bioregional Weave. The minerals of collective wisdom.',
    meta: 'Bioregional Weave / Shared wisdom.'
  }
]

const protocolItems = [
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

// Smart Intersection Observer for scrolling
let observer = null

onMounted(() => {
  const options = {
    root: scrollContainer.value,
    threshold: 0.1,
    rootMargin: '0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find if user is at the bottom of the section
        const section = entry.target
        const isBottom = section.getBoundingClientRect().bottom <= (window.innerHeight + 50)
        
        // If mandatory snap is proximity, we let CSS handle it mostly, 
        // but we can add logic here if we need to force a snap only when fully viewed.
      }
    })
  }, options)

  const sections = document.querySelectorAll('.snap-section')
  sections.forEach(section => observer.observe(section))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<script>
// For useHead/useColorMode from Nuxt
export default {
  inheritAttrs: false
}
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
