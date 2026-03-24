# Plan: Modular Map & Sovereign Skeleton Explorer

This plan outlines the migration of the "Strategic Plugins" section from [`app.vue`](app.vue) to a standalone component [`components/technical/modularMap.vue`](components/technical/modularMap.vue) and the implementation of the "Sovereign Skeleton Explorer" using `@vue-flow/core`.

## 1. Infrastructure & Dependencies
- Install `@vue-flow/core` and `@vue-flow/background` (optional but recommended for the grid).
- Ensure Tailwind CSS is configured to handle the new component's styles.

## 2. Component Architecture
### [`components/technical/modularMap.vue`](components/technical/modularMap.vue)
- **View Switcher (Tabs)**:
  - **Explorer View**: The `@vue-flow` interactive map showing the Sovereign Skeleton modules, their couplings, and integrated "Super-Nodes" (Examples).
  - **Playground View**: An integrated version of the `geometryPlayground.vue` featuring a global "Resonance Slider" to test module logic interactively.
- **State Management**:
  - `activeView`: 'explorer' | 'playground'
  - `nodes`: Array of module definitions (including Super-Nodes).
  - `edges`: Array of connections.
  - `selectedNode`: For the side-car panel details.
  - `globalResonance`: State for the Resonance Slider (0 to 100).
- **Sub-components**:
  - `BaseNode.vue`: Custom atomic module node component for Vue Flow.
  - `SuperNode.vue`: Custom node for Example Instances (Vagus/Heart/Earth).
  - `SideCarPanel.vue`: Module details, "Open in Playground" deep-links, and Supply Chain Manifests.
  - `CodeSnap.vue`: UI component for syntax-highlighted snippets.
  - `SupplyChainTile.vue`: UI component for bioregion source info.
  - `BesearchOverlay.vue`: UI component for the visual sub-flow of the Besearch Pulse.
  - `GeometryPlayground.vue`: (Imported) The interactive sandbox.

## 3. Interaction & Logic Specification
The implementation will strictly follow these interaction rules:

### A. Component Structure
- **BaseNode.vue / SuperNode.vue**: Receives `Logic`, `Code Snippet`, `Coupling`, and `Manifest` tags via props.
- **The Map**: Uses `@vue-flow/core` for rendering. Super-Nodes are rendered larger and glowing.
- **The Pulse**: CSS-based "Pulse" animation on edges, triggered when a "cueCube" is signed (simulated or via event) to show data 'Coherence' flow.

### B. Interaction Logic
- **OnHover**: Dynamically highlight all nodes listed in the `coupling` array of the hovered node.
- **OnClick**: Expand the "Side-car" panel to show module details, `CodeSnap`, `SupplyChainTile`, and the "Test in Playground" link.
- **OnDrag**: Implement a `saveLayout` function to persist node positions (simulating saving to local hyperbee).
- **Playground Resonance Slider**: Sliding toward "High Coherence" stabilizes the Vagus-Strap pulse, makes the 3D heart beat rhythmically, and makes the Bioregion map glow green.

### C. The Besearch Pulse (Execution Logic)
The Besearch Pulse is the standard operational loop of a HOP Node, visualized via `BesearchOverlay.vue`.
- **Stage 1: The Contextual Anchor (Origin)**: A pulse originates from the Master Key and HeliClock. (Coupling: HeliClock → SafeFlow-ECS).
- **Stage 2: The Knowledge Grounding (Library)**: The pulse travels to the Library, changing its color to "Bone White" (Knowledge). (Coupling: Library → BeeBee LLM).
- **Stage 3: The Evolutionary Search (Neat)**: The pulse scatters into a neural-network pattern at the NEAT-HOP node. (Coupling: NEAT-HOP → Immune-DML).
- **Stage 4: The Decision Model (Final)**: The pulse reconvenes at the Coherence Ledger, emitting a final "Cyan Glow" (Truth). (Coupling: Emulation Engine → Coherence Ledger).

## 4. Module Data Definitions
The following modules will be implemented as nodes in the map, categorized by their architectural layer.

### 1. Foundation: Identity & Time
| Module ID | Component | Logic / Physics | Coupling |
| :--- | :--- | :--- | :--- |
| `master-key` | The Root | BIP39 / HD Wallet. The cryptographic source of all Peer sovereignty. | `hyperbee-keys`, `coherence-ledger`, `heart-organ` |
| `heli-clock` | Solar Geometry | Spherical Trig. Calculates Solar Noon/Azimuth to anchor metabolic data. | `safeflow-ecs`, `context-buffer`, `vagus-strap` |
| `hyperbee-keys` | Derived Keys | Master-Root key derivation for local database encryption/signing. | `master-key`, `library-storage` |

