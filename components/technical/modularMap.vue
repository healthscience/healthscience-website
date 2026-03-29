<template>
  <div class="p-4 md:p-12 relative z-10">
    <div class="hop-grid w-full max-w-7xl mx-auto">
      <div class="lego-module col-span-12 bg-gradient-to-b from-pine/5 to-transparent">
        
        <!-- Header & Tab Switcher -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div class="flex items-center gap-4 flex-1 w-full">
            <div class="h-px flex-1 bg-pine/30"></div>
            <h3 class="text-neon font-mono text-sm tracking-widest uppercase">STRATEGIC PLUGINS: AUTHORING THE WORLDS</h3>
            <div class="h-px flex-1 bg-pine/30"></div>
          </div>
          
          <div class="flex bg-pine/10 p-1 rounded-lg border border-pine/30">
            <button @click="activeView = 'explorer'" 
                    class="px-6 py-2 text-sm font-mono uppercase tracking-widest rounded transition-all"
                    :class="activeView === 'explorer' ? 'bg-neon/20 text-neon border border-neon/50' : 'text-secondary/60 hover:text-primary'">
              Explorer
            </button>
            <button @click="activeView = 'playground'" 
                    class="px-6 py-2 text-sm font-mono uppercase tracking-widest rounded transition-all"
                    :class="activeView === 'playground' ? 'bg-neon/20 text-neon border border-neon/50' : 'text-secondary/60 hover:text-primary'">
              Playground
            </button>
          </div>
        </div>

        <div class="mb-8">
          <p class="text-secondary/80 text-lg font-light italic">
            Each peer directs the creation of a peer experience on the fly.  Plug in agents to the emulation worlds to enhance the resolution. 
          </p>
        </div>

        <!-- Explorer View -->
        <div v-if="activeView === 'explorer'" class="relative h-[800px] border border-pine/30 rounded-xl overflow-hidden bg-forest/40">
          
          <!-- Vue Flow Canvas with Viewport States -->
          <div 
            class="vue-flow-wrapper transition-all duration-500"
            :style="mapContainerStyle"
          >
            <VueFlow 
              v-model="elements" 
              :node-types="nodeTypes" 
              :default-zoom="currentZoom" 
              :min-zoom="0.2" 
              :max-zoom="4" 
              @nodeClick="onNodeClick" 
              @nodeMouseEnter="onNodeHover" 
              @nodeMouseLeave="onNodeLeave"
              @paneClick="onPaneClick"
            >
              <Background pattern-color="#00ffcc" :gap="30" :size="1" />
              <Controls />
            </VueFlow>
          </div>

          <!-- Besearch Overlay -->
          <BesearchOverlay 
            :is-active="isPulseActive" 
            :current-stage="pulseStage"
            @complete="onPulseComplete" 
          />

          <!-- Documentation Panel -->
          <DocumentationPanel 
            :node="selectedNode"
            :is-open="!!selectedNode"
            :is-focus-mode="viewportState === 'focus'"
            @close="selectedNode = null"
            @open-playground="openInPlayground"
            @add-to-workspace="addToWorkspace"
          />

          <!-- Focus Mode HUD -->
          <FocusModeHUD 
            :position="'absolute'"
            :position-class="selectedNode ? 'right-[calc(60vw+1.5rem)]' : 'right-6'"
            :is-pulse-running="isPulseActive"
            :show-coupling="showCoupling"
            :zoom-level="currentZoom"
            :current-view-state="viewportState"
            :current-stage="pulseStage"
            @run-besearch="triggerPulse"
            @toggle-coupling="toggleCoupling"
            @reset-view="resetView"
            @set-view-state="setViewportState"
          />

          <!-- Conflict Resolution Indicator -->
          <div v-if="hasConflict" class="absolute top-6 left-6 z-50">
            <div class="px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg animate-pulse">
              <span class="text-red-500 text-xs font-mono uppercase tracking-widest">Resource Contention Detected</span>
            </div>
          </div>
        </div>

        <!-- Playground View -->
        <div v-else-if="activeView === 'playground'" class="relative min-h-[800px] border border-pine/30 rounded-xl overflow-hidden bg-forest/40 p-6">
          <div class="mb-8 p-6 border border-neon/30 rounded-xl bg-neon/5 backdrop-blur-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl text-primary font-medium">Global Resonance</h3>
              <span class="text-neon font-mono text-2xl">{{ globalResonance }}%</span>
            </div>
            <input type="range" v-model="globalResonance" min="0" max="100" class="w-full h-2 bg-pine/30 rounded-lg appearance-none cursor-pointer accent-neon">
            <p class="text-secondary/60 text-sm mt-4 italic">Slide toward "High Coherence" to stabilize the Vagus-Strap pulse, make the 3D heart beat rhythmically, and make the Bioregion map glow green.</p>
          </div>
          
          <!-- Placeholder for GeometryPlayground integration -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 border border-pine/30 rounded-xl bg-forest/80 transition-all duration-500" :class="{ 'border-neon/60 shadow-[0_0_30px_rgba(0,255,255,0.2)]': globalResonance > 80 }">
              <h4 class="text-primary text-lg mb-2">Vagus-Strap Pulse</h4>
              <div class="h-32 flex items-center justify-center">
                <div class="w-16 h-16 rounded-full bg-amber-500/50 transition-all duration-300" :style="{ transform: `scale(${1 + (globalResonance / 100) * 0.5})`, opacity: 0.5 + (globalResonance / 200) }"></div>
              </div>
            </div>
            <div class="p-6 border border-pine/30 rounded-xl bg-forest/80 transition-all duration-500" :class="{ 'border-neon/60 shadow-[0_0_30px_rgba(0,255,255,0.2)]': globalResonance > 80 }">
              <h4 class="text-primary text-lg mb-2">Heart Emulation</h4>
              <div class="h-32 flex items-center justify-center">
                <div class="w-16 h-16 bg-red-500/50 transition-all duration-300" :style="{ borderRadius: `${50 + (globalResonance / 2)}%`, transform: `scale(${1 + (globalResonance / 100) * 0.2})` }"></div>
              </div>
            </div>
            <div class="p-6 border border-pine/30 rounded-xl bg-forest/80 transition-all duration-500" :class="{ 'border-neon/60 shadow-[0_0_30px_rgba(0,255,255,0.2)]': globalResonance > 80 }">
              <h4 class="text-primary text-lg mb-2">Bioregion Map</h4>
              <div class="h-32 flex items-center justify-center">
                <div class="w-full h-full bg-green-500/10 rounded transition-all duration-500" :style="{ backgroundColor: `rgba(34, 197, 94, ${globalResonance / 200})` }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Case Study Tiles -->
        <!--<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink to="/besearch/vagus-strap" class="group p-6 border border-pine/20 rounded-xl bg-pine/5 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all cursor-pointer">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-2 rounded-full bg-amber-500 group-hover:animate-ping"></div>
              <h4 class="text-primary text-lg font-medium">The Body World</h4>
            </div>
            <p class="text-secondary/70 text-sm leading-relaxed mb-4">Sovereign Vagus-Strap (The "Dave" Protocol). Closed-loop actuator for neural resonance.</p>
            <span class="text-amber-500 text-xs font-mono uppercase tracking-widest group-hover:underline">View Case Study →</span>
          </NuxtLink>
          
          <NuxtLink to="/besearch/heart-organ" class="group p-6 border border-pine/20 rounded-xl bg-pine/5 hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-pointer">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-2 rounded-full bg-red-500 group-hover:animate-ping"></div>
              <h4 class="text-primary text-lg font-medium">The Organ World</h4>
            </div>
            <p class="text-secondary/70 text-sm leading-relaxed mb-4">Heart Emulation (Cardiomyocyte Visualizer). Visualizing biological intent through Z-Anatomy.</p>
            <span class="text-red-500 text-xs font-mono uppercase tracking-widest group-hover:underline">View Case Study →</span>
          </NuxtLink>
          
          <NuxtLink to="/besearch/bioregion-map" class="group p-6 border border-pine/20 rounded-xl bg-pine/5 hover:border-green-500/50 hover:bg-green-500/5 transition-all cursor-pointer">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-2 rounded-full bg-green-500 group-hover:animate-ping"></div>
              <h4 class="text-primary text-lg font-medium">The Earth World</h4>
            </div>
            <p class="text-secondary/70 text-sm leading-relaxed mb-4">Bioregion Renderer (Soil-to-Stomach). Spatial Sovereignty through Drone-Mapping and DNA-Soil data.</p>
            <span class="text-green-500 text-xs font-mono uppercase tracking-widest group-hover:underline">View Case Study →</span>
          </NuxtLink>
        </div>-->

        <!-- Technical Navigation Buttons -->
        <div class="mt-12 flex flex-wrap gap-4 justify-center">
          <button @click="$emit('open-plugin')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
            Plugin HOP
          </button>
          <button @click="$emit('open-reson')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
            ResonAgent Maths
          </button>
          <button @click="$emit('open-onthefly')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
            On The Fly
          </button>
          <button @click="$emit('open-playground')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
            Geometry Playground
          </button>
        </div>

      </div>
      <!--<ContributePeers @open-docs="$emit('open-plugin')" />-->
    </div>
  </div>
