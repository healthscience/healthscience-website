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
                        Interplay is the stage of Dynamic Consilience. It is the rhythmic exchange of state between the biological peer and their digital agents (ResonAgents). This is not a passive experience; it is a metabolic synthesis where the peer uses tools to direct the machine in the shaping of context and the capture of knowledge.
                    </p>
                    <p style="font-style: italic; margin-top: 1rem; color: #555;">
                        "We don't outsource our thinking to the machine; we use the machine to accelerate the distillation of our own truth."
                    </p>
                </div>
                <hs-von-mises-viz></hs-von-mises-viz>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>The Process</h4>
                        <p>Fusing noisy edge data into a coherent signal through circular phase-alignment.</p>
                        <p>
                            <strong>The Collaborative Pulse: Peer Direction vs. Machine Help</strong><br><br>
                            To navigate the metabolism is to find the perfect balance between Human Intuition and Machine Precision.<br><br>
                            <strong>Peer Direction (The Architect):</strong> The peer provides the intent, the Story, and the boundaries. The peer utilizes Bento Instruments and natural language to signal which strands of evidence carry the most metabolic weight.<br><br>
                            <strong>Machine Help (The Weaver):</strong> beebee acts as a tireless librarian and weaver. Avoiding the hallucinations of the old world, the agent navigates sovereign data to identify the hidden connections (Braids) that lead to a stable Orgo.
                        </p>
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
                    <h3>The Besearch Braid: Turning Soil into Logic</h3>
                    <p>
                        As you and beebee collaborate, the captured knowledge begins to crystallize into Strands and Braids.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #1a2a22; font-family: sans-serif;">
                        <thead>
                            <tr style="border-bottom: 2px solid #2d5a27;">
                                <th style="text-align: left; padding: 12px; font-family: 'Courier New', monospace; color: #e67e22; font-size: 0.9rem;">The Element</th>
                                <th style="text-align: left; padding: 12px; font-family: 'Courier New', monospace; color: #e67e22; font-size: 0.9rem;">The Peer's Role</th>
                                <th style="text-align: left; padding: 12px; font-family: 'Courier New', monospace; color: #e67e22; font-size: 0.9rem;">The Machine's Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                                <td style="padding: 12px; font-weight: bold; color: #2d5a27;">Strands</td>
                                <td style="padding: 12px;">Identifying raw data and personal "Besearch" goals.</td>
                                <td style="padding: 12px;">Indexing and cryptographically verifying the Hypercore streams.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                                <td style="padding: 12px; font-weight: bold; color: #2d5a27;">Braids</td>
                                <td style="padding: 12px;">Recognizing the "Feeling" of consilience and truth.</td>
                                <td style="padding: 12px;">Calculating the mathematical convergence of evidence.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                                <td style="padding: 12px; font-weight: bold; color: #2d5a27;">Physics</td>
                                <td style="padding: 12px;">Tuning the Bento Sliders to match physical capacity.</td>
                                <td style="padding: 12px;">Running the DML/NEAT simulations to predict stability.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="strata-intro-box" style="margin-top: 4rem; border-left-color: #e67e22;">
                    <h3>The Functional Result: Deterministic Resonance</h3>
                    <p>
                        The goal of this collaboration is to reach the Resonance Pulse. By the time you move from Interplay to Emulation, the machine has helped you turn a vague intent into a "Sealed Machine" (the Orgo). You have successfully captured your existing knowledge and transformed it into Deterministic Attunement.
                    </p>
                </div>
                <div class="status-tag" style="margin-top: 2rem; padding: 1.5rem; background: #fdfaf6; border: 1px solid #dcd3c1; font-family: 'Courier New', monospace; font-size: 0.9rem;">
                    <p style="margin-bottom: 0.5rem;"><strong>Status:</strong> [STORY / INTERPLAY]</p>
                    <p style="margin-bottom: 0rem;"><strong>Action:</strong> The peer directs; the agent conducts; the forest resonates.</p>
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
            `,
            'lifestrap-lens': `
                <div class="strata-intro-box">
                    <h3>The Lifestrap-Lens: The 3 C’s + H</h3>
                    <p>
                        The Interplay begins when beebee (the agentic interface) opens a dialogue to generate the Lifestrap-Lens. 
                        This lens acts as a cognitive filter—a protective layer of focus used to build actionable context without 
                        falling into the "Data Cascades" and information rot of the old world.
                    </p>
                    <p>
                        Instead of drowning in abstract numbers, the peer and the agent look through the lens to establish four fundamental pillars of reality:
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>$C_1$</h4>
                        <h5>Context</h5>
                        <p>The immediate Bioregional and Situational boundary. Where does the peer stand in the physical forest, and what is the current environmental pressure?</p>
                    </div>
                    <div class="action-card">
                        <h4>$C_2$</h4>
                        <h5>Cue</h5>
                        <p>The specific Biological signal or Intent being addressed. This is the "Why"—the heartbeat, the glucose spike, or the creative intent that needs to be conducted.</p>
                    </div>
                    <div class="action-card">
                        <h4>$C_3$</h4>
                        <h5>Conduction</h5>
                        <p>The movement of that signal through the Hypercore fabric. This defines how the data flows from the peer to the local peer-network without ever touching a centralized cloud.</p>
                    </div>
                    <div class="action-card">
                        <h4>$H$</h4>
                        <h5>Heli</h5>
                        <p>The Temporal Anchor. Every piece of data is viewed through the current solar arc. In the HOP protocol, time is not a digit; it is a position in the planetary spiral.</p>
                    </div>
                </div>
                <div class="strata-intro-box" style="margin-top: 4rem; border-left-color: #e67e22;">
                    <h3>The Purpose: Biological Honesty</h3>
                    <p>
                        Through the Lifestrap-Lens, the peer and their tools build a Shared State. This is a collaborative vantage point where machine precision and human intuition meet. By filtering the "Story" through the 3 C's + H, we ensure the resulting emulation is:
                    </p>
                    <ul style="list-style: none; padding: 0; margin-top: 1rem;">
                        <li style="margin-bottom: 1rem;"><strong>Biologically Honest:</strong> It reflects the actual metabolic truth of the peer, not a generalized "health average."</li>
                        <li style="margin-bottom: 1rem;"><strong>Technically Precise:</strong> It provides the SafeFlow-ECS with the exact weights needed to run a deterministic physics model.</li>
                        <li style="margin-bottom: 1rem;"><strong>Sovereign:</strong> The lens is owned by the peer. It is the boundary that decides what information is "grafted" and what is ignored.</li>
                    </ul>
                    <p style="font-style: italic; margin-top: 2rem; color: #555;">
                        "To look through the Lifestrap-Lens is to stop 'consuming' information and start Conducting it. It is the difference between reading a map and actually feeling the terrain."
                    </p>
                </div>
                <div class="status-tag" style="margin-top: 2rem; padding: 1.5rem; background: #fdfaf6; border: 1px solid #dcd3c1; font-family: 'Courier New', monospace; font-size: 0.9rem;">
                    <p style="margin-bottom: 0.5rem;"><strong>Status:</strong> [INTERPLAY / HARDENING]</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Target:</strong> V1 release as the central oscillator for the Cues Mantle.</p>
                    <ul style="list-style: none; padding: 0; display: flex; gap: 2rem;">
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank" style="color: #2d5a27;">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/bbai" target="_blank" style="color: #2d5a27;">beebee-ai</a></code></li>
                    </ul>
                </div>
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
                        <button class="${this.state === 'lifestrap-lens' ? 'active' : ''}" data-state="lifestrap-lens">LIFESTRAP-LENS</button>
                        <button class="${this.state === 'besearch' ? 'active' : ''}" data-state="besearch">BESEARCH</button>
                        <button class="${this.state === 'safeflow' ? 'active' : ''}" data-state="safeflow">SAFEFLOW-ECS</button>
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
