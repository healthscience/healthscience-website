<template>
  <div class="glossary-page min-h-screen bg-forest text-primary font-sans relative overflow-hidden p-8 md:p-16">
    <!-- Vine Leaf Decorative Elements -->
    <div class="vine-cluster top-left"></div>
    <div class="vine-cluster top-right"></div>
    <div class="vine-cluster left-mid"></div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Back to Home -->
      <button 
        @click="$emit('close')" 
        class="mb-12 group inline-flex items-center gap-3 px-6 py-3 border border-neon/30 bg-neon/5 hover:bg-neon/10 transition-all rounded-full"
      >
        <span class="text-neon font-mono text-xs tracking-widest uppercase">← Back to Homepage</span>
      </button>

      <!-- Header -->
      <header class="mb-20">
        <div class="flex items-center gap-4 mb-4">
          <div class="text-2xl font-mono text-neon tracking-[0.3em] uppercase">The HOP Glossary</div>
        </div>
        <h1 class="text-4xl md:text-5xl font-light text-primary mb-8 leading-tight italic font-serif">
          A Peer’s Guide to the Fabric
        </h1>
        <p class="text-secondary text-lg max-w-2xl leading-relaxed">
          The lexicon of the Health Oracle Protocol. Understanding these terms is the first step in navigating the Boreal environment and reclaiming biological sovereignty.
        </p>
      </header>

      <!-- Glossary Table -->
      <div class="glossary-container border border-pine/20 rounded-2xl bg-pine/5 backdrop-blur-sm overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-pine/20 bg-pine/10">
          <div class="p-6 text-xs font-mono text-neon uppercase tracking-widest">Term</div>
          <div class="p-6 text-xs font-mono text-neon uppercase tracking-widest border-l border-pine/20 hidden md:block">Definition</div>
        </div>

        <div v-for="(item, index) in glossaryItems" :key="index" 
             class="grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-pine/10 last:border-0 hover:bg-neon/5 transition-colors group">
          <div class="p-6 text-primary font-medium font-mono text-sm self-start group-hover:text-neon transition-colors">
            {{ item.term }}
          </div>
          <div class="p-6 text-secondary text-sm leading-relaxed border-l border-pine/20 font-serif md:font-sans">
            <span class="block md:hidden text-[10px] font-mono text-neon/60 uppercase mb-2 tracking-widest">Definition</span>
            {{ item.definition }}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-20 pt-12 border-t border-pine/20 text-center">
        <p class="text-secondary/60 text-xs font-mono uppercase tracking-[0.2em]">
          Health Oracle Protocol // Continuous Evolution
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])

