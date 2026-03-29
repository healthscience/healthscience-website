<template>
  <div class="anatomy-container bento-node">
<div class="anatomy-container bento-node">
  <svg viewBox="0 0 900 500" class="fabric-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="besearchGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      
      <pattern id="weavePattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M0 5h10M5 0v10" stroke="rgba(74, 222, 128, 0.2)" stroke-width="0.5"/>
      </pattern>
    </defs>

    <g class="inflow">
      <g transform="translate(50, 10)">
        <rect width="40" height="40" rx="8" class="icon-box" /> <text y="55" class="icon-label">Tiny devices</text>
      </g>
      <g transform="translate(50, 100)">
        <rect width="40" height="40" rx="8" class="icon-box" /> <text y="55" class="icon-label">BentoBox</text>
      </g>
      <g transform="translate(50, 180)">
        <circle cx="20" cy="20" r="18" class="icon-box" /> <text y="55" class="icon-label">Bio-Signals</text>
      </g>
      <g transform="translate(50, 260)">
        <path d="M5 5h30v20l-15 10l-15-10z" class="icon-box" /> <text y="55" class="icon-label">BeeBee Talk</text>
      </g>
      <g transform="translate(50, 340)">
        <rect width="40" height="20" rx="2" class="icon-box" /> <text y="35" class="icon-label">cueSpace</text>
      </g>
    </g>

    <g class="heart-core">
      <rect x="350" y="100" width="200" height="250" rx="100" fill="url(#weavePattern)" stroke="rgba(74, 222, 128, 0.3)" />
      
      <g transform="translate(450, 200) scale(0.8)">
         <ellipse cx="0" cy="0" rx="40" ry="80" stroke="#801b5a" stroke-width="6" fill="none" />
         <circle cx="0" cy="-30" r="45" stroke="#b31a00" stroke-width="6" fill="none" />
      </g>
      
      <text x="450" y="380" class="label-main">SafeFlow-ECS</text>
      <text x="450" y="400" class="label-sub">Consilience Weave</text>

      <g transform="translate(340, 430)">
        <image :xlink:href="besearchCycleIcon" x="0" y="-20" width="40" height="40" class="besearch-icon" />
        <image :xlink:href="besearchCycleIcon" x="60" y="-20" width="40" height="40" class="besearch-icon" />
        <image :xlink:href="besearchCycleIcon" x="120" y="-20" width="40" height="40" class="besearch-icon" />
        <image :xlink:href="besearchCycleIcon" x="180" y="-20" width="40" height="40" class="besearch-icon" />
        <text x="110" y="40" class="icon-label">Active Besearch Cycles</text>
      </g>
    </g>

    <g class="intelligence">
      <path d="M650 150 Q750 150 800 120" class="mind-curve" />
      <text x="810" y="125" class="icon-label">BeeBee Translator</text>
      
      <path d="M650 225 Q750 225 800 225" class="mind-curve" />
      <text x="810" y="230" class="icon-label">ResonAgents</text>
      
      <path d="M650 300 Q750 300 800 350" class="mind-curve" />
      <text x="810" y="355" class="icon-label">NEAT-HOP / DML</text>
    </g>

    <path d="M120 225 L350 225" class="filament-path pulse" />
    <path d="M550 225 L650 225" class="filament-path pulse" />
  </svg>
</div>

    <div class="diagram-footer">
      <button @click="$emit('explore')" class="btn-interactive-module group">
        <span class="daisy-world"></span>
        <span class="font-mono">Explore Interactive Module Examples</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['explore'])

import besearchCycleIcon from '@/assets/besearch-cycle.png'
import besearchCycleDiagram from '@/assets/besearch-cycle-web.png'
</script>

<style scoped>
.anatomy-container {
  background: #0a1914;
  border: 1px solid rgba(74, 222, 128, 0.1);
  border-radius: 12px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
}

/* Nature Reclaim Leaf Clusters */
.anatomy-container::before,
.anatomy-container::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234ade8033'%3E%3Cpath d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;
}

.anatomy-container::before {
  top: -20px;
  left: -20px;
  transform: rotate(-15deg);
}

.anatomy-container::after {
  bottom: -20px;
  right: -20px;
  transform: rotate(165deg);
}

.fabric-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Icon Styling */
.icon-box { fill: none; stroke: #4ade80; stroke-width: 1.5; opacity: 0.7; }
.icon-label { fill: #f0fdf4; font-size: 11px; font-family: 'Mono', monospace; text-anchor: middle; }

/* Besearch Cycle Pulse */
.besearch-icon {
  fill: #5c6bc0; /* The blueish hue from your image */
  filter: url(#besearchGlow);
  animation: cycle-pulse 2s infinite alternate;
}

@keyframes cycle-pulse {
  from { opacity: 0.4; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1.1); }
}

/* Intelligence Curve Lines */
.mind-curve {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 1.5;
  stroke-dasharray: 4, 4;
}

/* Hover effect for the whole diagram */
.anatomy-container:hover .filament-path {
  stroke: #4ade80;
  stroke-width: 2.5;
  transition: all 0.5s ease;
}

/* Typography */
.label-main { 
  fill: #f0fdf4; 
  font-size: 16px; 
  font-weight: bold; 
  text-anchor: middle; 
  font-family: 'Inter', sans-serif; 
}
.label-sub { 
  fill: #4ade80; 
  font-size: 12px; 
  text-anchor: middle; 
  opacity: 0.8; 
  font-family: 'Mono', monospace;
}
.label-desc {
  fill: #f0fdf4;
  font-size: 10px;
  opacity: 0.6;
  font-family: 'Inter', sans-serif;
}

/* The Core Logic */
.outer-ring { 
  fill: none; 
  stroke: rgba(255, 255, 255, 0.1); 
  stroke-width: 1; 
}
.tech-icon { 
  fill: none; 
  stroke: #4ade80; 
  stroke-width: 1.5; 
}
.core-diamond { 
  fill: #4ade80; 
  stroke: #fff; 
  stroke-width: 2; 
  filter: drop-shadow(0 0 10px #4ade80); 
}

/* Animation: The Heartbeat */
.heart-pulse {
  animation: heart-swell 3s ease-in-out infinite;
  transform-origin: center;
}

@keyframes heart-swell {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.6; }
}

/* Filaments: The Pulse Flow */
.filament-path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
  stroke-dasharray: 10, 10;
  animation: flow 30s linear infinite;
}

@keyframes flow {
  to { stroke-dashoffset: -500; }
}

/* The Button */
.diagram-footer {
  text-align: center;
  margin-top: 20px;
  position: relative;
  z-index: 10;
}

.btn-interactive-module {
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid #4ade80;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.btn-interactive-module:hover {
  background: #4ade80;
  color: #0a1914;
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
}

/* Daisyworld Node Icon */
.daisy-world {
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  position: relative;
}

.daisy-world::before {
  content: '';
  position: absolute;
  inset: 2px;
  border: 2px solid #4ade80;
  border-radius: 50%;
  background: #0a1914;
}
</style>