### 2. Engine: Logic & State
| Module ID | Component | Logic / Physics | Coupling |
| :--- | :--- | :--- | :--- |
| `safeflow-ecs` | The State Engine | Entity Component System. Maps biological rhythms to state-machine transitions. | `reson-agents`, `emulation-engine`, `vagus-strap` |
| `reson-agents` | Bio-Translators | Basal Cognition. Translates raw sensor JSON into "Biological Intent." | `safeflow-ecs`, `beebee-llm` |
| `neat-hop` | Evolutionary ML | NeuroEvolution (NEAT). Optimizes neural pathways for health discovery. | `consilience-weave`, `search-space` |
| `emulation-plugin` | The Sandbox | "What If" simulation. Runs Module Contracts against virtual cueCubes. | `safeflow-ecs`, `library-storage` |

### 3. Fabric: Memory & Network
| Module ID | Component | Logic / Physics | Coupling |
| :--- | :--- | :--- | :--- |
| `coherence-ledger` | The Truth | Local-first signing. Cryptographic witness of biological alignment. | `master-key`, `consilience-weave` |
| `library-storage` | Levin-Bubble | Hyperbee. Goal-directed sorting where high-utility data "bubbles" up. | `hyperbee-keys`, `neat-hop`, `bioregion-map` |
| `noise-holepunch` | The Handshake | Hyperswarm + Noise Protocol. Peer-to-peer connectivity without relays. | `consilience-weave`, `p2p-aggregation` |
| `consilience-weave` | The Synthesis | Multi-vantage verification. Prevents data cascades across the network. | `coherence-ledger`, `immune-dml` |

### 4. Integrated Examples (Super-Nodes)
| Module ID | Component | Logic / Physics | Coupling |
| :--- | :--- | :--- | :--- |
| `vagus-strap` | The Body World | Closed-loop actuator for neural resonance (RISC-V PWM). | `heli-clock`, `safeflow-ecs` |
| `heart-organ` | The Organ World | Visualizing biological intent through Z-Anatomy (3D Heart Mesh). | `master-key` |
| `bioregion-map` | The Earth World | Spatial Sovereignty through Drone-Mapping and DNA-Soil data. | `library-storage`, `p2p-aggregation` |

## 5. Implementation Steps

### Phase 1: Extraction & Setup
- [ ] Create [`components/technical/BaseNode.vue`](components/technical/BaseNode.vue) and `SuperNode.vue` for the custom node UI.
- [ ] Create UI components: `CodeSnap.vue` and `SupplyChainTile.vue`.
- [ ] Initialize [`components/technical/modularMap.vue`](components/technical/modularMap.vue) with a Tab Switcher (Explorer / Playground).
- [ ] Define the `modules` data object based on the **HOP Sovereign Skeleton Specification** and **HOP Examples Specification**.

### Phase 2: Explorer View (Vue Flow)
- [ ] Implement the `VueFlow` container.
- [ ] Map the `modules` data to Vue Flow `nodes` and `edges`, ensuring Super-Nodes are visually distinct.
- [ ] Implement "Coupling" logic: On hover of a node, highlight connected edges and target nodes.
- [ ] Add "Case Study" tiles beneath the map linking to standalone deep-dive pages (`/besearch/vagus-strap`, etc.).

### Phase 3: Playground View & Integration
- [ ] Integrate `geometryPlayground.vue` into the Playground tab.
- [ ] Implement the global "Resonance Slider" logic affecting the 3D heart, Vagus-Strap pulse, and Bioregion map glow.
- [ ] Implement "Deep Linking": Clicking "Test in Playground" from a module's side-car panel switches to the Playground tab with relevant parameters pre-set.
- [ ] Add the "Pulse" animation to edges in the Explorer view.

### Phase 4: Integration
- [ ] Replace the hardcoded section in [`app.vue`](app.vue) with `<ModularMap />`.
- [ ] Ensure event bubbling for navigation buttons.

## 6. Mermaid Workflow
```mermaid
graph TD
    MK[Master Key] --> HK[Hyperbee Keys]
    MK --> CL[Coherence Ledger]
    MK --> HO[Heart Organ Super-Node]
    HC[HeliClock] --> SF[SafeFlow ECS]
    HC --> VS[Vagus Strap Super-Node]
    SF --> RA[ResonAgents]
    SF --> EE[Emulation Engine]
    SF --> VS
    RA --> BB[BeeBee LLM]
    CL --> CW[Consilience Weave]
    LS[Library Storage] --> NH[NEAT HOP]
    LS --> BM[Bioregion Map Super-Node]
