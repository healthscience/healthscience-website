<template>
  <div class="lego-module col-span-12 md:col-span-8 h-[60vh] flex flex-col justify-center relative overflow-hidden bg-transparent border-none shadow-none">
    <div class="z-10 relative max-w-2xl">
      <h1 class="text-3xl md:text-4xl font-light mb-6 leading-tight text-primary tracking-tight">
        Gaia intelligences <br />
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-hero-from to-hero-to">shape health.</span>
      </h1>
      <p class="text-lg text-secondary mb-10 font-light leading-relaxed">
        HOP - The Infrastructure for Science’s Living Roots.

        At the dawn of super-intelligence, the Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer framework that treats biological signals as sovereign intelligence, guiding every cell toward measurable health.

        In place of abstracted datasets, HOP establishes the Coherence Ledger and SafeFlow-ECS: a decentralized engine that anchors trust in the rhythmic reality of the cell, the Peer, and the bioregion. This is the Sovereign Skeleton—the high-resolution architecture that powers the PeerStack and enables a biological experience on the fly.
      </p>
      <div class="flex gap-4">
        <button class="lego-button" @click="handleLink('#')">
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
