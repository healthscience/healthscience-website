<template>
  <div class="p-6 md:p-12 bg-forest/20 min-h-screen text-primary font-sans">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <header class="mb-16 border-b border-neon/20 pb-12">
        <div class="text-xs font-mono text-neon mb-4 tracking-[0.3em] uppercase">High-Intelligence Tier</div>
        <h1 class="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          The <span class="font-bold italic text-neon">ResonAgent</span> Frontier
        </h1>
        <p class="text-xl text-secondary/80 max-w-3xl leading-relaxed">
          Mapping the Latent Space of Health through Topological Agency and Multi-scale Competency.
        </p>
      </header>

      <!-- Scientific Brief -->
      <section class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-medium mb-6">The Scientific Brief</h2>
          <p class="text-secondary leading-relaxed mb-6">
            Every biological signal is a "pointer" to a state-space. A heartbeat is not just a number; it is a trajectory through a physiological manifold.
          </p>
          <div class="p-6 bg-pine/5 border-l-2 border-neon rounded-r-xl">
            <p class="text-sm italic text-primary/90">
              "We are not measuring the body. We are building the periscope to see the intelligence already at work within it."
            </p>
          </div>
        </div>
        <div class="space-y-6">
          <div class="p-6 border border-pine/20 rounded-xl">
            <h3 class="text-neon font-mono text-xs uppercase mb-2">The Goal</h3>
            <p class="text-sm text-secondary/80">Create a "Thin Client" interface that allows a biological substrate (The Peer) to access and visualize its own internal goal-directedness.</p>
          </div>
          <div class="p-6 border border-pine/20 rounded-xl">
            <h3 class="text-neon font-mono text-xs uppercase mb-2">The Framework</h3>
            <p class="text-sm text-secondary/80">Use TAME (Technological Approach to Mind Everywhere) principles to treat the heart, gut, or nervous system as a collective intelligence.</p>
          </div>
        </div>
      </section>

      <!-- Mathematical Foundations -->
      <section class="mb-20">
        <h2 class="text-3xl font-light mb-10 border-l-4 border-neon pl-6">The Mathematics of Resonance</h2>
        
        <div class="p-8 bg-neon/5 border border-neon/20 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="max-w-xl">
            <h3 class="text-xl font-bold text-neon mb-2 uppercase tracking-wider">"Hello Geometry" Playground</h3>
            <p class="text-secondary/80 text-sm leading-relaxed">
              Don't take our word for it. Author a pulse right now in our browser-based sandbox. No setup required.
            </p>
          </div>
          <button 
            @click="$emit('open-playground')"
            class="px-8 py-3 bg-neon text-forest font-bold rounded-lg hover:scale-105 transition-all uppercase tracking-widest text-xs whitespace-nowrap"
          >
            Open Playground
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="p-8 bg-forest/40 border border-pine/20 rounded-2xl">
            <h3 class="text-xl font-bold mb-4 text-neon">1. SafeFlow-ECS</h3>
            <p class="text-sm text-secondary/80 leading-relaxed mb-4">Our physics engine uses an Entity Component System (ECS) to handle multi-scale competency.</p>
            <ul class="text-xs space-y-2 text-secondary/60 font-mono">
              <li><span class="text-pine">ENTITY:</span> Biological agent (Cell, Heart, Peer).</li>
              <li><span class="text-pine">COMPONENT:</span> Physiological state (HRV, Glucose).</li>
              <li><span class="text-pine">SYSTEM:</span> SafeFlow state machine transitions.</li>
            </ul>
          </div>
          <div class="p-8 bg-forest/40 border border-pine/20 rounded-2xl">
            <h3 class="text-xl font-bold mb-4 text-neon">2. Topological Agency</h3>
            <p class="text-sm text-secondary/80 leading-relaxed mb-4">Mapping the Cognitive Light Cone where biological systems "solve problems."</p>
            <ul class="text-xs space-y-2 text-secondary/60 font-mono">
              <li><span class="text-pine">INPUT:</span> Sparse, sovereign biological Cues.</li>
              <li><span class="text-pine">MAPPING:</span> Phase-Space Attractor translation.</li>
              <li><span class="text-pine">VISUAL:</span> Von Mises distributions & Torus geometry.</li>
            </ul>
          </div>
        </div>

        <!-- Code Block -->
        <div class="mb-12">
          <div class="flex items-center justify-between bg-pine/20 px-6 py-3 rounded-t-xl border-x border-t border-pine/30">
            <span class="text-xs font-mono text-pine uppercase tracking-widest">The Developer's Skeleton (Vanilla JS)</span>
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-pine/30"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-pine/30"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-pine/30"></div>
            </div>
          </div>
          <pre class="bg-forest/60 p-8 rounded-b-xl border border-pine/30 overflow-x-auto text-sm font-mono text-primary/90 leading-relaxed">
