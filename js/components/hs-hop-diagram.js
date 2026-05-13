class HsHopDiagram extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.showTechnicalMap = false;
    }

    connectedCallback() {
        this.render();
    }

    toggleTechnicalMap() {
        this.showTechnicalMap = !this.showTechnicalMap;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                font-family: 'Inter', -apple-system, sans-serif;
                color: #ffffff;
            }

            /* Anatomy Diagram Internal Styles */
            .icon-box { fill: none; stroke: #a9ff00; stroke-width: 1.5; opacity: 0.7; }
            .icon-label { fill: #f0fdf4; font-size: 11px; font-family: 'Inter', monospace; text-anchor: middle; }
            .mind-curve {
                fill: none;
                stroke: rgba(255, 255, 255, 0.2);
                stroke-width: 1.5;
                stroke-dasharray: 4, 4;
            }
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
            .anatomy-container {
                background: #0a1914;
                border: 1px solid rgba(169, 255, 0, 0.1);
                border-radius: 12px;
                padding: 40px;
                position: relative;
                overflow: hidden;
                margin: 2rem 0;
            }
            .anatomy-container::before,
            .anatomy-container::after {
                content: '';
                position: absolute;
                width: 100px;
                height: 100px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a9ff0033'%3E%3Cpath d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' /%3E%3C/svg%3E");
                background-repeat: no-repeat;
                pointer-events: none;
                z-index: 1;
            }
            .anatomy-container::before { top: -20px; left: -20px; transform: rotate(-15deg); }
            .anatomy-container::after { bottom: -20px; right: -20px; transform: rotate(165deg); }

            .fabric-svg {
                width: 100%;
                height: auto;
                max-width: 900px;
                display: block;
                margin: 0 auto;
            }

            .label-sub {
                fill: #888;
                font-family: monospace;
                font-size: 10px;
                text-transform: uppercase;
            }
            .label-main {
                fill: #a9ff00;
                font-family: monospace;
                font-size: 14px;
                text-transform: uppercase;
                text-anchor: middle;
                letter-spacing: 2px;
            }

            .btn-playground {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .btn-playground:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 20px rgba(169, 255, 0, 0.2);
            }

            .daisy-world {
                width: 16px;
                height: 16px;
                background: white;
                border-radius: 50%;
                position: relative;
                box-shadow: 0 0 10px white;
            }
            .daisy-world::after {
                content: '';
                position: absolute;
                inset: 4px;
                background: #fbbf24;
                border-radius: 50%;
            }

            .anatomy-trigger {
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            .anatomy-trigger:hover {
                transform: scale(1.02);
            }

            .pulse {
                animation: blink 2s infinite;
            }

            @keyframes blink {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 1; }
            }

            /* Grid and Modules */
            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }

            .lego-module {
                background: rgba(45, 70, 53, 0.2);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(169, 255, 0, 0.1);
                border-radius: 12px;
                padding: 1.5rem;
                transition: border-color 0.3s ease;
            }

            .lego-module:hover {
                border-color: rgba(169, 255, 0, 0.4);
            }

            .text-neon { color: #a9ff00; }
            .text-primary { color: #ffffff; }
            .text-secondary { color: #9ca3af; }
            .font-mono { font-family: 'Inter', monospace; }
            .font-medium { font-weight: 500; }
            .uppercase { text-transform: uppercase; }
            .tracking-widest { letter-spacing: 0.2em; }
            .text-xs { font-size: 0.75rem; }
            .text-\[10px\] { font-size: 10px; }
            .mb-2 { margin-bottom: 0.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-12 { margin-bottom: 3rem; }
            .mt-6 { margin-top: 1.5rem; }
            .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
            .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
            .inline-flex { display: inline-flex; }
            .items-center { align-items: center; }
            .gap-3 { gap: 0.75rem; }
            .border-neon\/50 { border-color: rgba(169, 255, 0, 0.5); }
            .bg-neon\/5 { background-color: rgba(169, 255, 0, 0.05); }
            .rounded-full { border-radius: 9999px; }
            .max-h-0 { max-height: 0; }
            .max-h-\[2000px\] { max-height: 2000px; }
            .opacity-0 { opacity: 0; }
            .opacity-100 { opacity: 1; }
            .overflow-hidden { overflow: hidden; }
            .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
            .duration-700 { transition-duration: 700ms; }
            .ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
            .w-full { width: 100%; }
            .max-w-7xl { max-width: 80rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .p-4 { padding: 1rem; }
            .md\:p-12 { padding: 3rem; }
            .bg-forest\/40 { background-color: rgba(20, 40, 30, 0.4); }
            .border-y { border-top-width: 1px; border-bottom-width: 1px; }
            .border-pine\/20 { border-color: rgba(45, 70, 53, 0.2); }
            .relative { position: relative; }
            .z-10 { z-index: 10; }
            .text-2xl { font-size: 1.5rem; }
            .font-light { font-weight: 300; }

            @media (max-width: 768px) {
                .text-2xl { font-size: 1.25rem; }
            }
        </style>

        <section id="diagram-content" class="p-4 md:p-12 relative z-10 bg-forest/40 border-y border-pine/20">
            <div class="w-full max-w-7xl mx-auto">
                <div class="mb-12">
                    <h2 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-4">The Anatomy of the HOP Fabric</h2>
                    <h3 class="text-2xl md:text-2xl font-light text-primary mb-8">Metabolic Journey</h3>
                    
                    <div class="anatomy-trigger" onclick="this.getRootNode().host.toggleTechnicalMap()">
                        <div class="anatomy-container bento-node">
                            <svg viewBox="0 0 900 500" class="fabric-svg" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="besearchGlow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                    
                                    <pattern id="weavePattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M0 5h10M5 0v10" stroke="rgba(169, 255, 0, 0.2)" stroke-width="0.5"/>
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
                                    <rect x="350" y="100" width="200" height="250" rx="100" fill="url(#weavePattern)" stroke="rgba(169, 255, 0, 0.3)" />
                                    
                                    <g transform="translate(450, 200) scale(0.8)">
                                        <ellipse cx="0" cy="0" rx="40" ry="80" stroke="#a9ff00" stroke-width="3" fill="none" opacity="0.6" />
                                        <circle cx="0" cy="-30" r="45" stroke="#a9ff00" stroke-width="2" fill="none" opacity="0.4" />
                                    </g>
                                    
                                    <text x="450" y="380" class="label-main" fill="#ffffff">SafeFlow-ECS</text>
                                    <text x="450" y="400" class="label-sub" fill="#a9ff00">Consilience Weave</text>

                                    <g transform="translate(340, 430)">
                                        <circle cx="20" cy="0" r="15" fill="rgba(169, 255, 0, 0.2)" stroke="#a9ff00" />
                                        <circle cx="80" cy="0" r="15" fill="rgba(169, 255, 0, 0.2)" stroke="#a9ff00" />
                                        <circle cx="140" cy="0" r="15" fill="rgba(169, 255, 0, 0.2)" stroke="#a9ff00" />
                                        <circle cx="200" cy="0" r="15" fill="rgba(169, 255, 0, 0.2)" stroke="#a9ff00" />
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

                            <div class="diagram-footer mt-6">
                                <div class="btn-playground group inline-flex items-center gap-3 px-6 py-3 border border-neon/50 bg-neon/5 hover:bg-neon/10 transition-all rounded-full">
                                    <span class="daisy-world"></span>
                                    <span class="text-neon font-mono text-xs tracking-widest uppercase">Explore Technical Map</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="${this.showTechnicalMap ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-700 ease-out">
                    <div class="grid py-12">
                        <div class="lego-module">
                            <div class="text-neon font-mono text-[10px] uppercase mb-2">PLUGIN_HOP</div>
                            <div class="text-primary font-medium mb-2">ResonAgent Kernel</div>
                            <p class="text-[10px] text-secondary">The core mathematical engine for active inference.</p>
                        </div>
                        <div class="lego-module">
                            <div class="text-neon font-mono text-[10px] uppercase mb-2">PLUGIN_FABRIC</div>
                            <div class="text-primary font-medium mb-2">P2P Weave</div>
                            <p class="text-[10px] text-secondary">Decentralized transport for biological cues.</p>
                        </div>
                        <div class="lego-module">
                            <div class="text-neon font-mono text-[10px] uppercase mb-2">PLUGIN_BENTO</div>
                            <div class="text-primary font-medium mb-2">SafeFlow-ECS</div>
                            <p class="text-[10px] text-secondary">High-performance state management for life.</p>
                        </div>
                        <div class="lego-module">
                            <div class="text-neon font-mono text-[10px] uppercase mb-2">PLUGIN_GEOM</div>
                            <div class="text-primary font-medium mb-2">HeliClock v2</div>
                            <p class="text-[10px] text-secondary">Geometric time and orbital resonance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('hs-hop-diagram', HsHopDiagram);
