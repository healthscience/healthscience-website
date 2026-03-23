<template>
  <div class="p-6 md:p-12 bg-forest/10 min-h-screen text-primary font-sans">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <header class="mb-16">
        <h1 class="text-4xl md:text-6xl font-light mb-6 tracking-tight">
          The <span class="font-bold text-neon">Universal Port</span>
        </h1>
        <p class="text-xl text-secondary/80 max-w-2xl leading-relaxed">
          We aren't asking you to help us build an app. We are asking you to use our physics engine to build your own world.
        </p>
      </header>

      <!-- Engagement Map -->
      <section class="mb-20">
        <h2 class="text-2xl font-mono text-neon uppercase tracking-widest mb-8">Current Research Frontiers</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-pine/30 text-left text-xs font-mono text-pine uppercase tracking-wider">
                <th class="py-4 px-4">Priority</th>
                <th class="py-4 px-4">Frontier</th>
                <th class="py-4 px-4">Target Contributor</th>
                <th class="py-4 px-4">Strategic Mission</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr 
                v-for="f in frontiers" 
                :key="f.id" 
                class="border-b border-pine/10 hover:bg-pine/5 transition-colors cursor-pointer"
                @click="f.id === '01' ? $emit('open-reson') : null"
              >
                <td class="py-6 px-4 font-mono text-neon">{{ f.id }}</td>
                <td class="py-6 px-4 font-bold">{{ f.name }}</td>
                <td class="py-6 px-4 text-secondary">{{ f.target }}</td>
                <td class="py-6 px-4 text-secondary/80">{{ f.mission }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Detailed Engagements -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="e in engagements" 
          :key="e.title" 
          class="p-8 border border-pine/20 rounded-xl bg-pine/5 hover:border-neon/40 transition-all cursor-pointer group"
          @click="e.tag === 'The Bridge' ? $emit('open-onthefly') : (e.tag === 'Body World' ? $emit('open-reson') : null)"
        >
          <div class="text-xs font-mono text-neon mb-4 uppercase tracking-widest">{{ e.tag }}</div>
          <h3 class="text-2xl font-medium mb-4">{{ e.title }}</h3>
          <p class="text-secondary/70 text-sm leading-relaxed mb-6">{{ e.description }}</p>
          <div class="space-y-4">
            <div>
              <div class="text-[10px] font-mono text-pine uppercase mb-1">The Ask</div>
              <div class="text-xs text-primary">{{ e.ask }}</div>
            </div>
            <div>
              <div class="text-[10px] font-mono text-pine uppercase mb-1">Strategic Value</div>
              <div class="text-xs text-primary">{{ e.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seeking Prototype Box -->
      <div class="p-8 border-2 border-neon/30 rounded-2xl bg-neon/5 backdrop-blur-md relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-10">
          <div class="w-32 h-32 rounded-full border-8 border-neon"></div>
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-neon mb-4">Seeking Prototype</h3>
          <p class="text-lg text-primary/90 mb-6 max-w-2xl">
            "We are currently seeking the first ResonAgent to map HRV (Heart Rate Variability) to a 3D geometry. If you speak 'Mind is Everywhere' and 'Vanilla JS,' help us trace the first heartbeat on the map."
          </p>
          <button class="px-8 py-3 bg-neon text-forest font-bold rounded-lg hover:bg-neon/80 transition-all uppercase tracking-widest text-sm">
            Apply to the Frontier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-reson', 'open-onthefly'])
const frontiers = [
  { id: '01', name: 'The ResonAgent', target: 'Bio-Math / 3D Devs', mission: 'Map the first "Cue" to a living 3D geometry.' },
  { id: '02', name: 'Native Handshake', target: 'Open Hardware / C++', mission: 'Build the "Zero-Setup" bridge for TINY devices.' },
  { id: '03', name: 'Bioregional Lens', target: 'GIS / Drone Mapping', mission: 'Overlay "Gaia Intelligences" onto the local OSM grid.' }
]

const engagements = [
  {
    tag: 'Body World',
    title: 'The ResonAgent',
    description: 'Connect a simple heartbeat (BPM) to a 3D Z-Anatomy model so that the heart pulses in real-time on the BentoLens.',
    ask: 'Peers who understand Basal Cognition or Biological Math to build the first "mapping" agents.',
    value: 'Provides the "Aha!" moment of seeing your own rhythm moving a 3D model on a private local-first screen.'
  },
  {
    tag: 'The Bridge',
    title: 'TINY Devices',
    description: 'A simple ESP32-based light sensor or heart-rate strap that sends a raw, signed pulse to the local HOP node.',
    ask: 'Hardware hackers to build the first "Open Ports."',
    value: 'Proves the Local-First and Sovereign nature of the hardware. No cloud, no account.'
  },
  {
    tag: 'Context',
    title: 'The Earth World',
    description: 'High-bandwidth projects like Drone Photogrammetry that provide the terrain and environmental context.',
    ask: 'GIS and Drone Mapping specialists to snap local garden or river data into the map.',
    value: 'Grows organically as the Body and Device layers stabilize, allowing peers to navigate their bioregion.'
  }
]
</script>