</template>

<script setup>
import { ref, markRaw, computed, onMounted } from 'vue';
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/controls/dist/style.css';

import BaseNode from './BaseNode.vue';
import SuperNode from './SuperNode.vue';
import CodeSnap from './CodeSnap.vue';
import SupplyChainTile from './SupplyChainTile.vue';
import BesearchOverlay from './BesearchOverlay.vue';
import DocumentationPanel from './DocumentationPanel.vue';
import FocusModeHUD from './FocusModeHUD.vue';

const emit = defineEmits(['open-plugin', 'open-reson', 'open-onthefly', 'open-playground']);

// Node Types
const nodeTypes = {
  base: markRaw(BaseNode),
  super: markRaw(SuperNode)
};

// View State
const activeView = ref('explorer');
const viewportState = ref('micro'); // 'macro', 'micro', 'focus'
const selectedNode = ref(null);
const globalResonance = ref(50);
const isPulseActive = ref(false);
const pulseStage = ref(0);
const showCoupling = ref(true);
const currentZoom = ref(0.8);

// Vue Flow
const { onPaneReady, fitView, setTransform, getNodes, getEdges } = useVueFlow();

// Map container style based on viewport state
const mapContainerStyle = computed(() => {
  if (viewportState.value === 'focus' && selectedNode.value) {
    return {
      width: '40vw',
      left: 0,
      position: 'absolute'
    };
  }
  return {
    width: '100%',
    left: 0,
    position: 'absolute'
  };
});

