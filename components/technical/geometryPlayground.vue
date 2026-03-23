<template>
  <div class="relative w-full h-screen bg-[#0a0a0a] text-[#00ffcc] font-mono overflow-hidden">
    <!-- Overlay UI -->
    <div class="absolute top-8 left-8 z-20 pointer-events-none">
      <h2 class="text-2xl font-bold tracking-widest mb-2">RESON-AGENT: INITIALIZING...</h2>
      <p class="text-xs opacity-60 mb-4">SOURCE: [BIOLOGICAL_PULSE_EMULATION]</p>
      <div class="flex items-center gap-4">
        <div class="px-3 py-1 border border-[#00ffcc]/30 rounded text-sm">
          COHERENCE: {{ coherence.toFixed(4) }}
        </div>
        <div class="px-3 py-1 border border-[#00ffcc]/30 rounded text-sm">
          CAPACITY: {{ capacity.toFixed(2) }}
        </div>
      </div>
    </div>

    <!-- Canvas -->
    <canvas ref="canvasRef" class="block w-full h-full"></canvas>

    <!-- Code Boilerplate Info -->
    <div class="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
      <div class="max-w-md p-6 bg-black/60 backdrop-blur-md border border-[#00ffcc]/20 rounded-xl">
        <h3 class="text-sm font-bold mb-2 uppercase tracking-wider">"Hello Geometry" Playground</h3>
        <p class="text-xs text-[#00ffcc]/70 leading-relaxed mb-4">
          This is the Zero-Draft Mode for development. Replace the <code class="text-[#00ffcc]">resonAgent</code> function with your own mapping for a 'Stressed' vs 'Coherent' heart.
        </p>
        <div class="flex gap-4">
          <button class="text-[10px] border border-[#00ffcc] px-3 py-1 rounded hover:bg-[#00ffcc]/10 transition-colors">DOWNLOAD PLAYGROUND.HTML</button>
          <button class="text-[10px] border border-[#00ffcc] px-3 py-1 rounded hover:bg-[#00ffcc]/10 transition-colors">OPEN IN WEB EDITOR</button>
        </div>
      </div>
      <div class="text-[10px] opacity-40 text-right">
        BENTOBOX_DS // GEOMETRY_ENGINE_V1.0<br/>
        HOP_STATE_MACHINE_ACTIVE
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const coherence = ref(0)
const capacity = ref(0)
let frame = 0
let animationFrameId = null

// --- THE RESON-AGENT MATH (The Boilerplate) ---
function resonAgent(time, pulse) {
  // Mapping a pulse to a "Warm Geometry" (Torus-like)
  const cap = Math.sin(time * 0.05) * 50 + 100
  const coh = Math.cos(time * 0.02)
  return { capacity: cap, coherence: coh }
}

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  const { capacity: cap, coherence: coh } = resonAgent(frame, 1.0)
  
  coherence.value = coh
  capacity.value = cap

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.translate(canvas.width / 2, canvas.height / 2)

  // Render the "Skeleton" of the pulse
  ctx.beginPath()
  for (let i = 0; i < Math.PI * 2; i += 0.1) {
    const x = Math.cos(i) * (cap + (Math.sin(i * 10 + frame * 0.1) * 10 * coh))
    const y = Math.sin(i) * (cap + (Math.cos(i * 10 + frame * 0.1) * 10 * coh))
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.strokeStyle = `rgba(0, 255, 204, ${0.5 + coh * 0.5})`
  ctx.lineWidth = 2
  ctx.stroke()

  frame++
  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  draw()
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>
