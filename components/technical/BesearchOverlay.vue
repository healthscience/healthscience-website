<template>
  <div class="besearch-overlay absolute inset-0 pointer-events-none z-50 flex items-center justify-center" v-if="isActive">
    <div class="absolute inset-0 bg-forest/80 backdrop-blur-sm transition-opacity duration-1000" :class="{ 'opacity-0': !isActive }"></div>
    
    <div class="relative z-10 max-w-2xl w-full p-8 border border-neon/30 rounded-2xl bg-pine/10 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.1)]">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-primary tracking-widest uppercase">The Besearch Pulse</h2>
        <div class="w-4 h-4 rounded-full animate-ping" :class="stageColor"></div>
      </div>

      <div class="space-y-6">
        <!-- Stage 1 -->
        <div class="flex items-start gap-4 transition-all duration-500" :class="{ 'opacity-30': currentStage < 1, 'scale-105': currentStage === 1 }">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border" :class="currentStage >= 1 ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 'bg-pine/20 border-pine text-pine'">1</div>
          <div>
            <h3 class="text-lg font-medium" :class="currentStage >= 1 ? 'text-amber-500' : 'text-secondary/50'">The Contextual Anchor</h3>
            <p class="text-sm italic mt-1" :class="currentStage >= 1 ? 'text-secondary/90' : 'text-secondary/40'">Originating from Master Key & HeliClock. Grounding in the Cell.</p>
          </div>
        </div>

        <!-- Stage 2 -->
        <div class="flex items-start gap-4 transition-all duration-500" :class="{ 'opacity-30': currentStage < 2, 'scale-105': currentStage === 2 }">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border" :class="currentStage >= 2 ? 'bg-white/20 border-white text-white' : 'bg-pine/20 border-pine text-pine'">2</div>
          <div>
            <h3 class="text-lg font-medium" :class="currentStage >= 2 ? 'text-white' : 'text-secondary/50'">The Knowledge Grounding</h3>
            <p class="text-sm italic mt-1" :class="currentStage >= 2 ? 'text-secondary/90' : 'text-secondary/40'">Querying the Library. Changing color to Bone White.</p>
          </div>
        </div>

        <!-- Stage 3 -->
        <div class="flex items-start gap-4 transition-all duration-500" :class="{ 'opacity-30': currentStage < 3, 'scale-105': currentStage === 3 }">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border" :class="currentStage >= 3 ? 'bg-purple-500/20 border-purple-500 text-purple-500' : 'bg-pine/20 border-pine text-pine'">3</div>
          <div>
            <h3 class="text-lg font-medium" :class="currentStage >= 3 ? 'text-purple-500' : 'text-secondary/50'">The Evolutionary Search</h3>
            <p class="text-sm italic mt-1" :class="currentStage >= 3 ? 'text-secondary/90' : 'text-secondary/40'">Scattering into neural-network pattern at NEAT-HOP.</p>
          </div>
        </div>

        <!-- Stage 4 -->
        <div class="flex items-start gap-4 transition-all duration-500" :class="{ 'opacity-30': currentStage < 4, 'scale-105': currentStage === 4 }">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border" :class="currentStage >= 4 ? 'bg-neon/20 border-neon text-neon' : 'bg-pine/20 border-pine text-pine'">4</div>
          <div>
            <h3 class="text-lg font-medium" :class="currentStage >= 4 ? 'text-neon' : 'text-secondary/50'">The Decision Model</h3>
            <p class="text-sm italic mt-1" :class="currentStage >= 4 ? 'text-secondary/90' : 'text-secondary/40'">Reconvening at Coherence Ledger. Emitting Cyan Glow.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  currentStage: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['complete']);

const stageColor = computed(() => {
  switch (props.currentStage) {
    case 1: return 'bg-amber-500';
    case 2: return 'bg-white';
    case 3: return 'bg-purple-500';
    case 4: return 'bg-neon';
    default: return 'bg-transparent';
  }
});
</script>
