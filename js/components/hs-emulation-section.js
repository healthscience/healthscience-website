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
                        Emulation is the Life-Strap Unified View. It is where the peer stands at the intersection of three worlds to turn Information into Attunement. In old-world speak, this is the "Medicine"—the conscious act of shaping a peer experience on-the-fly to bring the body into resonance with the forest.
                    </p>
                    <p>
                        The Design Choice: Why Attunement?
                    </p>
                    <p>
                        We move beyond the "Placebo Effect" into Intentional Morphogenesis. Drawing from the "Mind-Everywhere" perspective, we recognize that biological tissue responds to the informational environment. Emulation is the tool used to authored that environment, ensuring that the digital feedback loop acts as a catalyst for physical health.
                    </p>
                </div>
                <div class="strata-intro-box">
                    <h3>The Worlds (The Site of Attunement)</h3>
                    <p>
                        Before sculpting, map the three strata of reality. These are not separate "apps," but interwoven layers of a single living state.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Orbit World</h4>
                        <h5>The Knowledge</h5>
                        <p>Anchoring the Heli-Clock. This is the temporal attunement—aligning the node’s heartbeat to the planetary solar arc.</p>
                    </div>
                    <div class="action-card">
                        <h4>Body World</h4>
                        <h5>The Metabolism</h5>
                        <p>The three-layered feedback loop of Orgo (math), Gelle (sensation), and Pulse (rhythm). This is the primary site of biological attunement.</p>
                    </div>
                    <div class="action-card">
                        <h4>Earth World</h4>
                        <h5>The Bioregion</h5>
                        <p>Grafting  logic onto the surroundings. Using Space Design Contracts and Tiny Devices to ensure the physical home and biological body speak the same language.</p>
                    </div>
                </div>
            `,
            'orgo': `
                <div class="strata-intro-box">
                    <h3>ORGO: The Deterministic Physics</h3>
                    <h5>The Definition</h5>
                    <p>
                        An Orgo is a "Sealed Machine." It is pure JavaScript logic that emulates how a Cue behaves across space and time. If the Gelle is what you feel, the Orgo is the underlying law that makes that feeling consistent. It transforms speculative biological guesses into functional, deterministic knowledge.
                    </p>
                </div>
                <div class="strata-intro-box">
                    <h3>The Anatomy of an Orgo</h3>
                    <p>
                        We are currently hardening the Orgo Contract—the blueprint that defines how these machines function within the Lab.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Mechanism</h4>
                        <h5>The Oscillator (The Heartbeat)</h5>
                        <p>Every Orgo is driven by an oscillator. In our current build, this provides the Pulse that sets the rhythm for the entire emulation.</p>
                    </div>
                    <div class="action-card">
                        <h4>Interface</h4>
                        <h5>The Sliders (Tuning the Law)</h5>
                        <p>Within the BentoBoxDS, each Orgo exposes specific "sliders" or parameters. These allow the peer to tune the physics (e.g., adjusting the "frequency" of a cardiac response) in real-time.</p>
                    </div>
                    <div class="action-card">
                        <h4>Mapping</h4>
                        <h5>One-to-Many Conduction</h5>
                        <p>A single Orgo (the math) can be attached to many Gelles (the sensations). One law of physics can manifest as a sound, a visual texture, or a haptic pulse simultaneously.</p>
                    </div>
                </div>
                <div class="strata-intro-box">
                    <h3>The Coordination of the Lab</h3>
                    <p>
                        The biggest engineering challenge we are solving is the Orgo-to-Orgo Grafting. How does one biological law influence another?
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Connection</h4>
                        <h5>The Weave of Physics</h5>
                        <p>In the Sculpting Lab, Orgos don't exist in isolation. They coordinate. A "Sleep Orgo" might exert a "Gravitational Pull" on a "Metabolic Orgo," shifting its weights as the Heli-Clock enters the night arc.</p>
                    </div>
                    <div class="action-card">
                        <h4>Protocol</h4>
                        <h5>Systemic Laws</h5>
                        <p>An Orgo isn't just a network node; it is a specific Systemic Law (e.g., "Cardiac Response to Aquatic Load").</p>
                    </div>
                    <div class="action-card">
                        <h4>Context</h4>
                        <h5>Space & Time</h5>
                        <p>Every Orgo is aware of its coordinates. It understands Reach (geometric influence) and Entropy (Heli-Time). It is physics that knows exactly what year it is and where your biology is in its orbit.</p>
                    </div>
                </div>
                <div class="strata-intro-box">
                    <h3>Implementation Roadmap: [INTERPLAY / HARDENING]</h3>
                    <p>
                        We are currently coding the "Connective Tissue" between these machines:
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Standards</h4>
                        <h5>Orgo Contracts</h5>
                        <p>Standardizing the inputs/outputs so any peer can write a new law of physics and graft it into the forest.</p>
                    </div>
                    <div class="action-card">
                        <h4>Logic</h4>
                        <h5>Coordination Logic</h5>
                        <p>Developing the math for how Orgos "bump" into each other within the SafeFlow-ECS.</p>
                    </div>
                    <div class="action-card">
                        <h4>UI</h4>
                        <h5>The Sliders</h5>
                        <p>Finalizing the native web-component interface for the Bento instruments.</p>
                    </div>
                </div>
                <div class="strata-intro-box">
                    <p><i>"The Orgo is the Logic Machine. It runs f(x) to ensure that every peer who grafts the same contract sees and feels the same deterministic reality."</i></p>
                </div>
            `,
            'gelle': `
                <div class="strata-intro-box">
                    <h3>GELLE: Texture & Shape</h3>
                    <h5>The Definition</h5>
                    <p>
                        If Orgo is the Logic, Gelle is the Texture. It is the manifestation—the shape, color, and specific "feel" that information takes in the Sculpting Lab. Gelles are adaptive, viscous flows that move at the speed of your local metabolism, shifting their shape to fit the immediate context of your life.
                    </p>
                </div>
                <div class="strata-intro-box">
                    <h3>The Phenomenology of Information</h3>
                    <p>
                        The Gelle moves information away from the "dead" pixels of the old world and into a state of Sensory Conduction.
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Phenomenology</h4>
                        <h5>Orangelle (Adaptive Flow)</h5>
                        <p>Information is rendered as a viscous, responsive medium. It doesn't just sit on a screen; it "pulses" and "breathes." When your biological state is high-resonance, the Gelle is clear and fluid; when there is friction or entropy, the Gelle becomes dense or opaque.</p>
                    </div>
                    <div class="action-card">
                        <h4>Phenomenology</h4>
                        <h5>Visceral Feedback</h5>
                        <p>By translating complex SafeFlow-ECS transitions into textures, the Gelle allows for "instinctual monitoring." You don't read a heart-rate chart; you feel the "weight" of your cardiac rhythm.</p>
                    </div>
                    <div class="action-card">
                        <h4>Phenomenology</h4>
                        <h5>The Speed of Life</h5>
                        <p>Gelles are not rendered at a static frame rate. They are synced to the Heli-Clock, moving in time with the planetary and biological cycles they represent.</p>
                    </div>
                </div>

                <div class="strata-intro-box">
                    <h3>The Engineering of Sensation</h3>
                    <p>
                        We are currently implementing the "Skin" of the BentoBoxDS through these adaptive components:
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Engineering</h4>
                        <h5>Multi-Vantage Rendering</h5>
                        <p>A single Orgo (the physics) can drive multiple Gelles. You might have one Gelle that represents your recovery as a soundscape and another that represents it as a visual "Orangelle" texture in your Earth World.</p>
                    </div>
                    <div class="action-card">
                        <h4>Engineering</h4>
                        <h5>Contextual Shaping</h5>
                        <p>Gelles are designed to be "context-aware." Using Grafting Logic, a Gelle can change its manifestation depending on whether you are in a high-focus state or a deep-rest state.</p>
                    </div>
                    <div class="action-card">
                        <h4>Engineering</h4>
                        <h5>The Gelle-Lab Integration</h5>
                        <p>We are building the tools to allow peers to "sculpt" these textures. Using the Bento Sliders, you can adjust the viscosity, luminescence, and reaction-speed of the Gelle to better suit your personal "Sensory Attunement."</p>
                    </div>
                </div>

                <div class="strata-intro-box">
                    <h3>Implementation Roadmap: [STORY / PULSING]</h3>
                    <p>
                        Our current focus is on the "Feel" of the conduction:
                    </p>
                </div>
                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Roadmap</h4>
                        <h5>Texture Shaders</h5>
                        <p>Developing pure JS web-gl components that simulate biological viscosity without heavy frameworks.</p>
                    </div>
                    <div class="action-card">
                        <h4>Roadmap</h4>
                        <h5>Sensory Mapping</h5>
                        <p>Standardizing how an Orgo’s mathematical output maps to a Gelle’s visual or haptic change.</p>
                    </div>
                    <div class="action-card">
                        <h4>Roadmap</h4>
                        <h5>Real-Time ResonAgents</h5>
                        <p>Training agents to adjust Gelle textures on-the-fly to provide better "Placebo" and "Attunement" feedback.</p>
                    </div>
                </div>
                <div class="strata-intro-box">
                    <p><i>"The Gelle is the conscious expression of health. It is where the mathematical certainty of the Orgo meets the lived experience of the Peer."</i></p>
                </div>
            `,
            'pulse': `
                <div class="strata-intro-box">
                    <h3>THE PULSE: The Life-Blood of Conduction</h3>
                    <h5>The Definition</h5>
                    <p>
                        The Pulse is the singular resonant event where Logic (Orgo) and Texture (Gelle) fuse into Attunement. Without the Pulse, logic is a side-show and texture is a hollow shell. It is the rhythmic conduction of data that ensures the peer’s digital emulation is a live, breathing extension of their physical body.
                    </p>
                </div>

                <div class="strata-intro-box">
                    <h3>Conduction Devices: Beyond the "Smart" Device</h3>
                    <p>
                        In the HOP ecosystem, we don't use "Sovereign Devices"—we use Conduction Devices. These are "Tiny Devices" designed for one purpose: to pulse raw biological and environmental facts into the local SafeFlow-ECS.
                    </p>
                    <ul>
                        <li><strong>The Shift:</strong> We move from devices that "process" your data in a closed cloud to devices that Pulse their state directly to your peer node.</li>
                        <li><strong>The Networked Forest:</strong> Each device acts as a "leaf" on your personal tree. These pulses are then networked via the Hyperswarm, allowing for a collective "Gaian Pulse" across the forest without ever compromising the privacy of the individual.</li>
                    </ul>
                </div>

                <div class="strata-intro-box">
                    <h3>Examples of the Pulse in Action</h3>
                    <p>To understand how the Pulse drives the Emulation, consider these three conductive scenarios:</p>
                </div>

                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Earth World</h4>
                        <h5>The Circadian Pulse</h5>
                        <p>A tiny solar-sensor on your window pulses the exact Solar Theta ($\theta$) to your node. The Orgo calculates the shift in the planetary arc, and the Gelle in your room shifts from a bright, high-viscosity "Morning" texture to a deep, fluid "Evening" glow.</p>
                    </div>
                    <div class="action-card">
                        <h4>Body World</h4>
                        <h5>The Cardiac Pulse</h5>
                        <p>A low-power wrist-strap pulses raw HRV data. The SafeFlow-ECS identifies a resonance gap. The Pulse accelerates the refresh-rate of your Bento Instruments, making the "Heart-Orgo" more prominent in your view so you can sculpt your recovery in real-time.</p>
                    </div>
                    <div class="action-card">
                        <h4>Orbit World</h4>
                        <h5>The Bioregional Pulse</h5>
                        <p>A network of peers in your valley all pulse local soil-moisture data (anonymized via the Discovery Gap). The Consilience Weave identifies a shared "Dry-State" transition. Your Emulation reflects this as a change in the background "Pulse" of your Lab, signaling a shift in the local energy budget.</p>
                    </div>
                </div>

                <div class="strata-intro-box">
                    <h3>The Fused Reality</h3>
                    <p>The Pulse is the final authority in the Sculpting Lab. It is what makes the emulation "Serious."</p>
                    <ul>
                        <li><strong>ORGO (Logic):</strong> Provides the deterministic "Bone."</li>
                        <li><strong>GELLE (Sensation):</strong> Provides the adaptive "Skin."</li>
                        <li><strong>THE PULSE (Conduction):</strong> Provides the "Heartbeat" that makes them a living Emulation.</li>
                    </ul>
                </div>

                <div class="strata-intro-box">
                    <h3>Status & Implementation</h3>
                    <p><strong>Status:</strong> [INTERPLAY / HARDENING] — Finalizing the UDP-pulse protocol for Tiny Devices.</p>
                    <p><strong>The Unit:</strong> One Pulse = One State Transition.</p>
                    <p><strong>Focus:</strong> Ensuring zero-latency conduction from hardware to Gelle.</p>
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
                    <h3>THE OPEN LAB: The Emulation Sandbox</h3>
                    <h5>The Definition</h5>
                    <p>The Open Lab is the site of Interactive Emulation. Drawing inspiration from Lovelock’s Daisyworld, we treat the peer’s environment as a self-regulating geophysiological system. This is where we test how individual biological resonance—sculpted through the Orgo and Gelle—contributes to the stability of the wider network. It is the research wing for Peers and Kilo Agents to build the future of the forest.</p>
                </div>

                <div class="strata-intro-box">
                    <h3>The Three Modes of Emulation Integration</h3>
                    <p>We are establishing the engineering vocabulary for how different layers of the forest connect. These represent the "Grafting Points" for the V1 and V2 roadmap.</p>
                </div>

                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>1. Grafting (Coordination)</h4>
                        <p>The primary method for the V1 release. It involves binding a mathematical ideal to a physical site.</p>
                        <p><strong>The Logic:</strong> Coordinating via Contracts. It aligns your Space Coordinates (physical room) with your Emulation Space (BentoBoxDS) and your Position on Earth (Heli-Clock).</p>
                        <p><strong>Status:</strong> [INTERPLAY / HARDENING]</p>
                    </div>
                    <div class="action-card">
                        <h4>2. Coupling (Functional Plug-in)</h4>
                        <p>The act of plugging a new biological or mathematical function into the SafeFlow-ECS.</p>
                        <p><strong>The Logic:</strong> It allows two independent state-machines to influence one another. If you have a new "Respiratory Orgo," you Couple it to the existing "Cardiac Orgo" to see the resonance.</p>
                        <p><strong>Status:</strong> [STORY / CONCEPT]</p>
                    </div>
                    <div class="action-card">
                        <h4>3. Melding (The Peer Bridge)</h4>
                        <p>The process of bringing segments of your BentoBoxDS experience to other peers’ software.</p>
                        <p><strong>The Logic:</strong> "HOP-Sim." It allows for the seamless sharing of a "Gelle-texture" across the Hyperswarm, enabling collective intelligence without moving raw data.</p>
                        <p><strong>Status:</strong> [STORY / CONCEPT]</p>
                    </div>
                </div>

                <div class="strata-intro-box" style="margin-top: 4rem;">
                    <h3>V2 Vision: The Cues-Mantle</h3>
                    <p>Beyond the V1 release, we move outwith the "World Wide Web."</p>
                    <p>The Cues-Mantle is a sovereign, lightweight compute environment designed to host the BentoBoxDS outside of traditional browsers.</p>
                    <ul>
                        <li><strong>The Shift:</strong> We move from "Websites" to a Mantle of Conduction. It is a native, peer-to-peer substrate where information moves at the speed of local hardware.</li>
                        <li><strong>The Goal:</strong> A free, lightweight environment where the peer doesn't just "visit" a site but inhabits their own portion of the forest.</li>
                    </ul>
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
