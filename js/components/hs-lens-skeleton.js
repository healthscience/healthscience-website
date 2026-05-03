class HsLensSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.emulationState = 'on-the-fly';
        this.interplayState = 'pulse';
        this.storyState = 'rooting'; // rooting, edge, melding, context, status
    }

    connectedCallback() {
        this.render();
    }

    setStoryState(state) {
        this.storyState = state;
        this.render();
        const el = this.shadowRoot.getElementById('story-soil');
        if (el) {
            el.scrollIntoView();
        }
    }

    setEmulationState(state) {
        this.emulationState = state;
        this.render();
        const el = this.shadowRoot.getElementById('emulation-lab');
        if (el) {
            el.scrollIntoView();
        }
    }

    setInterplayState(state) {
        this.interplayState = state;
        this.render();
        const el = this.shadowRoot.getElementById('interplay-metabolism');
        if (el) {
            el.scrollIntoView();
        }
    }

    onActivate(subState) {
        console.log('Skeleton Lens Activated', subState);
        if (subState) {
            // Check if it's an emulation state or interplay state
            const emulationStates = ['on-the-fly', 'orgo', 'gelle', 'pulse', 'dml-neat', 'open-lab'];
            const interplayStates = ['pulse', 'safeflow', 'beebee', 'resonagents', 'besearch', 'coupling', 'map'];
            const storyStates = ['rooting', 'edge', 'melding', 'context', 'status'];

            if (emulationStates.includes(subState)) {
                this.emulationState = subState;
                this.render();
                const el = this.shadowRoot.getElementById('emulation-lab');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else if (interplayStates.includes(subState)) {
                this.interplayState = subState;
                this.render();
                const el = this.shadowRoot.getElementById('interplay-metabolism');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else if (storyStates.includes(subState)) {
                this.storyState = subState;
                this.render();
                const el = this.shadowRoot.getElementById('story-soil');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                const el = this.shadowRoot.getElementById(subState);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }

    getEmulationContent() {
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
        return states[this.emulationState] || states['on-the-fly'];
    }

    getInterplayContent() {
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
                    <h3>SafeFlow-ECS: The Heartbeat</h3>
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
        return states[this.interplayState] || states['pulse'];
    }

    getStoryContent() {
        const states = {
            'rooting': `
                <div class="strata-intro-box">
                    <h3>The Source</h3>
                    <p>
                        The Story is the irreducible substrate of the protocol. It is the "ground truth" where biological signals and human intent meet the digital ledger. 
                        Everything is powered by the "Intelligences of the Small." We use Pattern Extraction to see the same "texture" of health at every scale.
                    </p>
                </div>
                <div class="scale-grid">
                    <div>
                        <hs-scale-slider id="texture-slider"></hs-scale-slider>
                    </div>
                    <div>
                        <hs-texture-extractor></hs-texture-extractor>
                    </div>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Concept</h4>
                        <h5>Rooting Reality</h5>
                        <p>Without the unique, local Story of every peer and building, the metabolism has nothing to process and the lab has nothing to sculpt.</p>
                    </div>
                    <div class="action-card">
                        <h4>Technical Focus</h4>
                        <h5>The Story Spec</h5>
                        <p>Capturing the irreducible ground of the protocol using local-first methods.</p>
                    </div>
                </div>
            `,
            'edge': `
                <div class="strata-intro-box">
                    <h3>Edge Intelligence</h3>
                    <p>
                        Intelligence originates on mobile phones, wearable sensors, and building monitors. This is the "Life-Strap." 
                        Information is gathered at the point of existence. Data belongs exclusively to the peer and never leaves their control unless explicitly "melded."
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>The Life-Strap</h4>
                        <h5>Tiny Devices</h5>
                        <p>Sovereign capture at the edge. Capturing context where it happens.</p>
                    </div>
                    <div class="action-card">
                        <h4>Sovereignty</h4>
                        <h5>BentoBoxDS</h5>
                        <p>Local-first persistence. Data is encrypted and stored locally, ensuring the Story remains intact even if network connectivity is lost. [STATUS: FUNCTIONAL]</p>
                    </div>
                </div>
            `,
            'melding': `
                <div class="strata-intro-box">
                    <h3>Melding: The Root System</h3>
                    <p>
                        The Root System uses "Non-Sync Resonance" where nodes do not rely on centralized synchronization. 
                        A "meld" is a temporary alignment of context for mutual benefit.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Integrity</h4>
                        <h5>Coherence Ledger</h5>
                        <p>Handles the cryptographic weight of data "melds," ensuring the "soil" (data substrate) remains honest and scientifically grounded.</p>
                    </div>
                    <div class="action-card">
                        <h4>Resonance</h4>
                        <h5>P2P Melds</h5>
                        <p>Nodes find each other through shared patterns rather than addresses. [STATUS: EXPERIMENTAL]</p>
                    </div>
                </div>
            `,
            'context': `
                <div class="strata-intro-box">
                    <h3>The Unique Context</h3>
                    <p>
                        Truth is contextual; the science of the Highlands differs from the science of the Desert. Every Story has a unique metabolic signature.
                    </p>
                </div>
                <div class="card">
                    <h4>Metadata Properties</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Scale</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Identifier</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Property</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Peer ID</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Sovereign intent</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Building</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Environment ID</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Local metabolism</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Bioregion</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Geospatial Bound</span>
                        <span style="font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: var(--color-skeleton); padding: 4px 10px; border-radius: 15px; text-transform: uppercase;">Gaian context</span>
                    </div>
                </div>
            `,
            'status': `
                <div class="strata-intro-box">
                    <h3>Story: Status Map</h3>
                    <p>
                        The Sovereign Soil provides the ground truth and the beginning of the scientific process. The Digital Immune System is "grown, not installed."
                    </p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Tiny Devices / Mobile Sensor Capture</td>
                        <td style="text-align: right; color: #00ff88;">[ FUNCTIONAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">BentoBoxDS / Local Persistence</td>
                        <td style="text-align: right; color: #00ff88;">[ FUNCTIONAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Melding / Peer-to-Peer Resonance</td>
                        <td style="text-align: right; color: #f39c12;">[ EXPERIMENTAL ]</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Rooting / Bioregional Anchoring</td>
                        <td style="text-align: right; color: #666;">[ DEFINED ]</td>
                    </tr>
                </table>
            `
        };
        return states[this.storyState] || states['rooting'];
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            @import url('css/nature.css');

            :host {
                display: block;
                background: #fcfaf2;
                background-image: 
                    radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0);
                background-size: 40px 40px;
                color: #1a2a22;
                height: 100%;
                overflow-y: auto;
                font-family: 'Georgia', serif;
                scroll-behavior: smooth;
                line-height: 1.8;
                padding-top: 80px; /* Offset for top menu header (60px) + tri-axis (20px) */
                box-sizing: border-box;
                transition: all 0.8s ease;
            }

            .container {
                max-width: 1400px;
                width: 90%;
                margin: 0 auto;
                padding: 8rem 2rem;
                border-left: 1px solid #dcd3c1;
                border-right: 1px solid #dcd3c1;
                min-height: 100vh;
                background: white;
                position: relative;
                transition: all 0.8s ease;
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

            .strategy-box {
                border-left: 4px solid #e67e22;
                padding-left: 2rem;
                margin: 4rem 0;
            }

            .strategy-box h2 {
                border-left: none;
                padding-left: 0;
                margin-bottom: 1rem;
            }

            .section-header-group {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                border-bottom: 2px solid #2d5a27;
                padding-bottom: 1rem;
                margin-bottom: 3rem;
                position: sticky;
                top: 80px;
                background: rgba(255, 255, 255, 0.95);
                z-index: 10;
                backdrop-filter: blur(5px);
            }

            .section-header-group h2 {
                border-left: none;
                padding-left: 0;
                margin-bottom: 0;
            }

            .section-metadata {
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                text-align: right;
                color: #555;
            }

            .section-metadata .property {
                color: #2d5a27;
                font-weight: bold;
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

            .sub-nav button:hover {
                opacity: 1;
                color: #e67e22;
            }

            .sub-nav button.active {
                opacity: 1;
                color: #2d5a27;
                border-bottom: 1px solid #2d5a27;
                font-weight: bold;
            }

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

            .action-card:hover {
                transform: translateY(-5px);
                border-color: #e67e22;
            }

            .action-card h4 {
                font-family: 'Courier New', monospace;
                color: #e67e22;
                text-transform: uppercase;
                font-size: 0.9rem;
                margin-bottom: 1rem;
                letter-spacing: 1px;
            }

            .action-card h5 {
                font-family: sans-serif;
                font-size: 1.2rem;
                margin-bottom: 1rem;
                color: #2d5a27;
            }

            .action-card p {
                font-size: 1rem;
                margin-bottom: 0;
            }

            @media (max-width: 768px) {
                :host {
                    padding-top: 60px;
                }
                .container {
                    padding: 4rem 1.5rem;
                    border-left: none;
                    border-right: none;
                }
                h1 { font-size: 1.8rem; margin-bottom: 2rem; }
                h2 { font-size: 1.4rem; }
                section { 
                    margin-bottom: 4rem; 
                    padding: 1.5rem 0; 
                }
                .scale-grid { grid-template-columns: 1fr; }
                .infobox { padding: 1.5rem; }
                
                /* Responsive table */
                table {
                    display: block;
                    overflow-x: auto;
                    white-space: nowrap;
                }
            }

            header {
                border-bottom: 2px solid #2d5a27;
                padding-bottom: 1rem;
                margin-bottom: 4rem;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: space-between;
                align-items: flex-end;
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: bold;
                color: #2d5a27;
                position: relative;
            }

            .version-tag {
                font-size: 0.7rem;
                opacity: 0.6;
                color: #1a2a22;
            }

            .btn-playground {
                background: #2d5a27;
                color: white;
                border: none;
                padding: 8px 16px;
                font-family: sans-serif;
                font-size: 0.7rem;
                letter-spacing: 1px;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-bottom: 5px;
            }

            .btn-explorer {
                background: transparent;
                color: #2d5a27;
                border: 1px solid #2d5a27;
                padding: 7px 15px;
                font-family: sans-serif;
                font-size: 0.7rem;
                letter-spacing: 1px;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-bottom: 5px;
            }

            .btn-explorer:hover {
                background: #2d5a27;
                color: white;
            }

            .btn-playground:hover {
                background: #1a3a17;
                box-shadow: 0 0 15px rgba(45, 90, 39, 0.4);
            }

            .graft-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                background: #e67e22;
                color: white;
                border-radius: 4px;
                font-size: 0.6rem;
                cursor: pointer;
                margin-left: 10px;
                vertical-align: middle;
                transition: transform 0.2s ease;
            }

            .graft-icon:hover {
                transform: scale(1.2);
            }

            section {
                margin-bottom: 8rem;
                scroll-margin-top: 80px;
                position: relative;
                padding: 2.5rem;
                border: 1px solid transparent;
                transition: border-color 0.3s ease;
            }

            section.has-vines:hover {
                border-color: rgba(45, 90, 39, 0.1);
            }

            h1, h2, h3 {
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 1.5rem;
                color: #1a2a22;
                position: relative;
            }

            h1 { 
                font-size: 2.5rem; 
                border-bottom: 4px solid #e67e22; 
                display: inline-block;
                margin-bottom: 3rem;
            }
            h2 { font-size: 1.8rem; color: #2d5a27; border-left: 4px solid #2d5a27; padding-left: 1rem; }
            h3 { font-size: 1.3rem; opacity: 0.9; margin-top: 2rem; }

            p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
            }

            strong { color: #2d5a27; }

            .infobox {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2rem;
                margin: 2rem 0;
                position: relative;
            }

            .scale-grid {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 2rem;
                align-items: center;
                margin-top: 2rem;
            }

            .trinity-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                margin-top: 3rem;
            }

            .trinity-item {
                border: 1px solid #dcd3c1;
                padding: 1.5rem;
                background: white;
                transition: all 0.3s ease;
                position: relative;
            }

            .trinity-item:hover {
                transform: translateY(-5px);
                border-color: #2d5a27;
                box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            }

            .trinity-item h4 {
                color: #2d5a27;
                text-transform: uppercase;
                margin-bottom: 0.5rem;
            }

            .footer-note {
                margin-top: 6rem;
                padding-top: 2rem;
                border-top: 1px solid #dcd3c1;
                font-size: 0.9rem;
                opacity: 0.7;
                font-style: italic;
                text-align: center;
            }

            .code-snippet {
                font-family: monospace;
                background: #f4f4f4;
                padding: 1rem;
                border-radius: 4px;
                font-size: 0.9rem;
                overflow-x: auto;
                margin: 1rem 0;
            }

            /* Porting daisy/leaf logic from nature.css for shadow DOM visibility */
            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-white { background: #fff !important; box-shadow: 0 8px 0 -2px #fff, 0 -8px 0 -2px #fff, 8px 0 0 -2px #fff, -8px 0 0 -2px #fff, 6px 6px 0 -2px #fff, -6px -6px 0 -2px #fff, 6px -6px 0 -2px #fff, -6px 6px 0 -2px #fff !important; border: 1px solid rgba(0,0,0,0.1) !important; }
            .daisy-white::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #fbbf24 !important; border-radius: 50%; }
            .daisy-black { background: #000 !important; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000, 6px 6px 0 -2px #000, -6px -6px 0 -2px #000, 6px -6px 0 -2px #000, -6px 6px 0 -2px #000 !important; border: 1px solid rgba(255, 255, 255, 0.4) !important; }
            .daisy-black::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #4ade80 !important; border-radius: 50%; }
            .daisy-tr { top: -12px; right: -12px; }
            .daisy-tl { top: -12px; left: -12px; }

            .leaf-pair { position: absolute; width: 20px; height: 20px; pointer-events: none; z-index: 99; }
            .leaf-pair::before, .leaf-pair::after { content: ""; position: absolute; width: 14px; height: 7px; background: #2d5a27; border-radius: 0 100% 0 100%; }
            .leaf-pair::after { background: #1a3a17; transform: rotate(35deg); left: 8px; top: 4px; opacity: 0.9; }

            /* Cluster Positioning */
            .leaf-cluster-8 .leaf-pair:nth-child(1) { top: -10px; left: 15%; transform: rotate(0deg); }
            .leaf-cluster-8 .leaf-pair:nth-child(2) { top: -12px; left: 17%; transform: rotate(5deg); scale: 0.8; }
            .leaf-cluster-8 .leaf-pair:nth-child(3) { top: -9px; left: 19%; transform: rotate(-5deg); scale: 1.1; }
            .leaf-cluster-8 .leaf-pair:nth-child(4) { top: -11px; left: 21%; transform: rotate(10deg); scale: 0.7; }
            .leaf-cluster-8 .leaf-pair:nth-child(5) { top: -10px; left: 23%; transform: rotate(-10deg); scale: 1.2; }
            .leaf-cluster-8 .leaf-pair:nth-child(6) { top: -8px; left: 25%; transform: rotate(3deg); scale: 0.9; }
            .leaf-cluster-8 .leaf-pair:nth-child(7) { top: -12px; left: 27%; transform: rotate(-7deg); scale: 1.0; }
            .leaf-cluster-8 .leaf-pair:nth-child(8) { top: -10px; left: 29%; transform: rotate(15deg); scale: 0.8; opacity: 0.8; }

            .leaf-cluster-5-v .leaf-pair:nth-child(1) { top: 20%; left: -18px; transform: rotate(-90deg); }
            .leaf-cluster-5-v .leaf-pair:nth-child(2) { top: 23%; left: -16px; transform: rotate(-80deg); scale: 1.1; }
            .leaf-cluster-5-v .leaf-pair:nth-child(3) { top: 26%; left: -18px; transform: rotate(-105deg); scale: 0.8; }
            .leaf-cluster-5-v .leaf-pair:nth-child(4) { top: 29%; left: -16px; transform: rotate(-85deg); scale: 1.2; }
            .leaf-cluster-5-v .leaf-pair:nth-child(5) { top: 32%; left: -18px; transform: rotate(-100deg); scale: 0.9; }

            .leaf-cluster-3-v .leaf-pair:nth-child(1) { bottom: 20%; left: -18px; transform: rotate(-90deg); }
            .leaf-cluster-3-v .leaf-pair:nth-child(2) { bottom: 23%; left: -16px; transform: rotate(-75deg); scale: 1.1; }
            .leaf-cluster-3-v .leaf-pair:nth-child(3) { bottom: 26%; left: -18px; transform: rotate(-110deg); scale: 0.8; }
        </style>

        <div class="container">
            <header>
                <div class="daisy-node daisy-white daisy-tl"></div>
                <!-- road map button -->
                <div>
                    <div>SKELETON // Repository of Truth</div>
                    <div class="version-tag">HOP v1.0.0 experimental</div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-explorer" onclick="window.location.hash='#roadmap'">[ ROAD MAP ]</button>
                    <button class="btn-explorer" onclick="window.location.hash='#explorer'">[ EXPLORER ]</button>
                    <button class="btn-playground" id="playground-toggle" onclick="window.app.togglePlayground('grafting')">[ OPEN GRAFTING BENCH ]</button>
                </div>
            </header>

            <section id="intro" class="has-vines">
                <div class="leaf-cluster-8">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                </div>
                <h1>Gaia Intelligences Shape Health</h1>
                
                <p class="question-text">
                    Can we learn from tiny data from tiny devices through the grafting of human and machine learning?
                </p>

                <div class="strategy-box">
                    <h2>The Strategy</h2>
                    <p>
                        Establishing a Digital Immune System through the mathematics of circles and the logic of Gaia Intelligences.
                    </p>
                </div>

                <p>
                    Next, we set out the design, technical specifications, and the pure JavaScript code that breathes life into these concepts.
                </p>
                <p>
                    The following sections transition from the Story of Gaia Intelligences into the Interplay of the code itself. 
                    We move from the conceptual "Spine" to the functional components of the Health Oracle Protocol, 
                    detailing how the SafeFlow-ECS pulse is implemented and how you, as a peer, can begin grafting within the Sculpting Lab.
                </p>

                <div class="status-tag">
                    Status: [STORY] – The conceptual framework and mathematical foundation are set; the narrative protocol is being pulsed into the skeleton.
                </div>
            </section>

            <section id="gaia-protocol" class="has-vines">
                <div class="daisy-node daisy-black daisy-tr"></div>
                <h2>Gaia Intelligences: The Living Protocol</h2>
                <div class="infobox">
                    <p>
                        We believe science should function like a living body. Within HOP, we utilize <strong>Gaia Intelligences</strong>—systems that are self-organizing and dynamically balanced. These intelligences are not "hard-coupled" or rigidly locked; instead, they trade off one another, maintaining a flexible equilibrium.
                    </p>
                    <p>
                        Like an immune system in the open, the protocol allows for individual variation and localized "flares," but it overall tends to keep the collective body healthy. By allowing these tiny, sovereign data points to interact organically, we ensure that the quality of science remains high, living, and adaptive. This system doesn't just store data; it evolves, learning better over time through natural selection and resonance.
                    </p>
                </div>
            </section>

            <section id="strata" class="has-vines">
                <div class="leaf-cluster-5-v">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div>
                </div>
                <h2>The Three Strata of Participation</h2>
                <p>
                    To navigate HOP is to move through three interwoven layers. Each layer depends on the resonance of the one beneath it.
                </p>

                <div class="strata-grid">
                    <div class="strata-item">
                        <h3>A. STORY</h3>
                        <div class="subtitle">The Sovereign Soil</div>
                        <p>Sovereign Tiny Data</p>
                        <div class="focus">Focus: Dialogue & Devices</div>
                        <div class="status-tag">[INTERPLAY]</div>
                    </div>
                    <div class="strata-item">
                        <h3>B. INTERPLAY</h3>
                        <div class="subtitle">The Metabolism</div>
                        <p>SafeFlow-ECS & beebee</p>
                        <div class="focus">Focus: Human/Agent Weaving</div>
                        <div class="status-tag">[STORY / INTERPLAY]</div>
                    </div>
                    <div class="strata-item">
                        <h3>C. EMULATION</h3>
                        <div class="subtitle">The Sculpting Lab</div>
                        <p>Orgo & Gelle</p>
                        <div class="focus">Focus: On-the-fly Experience</div>
                        <div class="status-tag">[STORY]</div>
                    </div>
                </div>
            </section>

            <section id="emulation-lab" class="has-vines">
                <div class="section-header-group">
                    <div>
                        <h2>C. EMULATION: The Sculpting Lab</h2>
                        <div class="sub-nav">
                            <button class="${this.emulationState === 'on-the-fly' ? 'active' : ''}" data-state="on-the-fly">ON-THE-FLY</button>
                            <button class="${this.emulationState === 'orgo' ? 'active' : ''}" data-state="orgo">ORGO</button>
                            <button class="${this.emulationState === 'gelle' ? 'active' : ''}" data-state="gelle">GELLE</button>
                            <button class="${this.emulationState === 'pulse' ? 'active' : ''}" data-state="pulse">PULSE</button>
                            <button class="${this.emulationState === 'dml-neat' ? 'active' : ''}" data-state="dml-neat">DML/NEAT</button>
                            <button class="${this.emulationState === 'open-lab' ? 'active' : ''}" data-state="open-lab">OPEN LAB</button>
                        </div>
                    </div>
                    <div class="section-metadata">
                        <div class="property">Property: On-the-fly Experience</div>
                        <div class="status">Status: [STORY]</div>
                    </div>
                </div>

                <div class="strata-detail-container">
                    ${this.getEmulationContent()}
                </div>
            </section>


            <section id="interplay-metabolism" class="has-vines">
                <div class="section-header-group">
                    <div>
                        <h2>B. INTERPLAY: The Metabolism</h2>
                        <div class="sub-nav">
                            <button class="${this.interplayState === 'pulse' ? 'active' : ''}" data-state="pulse">PULSE</button>
                            <button class="${this.interplayState === 'safeflow' ? 'active' : ''}" data-state="safeflow">SAFEFLOW-ECS</button>
                            <button class="${this.interplayState === 'beebee' ? 'active' : ''}" data-state="beebee">BEEBEE</button>
                            <button class="${this.interplayState === 'resonagents' ? 'active' : ''}" data-state="resonagents">RESONAGENTS</button>
                            <button class="${this.interplayState === 'besearch' ? 'active' : ''}" data-state="besearch">BESEARCH</button>
                            <button class="${this.interplayState === 'coupling' ? 'active' : ''}" data-state="coupling">COUPLING</button>
                            <button class="${this.interplayState === 'map' ? 'active' : ''}" data-state="map">MAP</button>
                        </div>
                    </div>
                    <div class="section-metadata">
                        <div class="property">Property: Dynamic Consilience</div>
                        <div class="status">Status: [STORY / INTERPLAY]</div>
                    </div>
                </div>

                <div class="strata-detail-container">
                    ${this.getInterplayContent()}
                </div>
            </section>

            <section id="story-soil" class="has-vines">
                <div class="section-header-group">
                    <div>
                        <h2>A. STORY: The Sovereign Soil</h2>
                        <div class="sub-nav">
                            <button class="${this.storyState === 'rooting' ? 'active' : ''}" data-state="rooting">The Source</button>
                            <button class="${this.storyState === 'edge' ? 'active' : ''}" data-state="edge">Edge Intelligence</button>
                            <button class="${this.storyState === 'melding' ? 'active' : ''}" data-state="melding">Root System</button>
                            <button class="${this.storyState === 'context' ? 'active' : ''}" data-state="context">Unique Context</button>
                            <button class="${this.storyState === 'status' ? 'active' : ''}" data-state="status">Status Map</button>
                        </div>
                    </div>
                    <div class="section-metadata">
                        <div class="property">Property: Sovereign Tiny Data</div>
                        <div class="status">Status: [STORY / ROOTING]</div>
                    </div>
                </div>

                <div class="strata-detail-container">
                    ${this.getStoryContent()}
                </div>
            </section>

            <section id="resonagents-trinity" class="has-vines">
                <div class="daisy-node daisy-white daisy-tl"></div>
                <h2>IV. RESONAGENTS TRINITY</h2>
                <div class="trinity-grid">
                    <div class="trinity-item">
                        <h4>Search</h4>
                        <p>Locating resonant peers and biological signals across the P2P swarm.</p>
                    </div>
                    <div class="trinity-item">
                        <h4>Research</h4>
                        <p>Distilling Consilience Weaves into actionable health cues.</p>
                    </div>
                    <div class="trinity-item">
                        <h4>Emulate</h4>
                        <p>Predicting state transitions using SafeFlow-ECS.</p>
                    </div>
                </div>
            </section>

            <div class="footer-note">
                "We move from Reductionist Observation to Resonant Participation."
            </div>
        </div>
        `;
        this.shadowRoot.querySelectorAll('#emulation-lab .sub-nav button').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setEmulationState(btn.dataset.state);
            });
        });
        this.shadowRoot.querySelectorAll('#interplay-metabolism .sub-nav button').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setInterplayState(btn.dataset.state);
            });
        });
        this.shadowRoot.querySelectorAll('#story-soil .sub-nav button').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setStoryState(btn.dataset.state);
            });
        });
    }
}
customElements.define('hs-lens-skeleton', HsLensSkeleton);
