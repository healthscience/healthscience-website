<template>
  <div class="lego-module col-span-12 md:col-span-8 h-[60vh] flex flex-col justify-center relative">
    <div class="z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Gaia intelligences <br />
        <span class="text-neon">shape health.</span>
      </h1>
      <p class="text-xl text-pine uppercase tracking-widest">
        A Biological Navigation System for Sovereign Health.
      </p>
    </div>
    
    <!-- ResonancePulse SVG -->
    <div class="absolute inset-0 opacity-30 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
        <path 
          :d="wavePath" 
          fill="none" 
          stroke="#a9ff00" 
          stroke-width="2"
          class="transition-all duration-1000 ease-in-out"
        />
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