/**
 * MISSION: Map Heart-Rate Variability (HRV) to a 3D Geometry.
 * SCALE: Individual (Cell/Community).
 */
const HRV_ResonAgent = {
  // 1. Authoring the Lens (The 3 C's)
  processCue(pulse) {
    const capacity = pulse.peakAmplitude; // The 'Battery'
    const coherence = calculatePhaseLock(pulse.intervals); // The 'Compass'
    return { capacity, coherence };
  },

  // 2. Mapping to Geometry (Mind is Everywhere)
  onRender(ctx, state) {
    // Map 'Coherence' to the rotation of a Toroid primitive
    const geometry = bento.primitives.torus({
      thickness: state.capacity,
      resonance: state.coherence
    });
    
    geometry.render(ctx); // Visualizing the 'Warm Geometry'
  }
};</pre>
        </div>
      </section>

      <!-- Mapping Missions -->
      <section class="mb-20">
        <h2 class="text-2xl font-mono text-neon uppercase tracking-widest mb-10 text-center">Strategic Mapping Missions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="m in missions" :key="m.title" class="p-8 bg-forest/40 border border-pine/10 rounded-2xl hover:border-neon/40 transition-all group">
            <div class="text-3xl mb-6 group-hover:scale-110 transition-transform">{{ m.icon }}</div>
            <h3 class="text-xl font-bold mb-4">{{ m.title }}</h3>
            <div class="mb-6">
              <div class="text-[10px] font-mono text-pine uppercase mb-2">Mathematical Challenge</div>
              <p class="text-xs text-secondary leading-relaxed">{{ m.math }}</p>
            </div>
            <div>
              <div class="text-[10px] font-mono text-pine uppercase mb-2">Biological Lens</div>
              <p class="text-xs text-primary font-medium">{{ m.lens }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Specs -->
      <section class="mb-20 p-8 bg-pine/5 rounded-3xl border border-pine/10">
        <h2 class="text-2xl font-medium mb-8">Technical Specs for the ResonAgent Peer</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="spec in specs" :key="spec.title">
            <h4 class="text-neon font-mono text-xs uppercase mb-3">{{ spec.title }}</h4>
            <p class="text-sm text-secondary/70 leading-relaxed">{{ spec.desc }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <footer class="text-center py-12 border-t border-pine/20">
        <div class="flex flex-wrap justify-center gap-6">
          <button class="px-10 py-4 bg-neon text-forest font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all uppercase tracking-widest text-sm">
            Join the ResonAgent Frontier
          </button>
          <button class="px-10 py-4 border border-neon text-neon font-bold rounded-full hover:bg-neon/10 transition-all uppercase tracking-widest text-sm">
            Read: TAME & Basal Cognition
          </button>
        </div>
        <div class="mt-12 flex justify-center gap-8 text-[10px] font-mono text-pine uppercase tracking-widest">
          <a href="#" class="hover:text-neon transition-colors">Mathematical Whitepaper</a>
          <a href="#" class="hover:text-neon transition-colors">GitHub Skeleton</a>
          <a href="#" class="hover:text-neon transition-colors">P2P Besearch Lab</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-playground'])
const missions = [
  {
    icon: '🌀',
    title: 'I. The Morphogenetic Orbit',
    math: 'Map HRV and Bioelectric signals into a 3D limit-cycle. How does "Coherence" look as a stable attractor?',
    lens: 'Cell/Organ: Basal agency of the heart.'
  },
  {
    icon: '🧬',
    title: 'II. The Metabolic Manifold',
    math: 'Translate glucose, light, and activity into a search-space. Where is the "Homeostatic Goal"?',
    lens: 'Community: Collective energy sync.'
  },
  {
    icon: '🌍',
    title: 'III. The Gaia Resonance',
    math: 'Align individual ultradian rhythms with the HeliClock. Visualize "Phase-Coupling" with the Bioregion.',
    lens: 'Continent: Planetary entrainment.'
  }
]

const specs = [
  { title: 'No Black Boxes', desc: 'We Author Emulations based on first principles (Bioelectricity, Circadian Rhythms, Metabolic Flux).' },
  { title: 'Geometric Primitives', desc: 'Work with the BentoBox Geometry Library—translating scalars into pulses, waves, and toroids.' },
  { title: 'Local-First Physics', desc: 'Your agent must run in a Zero-Knowledge environment. Math must prove itself locally.' }
]
</script>
