class HsInterplaySection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = 'pulse';
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
            'pulse': `
                <div class="strata-intro-box">
                    <h3>The Resonance Pulse</h3>
                    <p>
                        How does the Emulation stay alive? Through the Resonance Pulse. 
                        It is the rhythmic exchange of state between the biological peer and the digital agents.
                    </p>
                </div>
                <hs-von-mises-viz></hs-von-mises-viz>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>The Process</h4>
                        <h5>Dynamic Consilience</h5>
                        <p>Fusing noisy edge data into a coherent signal through circular phase-alignment.</p>
                    </div>
                </div>
            `,
            'safeflow': `
                <div class="strata-intro-box">
                    <h3>SafeFlow-ECS-The Heartbeat</h3>
                    <p>
                        SafeFlow-ECS is the orchestration engine. It ensures that every state transition in the system 
                        respects the "Health Envelope" defined by the peer.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Engine Mechanics</h4>
                        <h5>The Scheduler</h5>
                        <p>Deterministic execution of metabolic logic across distributed nodes.</p>
                    </div>
                    <div class="action-card">
                        <h4>Safety</h4>
                        <h5>Invariant Checks</h5>
                        <p>Continuous validation of biological bounds to ensure "Safe Flow" of information.</p>
                    </div>
                </div>
            `,
            'beebee': `
                <div class="strata-intro-box">
                    <h3>The beebee Brain</h3>
                    <p>
                        Beebee agents are the cognitive units of the metabolism. They manage skills and process 
                        the "Language Physics" of the protocol.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Skill Management</h4>
                        <h5>Atomic Intelligence</h5>
                        <p>Agents learn specific "skills" (e.g., HRV analysis) and trade them within the swarm.</p>
                    </div>
                    <div class="action-card">
                        <h4>Language Physics</h4>
                        <h5>Semantic Resonance</h5>
                        <p>Moving beyond JSON to a physics of meaning where data weight determines its priority.</p>
                    </div>
                </div>
            `,
            'resonagents': `
                <div class="strata-intro-box">
                    <h3>resonAgents: The Weavers</h3>
                    <p>
                        Autonomous agency meeting biological intent. resonAgents weave individual data strands 
                        into collective braids of science.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Autonomous Agency</h4>
                        <h5>Self-Organization</h5>
                        <p>Agents that seek resonance without being told. They find the science in the noise.</p>
                    </div>
                </div>
            `,
            'besearch': `
                <div class="strata-intro-box">
                    <h3>besearch: Active Inquiry</h3>
                    <p>
                        Science is not a search; it is an inquiry. Weave besearch cycles into strands and braids.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Strands & Braids</h4>
                        <h5>Knowledge Weaving</h5>
                        <p>Individual observations (strands) are braided together to create verifiable health cues.</p>
                    </div>
                </div>
            `,
            'coupling': `
                <div class="strata-intro-box">
                    <h3>Coupling: The Join</h3>
                    <p>
                        Where Intent meets Agency. Coupling is how the peer attaches their will to the autonomous swarm.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Loose Coupling</h4>
                        <h5>Resonant Attachment</h5>
                        <p>Systems that stay flexible but work in unison. The peer can "uncouple" at any time to maintain sovereignty.</p>
                    </div>
                </div>
            `,
            'map': `
                <div class="strata-intro-box">
                    <h3>Interplay: Status Map</h3>
                    <p>
                        A self-organizing metabolism that keeps the science high-quality and adaptive.
                    </p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">SafeFlow-ECS Heartbeat</td>
                        <td style="text-align: right; color: #00ff88;">[ FUNCTIONAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Beebee Skill Swarm</td>
                        <td style="text-align: right; color: #f39c12;">[ EXPERIMENTAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">ResonAgent Braiding</td>
                        <td style="text-align: right; color: #f39c12;">[ EXPERIMENTAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Active Besearch</td>
                        <td style="text-align: right; color: #666;">[ DEFINED ]</td>
                    </tr>
                </table>
            `
        };
        return states[this.state] || states['pulse'];
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
        </style>
        <section id="interplay-metabolism" class="has-vines">
            <div class="section-header-group">
                <div>
                    <h2>B. INTERPLAY: The Metabolism</h2>
                    <div class="sub-nav">
                        <button class="${this.state === 'pulse' ? 'active' : ''}" data-state="pulse">PULSE</button>
                        <button class="${this.state === 'safeflow' ? 'active' : ''}" data-state="safeflow">SAFEFLOW-ECS</button>
                        <button class="${this.state === 'beebee' ? 'active' : ''}" data-state="beebee">BEEBEE</button>
                        <button class="${this.state === 'resonagents' ? 'active' : ''}" data-state="resonagents">RESONAGENTS</button>
                        <button class="${this.state === 'besearch' ? 'active' : ''}" data-state="besearch">BESEARCH</button>
                        <button class="${this.state === 'coupling' ? 'active' : ''}" data-state="coupling">COUPLING</button>
                        <button class="${this.state === 'map' ? 'active' : ''}" data-state="map">MAP</button>
                    </div>
                </div>
                <div class="section-metadata">
                    <div class="property">Property: Dynamic Consilience</div>
                    <div class="status">Status: [STORY / INTERPLAY]</div>
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
customElements.define('hs-interplay-section', HsInterplaySection);
