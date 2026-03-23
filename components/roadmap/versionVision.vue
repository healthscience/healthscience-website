<template>
  <div class="min-h-screen bg-forest p-8 md:p-16 text-primary font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-16 border-b border-neon/20 pb-8">
        <div class="text-xs font-mono text-neon mb-4 tracking-[0.3em] uppercase">The Orbital Arcs</div>
        <h2 class="text-4xl md:text-6xl font-light mb-4">A Woodland <span class="font-bold italic">Evolution</span></h2>
        <p class="text-secondary text-lg max-w-2xl italic">
          The shift from Caledonian to Boreal is defined by the removal of abstraction. We move from drawing a representation of data to rendering the data itself.
        </p>
      </div>

      <!-- Roadmap Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- V1: Caledonian -->
        <div class="lego-module border-pine/30 bg-pine/5 hover:border-neon/40 transition-all duration-500 flex flex-col">
          <div class="flex justify-between items-start mb-6">
            <span class="text-5xl font-light text-neon/20 font-mono">V1</span>
            <span class="px-2 py-1 text-[10px] font-mono border border-neon/20 text-neon uppercase tracking-tighter">Caledonian</span>
          </div>
          <h3 class="text-2xl font-medium mb-2">The Native Seed</h3>
          <div class="text-xs font-mono text-pine mb-6 uppercase tracking-widest">Focus: Local-First Stability</div>
          
          <div class="space-y-6 flex-grow">
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Metaphor</h4>
              <p class="text-sm text-secondary leading-relaxed">Regional, native woodland. Rugged, deep-rooted, and essential for the local soil.</p>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Tech</h4>
              <ul class="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>Core BentoBoxDS schema & Sovereign Shell</li>
                <li>Decoupled Engine (Simulation Proxy)</li>
                <li>Universal Component Schema (JS)</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Experience</h4>
              <p class="text-sm text-secondary leading-relaxed">Establishing your Sovereign Archive. Planting the native forest, scouting local "Ghosts".</p>
            </div>
          </div>
        </div>

        <!-- V2: Boreal / Taiga -->
        <div class="lego-module border-neon/30 bg-neon/5 hover:border-neon/60 transition-all duration-500 flex flex-col relative overflow-hidden">
          <div class="absolute top-0 right-0 p-2">
            <div class="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
          </div>
          <div class="flex justify-between items-start mb-6">
            <span class="text-5xl font-light text-neon/40 font-mono">V2</span>
            <span class="px-2 py-1 text-[10px] font-mono border border-neon/40 text-neon uppercase tracking-tighter">Boreal / Taiga</span>
          </div>
          <h3 class="text-2xl font-medium mb-2">The Great Connection</h3>
          <div class="text-xs font-mono text-neon mb-6 uppercase tracking-widest">Focus: bare.js Integration</div>
          
          <div class="space-y-6 flex-grow">
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Metaphor</h4>
              <p class="text-sm text-secondary leading-relaxed">The vast Boreal forest that circles the Earth. A resilient, interconnected belt of life.</p>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Tech</h4>
              <ul class="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>Collapse of the Middleware</li>
                <li>SafeFlow-ECS as Authority</li>
                <li>Consilience Weave (P2P Node)</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Experience</h4>
              <p class="text-sm text-secondary leading-relaxed">Total fluidity. Heli-Clock sees other pulses. Transition from "Simulation" to "Direct Emulation".</p>
            </div>
          </div>
        </div>

        <!-- V3: Rainforest -->
        <div class="lego-module border-pine/30 bg-pine/5 hover:border-neon/40 transition-all duration-500 flex flex-col">
          <div class="flex justify-between items-start mb-6">
            <span class="text-5xl font-light text-neon/20 font-mono">V3</span>
            <span class="px-2 py-1 text-[10px] font-mono border border-neon/20 text-neon uppercase tracking-tighter">Rainforest</span>
          </div>
          <h3 class="text-2xl font-medium mb-2">The Abundant Intelligence</h3>
          <div class="text-xs font-mono text-pine mb-6 uppercase tracking-widest">Focus: 3D Geometric Emulation</div>
          
          <div class="space-y-6 flex-grow">
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Metaphor</h4>
              <p class="text-sm text-secondary leading-relaxed">The most complex and abundant ecosystem. Every layer is teeming with life and feedback loops.</p>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Tech</h4>
              <ul class="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>ResonAgents & NEAT-HOP</li>
                <li>Life-Strap Unified View (3D Orrery)</li>
                <li>Cryptographic Flow (Collective Intelligence)</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-mono text-neon/60 uppercase mb-2">The Experience</h4>
              <p class="text-sm text-secondary leading-relaxed">Resonance Pulse becomes a multidimensional heatmap. Conscious node in a thriving planetary ecosystem.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="mt-16 p-6 border border-neon/20 rounded-xl bg-pine/5 backdrop-blur-sm max-w-3xl">
        <h4 class="text-sm font-mono text-neon uppercase mb-2">Architectural Note (V2 Transition)</h4>
        <p class="text-secondary text-sm leading-relaxed italic">
          The Universal Component Schema is the bridge that makes this "Bare-Logic" possible. We move from drawing a representation of data to rendering the data itself.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed for now
</script>

<style scoped>
.lego-module {
  @apply p-8 border rounded-2xl backdrop-blur-sm;
}
</style>
