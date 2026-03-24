<template>
  <div 
    class="expandable-module border rounded-lg backdrop-blur-sm transition-all duration-500"
    :class="nodeClasses"
    :style="nodeStyle"
  >
    <!-- Cyan Ripple Effect (Stage 1) -->
    <div v-if="isActive && currentStage === 1" class="ripple-container">
      <div class="ripple-ring"></div>
      <div class="ripple-ring ripple-ring-delay"></div>
    </div>

    <!-- Neural Jitter Effect (Stage 3) -->
    <div :class="{ 'neural-jitter': isActive && currentStage === 3 }">
      <!-- Header -->
      <div class="flex items-center justify-between mb-2">
        <h4 class="text-primary font-medium text-sm">{{ data.label }}</h4>
        <div class="w-2 h-2 rounded-full" :class="layerColor"></div>
      </div>
      
      <!-- Brief Logic (always visible) -->
      <p class="text-secondary/70 text-xs mb-3 line-clamp-2">{{ data.logic }}</p>
      
      <!-- Expanded Content (visible when active or focused) -->
      <div v-if="isActive || isFocused" class="expanded-content">
        <div v-if="data.codeSnippet" class="code-section mt-3 p-3 bg-pine/20 rounded border border-pine/30">
          <pre class="text-neon text-[10px] font-mono overflow-x-auto"><code>{{ data.codeSnippet }}</code></pre>
        </div>
        
        <div v-if="data.manifest" class="manifest-section mt-3">
          <h5 class="text-amber-500 text-[10px] font-mono uppercase tracking-widest mb-2">Manifest</h5>
          <ul class="space-y-1">
            <li v-for="(item, idx) in data.manifest" :key="idx" class="text-secondary/60 text-[10px]">
              <span class="text-amber-500/70">{{ item.component }}:</span> {{ item.source }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Tags -->
      <div class="flex gap-2 mt-2">
        <span v-if="data.codeSnippet" class="px-2 py-1 bg-pine/20 text-neon text-[9px] font-mono rounded">CODE</span>
        <span v-if="data.manifest" class="px-2 py-1 bg-pine/20 text-neon text-[9px] font-mono rounded">MANIFEST</span>
        <span v-if="isActive" class="px-2 py-1 bg-amber-500/20 text-amber-500 text-[9px] font-mono rounded animate-pulse">ACTIVE</span>
      </div>
    </div>

    <!-- Bone White Flash (Stage 4) -->
    <div v-if="isActive && currentStage === 4" class="bone-flash"></div>

    <!-- Vue Flow Handles -->
    <Handle type="target" position="top" class="w-2 h-2 bg-pine border-none" />
    <Handle type="source" position="bottom" class="w-2 h-2 bg-pine border-none" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Handle } from '@vue-flow/core';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isFocused: {
    type: Boolean,
    default: false
  },
  currentStage: {
    type: Number,
    default: 0
  }
});

const nodeStyle = computed(() => ({
  width: props.isActive ? '500px' : '220px',
  zIndex: props.isActive ? 100 : 1,
  minWidth: '220px',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
}));

const nodeClasses = computed(() => {
  const classes = [];
  
  // Base classes
  classes.push('p-4 bg-forest/80 border border-pine/30');
  
  // Highlight state
  if (props.data.isHighlighted) {
    classes.push('border-neon/60 shadow-[0_0_15px_rgba(0,255,255,0.2)]');
  }
  
  // Active state (Besearch Pulse)
  if (props.isActive) {
    classes.push('border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.3)] scale-105');
  }
  
  // Focused state (selected)
  if (props.isFocused) {
    classes.push('border-neon shadow-[0_0_50px_rgba(0,255,255,0.4)]');
  }
  
  return classes.join(' ');
});

const layerColor = computed(() => {
  switch (props.data.layer) {
    case 'foundation': return 'bg-amber-500/80';
    case 'engine': return 'bg-neon/80';
    case 'fabric': return 'bg-purple-500/80';
    default: return 'bg-pine';
  }
});
</script>

<style scoped>
.expandable-module {
  position: relative;
  overflow: visible;
}

/* Cyan Ripple Animation (Stage 1) */
.ripple-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ripple-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid #00ffcc;
  border-radius: 50%;
  animation: ripple 1.5s ease-out infinite;
  opacity: 0;
}

.ripple-ring-delay {
  animation-delay: 0.5s;
}

@keyframes ripple {
  0% {
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}

/* Neural Jitter Animation (Stage 3) */
.neural-jitter {
  animation: neural-jitter 0.1s ease-in-out infinite;
}

@keyframes neural-jitter {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-2px, 1px);
  }
  50% {
    transform: translate(1px, -2px);
  }
  75% {
    transform: translate(-1px, -1px);
  }
}

/* Bone White Flash (Stage 4) */
.bone-flash {
  position: absolute;
  inset: 0;
  background-color: #f5f5dc;
  opacity: 0;
  animation: bone-flash 1s ease-in-out;
  pointer-events: none;
  border-radius: inherit;
}

@keyframes bone-flash {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
}

/* Hover effects */
.expandable-module:hover {
  border-color: rgba(0, 255, 255, 0.4);
  transform: translateY(-2px);
}
</style>
