class HsEmulationSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = 'on-the-fly';
    }

    connectedCallback() {
        this.render();
    }

    setState(state) {
        this.state = state;
        this.render();
        this.scrollIntoView({ behavior: 'smooth' });
    }

    getContent() {
        const states = {
            'on-the-fly': `
                <div class="strata-intro-box">
                    <h3>Information as Attunement</h3>
                    <p>
                        This is where the peer stands. It is a living, breathing interface—the Life-Strap Unified View. 
                        To create a peer experience on the fly is to move beyond static dashboards. 
                        We provide tools to allow a peer to shape information as a sensory attunement of health.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>The Action</h4>
                        <h5>Grafting</h5>
                        <p>You aren't just looking at data; you are sculpting it. Coordination of space, digital, and "real world" happens here.</p>
                    </div>
                    <div class="action-card">
                        <h4>Functional Tools</h4>
                        <h5>Real-Time Context</h5>
                        <p>Create tools that respond to your unique context in real-time. This is the conscious expression of a healthy body of knowledge.</p>
                    </div>
                    <div class="action-card">
                        <h4>Library Reference</h4>
                        <h5>Space Design Contract</h5>
                        <p>Coordination is managed through our Space Design Contract, ensuring emulations respect physical boundaries.</p>
                    </div>
                </div>
            `,
            'orgo': `
                <div class="strata-intro-box">
                    <h3>Orgo: The Deterministic Engine</h3>
                    <p>
                        Orgo is the logic. It is pure JavaScript physics that emulates how a Cue behaves across Space and Time. 
                        It is the Sealed Machine that transforms speculative "Old World" guesses into functional knowledge via the Consilience Weave.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Concept</h4>
                        <h5>Identity</h5>
                        <p>Not just a network; it is a specific Systemic Law (e.g., "Cardiac Response to Aquatic Load").</p>
                    </div>
                    <div class="action-card">
                        <h4>Emulation</h4>
                        <h5>Action</h5>
                        <p>The Logic Machine. It runs f(x) to ensure every peer sees the same deterministic reality.</p>
                    </div>
                    <div class="action-card">
                        <h4>Space & Time</h4>
                        <h5>Reach & Entropy</h5>
                        <p>Geometric influence + Heli-Time. Physics that knows what year it is and how biology orbits.</p>
                    </div>
                </div>
            `,
            'gelle': `
                <div class="strata-intro-box">
                    <h3>Gelle: Texture & Shape</h3>
                    <p>
                        If Orgo is the Logic, Gelle is the Texture. It is the manifestation—the shape, color, and specific "feel" information takes. 
                        Gelles are adaptive flows; they are viscous, moving at the speed of your local metabolism.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Phenomenology</h4>
                        <h5>Orangelle</h5>
                        <p>Manifestation of information as viscous, adaptive flows moving at the speed of local metabolism, shifting their shape to fit your immediate context.</p>
                    </div>
                </div>
            `,
            'pulse': `
                <div class="strata-intro-box">
                    <h3>The Pulse of Data</h3>
                    <p>
                        The pulse is the life-blood. Without it, logic is a side-show. 
                        It fuses Logic (Orgo) and Texture (Gelle) into a singular resonant pulse of information as attunement.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>ORGO</h4>
                        <h5>Logic & Organization</h5>
                        <p>The Sealed Engine.</p>
                    </div>
                    <div class="action-card">
                        <h4>GELLE</h4>
                        <h5>Texture & Shape</h5>
                        <p>The Sensory Manifestation.</p>
                    </div>
                    <div class="action-card">
                        <h4>EMULATION</h4>
                        <h5>Information as Attunement</h5>
                        <p>Fused by the Pulse of Data.</p>
                    </div>
                </div>
            `,
            'dml-neat': `
                <div class="strata-intro-box">
                    <h3>DML / NEAT Evolution</h3>
                    <p>Integrating NeuroEvolution of Augmenting Topologies with Distributed Machine Learning. Our protocol allows agents to learn the Peer's biological resonance over time.</p>
                </div>
                <div class="infobox">
                    <h3>NeuroEvolution (NEAT-HOP)</h3>
                    <p>Using NeuroEvolution of Augmenting Topologies, our protocol allows agents to learn the Peer's biological resonance over time. It is not AI; it is <strong>Evolutionary Computation</strong>.</p>
                    <div class="code-snippet">
                        > swarm.initiate(peer_id)
                        > evolution.start(fitness: resonance_score)
                        > status: ADAPTING_TO_PULSE
                    </div>
                </div>
            `,
            'open-lab': `
                <div class="strata-intro-box">
                    <h3>Open Lab: The Daisyworld Sandbox</h3>
                    <p>A sandbox for experimentation. We simulate global geophysiology to understand how individual resonance contributes to planetary stability.</p>
                </div>
                <hs-daisy-engine></hs-daisy-engine>
                <div class="trinity-grid">
                    <div class="trinity-item">
                        <div class="leaf-pair" style="left: -10px; top: -10px; transform: rotate(-45deg);"></div>
                        <h4>Bio-Cellular</h4>
                        <p>Individual longevity via Orgo/Gelle state machines.</p>
                    </div>
                    <div class="trinity-item">
                        <div class="daisy-node daisy-black daisy-tr" style="top: -7px; right: -7px;"></div>
                        <h4>Bioregional</h4>
                        <p>Community resonance where data meets ecological signals.</p>
                    </div>
                </div>
            `
        };
        return states[this.state] || states['on-the-fly'];
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
            .section-header-group {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #2d5a27;
                padding-bottom: 1rem;
                margin-bottom: 3rem;
                position: sticky;
                top: 0;
                background: rgba(255, 255, 255, 0.95);
                z-index: 10;
                backdrop-filter: blur(5px);
            }
            h2 { 
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 0;
                color: #2d5a27; 
                border-left: 4px solid #2d5a27; 
                padding-left: 1rem; 
                font-size: 1.8rem;
            }
            .sub-nav {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                margin-top: 0.5rem;
                font-family: sans-serif;
                font-size: 0.7rem;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .sub-nav button {
                background: none;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                text-decoration: none;
                color: #1a2a22;
                opacity: 0.6;
                transition: all 0.3s ease;
                border-bottom: 1px solid transparent;
            }
            .sub-nav button:hover { opacity: 1; color: #e67e22; }
            .sub-nav button.active {
                opacity: 1;
                color: #2d5a27;
                border-bottom: 1px solid #2d5a27;
                font-weight: bold;
            }
            .section-metadata {
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                text-align: right;
                color: #555;
            }
            .section-metadata .property { color: #2d5a27; font-weight: bold; }
            .strata-detail-container {
                display: grid;
                grid-template-columns: 1fr;
                gap: 4rem;
                margin-bottom: 10rem;
            }
            .strata-intro-box {
                font-size: 1.4rem;
                line-height: 1.6;
                color: #1a2a22;
                border-left: 1px solid #dcd3c1;
                padding-left: 2rem;
                margin-bottom: 4rem;
            }
            .strata-action-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 3rem;
            }
            .action-card {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2.5rem;
                position: relative;
                transition: transform 0.3s ease, border-color 0.3s ease;
            }
            .action-card:hover { transform: translateY(-5px); border-color: #e67e22; }
            .action-card h4 {
                font-family: 'Courier New', monospace;
                color: #e67e22;
                text-transform: uppercase;
                font-size: 0.9rem;
                margin-bottom: 1rem;
                letter-spacing: 1px;
            }
            .action-card h5 { font-family: sans-serif; font-size: 1.2rem; margin-bottom: 1rem; color: #2d5a27; }
            .action-card p { font-size: 1rem; margin-bottom: 0; }
            .infobox { background: #fdfaf6; border: 1px solid #dcd3c1; padding: 2rem; margin: 2rem 0; position: relative; }
            .code-snippet { font-family: monospace; background: #f4f4f4; padding: 1rem; border-radius: 4px; font-size: 0.9rem; overflow-x: auto; margin: 1rem 0; }
            .trinity-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem; }
            .trinity-item { border: 1px solid #dcd3c1; padding: 1.5rem; background: white; transition: all 0.3s ease; position: relative; }
            .trinity-item h4 { color: #2d5a27; text-transform: uppercase; margin-bottom: 0.5rem; }
            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-black { background: #000 !important; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000, 6px 6px 0 -2px #000, -6px -6px 0 -2px #000, 6px -6px 0 -2px #000, -6px 6px 0 -2px #000 !important; border: 1px solid rgba(255, 255, 255, 0.4) !important; }
            .daisy-black::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #4ade80 !important; border-radius: 50%; }
            .daisy-tr { top: -12px; right: -12px; }
            .leaf-pair { position: absolute; width: 20px; height: 20px; pointer-events: none; z-index: 99; }
            .leaf-pair::before, .leaf-pair::after { content: ""; position: absolute; width: 14px; height: 7px; background: #2d5a27; border-radius: 0 100% 0 100%; }
            .leaf-pair::after { background: #1a3a17; transform: rotate(35deg); left: 8px; top: 4px; opacity: 0.9; }
        </style>
        <section id="emulation-lab" class="has-vines">
            <div class="section-header-group">
                <div>
                    <h2>C. EMULATION: The Sculpting Lab</h2>
                    <div class="sub-nav">
                        <button class="${this.state === 'on-the-fly' ? 'active' : ''}" data-state="on-the-fly">ON-THE-FLY</button>
                        <button class="${this.state === 'orgo' ? 'active' : ''}" data-state="orgo">ORGO</button>
                        <button class="${this.state === 'gelle' ? 'active' : ''}" data-state="gelle">GELLE</button>
                        <button class="${this.state === 'pulse' ? 'active' : ''}" data-state="pulse">PULSE</button>
                        <button class="${this.state === 'dml-neat' ? 'active' : ''}" data-state="dml-neat">DML/NEAT</button>
                        <button class="${this.state === 'open-lab' ? 'active' : ''}" data-state="open-lab">OPEN LAB</button>
                    </div>
                </div>
                <div class="section-metadata">
                    <div class="property">Property: On-the-fly Experience</div>
                    <div class="status">Status: [STORY]</div>
                </div>
            </div>

            <div class="strata-detail-container">
                ${this.getContent()}
            </div>
        </section>
        `;
        this.shadowRoot.querySelectorAll('.sub-nav button').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setState(btn.dataset.state);
            });
        });
    }
}
customElements.define('hs-emulation-section', HsEmulationSection);
