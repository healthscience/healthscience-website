class HsLensExplorer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = {
            activeView: 'explorer',
            viewportState: 'micro', // macro, micro, focus
            selectedNode: null,
            globalResonance: 50,
            isPulseActive: false,
            pulseStage: 0,
            showCoupling: true,
            zoom: 0.8,
            pan: { x: 0, y: 0 }
        };

        this.nodes = [
            // Foundation Layer
            { id: 'master-key', type: 'base', x: 100, y: 100, label: 'The Root', layer: 'foundation', logic: 'BIP39 / HD Wallet. The cryptographic source of all Peer sovereignty.', coupling: ['hyperbee-keys', 'coherence-ledger', 'heart-organ'] },
            { id: 'heli-clock', type: 'base', x: 400, y: 100, label: 'Solar Geometry', layer: 'foundation', logic: 'Spherical Trig. Calculates Solar Noon/Azimuth to anchor metabolic data.', coupling: ['safeflow-ecs', 'context-buffer', 'vagus-strap'] },
            { id: 'hyperbee-keys', type: 'base', x: 100, y: 250, label: 'Derived Keys', layer: 'foundation', logic: 'Master-Root key derivation for local database encryption/signing.', coupling: ['master-key', 'library-storage'] },
            
            // Engine Layer
            { id: 'safeflow-ecs', type: 'base', x: 400, y: 250, label: 'The State Engine', layer: 'engine', logic: 'Entity Component System. Maps biological rhythms to state-machine transitions.', coupling: ['reson-agents', 'emulation-plugin', 'vagus-strap'] },
            { id: 'reson-agents', type: 'base', x: 700, y: 250, label: 'Bio-Translators', layer: 'engine', logic: 'Basal Cognition. Translates raw sensor JSON into "Biological Intent."', coupling: ['safeflow-ecs', 'beebee-llm'] },
            { id: 'neat-hop', type: 'base', x: 700, y: 400, label: 'Evolutionary ML', layer: 'engine', logic: 'NeuroEvolution (NEAT). Optimizes neural pathways for health discovery.', coupling: ['consilience-weave', 'search-space'] },
            { id: 'emulation-plugin', type: 'base', x: 400, y: 400, label: 'The Sandbox', layer: 'engine', logic: '"What If" simulation. Runs Module Contracts against virtual cueCubes.', coupling: ['safeflow-ecs', 'library-storage'] },
            
            // Fabric Layer
            { id: 'coherence-ledger', type: 'base', x: 100, y: 400, label: 'The Truth', layer: 'fabric', logic: 'Local-first signing. Cryptographic witness of biological alignment.', coupling: ['master-key', 'consilience-weave'] },
            { id: 'library-storage', type: 'base', x: 100, y: 550, label: 'Levin-Bubble', layer: 'fabric', logic: 'Hyperbee. Goal-directed sorting where high-utility data "bubbles" up.', coupling: ['hyperbee-keys', 'neat-hop', 'bioregion-map'] },
            { id: 'noise-holepunch', type: 'base', x: 400, y: 550, label: 'The Handshake', layer: 'fabric', logic: 'Hyperswarm + Noise Protocol. Peer-to-peer connectivity without relays.', coupling: ['consilience-weave', 'p2p-aggregation'] },
            { id: 'consilience-weave', type: 'base', x: 700, y: 550, label: 'The Synthesis', layer: 'fabric', logic: 'Multi-vantage verification. Prevents data cascades across the network.', coupling: ['coherence-ledger', 'immune-dml'] },

            // Super Nodes
            { 
                id: 'vagus-strap', 
                type: 'super', 
                x: 1000, y: 150, 
                label: 'Vagus-Strap (Body World)', 
                layer: 'example', 
                logic: 'Closed-loop actuator for neural resonance (RISC-V PWM).', 
                coupling: ['heli-clock', 'safeflow-ecs'],
                codeSnippet: `// Triggered via BeeBee NL-First Agent\nconst startVagusProtocol = (intensity) => {\n  hop.p2p.sendToDevice('VagusStrap_01', {\n    mode: 'PWM_PULSE',\n    freq: 30,\n    duty: intensity,\n    pattern: [30000, 30000] // 30s on/off\n  });\n};`
            },
            { 
                id: 'heart-organ', 
                type: 'super', 
                x: 1000, y: 350, 
                label: 'Heart Emulation (Organ World)', 
                layer: 'example', 
                logic: 'Visualizing biological intent through Z-Anatomy (3D Heart Mesh).', 
                coupling: ['master-key']
            },
            { 
                id: 'bioregion-map', 
                type: 'super', 
                x: 1000, y: 550, 
                label: 'Bioregion Renderer (Earth World)', 
                layer: 'example', 
                logic: 'Spatial Sovereignty through Drone-Mapping and DNA-Soil data.', 
                coupling: ['library-storage', 'p2p-aggregation']
            }
        ];

        this.edges = [
            { id: 'e-mk-hk', source: 'master-key', target: 'hyperbee-keys', color: '#00ffcc' },
            { id: 'e-mk-cl', source: 'master-key', target: 'coherence-ledger', color: '#00ffcc' },
            { id: 'e-mk-ho', source: 'master-key', target: 'heart-organ', color: '#ef4444' },
            { id: 'e-hc-sf', source: 'heli-clock', target: 'safeflow-ecs', color: '#00ffcc' },
            { id: 'e-hc-vs', source: 'heli-clock', target: 'vagus-strap', color: '#f59e0b' },
            { id: 'e-sf-ra', source: 'safeflow-ecs', target: 'reson-agents', color: '#00ffcc' },
            { id: 'e-sf-ee', source: 'safeflow-ecs', target: 'emulation-plugin', color: '#00ffcc' },
            { id: 'e-sf-vs', source: 'safeflow-ecs', target: 'vagus-strap', color: '#f59e0b' },
            { id: 'e-cl-cw', source: 'coherence-ledger', target: 'consilience-weave', color: '#00ffcc' },
            { id: 'e-ls-nh', source: 'library-storage', target: 'neat-hop', color: '#00ffcc' },
            { id: 'e-ls-bm', source: 'library-storage', target: 'bioregion-map', color: '#22c55e' }
        ];

        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
    }

    connectedCallback() {
        this.render();
        this.initEvents();
        this.fitView();
    }

    onActivate() {
        console.log('Explorer Lens Activated');
        this.fitView();
    }

    setActiveView(view) {
        this.state.activeView = view;
        this.render();
        this.initEvents();
    }

    setViewportState(state) {
        this.state.viewportState = state;
        if (state === 'focus' && this.state.selectedNode) {
            this.state.zoom = 1.0;
            this.state.pan = { x: -200, y: -this.state.selectedNode.y + 300 };
        } else if (state === 'macro') {
            this.state.zoom = 0.5;
        } else {
            this.state.zoom = 0.8;
        }
        this.updateGraphTransform();
        this.render();
        this.initEvents();
    }

    fitView() {
        const container = this.shadowRoot.getElementById('explorer-container');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        this.state.zoom = 0.6;
        this.state.pan = { x: rect.width / 4, y: 100 };
        this.updateGraphTransform();
    }

    updateGraphTransform() {
        const stage = this.shadowRoot.getElementById('graph-stage');
        if (stage) {
            stage.style.transform = `translate(${this.state.pan.x}px, ${this.state.pan.y}px) scale(${this.state.zoom})`;
        }
    }

    initEvents() {
        const container = this.shadowRoot.getElementById('explorer-container');
        if (!container) return;

        container.onmousedown = (e) => {
            if (e.target.closest('.node')) return;
            this.isDragging = true;
            this.dragStart = { x: e.clientX - this.state.pan.x, y: e.clientY - this.state.pan.y };
        };

        window.onmousemove = (e) => {
            if (!this.isDragging) return;
            this.state.pan.x = e.clientX - this.dragStart.x;
            this.state.pan.y = e.clientY - this.dragStart.y;
            this.updateGraphTransform();
        };

        window.onmouseup = () => {
            this.isDragging = false;
        };

        container.onwheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            this.state.zoom *= delta;
            this.state.zoom = Math.max(0.2, Math.min(4, this.state.zoom));
            this.updateGraphTransform();
        };
    }

    selectNode(nodeId) {
        this.state.selectedNode = this.nodes.find(n => n.id === nodeId);
        this.setViewportState('focus');
    }

    triggerBesearch() {
        if (this.state.isPulseActive) return;
        this.state.isPulseActive = true;
        this.render();
        this.runPulseSequence();
    }

    async runPulseSequence() {
        const delay = (ms) => new Promise(res => setTimeout(res, ms));
        
        this.state.pulseStage = 1; this.updatePulseUI();
        await delay(1500);
        this.state.pulseStage = 2; this.updatePulseUI();
        await delay(1500);
        this.state.pulseStage = 3; this.updatePulseUI();
        await delay(1500);
        this.state.pulseStage = 4; this.updatePulseUI();
        await delay(2000);
        
        this.state.isPulseActive = false;
        this.state.pulseStage = 0;
        this.updatePulseUI();
    }

    updatePulseUI() {
        const nodes = this.shadowRoot.querySelectorAll('.node');
        const edges = this.shadowRoot.querySelectorAll('.edge');
        
        nodes.forEach(n => n.classList.remove('active'));
        edges.forEach(e => e.classList.remove('animated'));

        if (this.state.pulseStage === 1) {
            this.shadowRoot.getElementById('node-master-key')?.classList.add('active');
            this.shadowRoot.getElementById('node-heli-clock')?.classList.add('active');
        } else if (this.state.pulseStage === 2) {
            this.shadowRoot.getElementById('edge-e-mk-hk')?.classList.add('animated');
            this.shadowRoot.getElementById('edge-e-hc-sf')?.classList.add('animated');
        } else if (this.state.pulseStage === 3) {
            this.shadowRoot.getElementById('node-neat-hop')?.classList.add('active');
        } else if (this.state.pulseStage === 4) {
            this.shadowRoot.getElementById('node-coherence-ledger')?.classList.add('active');
        }
        
        const overlay = this.shadowRoot.querySelector('.besearch-overlay');
        if (overlay) overlay.style.display = this.state.isPulseActive ? 'flex' : 'none';
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                height: 100vh;
                background: #050a08;
                color: #00ffcc;
                font-family: 'Courier New', Courier, monospace;
                overflow: hidden;
            }

            .layout {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }

            header {
                padding: 1rem 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #050a08;
                border-bottom: 2px solid #00ffcc;
                z-index: 100;
                position: relative;
                flex-shrink: 0;
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            }

            .view-switcher {
                display: flex;
                background: rgba(0, 255, 204, 0.1);
                padding: 4px;
                border-radius: 8px;
                border: 1px solid rgba(0, 255, 204, 0.3);
            }

            .view-switcher button {
                padding: 8px 24px;
                background: transparent;
                border: none;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 0.8rem;
                transition: all 0.3s;
            }

            .view-switcher button.active {
                background: rgba(0, 255, 204, 0.2);
                color: #00ffcc;
                border: 1px solid rgba(0, 255, 204, 0.5);
                border-radius: 4px;
            }

            .explorer-view {
                flex: 1;
                position: relative;
                overflow: hidden;
            }

            #explorer-container {
                width: 100%;
                height: 100%;
                cursor: grab;
                background: 
                    radial-gradient(circle at 2px 2px, rgba(0, 255, 204, 0.1) 1px, transparent 0);
                background-size: 50px 50px;
            }

            #graph-stage {
                transform-origin: 0 0;
                transition: transform 0.1s ease-out;
            }

            .edge {
                stroke-dasharray: 5;
                transition: all 0.5s;
            }

            .edge.animated {
                stroke-dashoffset: 100;
                animation: flow 2s linear infinite;
                stroke-width: 4;
            }

            @keyframes flow {
                from { stroke-dashoffset: 100; }
                to { stroke-dashoffset: 0; }
            }

            .node {
                cursor: pointer;
                transition: all 0.3s;
            }

            .node:hover {
                filter: brightness(1.5);
            }

            .node.active rect {
                stroke: #fff;
                stroke-width: 3;
                filter: drop-shadow(0 0 10px #00ffcc);
            }

            .node-label {
                font-size: 14px;
                fill: #fff;
                pointer-events: none;
                text-transform: uppercase;
            }

            .watermark {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 8rem;
                font-weight: 900;
                opacity: 0.05;
                pointer-events: none;
                text-transform: uppercase;
                text-align: center;
                line-height: 0.8;
                z-index: 1;
            }

            /* Overlays */
            .besearch-overlay {
                position: absolute;
                top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                display: none;
                flex-direction: column;
                align-items: center;
                z-index: 50;
            }

            .pulse-circle {
                width: 200px; height: 200px;
                border: 2px solid #00ffcc;
                border-radius: 50%;
                animation: pulse 2s ease-out infinite;
            }

            @keyframes pulse {
                0% { transform: scale(0.5); opacity: 1; }
                100% { transform: scale(2); opacity: 0; }
            }

            .doc-panel {
                position: absolute;
                top: 0; right: 0; bottom: 0;
                width: 400px;
                background: rgba(0, 20, 15, 0.9);
                border-left: 1px solid rgba(0, 255, 204, 0.3);
                padding: 2rem;
                transform: translateX(${this.state.selectedNode ? '0' : '100%'});
                transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 200;
                backdrop-filter: blur(10px);
            }

            .hud {
                position: absolute;
                bottom: 2rem; left: 2rem;
                display: flex;
                gap: 1rem;
                z-index: 100;
            }

            .btn-hud {
                background: rgba(0, 40, 30, 0.8);
                border: 1px solid #00ffcc;
                color: #00ffcc;
                padding: 10px 20px;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 0.7rem;
                letter-spacing: 1px;
            }

            .btn-hud:hover {
                background: #00ffcc;
                color: #000;
            }

            /* Playground View */
            .playground-view {
                flex: 1;
                padding: 4rem;
                overflow-y: auto;
            }

            .resonance-card {
                background: rgba(0, 255, 204, 0.05);
                border: 1px solid rgba(0, 255, 204, 0.2);
                padding: 2rem;
                border-radius: 12px;
                margin-bottom: 2rem;
            }

            input[type="range"] {
                width: 100%;
                accent-color: #00ffcc;
                margin: 2rem 0;
            }
        </style>

        <div class="layout">
            <header>
                <div>
                    <div style="font-size: 0.7rem; opacity: 0.6;">STRATEGIC PLUGINS</div>
                    <div style="font-size: 1.2rem; letter-spacing: 4px;">AUTHORING THE WORLDS</div>
                </div>
                <div class="view-switcher">
                    <button class="${this.state.activeView === 'explorer' ? 'active' : ''}" 
                            onclick="this.getRootNode().host.setActiveView('explorer')">Explorer</button>
                    <button class="${this.state.activeView === 'playground' ? 'active' : ''}" 
                            onclick="this.getRootNode().host.setActiveView('playground')">Playground</button>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-hud" onclick="window.location.hash='#skeleton'" style="background: #00ffcc; color: #000; font-weight: 900; border: 2px solid #fff; box-shadow: 0 0 15px #00ffcc;">[ RETURN TO SKELETON ]</button>
                    <button class="btn-hud" style="border-color: #ff3366; color: #ff3366;" onclick="window.location.hash='#emulation'">[ EXIT ]</button>
                </div>
            </header>

            ${this.state.activeView === 'explorer' ? `
                <div class="explorer-view">
                    <div class="watermark">COMING<br>SOON</div>
                    <div id="explorer-container">
                        <svg id="graph-stage" width="2000" height="1000">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="25" refY="5" orient="auto">
                                    <path d="M0,0 L10,5 L0,10 Z" fill="rgba(0, 255, 204, 0.5)" />
                                </marker>
                            </defs>
                            <g id="edges">
                                ${this.edges.map(e => {
                                    const source = this.nodes.find(n => n.id === e.source);
                                    const target = this.nodes.find(n => n.id === e.target);
                                    return `
                                        <line id="edge-${e.id}" class="edge" 
                                              x1="${source.x + 100}" y1="${source.y + 40}" 
                                              x2="${target.x + 100}" y2="${target.y + 40}" 
                                              stroke="${e.color}" stroke-width="2" marker-end="url(#arrow)" />
                                    `;
                                }).join('')}
                            </g>
                            <g id="nodes">
                                ${this.nodes.map(n => `
                                    <g id="node-${n.id}" class="node ${this.state.selectedNode?.id === n.id ? 'active' : ''}" 
                                       transform="translate(${n.x}, ${n.y})"
                                       onclick="this.getRootNode().host.selectNode('${n.id}')">
                                        <rect width="200" height="${n.type === 'super' ? '120' : '80'}" rx="8" 
                                              fill="rgba(0, 40, 30, 0.9)" stroke="rgba(0, 255, 204, 0.3)" />
                                        <text x="20" y="30" class="node-label">${n.label}</text>
                                        <text x="20" y="55" font-size="10" fill="rgba(255,255,255,0.4)">${n.layer.toUpperCase()}</text>
                                    </g>
                                `).join('')}
                            </g>
                        </svg>
                    </div>

                    <div class="besearch-overlay">
                        <div class="pulse-circle"></div>
                        <div style="margin-top: 2rem; font-size: 0.8rem; letter-spacing: 2px;">BESEARCH_PULSE_ACTIVE</div>
                    </div>

                    <div class="doc-panel">
                        <button onclick="this.getRootNode().host.selectNode(null)" 
                                style="background: transparent; border: none; color: #ff3366; cursor: pointer; float: right;">[ CLOSE ]</button>
                        ${this.state.selectedNode ? `
                            <h2 style="color: #00ffcc; margin-top: 2rem;">${this.state.selectedNode.label}</h2>
                            <div style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 2rem;">${this.state.selectedNode.layer.toUpperCase()} LAYER</div>
                            <p style="font-size: 0.9rem; line-height: 1.6; color: #fff;">${this.state.selectedNode.logic}</p>
                            
                            <h3 style="font-size: 0.7rem; margin-top: 2rem;">COUPLING</h3>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${this.state.selectedNode.coupling.map(c => `
                                    <span style="font-size: 0.6rem; padding: 4px 8px; border: 1px solid rgba(0, 255, 204, 0.3);">${c}</span>
                                `).join('')}
                            </div>

                            ${this.state.selectedNode.codeSnippet ? `
                                <h3 style="font-size: 0.7rem; margin-top: 2rem;">LOGIC_EXTRACT</h3>
                                <pre style="background: #000; padding: 1rem; font-size: 0.7rem; color: #ffb000; overflow-x: auto;">${this.state.selectedNode.codeSnippet}</pre>
                            ` : ''}
                        ` : ''}
                    </div>

                    <div class="hud">
                        <button class="btn-hud" onclick="this.getRootNode().host.triggerBesearch()">Run Besearch</button>
                        <button class="btn-hud" onclick="this.getRootNode().host.fitView()">Reset View</button>
                    </div>
                </div>
            ` : `
                <div class="playground-view">
                    <div class="watermark">COMING<br>SOON</div>
                    <div class="resonance-card">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h3>Global Resonance</h3>
                            <span style="font-size: 2rem; color: #00ffcc;">${this.state.globalResonance}%</span>
                        </div>
                        <input type="range" min="0" max="100" value="${this.state.globalResonance}" 
                               oninput="this.getRootNode().host.state.globalResonance = this.value; this.getRootNode().host.render()">
                        <p style="font-size: 0.9rem; font-style: italic; opacity: 0.7;">
                            Slide toward "High Coherence" to stabilize the Vagus-Strap pulse, make the 3D heart beat rhythmically, and make the Bioregion map glow green.
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
                        <div class="resonance-card" style="height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <h4>Vagus-Strap</h4>
                            <div style="width: 60px; height: 60px; background: rgba(245, 158, 11, 0.5); border-radius: 50%; 
                                        transform: scale(${1 + this.state.globalResonance / 100}); transition: transform 0.3s;"></div>
                        </div>
                        <div class="resonance-card" style="height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <h4>Heart Emulation</h4>
                            <div style="width: 60px; height: 60px; background: rgba(239, 68, 68, 0.5); 
                                        border-radius: ${50 - this.state.globalResonance / 4}%; transition: border-radius 0.3s;"></div>
                        </div>
                        <div class="resonance-card" style="height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <h4>Bioregion Map</h4>
                            <div style="width: 100%; height: 100px; background: rgba(34, 197, 94, ${this.state.globalResonance / 100}); 
                                        border-radius: 4px; transition: background 0.3s;"></div>
                        </div>
                    </div>
                </div>
            `}
        </div>
        `;
        this.updatePulseUI();
    }
}

customElements.define('hs-lens-explorer', HsLensExplorer);
