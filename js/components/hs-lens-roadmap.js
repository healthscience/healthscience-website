class HsLensRoadmap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                background: #1a2a22; /* Forest background */
                color: #fcfaf2; /* Primary text */
                min-height: 100vh;
                font-family: 'Inter', sans-serif;
                overflow-y: auto;
                padding-top: 80px;
                box-sizing: border-box;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }

            header {
                margin-bottom: 4rem;
                border-bottom: 1px solid rgba(0, 255, 136, 0.2);
                padding-bottom: 2rem;
            }

            .tagline {
                font-family: monospace;
                color: #00ff88; /* Neon */
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.3em;
                margin-bottom: 1rem;
            }

            h2 {
                font-size: 3rem;
                font-weight: 300;
                margin: 0 0 1rem 0;
            }

            h2 span {
                font-weight: bold;
                font-style: italic;
            }

            .description {
                color: #a0aec0; /* Secondary */
                font-size: 1.1rem;
                max-width: 600px;
                font-style: italic;
                line-height: 1.6;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
            }

            .lego-module {
                background: rgba(45, 90, 39, 0.05); /* Pine background */
                border: 1px solid rgba(45, 90, 39, 0.3);
                border-radius: 1rem;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                transition: all 0.5s ease;
                backdrop-filter: blur(5px);
                position: relative;
            }

            .lego-module:hover {
                border-color: rgba(0, 255, 136, 0.4);
            }

            .module-v2 {
                background: rgba(0, 255, 136, 0.05);
                border-color: rgba(0, 255, 136, 0.3);
            }

            .module-v2:hover {
                border-color: rgba(0, 255, 136, 0.6);
            }

            .pulse-dot {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 8px;
                height: 8px;
                background: #00ff88;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.7); }
                70% { transform: scale(1.2); opacity: 0.5; box-shadow: 0 0 0 10px rgba(0, 255, 136, 0); }
                100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 136, 0); }
            }

            .version-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1.5rem;
            }

            .v-num {
                font-size: 3rem;
                font-weight: 300;
                color: rgba(0, 255, 136, 0.2);
                font-family: monospace;
            }

            .v-tag {
                padding: 0.25rem 0.5rem;
                font-size: 0.6rem;
                font-family: monospace;
                border: 1px solid rgba(0, 255, 136, 0.2);
                color: #00ff88;
                text-transform: uppercase;
                letter-spacing: -0.05em;
            }

            h3 {
                font-size: 1.5rem;
                font-weight: 500;
                margin: 0 0 0.5rem 0;
            }

            .focus {
                font-size: 0.7rem;
                font-family: monospace;
                color: #2d5a27; /* Pine */
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin-bottom: 1.5rem;
            }

            .module-v2 .focus {
                color: #00ff88;
            }

            .section-title {
                font-size: 0.7rem;
                font-family: monospace;
                color: rgba(0, 255, 136, 0.6);
                text-transform: uppercase;
                margin-bottom: 0.5rem;
                margin-top: 1.5rem;
            }

            .section-content {
                font-size: 0.9rem;
                color: #a0aec0;
                line-height: 1.6;
            }

            ul {
                padding-left: 1.2rem;
                margin: 0;
            }

            li {
                margin-bottom: 0.5rem;
            }

            footer {
                margin-top: 4rem;
                padding: 1.5rem;
                border: 1px solid rgba(0, 255, 136, 0.2);
                border-radius: 0.75rem;
                background: rgba(45, 90, 39, 0.05);
                max-width: 800px;
                backdrop-filter: blur(5px);
            }

            .footer-title {
                font-size: 0.75rem;
                font-family: monospace;
                color: #00ff88;
                text-transform: uppercase;
                margin-bottom: 0.5rem;
            }

            .footer-content {
                font-size: 0.85rem;
                color: #a0aec0;
                font-style: italic;
                line-height: 1.6;
            }

            @media (max-width: 768px) {
                h2 { font-size: 2rem; }
                .grid { grid-template-columns: 1fr; }
            }
        </style>

        <div class="container">
            <header>
                <div class="tagline">The Orbital Arcs</div>
                <h2>A Woodland <span>Evolution</span></h2>
                <p class="description">
                    The shift from Caledonian to Boreal is defined by the removal of abstraction. We move from drawing a representation of data to rendering the data itself.
                </p>
            </header>

            <div class="grid">
                <!-- V1: Caledonian -->
                <div class="lego-module">
                    <div class="version-header">
                        <span class="v-num">V1</span>
                        <span class="v-tag">Caledonian</span>
                    </div>
                    <h3>The Native Seed</h3>
                    <div class="focus">Focus: Local-First Stability</div>
                    
                    <div class="section-title">The Metaphor</div>
                    <div class="section-content">Regional, native woodland. Rugged, deep-rooted, and essential for the local soil.</div>
                    
                    <div class="section-title">The Tech</div>
                    <div class="section-content">
                        <ul>
                            <li>Core BentoBoxDS schema & Sovereign Shell</li>
                            <li>Decoupled Engine (Simulation Proxy)</li>
                            <li>Universal Component Schema (JS)</li>
                        </ul>
                    </div>
                    
                    <div class="section-title">The Experience</div>
                    <div class="section-content">Establishing your Sovereign Archive. Planting the native forest, scouting local "Ghosts".</div>
                </div>

                <!-- V2: Boreal / Taiga -->
                <div class="lego-module module-v2">
                    <div class="pulse-dot"></div>
                    <div class="version-header">
                        <span class="v-num" style="color: rgba(0, 255, 136, 0.4)">V2</span>
                        <span class="v-tag">Boreal / Taiga</span>
                    </div>
                    <h3>The Great Connection</h3>
                    <div class="focus">Focus: bare.js Integration</div>
                    
                    <div class="section-title">The Metaphor</div>
                    <div class="section-content">The vast Boreal forest that circles the Earth. A resilient, interconnected belt of life.</div>
                    
                    <div class="section-title">The Tech</div>
                    <div class="section-content">
                        <ul>
                            <li>Collapse of the Middleware</li>
                            <li>SafeFlow-ECS as Authority</li>
                            <li>Consilience Weave (P2P Node)</li>
                        </ul>
                    </div>
                    
                    <div class="section-title">The Experience</div>
                    <div class="section-content">Total fluidity. Heli-Clock sees other pulses. Transition from "Simulation" to "Direct Emulation".</div>
                </div>

                <!-- V3: Rainforest -->
                <div class="lego-module">
                    <div class="version-header">
                        <span class="v-num">V3</span>
                        <span class="v-tag">Rainforest</span>
                    </div>
                    <h3>The Abundant Intelligence</h3>
                    <div class="focus">Focus: 3D Geometric Emulation</div>
                    
                    <div class="section-title">The Metaphor</div>
                    <div class="section-content">The most complex and abundant ecosystem. Every layer is teeming with life and feedback loops.</div>
                    
                    <div class="section-title">The Tech</div>
                    <div class="section-content">
                        <ul>
                            <li>ResonAgents & NEAT-HOP</li>
                            <li>Life-Strap Unified View (3D Orrery)</li>
                            <li>Cryptographic Flow (Collective Intelligence)</li>
                        </ul>
                    </div>
                    
                    <div class="section-title">The Experience</div>
                    <div class="section-content">Resonance Pulse becomes a multidimensional heatmap. Conscious node in a thriving planetary ecosystem.</div>
                </div>
            </div>

            <footer>
                <div class="footer-title">Architectural Note (V2 Transition)</div>
                <div class="footer-content">
                    The Universal Component Schema is the bridge that makes this "Bare-Logic" possible. We move from drawing a representation of data to rendering the data itself.
                </div>
            </footer>
        </div>
        `;
    }
}

customElements.define('hs-lens-roadmap', HsLensRoadmap);