// Zoom levels for viewport states
const zoomLevels = {
  macro: 0.5,
  micro: 1.0,
  focus: 1.0
};

// Initial Elements
const initialElements = [
  // Foundation Layer
  { id: 'master-key', type: 'base', position: { x: 100, y: 100 }, data: { label: 'The Root', layer: 'foundation', logic: 'BIP39 / HD Wallet. The cryptographic source of all Peer sovereignty.', coupling: ['hyperbee-keys', 'coherence-ledger', 'heart-organ'] } },
  { id: 'heli-clock', type: 'base', position: { x: 400, y: 100 }, data: { label: 'Solar Geometry', layer: 'foundation', logic: 'Spherical Trig. Calculates Solar Noon/Azimuth to anchor metabolic data.', coupling: ['safeflow-ecs', 'context-buffer', 'vagus-strap'] } },
  { id: 'hyperbee-keys', type: 'base', position: { x: 100, y: 250 }, data: { label: 'Derived Keys', layer: 'foundation', logic: 'Master-Root key derivation for local database encryption/signing.', coupling: ['master-key', 'library-storage'] } },
  
  // Engine Layer
  { id: 'safeflow-ecs', type: 'base', position: { x: 400, y: 250 }, data: { label: 'The State Engine', layer: 'engine', logic: 'Entity Component System. Maps biological rhythms to state-machine transitions.', coupling: ['reson-agents', 'emulation-plugin', 'vagus-strap'] } },
  { id: 'reson-agents', type: 'base', position: { x: 700, y: 250 }, data: { label: 'Bio-Translators', layer: 'engine', logic: 'Basal Cognition. Translates raw sensor JSON into "Biological Intent."', coupling: ['safeflow-ecs', 'beebee-llm'] } },
  { id: 'neat-hop', type: 'base', position: { x: 700, y: 400 }, data: { label: 'Evolutionary ML', layer: 'engine', logic: 'NeuroEvolution (NEAT). Optimizes neural pathways for health discovery.', coupling: ['consilience-weave', 'search-space'] } },
  { id: 'emulation-plugin', type: 'base', position: { x: 400, y: 400 }, data: { label: 'The Sandbox', layer: 'engine', logic: '"What If" simulation. Runs Module Contracts against virtual cueCubes.', coupling: ['safeflow-ecs', 'library-storage'] } },
  
  // Fabric Layer
  { id: 'coherence-ledger', type: 'base', position: { x: 100, y: 400 }, data: { label: 'The Truth', layer: 'fabric', logic: 'Local-first signing. Cryptographic witness of biological alignment.', coupling: ['master-key', 'consilience-weave'] } },
  { id: 'library-storage', type: 'base', position: { x: 100, y: 550 }, data: { label: 'Levin-Bubble', layer: 'fabric', logic: 'Hyperbee. Goal-directed sorting where high-utility data "bubbles" up.', coupling: ['hyperbee-keys', 'neat-hop', 'bioregion-map'] } },
  { id: 'noise-holepunch', type: 'base', position: { x: 400, y: 550 }, data: { label: 'The Handshake', layer: 'fabric', logic: 'Hyperswarm + Noise Protocol. Peer-to-peer connectivity without relays.', coupling: ['consilience-weave', 'p2p-aggregation'] } },
  { id: 'consilience-weave', type: 'base', position: { x: 700, y: 550 }, data: { label: 'The Synthesis', layer: 'fabric', logic: 'Multi-vantage verification. Prevents data cascades across the network.', coupling: ['coherence-ledger', 'immune-dml'] } },

  // Super Nodes
  { 
    id: 'vagus-strap', 
    type: 'super', 
    position: { x: 1000, y: 150 }, 
    data: { 
      label: 'Vagus-Strap (Body World)', 
      layer: 'example', 
      logic: 'Closed-loop actuator for neural resonance (RISC-V PWM).', 
      coupling: ['heli-clock', 'safeflow-ecs'],
      codeSnippet: `// Triggered via BeeBee NL-First Agent
const startVagusProtocol = (intensity) => {
  hop.p2p.sendToDevice('VagusStrap_01', {
    mode: 'PWM_PULSE',
    freq: 30,
    duty: intensity,
    pattern: [30000, 30000] // 30s on/off
  });
};`,
      manifest: [
        { component: 'Housing', source: 'PHA Bio-polymer (Local Agri-waste)' },
        { component: 'Electrodes', source: '3D-printed Conductive TPU' },
        { component: 'Power', source: 'Recycled 18650/Lipo from "Urban Mine" e-bike waste' }
      ]
    } 
  },
  { 
    id: 'heart-organ', 
    type: 'super', 
    position: { x: 1000, y: 350 }, 
    data: { 
      label: 'Heart Emulation (Organ World)', 
      layer: 'example', 
      logic: 'Visualizing biological intent through Z-Anatomy (3D Heart Mesh).', 
      coupling: ['master-key'],
      codeSnippet: `// In the BentoBoxDS Heart Node
watch(bpm, (newVal) => {
  heartMesh.material.uniforms.pulseSpeed.value = newVal / 60;
  if(newVal > 100 && heliClock.isNight) {
    triggerAlert('Circadian Desync Detected');
  }
});`
    } 
  },
  { 
    id: 'bioregion-map', 
    type: 'super', 
    position: { x: 1000, y: 550 }, 
    data: { 
      label: 'Bioregion Renderer (Earth World)', 
      layer: 'example', 
      logic: 'Spatial Sovereignty through Drone-Mapping and DNA-Soil data.', 
      coupling: ['library-storage', 'p2p-aggregation'],
      codeSnippet: `// Querying the Bioregion Context
const getNutrientSource = async (nutrient) => {
  const gardenMap = await hop.library.getModule('Garden_Drone_Scan_v1');
  return gardenMap.findHotspot(nutrient); // Returns GPS/OSM coordinates
 };`,
      manifest: [
        { component: 'Spatial Data', source: 'Watershed Node #04 - Community Lab' }
      ]
    } 
  },

  // Edges
  { id: 'e-mk-hk', source: 'master-key', target: 'hyperbee-keys', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-mk-cl', source: 'master-key', target: 'coherence-ledger', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-mk-ho', source: 'master-key', target: 'heart-organ', animated: true, style: { stroke: '#ef4444', strokeWidth: 3 } },
  
  { id: 'e-hc-sf', source: 'heli-clock', target: 'safeflow-ecs', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-hc-vs', source: 'heli-clock', target: 'vagus-strap', animated: true, style: { stroke: '#f59e0b', strokeWidth: 3 } },
  
  { id: 'e-sf-ra', source: 'safeflow-ecs', target: 'reson-agents', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-sf-ee', source: 'safeflow-ecs', target: 'emulation-plugin', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-sf-vs', source: 'safeflow-ecs', target: 'vagus-strap', animated: true, style: { stroke: '#f59e0b', strokeWidth: 3 } },
  
  { id: 'e-cl-cw', source: 'coherence-ledger', target: 'consilience-weave', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  
  { id: 'e-ls-nh', source: 'library-storage', target: 'neat-hop', animated: true, style: { stroke: '#00ffcc', strokeWidth: 2 } },
  { id: 'e-ls-bm', source: 'library-storage', target: 'bioregion-map', animated: true, style: { stroke: '#22c55e', strokeWidth: 3 } },
];

const elements = ref(initialElements);

// Besearch Pulse Stage Node Mapping
const pulseStageNodes = {
  1: ['master-key', 'heli-clock'], // Origin
  2: ['library-storage'], // Pathing to library
  3: ['neat-hop'], // Processing
  4: ['coherence-ledger'] // Commit
};

// Check for conflict (Resource Contention)
const hasConflict = computed(() => {
  // Simplified: check if multiple super-nodes are selected/active
  const superNodes = elements.value.filter(el => el.type === 'super');
  const activeSuperNodes = superNodes.filter(el => el.data?.isHighlighted);
  return activeSuperNodes.length > 1;
});

// Node Click Handler
const onNodeClick = (event) => {
  selectedNode.value = event.node;
  
  // Set focus mode
  if (selectedNode.value) {
    setViewportState('focus');
  }
};

// Node Hover Handler
const onNodeHover = (event) => {
  if (!showCoupling.value) return;
  
  const hoveredNodeId = event.node.id;
  const couplings = event.node.data.coupling || [];
  
  elements.value = elements.value.map(el => {
    if (el.id === hoveredNodeId || couplings.includes(el.id)) {
      if (el.data) el.data.isHighlighted = true;
      if (el.source) el.style = { ...el.style, strokeWidth: 4, stroke: '#fff' };
    } else {
      if (el.data) el.data.isHighlighted = false;
      if (el.source) el.style = { ...el.style, strokeWidth: el.style.strokeWidth === 4 ? 2 : el.style.strokeWidth, stroke: el.style.stroke === '#fff' ? '#00ffcc' : el.style.stroke };
    }
    return el;
  });
};

// Node Leave Handler
const onNodeLeave = () => {
  if (!showCoupling.value) return;
  
  elements.value = elements.value.map(el => {
    if (el.data) el.data.isHighlighted = false;
    if (el.source) {
      let defaultStroke = '#00ffcc';
      let defaultWidth = 2;
      if (el.target === 'vagus-strap') { defaultStroke = '#f59e0b'; defaultWidth = 3; }
      if (el.target === 'heart-organ') { defaultStroke = '#ef4444'; defaultWidth = 3; }
      if (el.target === 'bioregion-map') { defaultStroke = '#22c55e'; defaultWidth = 3; }
      el.style = { ...el.style, strokeWidth: defaultWidth, stroke: defaultStroke };
    }
    return el;
  });
};

// Pane Click - deselect
const onPaneClick = () => {
  selectedNode.value = null;
  setViewportState('micro');
};

// Viewport State Management
const setViewportState = (state) => {
  viewportState.value = state;
  currentZoom.value = zoomLevels[state];
  
  // Pan camera based on state
  if (state === 'focus' && selectedNode.value) {
    // Pan away from sidebar
    setTransform({ x: -200, y: 0, zoom: 1.0 });
  } else {
    fitView({ padding: 0.2 });
  }
};

// Toggle Coupling
const toggleCoupling = () => {
  showCoupling.value = !showCoupling.value;
  
  if (!showCoupling.value) {
    // Clear highlights
    elements.value = elements.value.map(el => {
      if (el.data) el.data.isHighlighted = false;
      return el;
    });
  }
};

// Reset View
const resetView = () => {
  selectedNode.value = null;
  viewportState.value = 'micro';
  currentZoom.value = zoomLevels.micro;
  fitView({ padding: 0.2 });
};

// Trigger Besearch Pulse
const triggerPulse = () => {
  if (isPulseActive.value) return;
  
  isPulseActive.value = true;
  pulseStage.value = 0;
  
  runPulseSequence();
};

// Run Pulse Sequence
const runPulseSequence = async () => {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  // Stage 1: Origin - activate master-key and heli-clock
  await delay(500);
  pulseStage.value = 1;
  markNodesActive(['master-key', 'heli-clock'], true);
  
  await delay(2000);
  
  // Stage 2: Pathing - activate edges to library
  pulseStage.value = 2;
  markEdgesActive(['e-mk-hk', 'e-hc-sf', 'e-ls-nh'], true);
  
  await delay(2000);
  
  // Stage 3: Processing - activate neat-hop
  pulseStage.value = 3;
  markNodesActive(['neat-hop'], true);
  
  await delay(2000);
  
  // Stage 4: Commit - activate coherence-ledger
  pulseStage.value = 4;
  markNodesActive(['coherence-ledger'], true);
  
  await delay(3000);
  
  // Reset
  isPulseActive.value = false;
  pulseStage.value = 0;
  markNodesActive(['master-key', 'heli-clock', 'neat-hop', 'coherence-ledger'], false);
  markEdgesActive(['e-mk-hk', 'e-hc-sf', 'e-ls-nh'], false);
};

// Mark nodes as active
const markNodesActive = (nodeIds, active) => {
  elements.value = elements.value.map(el => {
    if (nodeIds.includes(el.id) && el.data) {
      el.data.isActive = active;
    }
    return el;
  });
};

// Mark edges as active (for animation)
const markEdgesActive = (edgeIds, active) => {
  elements.value = elements.value.map(el => {
    if (edgeIds.includes(el.id)) {
      el.animated = active;
    }
    return el;
  });
};

// Pulse Complete Handler
const onPulseComplete = () => {
  isPulseActive.value = false;
  pulseStage.value = 0;
};

// Open in Playground
const openInPlayground = (node) => {
  activeView.value = 'playground';
};

// Add to Workspace
const addToWorkspace = (node) => {
  // Could open a dialog or add to a workspace list
  console.log('Adding to workspace:', node.id);
};

onPaneReady((instance) => {
  instance.fitView({ padding: 0.2 });
});
</script>

<style>
/* Vue Flow Customizations */
.vue-flow__node {
  z-index: 10;
}
.vue-flow__edge-path {
  transition: stroke 0.3s ease, stroke-width 0.3s ease;
}
.vue-flow-wrapper {
  height: 100%;
}
</style>
