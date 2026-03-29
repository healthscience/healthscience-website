<template>
  <section class="snap-section p-4 md:p-12 relative z-10 bg-forest/40 border-y border-pine/20 overflow-hidden text-primary">
    <div class="w-full max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="mb-16">
        <div class="flex items-center gap-4 mb-4">
          <div class="text-2xl font-mono text-neon tracking-[0.3em] uppercase">Cues & Besearch</div>
        </div>
        <h2 class="text-xl md:text-3xl font-light text-primary mb-8 leading-tight italic font-serif">
          The Metabolism of Knowledge
        </h2>
        <div class="max-w-4xl space-y-6">
          <p class="text-secondary leading-relaxed">
            A Cue is a unit of computational knowledge—a dense, signed Lego Brick carrying the resonance of biological truth. If the PeerStack is a vessel, Cues act as the Guide Book. This living knowledge is established through the <span class="text-neon font-mono text-sm uppercase">Coherence Ledger</span>—the Spine of the entire protocol.
          </p>
        </div>
      </div>

      <!-- 4-Section Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20 items-stretch">
        
        <!-- Top Left: Besearch Cycle -->
        <div class="lego-module p-6 lg:p-8 bg-pine/5 border-pine/30 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-light text-primary mb-4">The Besearch Cycle: Science in Motion</h3>
            <p class="text-secondary text-sm leading-relaxed italic font-serif mb-6">Knowledge is a metabolic loop. This 4-stage engine transforms raw signals into a future path:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(stage, idx) in besearchStages" :key="idx" class="p-3 border border-pine/20 rounded bg-forest/20">
                <div class="text-neon font-mono text-[10px] mb-1 uppercase tracking-widest">{{ idx + 1 }}. {{ stage.name }}</div>
                <p class="text-[10px] text-secondary/80 leading-relaxed">{{ stage.details }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Right: Coherence Ledger -->
        <div class="lego-module p-6 lg:p-8 bg-pine/5 border-pine/30 flex flex-col justify-between">
          <div>
            <h3 class="text-xs font-mono text-neon uppercase tracking-[0.2em] mb-6">The Coherence Ledger: A Digital Immune System</h3>
            <div class="space-y-6">
              <div>
                <span class="text-primary font-medium block mb-2 font-mono text-sm uppercase tracking-wider">The Spine:</span>
                <p class="text-secondary text-sm leading-relaxed">Every Besearch Cycle is etched here, ensuring that the "Best Guess" and the "New Science" remain mathematically consistent with the Peer's context.</p>
              </div>
              <div>
                <span class="text-primary font-medium block mb-2 font-mono text-sm uppercase tracking-wider">The Filter:</span>
                <p class="text-secondary text-sm leading-relaxed">By requiring a baseline of evidence for every update, the Ledger prevents uncorrupted data from entering the weave, maintaining a sovereign sanctuary for the cell.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Left: Consilience Weave -->
        <div class="lego-module p-6 lg:p-8 bg-pine/5 border-pine/30 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-light text-primary mb-6">The Consilience Weave: Cascades & Balance</h3>
            <div class="space-y-6">
              <p class="text-secondary text-sm leading-relaxed">
                To ensure the Fabric remains stable, the Consilience Weave utilizes a sophisticated cascade of updates.
              </p>
              <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                <div class="space-y-2">
                   <span class="text-primary font-medium block font-mono text-xs uppercase">Levin Bubble Sort (v2):</span> 
                   <p class="text-xs text-secondary/80 leading-relaxed">In the browser-based environment, a Levin-inspired sort prioritizes the most "nutritional" and coherent Cues, ensuring the most relevant medicine rises to the surface.</p>
                </div>
                <div class="space-y-2">
                  <span class="text-primary font-medium block font-mono text-xs uppercase">Controlled Feedback:</span>
                  <p class="text-xs text-secondary/80 leading-relaxed">The math of the Weave allows for a rapid cascade of updates across the Peer network without running out of control. It prevents the endless feedback loops that plague centralized systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Right: Diagram -->
        <div class="flex items-center justify-center">
          <div class="anatomy-container bento-node w-full h-full min-h-[400px] flex flex-col">
            <svg viewBox="0 0 900 600" class="fabric-svg flex-1" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                <pattern id="weavePattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M0 7h15M7 0v15" stroke="rgba(74, 222, 128, 0.15)" stroke-width="0.5"/>
                </pattern>
              </defs>

              <g class="spine-group">
                <line x1="450" y1="50" x2="450" y2="520" class="spine-line" filter="url(#glow)" />
                <circle cx="450" cy="120" r="6" class="proof-node" />
                <circle cx="450" cy="240" r="6" class="proof-node" />
                <circle cx="450" cy="360" r="6" class="proof-node" />
                <text x="465" y="80" class="label-sub">Digital Immune System</text>
              </g>

              <g class="heart-core">
                <rect x="350" y="140" width="200" height="200" rx="100" fill="url(#weavePattern)" stroke="rgba(74, 222, 128, 0.3)" />
                <g transform="translate(450, 240) scale(0.7)">
                   <ellipse cx="0" cy="0" rx="40" ry="80" stroke="#801b5a" stroke-width="7" fill="none" />
                   <circle cx="0" cy="-30" r="45" stroke="#b31a00" stroke-width="7" fill="none" />
                </g>
                <text x="450" y="360" class="label-main">SafeFlow-ECS</text>
              </g>

              <g class="besearch-group" transform="translate(450, 480)">
                <g transform="translate(-180, 0)">
                  <circle r="12" class="besearch-icon stage-1" />
                  <text y="30" class="icon-label">1. Context</text>
                </g>
                <g transform="translate(-60, 0)">
                  <circle r="12" class="besearch-icon stage-2" />
                  <text y="30" class="icon-label">2. Research</text>
                </g>
                <g transform="translate(60, 0)">
                  <circle r="12" class="besearch-icon stage-3" />
                  <text y="30" class="icon-label">3. Search</text>
                </g>
                <g transform="translate(180, 0)">
                  <circle r="12" class="besearch-icon stage-4" />
                  <text y="30" class="icon-label">4. Emulation</text>
                </g>
                <path d="M-180 -20 Q0 -80 180 -20" fill="none" stroke="rgba(74, 222, 128, 0.2)" stroke-dasharray="5,5" />
              </g>

              <path d="M100 240 Q250 240 350 240" class="filament-path pulse-left" />
              <text x="100" y="220" class="label-sub">Sensing Skin (BentoBox/Bio)</text>
              
              <path d="M550 240 Q700 240 800 240" class="filament-path pulse-right" />
              <text x="800" y="220" class="label-sub" text-anchor="end">Living Mind (BeeBee/ResonAgents)</text>
            </svg>

            <div class="diagram-footer mt-4 text-center">
              <button class="btn-playground group inline-flex items-center gap-3 px-6 py-3 border border-neon/50 bg-neon/5 hover:bg-neon/10 transition-all rounded-full">
                <span class="daisy-world"></span>
                <span class="text-neon font-mono text-xs tracking-widest uppercase">Explore the Playground</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Section 5: The HeliClock -->
        <div class="lego-module p-6 lg:p-8 bg-pine/5 border-pine/30 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-light text-primary mb-6">The HeliClock: The Mathematics of Resonance</h3>
            <div class="space-y-6">
              <p class="text-secondary text-sm leading-relaxed italic font-serif">
                At the center of every Besearch Cycle sits the HeliClock. This is the peg we’ve driven deep into the ground of geometry. It provides the rhythmic baseline for the entire protocol.
              </p>
              <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                <div class="space-y-2">
                   <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">ResonancePulse:</span> 
                   <p class="text-xs text-secondary/80 leading-relaxed">The HeliClock isn't a standard timer; it is a mathematical clock that tracks the "Phase" of biological systems. It ensures that the Consilience Weave remains in sync across the swarm.</p>
                </div>
                <div class="space-y-2">
                  <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">The Geometry of Time:</span>
                  <p class="text-xs text-secondary/80 leading-relaxed">By grounding the protocol in the physics of the HeliClock, we move away from "linear data" and into Geometric Resonance. This allows the NEAT-HOP search to find solutions that aren't just statistically likely, but biologically harmonious.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 6: The Sovereign Skeleton -->
        <div class="lego-module p-6 lg:p-8 bg-pine/5 border-pine/30 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-light text-primary mb-6">The Sovereign Skeleton: Cryptography as Skin</h3>
            <div class="space-y-6">
              <p class="text-secondary text-sm leading-relaxed italic font-serif">
                The Fabric of Gaia Intelligence is held together by a Sovereign Skeleton of mathematics. This isn't just about "security"—it is about Identity and Integrity.
              </p>
              <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                <div class="space-y-2">
                   <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">The Merkle-Spine (Hyperbees):</span> 
                   <p class="text-xs text-secondary/80 leading-relaxed">Your data isn't a messy file; it’s a structured, cryptographic tree. Every pulse is hashed and signed, allowing for rapid, local-first search and retrieval without ever exposing the root to the swarm.</p>
                </div>
                <div class="space-y-2">
                  <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">Swarm Noise & Privacy:</span>
                  <p class="text-xs text-secondary/80 leading-relaxed">We use Noise-protocol handshakes and peer-to-peer encryption to ensure that when Peers "resonate," they do so in a private sanctuary.</p>
                </div>
                <div class="space-y-2">
                  <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">Account Identity:</span>
                  <p class="text-xs text-secondary/80 leading-relaxed">You are not a username on a server. You are a Key. Your Secure ID is the mathematical root of your existence in the fabric, giving you total ownership of your BentoBox.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Repository of Truth Section -->
    <div class="mt-20 pt-12 border-t border-pine/20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div class="max-w-xl">
            <h3 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-4">The Repository of Truth</h3>
            <p class="text-secondary text-sm leading-relaxed italic font-serif">
              Everything discussed on the site is backed by open, verifiable code and deep documentation. This signals that our foundations are grounded in the "Repository of Truth."
            </p>
            <div class="flex gap-4 mt-6">
              <button 
                @click="$emit('open-glossary')"
                class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded hover:bg-neon/10 transition-all"
              >
                Explore the Glossary
              </button>
              <button 
                @click="$emit('open-maths')"
                class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded hover:bg-neon/10 transition-all"
              >
                View Maths
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
            <a href="https://github.com/healthscience" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block">
              <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Repository</div>
              <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">github.com/healthscience</div>
              <p class="text-[10px] text-secondary/70 leading-relaxed">The raw mechanics of the Fabric, SafeFlow-ECS, and the PeerStack.</p>
            </a>
            
            <a href="https://bentobox-ds.gitbook.io" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block">
              <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Specification</div>
              <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">bentobox-ds.gitbook.io</div>
              <p class="text-[10px] text-secondary/70 leading-relaxed">The deep-dive documentation for BentoBoxDS and the Health Oracle Protocol.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-glossary', 'open-maths'])

const besearchStages = [
  { name: 'Context', details: 'A Peer brings unique biological data (The "Now Me" information) as the starting context.' },
  { name: 'Research', details: 'Identifies the best existing knowledge from the Library of Bricks to establish a resonant starting point.' },
  { name: 'Search', details: 'NEAT-HOP exploration. Where "New Science" is evolved, tailored to the Peer’s unique signature.' },
  { name: 'Emulation', details: 'Projects results forward, allowing a Peer to navigate health by seeing the future before living it.' }
]
</script>

<style scoped>
.anatomy-container {
  background: #0a1914;
  border: 1px solid rgba(74, 222, 128, 0.1);
  border-radius: 12px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.fabric-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* The Spine and Weave */
.spine-line { stroke: #4ade80; stroke-width: 3; stroke-linecap: round; }
.proof-node { fill: #fff; animation: blink 3s infinite; }

/* Besearch Cycles - The 'Blue' Heartbeat */
.besearch-icon {
  fill: #5c6bc0; /* The Bearch Hue */
  filter: drop-shadow(0 0 5px #5c6bc0);
}

.stage-1 { animation: pulse 2s infinite 0s; }
.stage-2 { animation: pulse 2s infinite 0.5s; }
.stage-3 { animation: pulse 2s infinite 1s; }
.stage-4 { animation: pulse 2s infinite 1.5s; }

/* Labels */
.label-main { fill: #f0fdf4; font-size: 16px; font-weight: bold; text-anchor: middle; font-family: 'Inter', sans-serif; }
.label-sub { fill: #4ade80; font-size: 12px; font-family: 'Mono', monospace; opacity: 0.8; }
.icon-label { fill: #f0fdf4; font-size: 10px; text-anchor: middle; font-family: 'Mono', monospace; }

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
}

@keyframes blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Filament Pulses */
.filament-path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 2;
  stroke-dasharray: 8, 12;
  animation: flow 20s linear infinite;
}

@keyframes flow {
  to { stroke-dashoffset: -500; }
}

.daisy-world {
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  position: relative;
}

.daisy-world::before {
  content: '';
  position: absolute;
  inset: 2px;
  border: 1px solid #4ade80;
  border-radius: 50%;
  background: #0a1914;
}

.btn-playground:hover .daisy-world {
  box-shadow: 0 0 10px #4ade80;
}
</style>
