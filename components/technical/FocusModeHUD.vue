<template>
  <div 
    class="focus-mode-hud flex flex-col gap-3"
    :class="[position === 'fixed' ? 'fixed bottom-6 right-6 z-50' : 'absolute bottom-6 right-6 z-50', positionClass]"
  >
    <!-- Main HUD Panel -->
    <div class="hud-panel bg-forest/95 backdrop-blur-xl border border-pine/40 rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
      <div class="hud-header flex items-center gap-2 mb-4">
        <div class="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
        <span class="text-primary text-xs font-mono uppercase tracking-widest">Engine Room</span>
      </div>
      
      <!-- Control Buttons -->
      <div class="flex flex-col gap-2">
        <button 
          @click="$emit('run-besearch')"
          class="hud-btn run-btn"
          :class="{ 'pulse-animation': isPulseRunning }"
          :disabled="isPulseRunning"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>RUN BESEARCH</span>
        </button>
        
        <button 
          @click="$emit('toggle-coupling')"
          class="hud-btn coupling-btn"
          :class="{ 'active': showCoupling }"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
          </svg>
          <span>SHOW COUPLING</span>
        </button>
        
        <button 
          @click="$emit('reset-view')"
          class="hud-btn reset-btn"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
          <span>RESET VIEW</span>
        </button>
      </div>
      
      <!-- View State Indicator -->
      <div class="mt-4 pt-4 border-t border-pine/30">
        <div class="flex items-center justify-between text-[10px] font-mono">
          <span class="text-secondary/50">ZOOM LEVEL</span>
          <span class="text-neon">{{ zoomLevel.toFixed(1) }}x</span>
        </div>
        <div class="mt-2 flex gap-1">
          <button 
            v-for="state in viewStates" 
            :key="state.id"
            @click="$emit('set-view-state', state.id)"
            class="flex-1 py-1 px-2 text-[9px] font-mono uppercase rounded transition-all"
            :class="currentViewState === state.id ? 'bg-neon/20 text-neon border border-neon/50' : 'bg-pine/10 text-secondary/50 border border-pine/20 hover:border-pine/40'"
          >
            {{ state.label }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mini Status Display -->
    <div class="status-display bg-forest/80 backdrop-blur-md border border-pine/30 rounded-lg p-3">
      <div class="flex items-center justify-between text-[10px] font-mono mb-2">
        <span class="text-secondary/50">PULSE STATUS</span>
        <span :class="statusColor">{{ statusText }}</span>
      </div>
      <div class="stage-indicator flex gap-1">
        <div 
          v-for="stage in 4" 
          :key="stage"
          class="stage-dot flex-1 h-1 rounded-full transition-all"
          :class="currentStage >= stage ? stageColors[stage] : 'bg-pine/30'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  position: {
    type: String,
    default: 'fixed' // 'fixed' or 'absolute'
  },
  positionClass: {
    type: String,
    default: '' // Additional CSS classes for positioning
  },
  isPulseRunning: {
    type: Boolean,
    default: false
  },
  showCoupling: {
    type: Boolean,
    default: false
  },
  zoomLevel: {
    type: Number,
    default: 1.0
  },
  currentViewState: {
    type: String,
    default: 'micro'
  },
  currentStage: {
    type: Number,
    default: 0
  }
});

defineEmits(['run-besearch', 'toggle-coupling', 'reset-view', 'set-view-state']);

const viewStates = [
  { id: 'macro', label: 'Macro' },
  { id: 'micro', label: 'Micro' },
  { id: 'focus', label: 'Focus' }
];

const stageColors = {
  1: 'bg-amber-500',
  2: 'bg-white',
  3: 'bg-purple-500',
  4: 'bg-neon'
};

const statusText = computed(() => {
  if (props.isPulseRunning) {
    switch (props.currentStage) {
      case 1: return 'ORIGIN';
      case 2: return 'PATHING';
      case 3: return 'PROCESSING';
      case 4: return 'COMMIT';
      default: return 'RUNNING';
    }
  }
  return 'IDLE';
});

const statusColor = computed(() => {
  if (props.isPulseRunning) {
    switch (props.currentStage) {
      case 1: return 'text-amber-500';
      case 2: return 'text-white';
      case 3: return 'text-purple-500';
      case 4: return 'text-neon';
      default: return 'text-neon';
    }
  }
  return 'text-secondary/50';
});
</script>

<style scoped>
.hud-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
}

.run-btn {
  background-color: rgba(245, 158, 11, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.5);
  color: #f59e0b;
}

.run-btn:hover {
  background-color: rgba(245, 158, 11, 0.3);
}

.run-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.run-btn.pulse-animation {
  background-color: rgba(245, 158, 11, 0.4);
  border-color: #f59e0b;
  animation: btn-pulse 1s ease-in-out infinite;
}

.coupling-btn {
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  color: #00ffcc;
}


.coupling-btn:hover {
  background-color: rgba(0, 255, 255, 0.2);
}

.coupling-btn.active {
  background-color: rgba(0, 255, 255, 0.3);
  border-color: #00ffcc;
}

.reset-btn {
  background-color: rgba(45, 70, 53, 0.1);
  border: 1px solid rgba(45, 70, 53, 0.3);
  color: #2d4635;
}

.reset-btn:hover {
  background-color: rgba(45, 70, 53, 0.2);
}

@keyframes btn-pulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
  }
}

.status-display {
  min-width: 160px;
}
</style>
