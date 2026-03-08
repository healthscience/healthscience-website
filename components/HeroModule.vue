<template>
  <div class="lego-module col-span-12 md:col-span-8 h-[60vh] flex flex-col justify-center relative overflow-hidden bg-transparent border-none shadow-none">
    <div class="z-10 relative max-w-2xl">
      <div class="inline-block px-3 py-1 border border-pine/50 rounded-full text-xs font-mono text-pine mb-6 bg-pine/5">
        HOP PROTOCOL v1.0
      </div>
      <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight text-white tracking-tight">
        Gaia intelligences <br />
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">shape health.</span>
      </h1>
      <p class="text-lg text-gray-400 mb-10 font-light leading-relaxed">
        A Biological Navigation System for Sovereign Health. Built on mathematics, not middlemen.
      </p>
      <div class="flex gap-4">
        <button class="lego-button">
          Initialize Node
        </button>
        <button class="lego-button lego-button-outline">
          Read Whitepaper
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
