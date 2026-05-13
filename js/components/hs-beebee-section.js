class HsBeebeeSection extends HTMLElement {
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
                display: block; 
                margin-top: 4rem;
            }
            
            section {
                position: relative;
                padding: 2.5rem;
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
                position: relative;
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
            .notice {
                font-style: italic;
                color: #555;
                padding: 1rem;
                border: 1px dashed #ccc;
                margin-bottom: 1.5rem;
            }
            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-black { background: #000 !important; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000, 6px 6px 0 -2px #000, -6px -6px 0 -2px #000, 6px -6px 0 -2px #000, -6px 6px 0 -2px #000 !important; border: 1px solid rgba(255, 255, 255, 0.4) !important; }
            .daisy-black::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #4ade80 !important; border-radius: 50%; }
            .daisy-tr { top: -12px; right: -12px; }
            .agent-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
                margin-top: 2rem;
            }
            .agent-card {
                padding: 1.5rem;
                background: white;
                border: 1px solid #dcd3c1;
                height: 100%;
            }
            .agent-card h4 {
                color: #2d5a27;
                margin-bottom: 1rem;
                font-family: sans-serif;
                text-transform: uppercase;
                font-size: 1rem;
                letter-spacing: 1px;
            }
            @media (max-width: 768px) {
                .agent-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
        <section id="beebee" class="has-vines">
            <div class="daisy-node daisy-black daisy-tr"></div>
            <h2>The Peer Conductor: beebee (BB)</h2>
            
            <div class="infobox">
                <h3>The Goal (The Living Body)</h3>
                <p>
                    Every peer is supported by an ultimate conductor: <strong>beebee</strong>. This is the localized intelligence that manages the transition from raw biological signals to lived insight. Rather than a static interface, beebee functions as a living partner for the node—translating complex patterns into the tactile textures of the Sculpting Lab and ensuring that personal Besearch cycles remain in constant resonance with the planetary metabolism.
                </p>

                <h3>The Logic (The Architecture of the Forest)</h3>
                <div class="notice">
                    Notice: beebee (BB) is the primary orchestration engine for the BentoBoxDS ecosystem. The protocol defines its role through the following metabolic functions:
                </div>

                <ul>
                    <li><strong>Besearch Orchestration:</strong> beebee manages the timing and energy of local processing cycles, determining how raw data is refined into Cues before being conducted to the forest.</li>
                    <li><strong>ResonAgent Synthesis:</strong> It coordinates the swarm of ResonAgents that seek consilience—finding the points of mathematical agreement between the individual’s Story and the broader Coherence Ledger.</li>
                    <li><strong>Pattern Translation:</strong> It acts as the "lens" for the Sculpting Lab, translating bioelectric signals into the Gelle texture patterns and deterministic emulations that allow for true Attunement.</li>
                    <li><strong>Skill Grafting:</strong> beebee manages the acquisition of "Skills"—specific logic modules and brain-like functions that allow the peer to expand their computational capacity on-the-fly.</li>
                </ul>
                <h3>The ResonAgent Trinity</h3>
                <p>
                    beebee (BB) coordinates a swarm of ResonAgents categorized by three fundamental domains of conduction. These agents allow the conductor to navigate the "Story" and "Interplay" layers simultaneously:
                </p>
                <div class="agent-grid">
                    <div class="agent-card">
                        <h4>Language Agents</h4>
                        <p>Focused on the dialogue and semantic layers. They translate human narrative and sovereign intent into structured data the protocol can digest.</p>
                    </div>
                    <div class="agent-card">
                        <h4>Physics Agents</h4>
                        <p>Focused on the biological reality. They manage the metabolic rules and bioelectric signaling through SafeFlow-ECS, ensuring the emulation respects the physics of the living body.</p>
                    </div>
                    <div class="agent-card">
                        <h4>Pattern Agents</h4>
                        <p>Focused on the resonance. They utilize Circular Statistics to detect consilience and mathematical harmony across the forest, identifying "Truth" through the alignment of rhythms.</p>
                    </div>
                </div>
            </div>

            <div class="status-tag">
                <h3>Status & Resources</h3>
                <ul>
                    <li><strong>Status:</strong> [INTERPLAY / PULSING] — Hardening the core conductor logic and ResonAgent coordination for the V1 release.</li>
                    <li><strong>Focus:</strong> Managing the rhythm and textures of the local metabolism.</li>
                    <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                    <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/bbAI" target="_blank">beebee-ai</a></code></li>
                </ul>
            </div>
        </section>
        `;
    }
}
customElements.define('hs-beebee-section', HsBeebeeSection);
