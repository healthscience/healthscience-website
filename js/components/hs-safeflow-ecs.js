class HsSafeflowEcs extends HTMLElement {
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
            @import url('css/nature.css');
            :host { 
                display: none; 
                background: #fcfaf2;
                min-height: 100vh;
                padding-top: 80px;
            }
            :host(.active) { display: block !important; }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 4rem 2rem;
                background: white;
                border-left: 1px solid #dcd3c1;
                border-right: 1px solid #dcd3c1;
                min-height: calc(100vh - 80px);
                position: relative;
            }

            section {
                position: relative;
                padding: 2.5rem;
            }

            .close-btn {
                position: absolute;
                top: 5rem;
                right: 2rem;
                background: transparent;
                border: 1px solid #2d5a27;
                color: #2d5a27;
                padding: 0.5rem 1rem;
                font-family: monospace;
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
                z-index: 1000;
            }

            .close-btn:hover {
                background: #2d5a27;
                color: white;
            }

            h2 { 
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 1.5rem;
                color: #2d5a27; 
                border-left: 4px solid #2d5a27; 
                padding-left: 1rem; 
                font-size: 1.8rem;
            }

            h3 {
                font-family: sans-serif;
                font-size: 1.3rem;
                color: #2d5a27;
                margin: 2rem 0 1rem 0;
            }

            .infobox {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2rem;
                margin: 2rem 0;
            }

            .status-tag {
                background: #f0f4f1;
                border-left: 4px solid #2d5a27;
                padding: 1.5rem;
                margin-top: 2rem;
                font-family: monospace;
            }

            p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
                color: #1a2a22;
            }

            ul {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
            }

            li {
                margin-bottom: 0.8rem;
                font-size: 1.1rem;
                line-height: 1.6;
                color: #1a2a22;
            }

            code {
                background: #eee;
                padding: 0.2rem 0.4rem;
                border-radius: 3px;
                font-family: monospace;
            }

            strong { color: #2d5a27; }
        </style>
        <div class="container">
            <button class="close-btn" onclick="window.history.back();">[ CLOSE ]</button>
            <section class="has-vines">
                <h2>SafeFlow-ECS: The Architecture of Biological Reality</h2>
                
                <div class="infobox">
                    <h3>The Definition</h3>
                    <p>
                        SafeFlow is a native Entity Component System (ECS) designed for high-velocity biological state management. It is the engine of Interplay, responsible for transforming raw "Story" pulses into deterministic "Emulation" states through continuous Conduction.
                    </p>

                    <h3>The Design Choice: Why an ECS?</h3>
                    <p>
                        We utilize an ECS architecture because traditional databases and object-oriented models are too slow and rigid to capture the "Physics-of-the-Commonplace."
                    </p>
                    <ul>
                        <li><strong>Compute Velocity:</strong> By flattening biological data into decoupled Components, SafeFlow executes logic at the speed of the local hardware. It moves as fast as the compute can go, ensuring zero-latency feedback for the peer.</li>
                        <li><strong>Conductive Flexibility:</strong> Biology is non-linear. An ECS allows for Permissionless Grafting—you can add a new sensor, a new biological "sense," or a new environmental signal as a component without breaking the core metabolism. It is the most effective way to capture a shifting biological reality.</li>
                        <li><strong>Deterministic Evidence:</strong> The ECS functions as a State-Machine. Because systems are isolated logic loops that run on flat data, the output is entirely predictable. This determinism allows the Coherence Ledger to sign and verify a chain of evidence ($Raw \rightarrow Tidy \rightarrow Compute$) across the network.</li>
                    </ul>

                    <h3>The Functional Mechanics</h3>
                    <p>
                        SafeFlow-ECS drives the transition between biological reality and mathematical models through three strictly decoupled layers:
                    </p>
                    <ul>
                        <li><strong>Entities (The Conductive Address):</strong> Lightweight, local addresses representing biological sub-systems (e.g., a specific heart-rate stream, a circadian rhythm, or a localized environment).</li>
                        <li><strong>Components (The Facts):</strong> Pure, data-only structures defined by Module Contracts. They hold the raw facts—Pulses, Solar Theta, or Energy Balance—completely separate from the logic.</li>
                        <li><strong>Systems (The Logic):</strong> Continuous, high-frequency logic loops that drive the state transitions. Systems monitor the components, identify shifts in the Energy Budget, and calculate the Delta ($\Delta$) between the biological pulse and the physics model.</li>
                    </ul>

                    <h3>The Output: Weighting the Physics</h3>
                    <p>
                        The primary role of the ECS is to authorize the "Flow." It does not just record what happened; it calculates what is happening to set the weights for the intelligence layer.
                    </p>
                    <ul>
                        <li><strong>Pulse Synchronization:</strong> The engine aligns disparate data streams (from milliseconds to solar arcs) to the Heli-Clock oscillator.</li>
                        <li><strong>Physics-Model Feedback:</strong> The systems identify the resonance of a state transition. This data provides the necessary weights to tune the ResonAgents' physics models in real-time.</li>
                        <li><strong>The Ledger Commitment:</strong> Once a state transition is verified through the ECS pipeline, it is committed to the Coherence Ledger as a signed, immutable record of Conductive Integrity.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [INTERPLAY / HARDENING] — Data puless in from dialogues with beebee or tiny devices.</li>
                        <li><strong>Focus:</strong>Work in progress</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/node-safeflow" target="_blank">SafeFlow-ECS</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-safeflow-ecs', HsSafeflowEcs);
