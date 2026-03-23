<template>
  <div class="lego-module col-span-12 md:col-span-4 bg-forest/20 flex flex-col p-8 border-l border-pine/20">
    <div class="mb-8">
      <h3 class="text-neon font-mono text-xs tracking-widest uppercase mb-4">The Universal Port</h3>
      <p class="text-primary text-lg font-medium leading-tight mb-4">
        Don't just send data. <br/>
        <span class="text-neon">Snap your project</span> into the HOP environment.
      </p>
    </div>

    <div class="space-y-6 mb-8">
      <div v-for="world in worlds" :key="world.title" class="group cursor-help">
        <div class="flex items-center gap-3 mb-2">
          <div class="w-1 h-4 bg-pine/40 group-hover:bg-neon transition-colors"></div>
          <h4 class="text-primary font-mono text-sm uppercase tracking-wider">{{ world.title }}</h4>
        </div>
        <p class="text-secondary/60 text-xs leading-relaxed pl-4 border-l border-pine/10">
          {{ world.description }}
        </p>
      </div>
    </div>

    <div class="mt-auto pt-6 border-t border-pine/10">
      <div class="grid grid-cols-3 gap-2 mb-6">
        <div v-for="entry in entries" :key="entry.label" class="text-center">
          <div class="text-[10px] font-mono text-pine mb-1 uppercase">{{ entry.label }}</div>
          <div class="text-[10px] text-secondary/40 leading-tight">{{ entry.hook }}</div>
        </div>
      </div>
      
      <button 
        @click="$emit('open-docs')"
        class="w-full py-3 border border-neon/50 text-neon hover:bg-neon/10 transition-all rounded-lg text-xs font-mono tracking-widest uppercase"
      >
        Access Agent Plugins
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-docs'])
const worlds = [
  {
    title: 'The Earth World',
    description: 'Spatial Sovereignty: OpenDroneMap & P2P Maps. Snap to the OSM grid as Environment Agents.'
  },
  {
    title: 'The Body World',
    description: 'Biological Resonance: Anny & Z-Anatomy. Map metabolic "Cues" to the 3D visual skeleton.'
  },
  {
    title: 'The Device World',
    description: 'Open Hardware: TINY Devices (ESP32/Arduino). Pulse signed data directly to the swarm.'
  }
]

const entries = [
  { label: 'The Agent', hook: '.onRender() hook' },
  { label: 'The Model', hook: 'cueCube manifest' },
  { label: 'The Bridge', hook: 'Native Handshake' }
]
</script>