const glossaryItems = [
  {
    term: "Baseline of Zero",
    definition: "The state of uncorrupted, raw biological truth before any external interpretation or centralized bias is applied. The starting point for all Sovereign metadata."
  },
  {
    term: "BeeBee",
    definition: "The \"Translator\" agent. A local-first conversational interface that digests Cues and converts complex biological resonance into human-navigable insights."
  },
  {
    term: "BentoBox (BentoBoxDS)",
    definition: "The cellular container of the Peer. A local-first, sovereign boundary where a Peer curates their unique selection of \"Data Nutrition\" across four scales (Now/Future/Peer/Community)."
  },
  {
    term: "Besearch Cycle",
    definition: "The 4-stage metabolic loop (Context → Research → Search → Emulation) used to evolve \"New Science\" tailored specifically to a Peer’s unique biological signature."
  },
  {
    term: "Bring to Be",
    definition: "The act of moving a configuration or \"Lego Brick\" from the theoretical Library into a functional, localized existence within the PeerStack."
  },
  {
    term: "Coherence Ledger",
    definition: "The \"Spine\" of the protocol. A digital immune system that uses sampling proofs of evidence to anchor every Besearch Cycle in immutable truth."
  },
  {
    term: "Consilience Weave",
    definition: "The mathematical fabric that allows for a cascade of updates across the network without central oversight, maintaining stability through controlled feedback loops."
  },
  {
    term: "cueCube",
    definition: "A dense, cryptographic \"Lego Brick\" of truth used to emulate health outcomes in the physical before they manifest. A navigation stone for the future."
  },
  {
    term: "Cues",
    definition: "The primary units of computational knowledge. Signed, resonant threads of data that act as the \"Guide Book\" for navigating the Fabric."
  },
  {
    term: "Digital Immune System",
    definition: "The protective layer of the Coherence Ledger that filters out uncorrupted data and ensures the integrity of the Peer’s sovereign sanctuary."
  },
  {
    term: "HeliClock",
    definition: "The mathematical peg driven into the ground of geometry. It provides the rhythmic ResonancePulse that synchronizes the Fabric and guides NEAT-HOP searches."
  },
  {
    term: "HOP (Health Oracle Protocol)",
    definition: "The underlying physics and P2P tapestry of the network. It treats every biological signal as a thread of sovereign truth."
  },
  {
    term: "Levin Bubble Sort",
    definition: "A localized sorting mechanism (prominent in v2) that prioritizes the most \"nutritional\" and coherent Cues, bringing the most relevant medicine to the surface."
  },
  {
    term: "NEAT-HOP",
    definition: "The evolutionary engine that searches the space of biological solutions to create \"New Science\" tailored to the Peer's context."
  },
  {
    term: "Peer / Peers",
    definition: "The sovereign entities that make up the network. There are no \"users\" in HOP; only Peers who clone, calibrate, and contribute to the weave."
  },
  {
    term: "PeerStack",
    definition: "The localized suite of tools (BeeBee, BentoBox, Ledger) that enables a Peer to experience the Fabric on their own hardware."
  },
  {
    term: "ResonAgents",
    definition: "Tiny, localized learning agents that work in concert with the HeliClock to emulate health outcomes and maintain the Consilience Weave."
  },
  {
    term: "SafeFlow-ECS",
    definition: "The \"Heart\" of the system. An Entity Component System that manages the flow of biological signals into signed, cryptographic records."
  },
  {
    term: "Sensing Skin",
    definition: "The decentralized inflow of raw data from the \"Urban Mine\" (sensors, devices, BeeBee conversations) before it is processed by the Ledger."
  },
  {
    term: "Sovereign Skeleton",
    definition: "The mathematical and cryptographic framework (Merkle trees, Hyperbees, Secure IDs) that ensures Peer ownership and privacy."
  },
  {
    term: "The Boreal",
    definition: "The conceptual \"living forest\" environment where the Fabric is grown—characterized by local-first sovereignty and biological harmony."
  },
  { term: "Levin Complexity (Levin Search)",
    definition: "The mathematical foundation for the v2 Bubble Sort. It ensures that the \"Search\" stage of a Besearch Cycle prioritizes solutions that are not only computationally efficient but biologically \"simplest\" and most likely to be true."
  },
  {
    term: "Von Mises Distribution",
    definition:	"The Circular Compass of the HeliClock. Unlike linear statistics, this math accounts for the rhythmic, periodic nature of biological life (cycles, pulses, and phases). It is the geometry used to calculate Consilience."
  }
]
</script>

<style scoped>
.glossary-page {
  z-index: 100;
}

/* Vine Leaf Clusters */
.vine-cluster {
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234ade8022'%3E%3Cpath d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
}

.top-left {
  top: -40px;
  left: -40px;
  transform: rotate(-15deg);
}

.top-right {
  top: 40px;
  right: -80px;
  transform: rotate(45deg) scale(1.5);
  opacity: 0.3;
}

.left-mid {
  top: 40%;
  left: -100px;
  transform: rotate(-90deg) scale(2);
  opacity: 0.2;
}

.glossary-container {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

/* Custom scrollbar for the page */
.glossary-page::-webkit-scrollbar {
  width: 6px;
}

.glossary-page::-webkit-scrollbar-track {
  background: #06110e;
}

.glossary-page::-webkit-scrollbar-thumb {
  background: rgba(74, 222, 128, 0.2);
  border-radius: 3px;
}

.glossary-page::-webkit-scrollbar-thumb:hover {
  background: rgba(74, 222, 128, 0.4);
}
</style>