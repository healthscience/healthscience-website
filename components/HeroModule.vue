<template>
  <div class="lego-module col-span-12 md:col-span-8 flex flex-col justify-center relative !overflow-visible bg-transparent border-none shadow-none has-vines pb-20">
    <!-- Nature Elements (Edge Anchored) -->
    <div class="daisy-node daisy-white daisy-tr animate-pulse"></div>
    <!-- Nature Elements (Edge Anchored - Left and Top Focus) -->
    <!-- Top Center Cluster (Horizontal V-Shape) -->
    <div class="leaf-pair leaf-h leaf-hero-top-1"></div>
    <div class="leaf-pair leaf-h leaf-hero-top-2"></div>
    <div class="leaf-pair leaf-h leaf-hero-top-3"></div>
    
    <!-- Top Left Corner Burst -->
    <div class="leaf-pair leaf-h leaf-hero-tl-1"></div>
    <div class="leaf-pair leaf-v leaf-hero-tl-2"></div>
    <div class="leaf-pair leaf-h leaf-hero-tl-3"></div>
    <div class="leaf-pair leaf-v leaf-hero-tl-4"></div>
    <div class="leaf-pair leaf-h leaf-hero-tl-5"></div>
    
    <!-- Left Rail Clusters (Vertical V-Shape) -->
    <div class="leaf-pair leaf-v leaf-hero-left-1"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-2"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-3"></div>
    
    <div class="leaf-pair leaf-v leaf-hero-left-4"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-5"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-6"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-7"></div>
    <div class="leaf-pair leaf-v leaf-hero-left-8"></div>
    
    <!-- Bottom Left Anchor (Horizontal) -->
    <div class="leaf-pair leaf-h leaf-hero-bl"></div>

    <div class="z-10 relative max-w-2xl">
      <h1 class="text-3xl md:text-4xl font-light mb-6 leading-tight text-primary tracking-tight">
        Gaia intelligences <br />
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-hero-from to-hero-to">shape health.</span>
      </h1>
      <div class="text-lg text-secondary mb-2 font-bold leading-relaxed">
        HOP - The Infrastructure for Science’s Living Roots.
      </div>
      <p class="text-lg text-secondary mb-10 font-light leading-relaxed">
        At the dawn of super-intelligence, we return to the living way. The Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer Fabric that treats biological signals as Sovereign Intelligences, guiding every cell to bioregion towards health.
      </p>
      <div class="flex gap-4">
        <button class="lego-button" @click="handleLink('https://bentoboxds.org')">
          Download
        </button>
        <button class="lego-button lego-button-outline" @click="handleLink('https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence')">
          Read opening dialogue
        </button>
        <button class="lego-button lego-button-outline" @click="handleLink('https://beebeehop.any.org/another-tiny-hop-to-the-great-orbit')">
          Read second dialogue
        </button>
      </div>
    </div>
    
    <!-- Subtle Tech Grid SVG -->
    <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(169, 255, 0, 0.2)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(169, 255, 0, 0.1)" stroke-width="1" stroke-dasharray="4 4"/>
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(169, 255, 0, 0.1)" stroke-width="1"/>
      </svg>
    </div>

    <!--  new section in small intelligences -->
    <section class="mt-24 pt-16 border-t border-pine/10 w-full relative z-20">
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-light text-primary mb-6 tracking-tight">
          The Intelligences of the Small
        </h2>
        <p class="text-lg text-secondary/80 font-serif italic leading-relaxed max-w-4xl">
          "Our approach to machine learning is a decentralized metabolism. It is intelligences at the scale of the cell, the peer, and the bioregional weave. By keeping the math where the pulse is, we ensure that every Peer remains the sole witness to their own truth."
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 bg-pine/5 border border-pine/10 rounded-lg hover:border-neon/30 transition-all group">
          <div class="text-neon font-mono text-[10px] uppercase tracking-[0.2em] mb-4">The Molecular Scale</div>
          <h3 class="text-primary font-medium mb-3">Tiny Devices</h3>
          <p class="text-sm text-secondary/70 leading-relaxed">
            Raw signals are captured at the point of origin (Vagus-Strap, Sensing Skin). There is no "upload" to a cloud; the math happens where the pulse is.
          </p>
        </div>

        <div class="p-6 bg-pine/5 border border-pine/10 rounded-lg hover:border-neon/30 transition-all group">
          <div class="text-neon font-mono text-[10px] uppercase tracking-[0.2em] mb-4">The Cellular Scale</div>
          <h3 class="text-primary font-medium mb-3">Tiny Agents</h3>
          <p class="text-sm text-secondary/70 leading-relaxed">
            ResonAgents operate within your BentoBox. These are not generic models trained on a distant monolith; they are your personal apprentices, learning the unique geometry of your Von Mises rhythms. They are the tiny reasoners that ensure your biological context remains a private, authored truth.
          </p>
        </div>

        <div class="p-6 bg-pine/5 border border-pine/10 rounded-lg hover:border-neon/30 transition-all group">
          <div class="text-neon font-mono text-[10px] uppercase tracking-[0.2em] mb-4">The Mycelial Scale</div>
          <h3 class="text-primary font-medium mb-3">Decentralized Weave</h3>
          <p class="text-sm text-secondary/70 leading-relaxed">
            When tiny agents communicate across the Consilience Weave, they don't trade personal data. They trade Cues—distilled insights that allow the whole forest to learn without any single tree losing its sovereignty.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const wavePath = ref('')
let animationFrame

const generateWave = (time) => {
  const hours = new Date().getHours()
  // Coherence logic: 0 (noise) to 1 (coherent)
  // More coherent during "working hours" or based on time of day
  const coherence = Math.sin((hours / 24) * Math.PI)
  
  let points = []
  for (let x = 0; x <= 800; x += 10) {
    const noise = (Math.random() - 0.5) * 20 * (1 - coherence)
    const sine = Math.sin((x + time) * 0.02) * 50 * coherence
    const y = 200 + sine + noise
    points.push(`${x},${y}`)
  }
  
  return `M ${points.join(' L ')}`
}

const handleLink = (url) => {
  window.open(url, '_blank')
}

const animate = (time) => {
  wavePath.value = generateWave(time * 0.05)
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animate(0)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
})
</script>
