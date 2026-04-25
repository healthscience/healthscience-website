class HsLensPoetry extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    onActivate(subState) {
        console.log('Poetry Lens Activated', subState);
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                background-color: #0a0f0d;
                color: #ffffff;
                height: 100%;
                overflow-y: auto;
                scroll-behavior: smooth;
                font-family: 'Inter', -apple-system, sans-serif;
                position: relative;
            }

            /* Spiral Background */
            .spiral-container {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                pointer-events: none;
                z-index: 0;
                overflow: hidden;
                opacity: 0.4;
            }

            .spiral {
                position: absolute;
                width: 100vw;
                height: 100vw;
                border-radius: 50%;
                animation: spin 120s linear infinite;
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            .spiral-1 {
                top: -20%; right: -10%;
                width: 80vw; height: 80vw;
            }

            .spiral-2 {
                bottom: -30%; left: -20%;
                width: 100vw; height: 100vw;
                animation-duration: 180s;
                animation-direction: reverse;
            }

            /* Content Layout */
            .content-wrapper {
                position: relative;
                z-index: 1;
                max-width: 1000px;
                margin: 0 auto;
                padding: 4rem 2rem;
            }

            section {
                margin-bottom: 8rem;
                position: relative;
            }

            /* Typography */
            h1, h2, h3 {
                text-transform: uppercase;
                letter-spacing: 0.15em;
                font-weight: 300;
            }

            h1 { font-size: 3.5rem; margin-bottom: 2rem; }
            h2 { font-size: 2rem; color: #a9ff00; margin-bottom: 1.5rem; }
            h3 { font-size: 1.2rem; color: #a9ff00; margin-bottom: 1rem; }

            .serif {
                font-family: 'Georgia', serif;
                font-style: italic;
                font-size: 1.25rem;
                line-height: 1.6;
                color: #9ca3af;
            }

            .mono {
                font-family: 'Inter', monospace;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #a9ff00;
            }

            p {
                margin-bottom: 1.5rem;
                line-height: 1.7;
                color: #e0e0e0;
            }

            /* Components */
            .lego-module {
                background: rgba(45, 70, 53, 0.2);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(169, 255, 0, 0.1);
                border-radius: 12px;
                padding: 2.5rem;
                margin: 2rem 0;
                position: relative;
                transition: border-color 0.3s ease;
            }

            .lego-module:hover {
                border-color: rgba(169, 255, 0, 0.4);
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
            }

            /* Decorative elements */
            .daisy-node {
                position: absolute;
                width: 12px; height: 12px;
                background: white;
                border-radius: 50%;
                top: -6px; right: -6px;
                box-shadow: 0 0 10px white;
            }

            .daisy-node::after {
                content: '';
                position: absolute;
                inset: 3px;
                background: #fbbf24;
                border-radius: 50%;
            }

            .leaf-pair {
                position: absolute;
                width: 20px; height: 10px;
                background: #2d5a27;
                border-radius: 0 100% 0 100%;
                opacity: 0.6;
            }

            /* Header HUD effect */
            .section-tag {
                display: inline-block;
                padding: 4px 12px;
                border: 1px solid #2d4635;
                border-radius: 20px;
                font-size: 0.65rem;
                color: #888;
                margin-bottom: 1rem;
            }

            /* SVG styling for diagrams */
            .anatomy-svg {
                width: 100%;
                height: auto;
                max-width: 800px;
                margin: 3rem auto;
                display: block;
                filter: drop-shadow(0 0 20px rgba(169, 255, 0, 0.1));
            }

            .pulse {
                animation: blink 2s infinite;
            }

            @keyframes blink {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 1; }
            }
        </style>

        <div class="spiral-container">
            <svg class="spiral spiral-1" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="10" fill="none" stroke="#2d4635" stroke-width="0.4" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#2d4635" stroke-width="0.4" stroke-dasharray="1 2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#2d4635" stroke-width="0.4" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#a9ff00" stroke-width="0.3" stroke-dasharray="4 4" class="pulse" />
                <circle cx="50" cy="50" r="50" fill="none" stroke="#2d4635" stroke-width="0.4" />
            </svg>
            <svg class="spiral spiral-2" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="15" fill="none" stroke="#2d4635" stroke-width="0.3" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#2d4635" stroke-width="0.4" stroke-dasharray="2 4" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#2d4635" stroke-width="0.3" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#a9ff00" stroke-width="0.3" stroke-dasharray="1 6" class="pulse" />
            </svg>
        </div>

        <div class="content-wrapper">
            <!-- HERO SECTION -->
            <section id="hero">
                <div class="section-tag">THE FOUNDATIONAL PHYSICS</div>
                <h1>Gaia intelligences <br /><span style="color: #a9ff00; font-weight: 700;">shape health.</span></h1>
                <p class="serif">
                    The Health Oracle Protocol (HOP) is the computational layer for Geophysiology—the science of planetary and biological self-regulation.
                </p>
                <div class="lego-module">
                    <div class="daisy-node"></div>
                    <p class="serif">
                        At the dawn of super-intelligence, we return to the living way. The Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer Fabric that treats biological signals as Sovereign Intelligences, guiding every cell to bioregion towards health.
                    </p>
                </div>
            </section>

            <!-- SMALL INTELLIGENCES -->
            <section id="intelligences">
                <h2>The Intelligences of the Small</h2>
                <p class="serif" style="margin-bottom: 3rem;">
                    "Our approach to machine learning is a decentralized metabolism. It is intelligences at the scale of the cell, the peer, and the bioregional weave."
                </p>
                
                <div class="grid">
                    <div class="lego-module">
                        <div class="mono">The Molecular Scale</div>
                        <h3>Tiny Devices</h3>
                        <p>Raw signals are captured at the point of origin (Vagus-Strap, Sensing Skin). There is no "upload" to a cloud; the math happens where the pulse is.</p>
                    </div>
                    <div class="lego-module">
                        <div class="mono">The Cellular Scale</div>
                        <h3>Tiny Agents</h3>
                        <p>ResonAgents operate within your BentoBox. They are your personal apprentices, learning the unique geometry of your Von Mises rhythms.</p>
                    </div>
                    <div class="lego-module">
                        <div class="mono">The Mycelial Scale</div>
                        <h3>Decentralized Weave</h3>
                        <p>When tiny agents communicate, they don't trade personal data. They trade Cues—distilled insights that allow the whole forest to learn without any single tree losing its sovereignty.</p>
                    </div>
                </div>
            </section>

            <!-- CUES & BESEARCH -->
            <section id="cues">
                <div class="section-tag">THE METABOLIC LOGIC</div>
                <h2>Cues & Besearch</h2>
                <div class="lego-module" style="background: rgba(169, 255, 0, 0.05);">
                    <p>A Cue is not a vague signal; it is a Shannon-Entropy optimized packet of signed data. By using Levin Complexity, we ensure the 'Search' stage of the metabolism finds the most mathematically probable path to health.</p>
                    <p>The Besearch Cycle is a functional implementation of Active Inference. Using tiny agents to minimize variational free energy, the protocol allows a Peer to maintain biological coherence by constantly updating their internal model against the environment.</p>
                </div>
                
                <h3 style="margin-top: 4rem;">The Anatomy of the HOP Fabric</h3>
                <div class="mono">Metabolic Journey</div>
                
                <!-- Simplified Diagram SVG -->
                <svg viewBox="0 0 800 400" class="anatomy-svg" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 100 200 Q 200 100 400 200 T 700 200" fill="none" stroke="#2d4635" stroke-width="2" stroke-dasharray="5 5" />
                    <circle cx="100" cy="200" r="10" fill="#a9ff00" class="pulse" />
                    <circle cx="400" cy="200" r="15" fill="none" stroke="#a9ff00" stroke-width="2" />
                    <circle cx="700" cy="200" r="10" fill="#a9ff00" class="pulse" />
                    <text x="100" y="240" fill="#888" font-family="monospace" font-size="10" text-anchor="middle">SENSING SKIN</text>
                    <text x="400" y="240" fill="#888" font-family="monospace" font-size="10" text-anchor="middle">SAFEFLOW-ECS</text>
                    <text x="700" y="240" fill="#888" font-family="monospace" font-size="10" text-anchor="middle">LIVING MIND</text>
                </svg>
            </section>

            <!-- BOREAL HORIZON -->
            <section id="boreal">
                <div class="section-tag">THE BOREAL HORIZON</div>
                <h2>The Nature of Computation</h2>
                <p class="serif">
                    Computation is transitioning from a rigid, extractive phase into a Resonant, Living State. As we align with the foundational physics of biology, the "Factory" and the "Sensor" dissolve into the watershed.
                </p>
                
                <div class="grid" style="margin-top: 4rem;">
                    <div class="lego-module">
                        <div class="mono">Phase 01</div>
                        <h3>Alignment</h3>
                        <p>We reclaim high-performance sensing. Stripping away proprietary layers, we allow silicon to speak the pure language of HOP.</p>
                    </div>
                    <div class="lego-module">
                        <div class="mono">Phase 02</div>
                        <h3>Conformity</h3>
                        <p>Additive Molecular Assembly. Printing "Warm Geometry" onto nanomeshes that stretch and breathe with the Peer.</p>
                    </div>
                    <div class="lego-module">
                        <div class="mono">Phase 03</div>
                        <h3>Synthesis</h3>
                        <p>The Living Pulse. Biodegradable sensors powered by the body’s own ionic gradients, merging the PeerStack with wetware.</p>
                    </div>
                </div>
            </section>

            <footer style="text-align: center; padding: 4rem 0; opacity: 0.5;">
                <div class="mono">healthscience.network</div>
            </footer>
        </div>
        `;
    }
}
customElements.define('hs-lens-poetry', HsLensPoetry);
