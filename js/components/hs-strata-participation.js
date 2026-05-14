class HsStrataParticipation extends HTMLElement {
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
            :host { display: block; }
            section {
                margin-bottom: 8rem;
                scroll-margin-top: 80px;
                position: relative;
                padding: 2.5rem;
                border: 1px solid transparent;
                transition: border-color 0.3s ease;
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
            p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
                color: #1a2a22;
            }
            .strata-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 4rem;
                margin-top: 4rem;
            }
            .strata-item {
                border-top: 1px solid #dcd3c1;
                padding-top: 2rem;
                display: flex;
                flex-direction: column;
            }
            .strata-item h3 {
                margin-top: 0;
                color: #2d5a27;
                font-size: 1.5rem;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .strata-item .subtitle {
                font-family: 'Georgia', serif;
                font-style: italic;
                font-size: 1.2rem;
                margin-bottom: 1rem;
                color: #1a2a22;
            }
            .strata-item .focus {
                font-size: 0.9rem;
                margin-top: 1rem;
                color: #555;
            }
            .status-tag {
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                color: #e67e22;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 2rem;
                padding: 0.5rem;
                border: 1px solid rgba(230, 126, 34, 0.2);
                background: rgba(230, 126, 34, 0.05);
                display: inline-block;
                width: fit-content;
            }
            .matrix-header {
                font-family: 'Georgia', serif;
                font-style: italic;
                font-size: 1.2rem;
                color: #1a2a22;
                margin-bottom: 2.5rem;
                text-align: center;
            }
            .matrix-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                gap: 1.5rem;
                max-width: 1000px;
                margin: 0 auto;
            }
            .matrix-btn {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 1.5rem 1rem;
                font-family: 'Courier New', monospace;
                font-size: 0.75rem;
                color: #2d5a27;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 80px;
                line-height: 1.4;
            }
            .matrix-btn:hover {
                background: #2d5a27;
                color: white;
                border-color: #2d5a27;
                transform: translateY(-3px);
                box-shadow: 0 6px 15px rgba(45, 90, 39, 0.15);
            }
            .close-overlay {
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
                z-index: 100;
                transition: all 0.3s ease;
            }
            .close-overlay:hover {
                background: #2d5a27;
                color: white;
            }
            .leaf-cluster-5-v { position: relative; }
            .leaf-cluster-5-v .leaf-pair { position: absolute; width: 20px; height: 20px; pointer-events: none; z-index: 99; }
            .leaf-cluster-5-v .leaf-pair::before, .leaf-cluster-5-v .leaf-pair::after { content: ""; position: absolute; width: 14px; height: 7px; background: #2d5a27; border-radius: 0 100% 0 100%; }
            .leaf-cluster-5-v .leaf-pair::after { background: #1a3a17; transform: rotate(35deg); left: 8px; top: 4px; opacity: 0.9; }
            .leaf-cluster-5-v .leaf-pair:nth-child(1) { top: 20%; left: -18px; transform: rotate(-90deg); }
            .leaf-cluster-5-v .leaf-pair:nth-child(2) { top: 23%; left: -16px; transform: rotate(-80deg); scale: 1.1; }
            .leaf-cluster-5-v .leaf-pair:nth-child(3) { top: 26%; left: -18px; transform: rotate(-105deg); scale: 0.8; }
            .leaf-cluster-5-v .leaf-pair:nth-child(4) { top: 29%; left: -16px; transform: rotate(-85deg); scale: 1.2; }
            .leaf-cluster-5-v .leaf-pair:nth-child(5) { top: 32%; left: -18px; transform: rotate(-100deg); scale: 0.9; }
            .leaf-cluster-5-h {
                border-top: 1px solid #dcd3c1;
                margin-top: 6rem;
                padding-top: 3rem;
                padding-bottom: 3rem;
            }
        </style>
        <section id="strata" class="has-vines">
            <div class="leaf-cluster-5-v">
                <div class="leaf-pair"></div><div class="leaf-pair"></div>
                <div class="leaf-pair"></div><div class="leaf-pair"></div>
                <div class="leaf-pair"></div>
            </div>
            <h2>The Three Strata: From Story to Emulation</h2>
            <p>
                To navigate the protocol is to move through three interwoven layers of reality. We don't just "process data"; we transition from the human Story through the metabolic Interplay toward a deterministic Emulation. Each layer is a prerequisite for the next, ensuring that every pulse is grounded in the "Physics-of-the-Commonplace."
            </p>

            <div class="strata-grid">
                <div class="strata-item">
                    <h3>A. STORY</h3>
                    <div class="subtitle">The Conductive Substrate</div>
                    <p>The sovereign, localized root. This is where natural language intent meets raw device pulses. It is the "Zero-Draft" of your biological reality before it is tidied and conducted.</p>
                    <div class="focus">Focus: Dialogue, Devices, and Bioregional data.</div>
                    <p>The Output: High-frequency raw pulses and sovereign intent.</p>
                    <div class="status-tag">Status: [INTERPLAY]</div>
                </div>
                <div class="strata-item">
                    <h3>B. INTERPLAY</h3>
                    <div class="subtitle">The Consilience Weave</div>
                    <p>The innovated center where SafeFlow-ECS, ResonAgents, and beebee digest the conductive strands. This layer is responsible for finding truth through the convergence of evidence.</p>
                    <div class="focus">Focus: Human/Agent synthesis and state-machine transitions.</div>
                    <p>The Output: Verified weights and the Coherence Ledger.</p>
                    <div class="status-tag">Status: [STORY / INTERPLAY]</div>
                </div>
                <div class="strata-item">
                    <h3>C. EMULATION</h3>
                    <div class="subtitle">The Living Logic</div>
                    <p>This is the deterministic result. Here, the Orgo (the mathematical ideal) and the Gelle (the sensory texture) are unified into a functional reality.</p>
                    <div class="focus">Focus: On-the-fly experience and biological attunement.</div>
                    <p>The Output: A state-change you can feel and verify.</p>
                    <div class="status-tag">Status: [STORY / PULSING]</div>
                </div>
            </div>
            <div class="leaf-cluster-5-h">
                <div class="matrix-header">
                  Core Parts of HOP that enable Story, Interplay, and Emulation.
                </div> 

                <div class="matrix-grid">
                    <button class="matrix-btn" onclick="window.location.hash='#coherence-ledger'">Coherence Ledger</button>
                    <button class="matrix-btn" onclick="window.location.hash='#beebee'">BeeBee</button>
                    <button class="matrix-btn" onclick="window.location.hash='#heli'">Heli</button> 
                    <button class="matrix-btn" onclick="window.location.hash='#besearch'">Besearch</button> 
                    <button class="matrix-btn" onclick="window.location.hash='#resonagents'">ResonAgents</button>
                    <button class="matrix-btn" onclick="window.location.hash='#library'">Library</button>
                    <button class="matrix-btn" onclick="window.location.hash='#safeflow-ecs'">SafeFlow-ECS</button>
                    <button class="matrix-btn" onclick="window.location.hash='#consilience-weave'">Consilience Weave</button>
                    <button class="matrix-btn" onclick="window.location.hash='#ptop-storage'">Peer to Peer & Storage</button>
                    <button class="matrix-btn" onclick="window.location.hash='#hop-diagram'">HOP Diagram</button>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('hs-strata-participation', HsStrataParticipation);
