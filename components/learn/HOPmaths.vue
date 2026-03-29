<template>
  <div class="maths-page min-h-screen bg-forest text-primary font-sans relative overflow-hidden p-8 md:p-16">
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
          <div class="text-2xl font-mono text-neon tracking-[0.3em] uppercase">HOP Mathematics</div>
        </div>
        <h1 class="text-4xl md:text-5xl font-light text-primary mb-8 leading-tight italic font-serif">
          Von Mises: The Mathematics of the Circle
        </h1>
        <p class="text-secondary text-lg max-w-3xl leading-relaxed">
          In the Boreal, we don't just measure "when" an event happens; we measure its Phase. The Von Mises distribution (often called the "Circular Normal" distribution) is the essential toolkit for a Digital Immune System that understands rhythm.
        </p>
      </header>

      <!-- Formula Section -->
      <div class="formula-container mb-20 p-8 md:p-12 border border-neon/30 rounded-2xl bg-pine/10 backdrop-blur-md relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#4ade80" stroke-width="0.5" stroke-dasharray="2 2" />
            <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="#4ade80" stroke-width="2" />
          </svg>
        </div>
        
        <div class="flex flex-col items-center justify-center space-y-8">
          <div class="text-3xl md:text-4xl font-mono text-neon tracking-wider text-center">
            f(x | μ, κ) = <span class="fraction"><span>e<sup>κ cos(x - μ)</sup></span><span class="separator"></span><span>2π I₀(κ)</span></span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
            <div class="parameter-card p-6 border border-pine/20 rounded-xl bg-forest/40">
              <div class="text-neon font-mono text-xl mb-2">μ</div>
              <div class="text-primary font-medium mb-1">The Mean Direction</div>
              <p class="text-xs text-secondary leading-relaxed">In the Besearch Cycle, this is the "Target Resonance"—the peak of the biological cycle (e.g., the optimal point of a Vagus-Strap pulse).</p>
            </div>
            <div class="parameter-card p-6 border border-pine/20 rounded-xl bg-forest/40">
              <div class="text-neon font-mono text-xl mb-2">κ</div>
              <div class="text-primary font-medium mb-1">Concentration</div>
              <p class="text-xs text-secondary leading-relaxed">This is the "Strength of the Pulse." A high κ means the Peer is tightly locked into a rhythmic baseline; a low κ signals "Noise" or biological stress.</p>
            </div>
            <div class="parameter-card p-6 border border-pine/20 rounded-xl bg-forest/40">
              <div class="text-neon font-mono text-xl mb-2">I₀(κ)</div>
              <div class="text-primary font-medium mb-1">Bessel Function</div>
              <p class="text-xs text-secondary leading-relaxed">The modified Bessel function of the first kind, ensuring the total probability around the circle always equals 1.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Role in Fabric -->
      <section class="space-y-16">
        <h2 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-12 border-b border-pine/20 pb-4">The Role in the HOP Fabric</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-light text-primary">I. The HeliClock & ResonancePulse</h3>
            <p class="text-secondary leading-relaxed font-serif">
              The HeliClock uses Von Mises math to calculate the Coherence of the swarm. Instead of averaging disparate data points, the Consilience Weave calculates the circular mean of Peers. This prevents the "feedback loop" failure of linear systems, allowing the network to stay in sync without running out of control.
            </p>
          </div>
          <div class="diagram-box p-8 border border-pine/20 rounded-2xl bg-pine/5 flex items-center justify-center">
             <svg width="200" height="200" viewBox="0 0 400 400" class="heli-viz">
                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(74, 222, 128, 0.1)" stroke-width="1" />
                <g class="von-mises-layer" transform="translate(200, 200)">
                  <path d="M -120 0 A 120 120 0 0 1 120 0" class="v-mises-arc" />
                  <line x1="0" y1="0" x2="0" y2="-140" class="mean-vector" />
                </g>
             </svg>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div class="diagram-box p-8 border border-pine/20 rounded-2xl bg-pine/5 flex items-center justify-center order-2 md:order-1">
            <div class="neat-viz relative w-48 h-48">
              <div class="absolute inset-0 border-2 border-neon/20 rounded-full animate-ping"></div>
              <div class="absolute inset-4 border border-neon/40 rounded-full animate-pulse"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-2 h-2 bg-neon rounded-full shadow-[0_0_15px_#4ade80]"></div>
              </div>
            </div>
          </div>
          <div class="space-y-6 order-1 md:order-2">
            <h3 class="text-2xl font-light text-primary">II. NEAT-HOP & The Geometry of Search</h3>
            <p class="text-secondary leading-relaxed font-serif">
              When NEAT-HOP searches the space of solutions (Stage 3 of the Besearch Cycle), it isn't looking for a "high score" in a linear database. It is looking for Directional Convergence. It uses Von Mises to determine if a new "Lego Brick" of science aligns with the Peer's existing biological phase.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-light text-primary">III. Levin Bubble Sort (v2) Integration</h3>
            <p class="text-secondary leading-relaxed font-serif">
              In the browser-based environment, the Levin Bubble Sort uses the κ (concentration) value to bubble the most "coherent" Cues to the top. If a piece of knowledge doesn't fit the circular geometry of the Peer's current state, it is filtered out by the Digital Immune System.
            </p>
          </div>
          <div class="bubble-sort-viz p-8 border border-pine/20 rounded-2xl bg-pine/5 space-y-4">
            <div v-for="i in 3" :key="i" class="h-10 border border-neon/30 rounded bg-neon/5 flex items-center px-4" :style="{ opacity: 1 - (i-1)*0.3, transform: `translateX(${(i-1)*10}px)` }">
               <div class="w-2 h-2 rounded-full bg-neon mr-3"></div>
               <div class="h-1 w-24 bg-neon/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Kilo Spec -->
      <div class="mt-20 p-8 border-l-4 border-neon bg-pine/10">
        <h4 class="text-neon font-mono text-xs uppercase tracking-widest mb-4">Kilo SVG Spec: The Circular Logic</h4>
        <p class="text-secondary text-sm italic font-serif leading-relaxed">
          Kilo should visualize this by adding a "Probability Cloud" around the HeliClock in the anatomy diagram, showing the Von Mises distribution as a glowing arc that shifts as the Peer's context changes.
        </p>
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
</script>

<style scoped>
.maths-page {
  z-index: 100;
}

.fraction {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
  align-items: center;
  font-size: 0.6em;
  margin: 0 0.2em;
}

.fraction .separator {
  width: 100%;
  height: 1px;
  background: #4ade80;
  margin: 2px 0;
}

/* SVG Styles */
.v-mises-arc {
  fill: none;
  stroke: rgba(74, 222, 128, 0.4);
  stroke-width: 15;
  stroke-linecap: round;
  filter: drop-shadow(0 0 8px #4ade80);
}

.mean-vector {
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 5, 2;
  animation: rotate-vector 10s linear infinite;
  transform-origin: center;
}

@keyframes rotate-vector {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.heli-viz {
  filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.2));
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

.top-left { top: -40px; left: -40px; transform: rotate(-15deg); }
.top-right { top: 40px; right: -80px; transform: rotate(45deg) scale(1.5); opacity: 0.3; }
.left-mid { top: 40%; left: -100px; transform: rotate(-90deg) scale(2); opacity: 0.2; }

/* Custom scrollbar */
.maths-page::-webkit-scrollbar { width: 6px; }
.maths-page::-webkit-scrollbar-track { background: #06110e; }
.maths-page::-webkit-scrollbar-thumb { background: rgba(74, 222, 128, 0.2); border-radius: 3px; }
.maths-page::-webkit-scrollbar-thumb:hover { background: rgba(74, 222, 128, 0.4); }
</style>
