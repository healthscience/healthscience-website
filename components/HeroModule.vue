<template>
  <div class="lego-module col-span-12 md:col-span-8 h-[60vh] flex flex-col justify-center relative !overflow-visible bg-transparent border-none shadow-none has-vines">
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
        At the dawn of super-intelligence, we return to the living way. The Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer Fabric that treats biological signals as Sovereign Intelligence, guiding every cell to bioregion towards health.
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
