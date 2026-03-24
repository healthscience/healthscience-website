<template>
  <svg class="besearch-edge" :style="edgeStyle">
    <!-- Main edge path -->
    <path
      :d="path"
      :stroke="edgeColor"
      :stroke-width="strokeWidth"
      fill="none"
      :stroke-dasharray="dashArray"
      :stroke-dashoffset="dashOffset"
      class="edge-path"
      :class="{ 'is-running': isRunning }"
    />
    
    <!-- Animated pulse during Stage 2 -->
    <path
      v-if="isRunning"
      :d="path"
      stroke="#00ffcc"
      stroke-width="4"
      fill="none"
      class="pulse-path"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  sourceX: {
    type: Number,
    required: true
  },
  sourceY: {
    type: Number,
    required: true
  },
  targetX: {
    type: Number,
    required: true
  },
  targetY: {
    type: Number,
    required: true
  },
  sourcePosition: {
    type: String,
    default: 'bottom'
  },
  targetPosition: {
    type: String,
    default: 'top'
  },
  isRunning: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  },
  style: {
    type: Object,
    default: () => ({})
  }
});

// Calculate the SVG path
const path = computed(() => {
  const sx = props.sourceX;
  const sy = props.sourceY;
  const tx = props.targetX;
  const ty = props.targetY;
  
  // Calculate control points for a smooth curve
  const midY = (sy + ty) / 2;
  
  return `M ${sx} ${sy} C ${sx} ${midY}, ${tx} ${midY}, ${tx} ${ty}`;
});

// Calculate path length for dash animation
const pathLength = computed(() => {
  // Approximate length based on coordinates
  const dx = props.targetX - props.sourceX;
  const dy = props.targetY - props.sourceY;
  return Math.sqrt(dx * dx + dy * dy) * 1.5;
});

const dashArray = computed(() => {
  return props.isRunning ? pathLength.value : 'none';
});

const dashOffset = computed(() => {
  return props.isRunning ? pathLength.value : 0;
});

const edgeColor = computed(() => {
  if (props.style?.stroke) return props.style.stroke;
  return '#00ffcc';
});

const strokeWidth = computed(() => {
  if (props.style?.strokeWidth) return props.style.strokeWidth;
  return 2;
});

const edgeStyle = computed(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'visible'
}));
</script>

<style scoped>
.besearch-edge {
  overflow: visible;
}

.edge-path {
  transition: stroke 0.3s ease, stroke-width 0.3s ease;
}

.edge-path.is-running {
  animation: draw-path 1s ease-in-out forwards;
}

.pulse-path {
  animation: pulse-travel 1s ease-in-out infinite;
  opacity: 0.6;
}

@keyframes draw-path {
  from {
    stroke-dashoffset: v-bind(pathLength);
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes pulse-travel {
  0% {
    stroke-dashoffset: v-bind(pathLength);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}
</style>
