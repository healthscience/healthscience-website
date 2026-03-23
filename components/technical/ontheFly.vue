<template>
  <div class="p-6 md:p-12 bg-forest/20 min-h-screen text-primary font-sans">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <header class="mb-16">
        <div class="text-xs font-mono text-neon mb-4 tracking-[0.3em] uppercase">The PeerStack</div>
        <h1 class="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          Experience <span class="font-bold italic text-neon">On the Fly</span>
        </h1>
        <p class="text-xl text-secondary/80 max-w-3xl leading-relaxed">
          In a PeerStack, there is no central authority. Your local node assembles an Emulation by snapping together independent Agents based on your current biological and environmental coordinates.
        </p>
      </header>

      <!-- Architecture Section -->
      <section class="mb-20">
        <h2 class="text-2xl font-medium mb-8 border-b border-pine/20 pb-4">The Architecture: Skeleton & Agents</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-6">
            <p class="text-secondary leading-relaxed">
              The HOP Skeleton provides the "Physics Engine" (Time, Space, and Body), while fellow projects contribute Agents that provide the "Motive Force."
            </p>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="feature in features" :key="feature.title" class="p-4 bg-pine/5 border border-pine/10 rounded-lg">
                <h4 class="text-neon font-mono text-[10px] uppercase mb-1">{{ feature.title }}</h4>
                <p class="text-xs text-secondary/70">{{ feature.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Code Block -->
          <div class="w-full">
            <div class="flex items-center justify-between bg-pine/20 px-4 py-2 rounded-t-lg border-x border-t border-pine/30">
              <span class="text-[10px] font-mono text-pine uppercase tracking-widest">PeerStack Agent Architecture (Vanilla JS)</span>
            </div>
            <pre class="bg-forest/60 p-6 rounded-b-lg border border-pine/30 overflow-x-auto text-xs font-mono text-primary/80 leading-relaxed">
const MySovereignAgent = {
  // 1. THE HOOK: Snap to a layer
  snap: {
    layer: "Environment", // Or "Biological", "Temporal"
    priority: "resonance-sync"
  },

  // 2. THE LOGIC: Runs locally
  onPulse(context) {
    const { heliAngle, userCapacity } = context;
    if (heliAngle > 30 && heliAngle < 60) {
      this.emitResonance("gold-spectrum");
    }
  },

  // 3. THE VISUAL: Render to BentoLens
  onRender(ctx, world) {
    drawSovereignGeometry(ctx, world.origin);
  }
};

peerStack.register(MySovereignAgent);</pre>
          </div>
        </div>
      </section>

      <!-- Strategic Examples -->
      <section class="mb-20">
        <h2 class="text-2xl font-mono text-neon uppercase tracking-widest mb-10">Strategic Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="ex in examples" :key="ex.title" class="p-8 bg-forest/40 border border-pine/10 rounded-2xl hover:border-neon/30 transition-all">
            <div class="text-xs font-mono text-pine mb-4 uppercase tracking-widest">{{ ex.layer }}</div>
            <h3 class="text-2xl font-bold mb-4">{{ ex.title }}</h3>
            <p class="text-sm text-secondary/70 mb-6 leading-relaxed">{{ ex.goal }}</p>
            <div class="space-y-4 border-t border-pine/10 pt-6">
              <div v-for="(val, key) in ex.details" :key="key">
                <div class="text-[10px] font-mono text-neon uppercase mb-1">{{ key }}</div>
                <p class="text-xs text-primary/90">{{ val }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why PeerStack -->
      <section class="mb-20 p-10 bg-neon/5 rounded-3xl border border-neon/20">
        <h2 class="text-2xl font-medium mb-8 text-center">Why the PeerStack wins</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-neon text-2xl mb-4">🛡️</div>
            <h4 class="font-bold mb-2">Sovereign Composition</h4>
            <p class="text-xs text-secondary/70">No "installs". Your node assembles agents from the Hyperswarm based on your needs.</p>
          </div>
          <div class="text-center">
            <div class="text-neon text-2xl mb-4">💻</div>
            <h4 class="font-bold mb-2">Local Execution</h4>
            <p class="text-xs text-secondary/70">The math for your Vitamin D or 3D home never leaves your hardware.</p>
          </div>
          <div class="text-center">
            <div class="text-neon text-2xl mb-4">🤝</div>
            <h4 class="font-bold mb-2">Collaborative Physics</h4>
            <p class="text-xs text-secondary/70">Agents talk to each other locally without a cloud intermediary.</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center py-12 border-t border-pine/20">
        <h3 class="text-xl font-light mb-8">Ready to build the next layer?</h3>
        <button class="px-10 py-4 bg-neon text-forest font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all uppercase tracking-widest text-sm">
          Become a PeerStack Contributor
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
const features = [
  { title: 'Sovereign', desc: 'No central authority. You own the stack.' },
  { title: 'Modular', desc: 'Snap agents together like Lego.' },
  { title: 'Local-First', desc: 'Zero-knowledge execution on your node.' }
]

const examples = [
  {
    layer: 'Environment Layer',
    title: 'Algotecture',
    goal: 'Turning local P2P map data into a 3D sovereign environment.',
    details: {
      Context: 'PeerStack pulls the OSM-P2P skeleton at your coordinates.',
      Agent: 'Detects footprints and generates 3D "Warm Geometry" on the fly.',
      Integration: 'Queries HeliClock for sun position to cast accurate shadows.'
    }
  },
  {
    layer: 'Temporal Layer',
    title: 'Vitamin D Heli-Sync',
    goal: 'Aligning planetary solar cycles with individual biological capacity.',
    details: {
      Context: 'HeliClock shows the sun approaching the "Golden Window".',
      Agent: 'Checks your Cue Space for skin type and recent exposure.',
      Integration: 'Visualizes the optimal 15-minute window for synthesis.'
    }
  }
]
</script>
