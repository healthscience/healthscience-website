<template>
  <div 
    class="documentation-panel h-full bg-forest/95 border-l border-pine/40 backdrop-blur-xl overflow-y-auto transform transition-all duration-500 z-40"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    :style="{ width: panelWidth }"
  >
    <div v-if="node" class="p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h3 class="text-2xl font-bold text-primary">{{ node.data.label }}</h3>
          <span class="text-secondary/50 text-sm">{{ node.id }}</span>
        </div>
        <button 
          @click="$emit('close')" 
          class="text-secondary/50 hover:text-neon transition-colors p-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Layer Badge -->
      <div class="mb-6">
        <span 
          class="px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-full border"
          :class="layerBadgeClass"
        >
          {{ node.data.layer }} Layer
        </span>
      </div>
      
      <!-- Logic Description -->
      <p class="text-secondary/90 leading-relaxed mb-8">{{ node.data.logic }}</p>
      
      <!-- Coupling Section -->
      <div v-if="node.data.coupling && node.data.coupling.length > 0" class="mb-8">
        <h4 class="text-neon font-mono text-sm mb-3 uppercase tracking-widest">Coupling</h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="coupledId in node.data.coupling" 
            :key="coupledId"
            class="px-2 py-1 bg-pine/20 text-secondary/70 text-xs font-mono rounded border border-pine/30"
          >
            {{ coupledId }}
          </span>
        </div>
      </div>
      
      <!-- Code Snippet -->
      <div v-if="node.data.codeSnippet" class="mb-8">
        <h4 class="text-neon font-mono text-sm mb-3 uppercase tracking-widest">Code Snippet</h4>
        <CodeSnap :code="node.data.codeSnippet" />
      </div>
      
      <!-- Manifest / Supply Chain -->
      <div v-if="node.data.manifest" class="mb-8">
        <SupplyChainTile :manifest="node.data.manifest" />
      </div>
      
      <!-- Actions -->
      <div class="mt-8 pt-8 border-t border-pine/30 space-y-3">
        <button 
          @click="$emit('open-playground')" 
          class="w-full py-3 bg-neon/10 hover:bg-neon/20 border border-neon/50 text-neon font-mono uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
        >
          <span>Test in Playground</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
        
        <button 
          @click="$emit('add-to-workspace')" 
          class="w-full py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/50 text-amber-500 font-mono uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
        >
          <span>Add to Workspace</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
      
      <!-- Node Position Debug (dev only) -->
      <div class="mt-8 pt-4 border-t border-pine/20">
        <div class="text-[10px] font-mono text-secondary/40">
          <div>Position: {{ node.position?.x }}, {{ node.position?.y }}</div>
          <div>Type: {{ node.type }}</div>
        </div>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else class="p-6 flex flex-col items-center justify-center h-full text-center">
      <div class="w-16 h-16 mb-4 text-pine/30">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
      <p class="text-secondary/50 text-sm">Select a node to view documentation</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CodeSnap from './CodeSnap.vue';
import SupplyChainTile from './SupplyChainTile.vue';

const props = defineProps({
  node: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  isFocusMode: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close', 'open-playground', 'add-to-workspace']);

const panelWidth = computed(() => {
  return props.isFocusMode ? '60vw' : '24rem'; // 384px default
});

const layerBadgeClass = computed(() => {
  if (!props.node?.data?.layer) return 'bg-pine/20 text-pine border-pine/30';
  
  switch (props.node.data.layer) {
    case 'foundation':
      return 'bg-amber-500/20 text-amber-500 border-amber-500/30';
    case 'engine':
      return 'bg-neon/20 text-neon border-neon/30';
    case 'fabric':
      return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
    case 'example':
      return 'bg-neon/20 text-neon border-neon/30';
    default:
      return 'bg-pine/20 text-pine border-pine/30';
  }
});
</script>

<style scoped>
.documentation-panel {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

/* Transition for smooth slide */
.translate-x-full {
  transform: translateX(100%);
}

.translate-x-0 {
  transform: translateX(0);
}
</style>
