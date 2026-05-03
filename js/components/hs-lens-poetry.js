class HsLensPoetry extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.besearchStages = [
            { name: 'Context', details: 'Initial biological and environmental signal capture.' },
            { name: 'Research', details: 'Active Inference processing via ResonAgents.' },
            { name: 'Search', details: 'NEAT-HOP exploration for optimal health paths.' },
            { name: 'Emulation', details: 'Implementation of chosen cues in the Peer context.' }
        ];
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
                padding-top: 80px; /* Offset for top menu header (60px) + tri-axis (20px) */
                box-sizing: border-box;
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

            .lego-button {
                display: inline-block;
                padding: 0.75rem 1.5rem;
                background: #a9ff00;
                color: #0a0f0d;
                border: 1px solid #a9ff00;
                border-radius: 4px;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 0.75rem;
                font-weight: 700;
                letter-spacing: 1px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
            }

            .lego-button:hover {
                background: transparent;
                color: #a9ff00;
                box-shadow: 0 0 15px rgba(169, 255, 0, 0.3);
            }

            .lego-button-outline {
                background: transparent;
                color: #a9ff00;
            }

            .lego-button-outline:hover {
                background: rgba(169, 255, 0, 0.1);
            }

            .download-section {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                margin-top: 2rem;
            }

            .lego-module:hover {
                border-color: rgba(169, 255, 0, 0.4);
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
            }

            .grid-1-2 {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            @media (min-width: 768px) {
                .grid-1-2 {
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media (min-width: 1024px) {
                .grid-1-2 {
                    gap: 3rem;
                }
            }

            /* Tailwind-like utilities */
            .mb-20 { margin-bottom: 5rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mt-20 { margin-top: 5rem; }
            .mt-12 { margin-top: 3rem; }
            .mt-6 { margin-top: 1.5rem; }
            .mt-4 { margin-top: 1rem; }
            .pt-12 { padding-top: 3rem; }
            .p-6 { padding: 1.5rem; }
            .p-3 { padding: 0.75rem; }
            .pl-4 { padding-left: 1rem; }
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .justify-between { justify-content: space-between; }
            .items-center { align-items: center; }
            .items-stretch { align-items: stretch; }
            .text-center { text-align: center; }
            .text-xl { font-size: 1.25rem; }
            .text-sm { font-size: 0.875rem; }
            .text-xs { font-size: 0.75rem; }
            .text-\[10px\] { font-size: 10px; }
            .font-light { font-weight: 300; }
            .font-medium { font-weight: 500; }
            .font-serif { font-family: 'Georgia', serif; }
            .font-mono { font-family: 'Inter', monospace; }
            .italic { font-style: italic; }
            .uppercase { text-transform: uppercase; }
            .tracking-widest { letter-spacing: 0.2em; }
            .tracking-wider { letter-spacing: 0.1em; }
            .tracking-\[0\.2em\] { letter-spacing: 0.2em; }
            .tracking-\[0\.3em\] { letter-spacing: 0.3em; }
            .leading-relaxed { line-height: 1.625; }
            .border { border: 1px solid rgba(169, 255, 0, 0.2); }
            .border-t { border-top: 1px solid rgba(169, 255, 0, 0.2); }
            .border-l-2 { border-left: 2px solid rgba(169, 255, 0, 0.3); }
            .rounded { border-radius: 4px; }
            .rounded-lg { border-radius: 8px; }
            .rounded-full { border-radius: 9999px; }
            .w-full { width: 100%; }
            .h-full { height: 100%; }
            .min-h-\[400px\] { min-height: 400px; }
            .space-y-6 > * + * { margin-top: 1.5rem; }
            .space-y-2 > * + * { margin-top: 0.5rem; }
            .block { display: block; }
            .inline-flex { display: inline-flex; }
            .gap-8 { gap: 2rem; }
            .gap-6 { gap: 1.5rem; }
            .gap-4 { gap: 1rem; }
            .gap-3 { gap: 0.75rem; }
            
            /* Colors */
            .text-primary { color: #ffffff; }
            .text-secondary { color: #9ca3af; }
            .text-secondary\/80 { color: rgba(156, 163, 175, 0.8); }
            .text-secondary\/70 { color: rgba(156, 163, 175, 0.7); }
            .text-neon { color: #a9ff00; }
            .bg-pine\/5 { background-color: rgba(45, 70, 53, 0.1); }
            .bg-pine\/10 { background-color: rgba(45, 70, 53, 0.2); }
            .bg-forest\/20 { background-color: rgba(20, 40, 30, 0.4); }
            .bg-neon\/5 { background-color: rgba(169, 255, 0, 0.05); }
            .bg-neon\/10 { background-color: rgba(169, 255, 0, 0.1); }
            .border-pine\/30 { border-color: rgba(45, 70, 53, 0.3); }
            .border-pine\/20 { border-color: rgba(45, 70, 53, 0.2); }
            .border-neon\/30 { border-color: rgba(169, 255, 0, 0.3); }
            .border-neon\/50 { border-color: rgba(169, 255, 0, 0.5); }

            /* Diagram Styles */
            .fabric-svg {
                width: 100%;
                height: 100%;
            }
            .spine-line {
                stroke: #a9ff00;
                stroke-width: 2;
                stroke-dasharray: 4 4;
            }
            .proof-node {
                fill: #a9ff00;
                filter: drop-shadow(0 0 5px #a9ff00);
            }
            .label-sub {
                fill: #888;
                font-family: monospace;
                font-size: 10px;
                text-transform: uppercase;
            }
            .label-main {
                fill: #a9ff00;
                font-family: monospace;
                font-size: 14px;
                text-transform: uppercase;
                text-anchor: middle;
                letter-spacing: 2px;
            }
            .besearch-icon {
                fill: rgba(169, 255, 0, 0.2);
                stroke: #a9ff00;
                stroke-width: 1;
            }
            .icon-label {
                fill: #888;
                font-family: monospace;
                font-size: 10px;
                text-anchor: middle;
            }
            .filament-path {
                fill: none;
                stroke: rgba(169, 255, 0, 0.3);
                stroke-width: 1;
                stroke-dasharray: 5 5;
            }

            .btn-playground {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .btn-playground:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 20px rgba(169, 255, 0, 0.2);
            }

            .daisy-world {
                width: 16px;
                height: 16px;
                background: white;
                border-radius: 50%;
                position: relative;
                box-shadow: 0 0 10px white;
            }
            .daisy-world::after {
                content: '';
                position: absolute;
                inset: 4px;
                background: #fbbf24;
                border-radius: 50%;
            }

            @media (max-width: 768px) {
                :host {
                    padding-top: 60px;
                }
                .content-wrapper {
                    padding: 2rem 1.5rem;
                }
                section {
                    margin-bottom: 4rem;
                }
                h1 { font-size: 2.2rem; line-height: 1.2; }
                h2 { font-size: 1.6rem; }
                .serif { font-size: 1.1rem; }
                .lego-module { padding: 1.5rem; }
                .grid { grid-template-columns: 1fr; }
                .spiral-container { opacity: 0.2; }
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
                    <div class="mono">HOP - The Infrastructure for Science’s Living Roots. </div>
                    <p class="serif">
                        At the dawn of super-intelligence, we return to the living way. The Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer Fabric that treats biological signals as Sovereign Intelligences, guiding every cell to bioregion towards health.
                    </p>
                    <div class="download-section">
                        <a href="https://bentoboxds.org" target="_blank" class="lego-button">Download</a>
                        <a href="https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence" target="_blank" class="lego-button lego-button-outline">Read opening dialogue</a>
                        <a href="https://beebeehop.any.org/another-tiny-hop-to-the-great-orbit" target="_blank" class="lego-button lego-button-outline">Read second dialogue</a>
                    </div>
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

            <!-- STORY INTERPLAY EMULATION -->
            <section id="story-interplay-emulation">
               <div class="section-tag">STORY INTERPLAY EMULATION</div>
                <h2>Peer teach - machine learn</h2>
                <div class="lego-module" style="background: rgba(169, 255, 0, 0.05);">
                   <p>We are building a decentralized metabolism that learns from the interplay of human and machine. The goal is to create a system that can adapt and evolve in real-time, much like a biological organism.</p>
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
                
                <!-- simplified version of the diagram -->
                <h3 style="margin-top: 4rem;">The Anatomy of the HOP Fabric</h3>
                
                <!-- 4-Section Grid -->
                <div class="grid-1-2 mb-20 items-stretch">
                    
                    <!-- Top Left: Besearch Cycle -->
                    <div class="lego-module p-6 bg-pine/5 border-pine/30 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-light text-primary mb-4">The Besearch Cycle: Science in Motion</h3>
                            <p class="text-secondary text-sm leading-relaxed italic font-serif mb-6">Knowledge is a metabolic loop. This 4-stage engine transforms raw signals into a future path:</p>
                            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
                                ${this.besearchStages.map((stage, idx) => `
                                    <div class="p-3 border border-pine/20 rounded bg-forest/20">
                                        <div class="text-neon font-mono text-[10px] mb-1 uppercase tracking-widest">${idx + 1}. ${stage.name}</div>
                                        <p class="text-[10px] text-secondary/80 leading-relaxed">${stage.details}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Top Right: Coherence Ledger -->
                    <div class="lego-module p-6 bg-pine/5 border-pine/30 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-mono text-neon uppercase tracking-[0.2em] mb-6">The Coherence Ledger: A Digital Immune System</h3>
                            <div class="space-y-6">
                                <div>
                                    <span class="text-primary font-medium block mb-2 font-mono text-sm uppercase tracking-wider">The Spine:</span>
                                    <p class="text-secondary text-sm leading-relaxed">Every Besearch Cycle is etched here, ensuring that the "Best Guess" and the "New Science" remain mathematically consistent with the Peer's context.</p>
                                </div>
                                <div>
                                    <span class="text-primary font-medium block mb-2 font-mono text-sm uppercase tracking-wider">The Filter:</span>
                                    <p class="text-secondary text-sm leading-relaxed">By requiring a baseline of evidence for every update, the Ledger prevents uncorrupted data from entering the weave, maintaining a sovereign sanctuary for the cell.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Left: Consilience Weave -->
                    <div class="lego-module p-6 bg-pine/5 border-pine/30 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-light text-primary mb-6">The Consilience Weave: Cascades & Balance</h3>
                            <div class="space-y-6">
                                <p class="text-secondary text-sm leading-relaxed">
                                    To ensure the Fabric remains stable, the Consilience Weave utilizes a sophisticated cascade of updates.
                                </p>
                                <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase">Levin Bubble Sort (v2):</span> 
                                        <p class="text-xs text-secondary/80 leading-relaxed">In the browser-based environment, a Levin-inspired sort prioritizes the most "nutritional" and coherent Cues, ensuring the most relevant medicine rises to the surface.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase">Controlled Feedback:</span>
                                        <p class="text-xs text-secondary/80 leading-relaxed">The math of the Weave allows for a rapid cascade of updates across the Peer network without running out of control. It prevents the endless feedback loops that plague centralized systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Right: Diagram -->
                    <div class="flex items-center justify-center">
                        <div class="anatomy-container bento-node w-full h-full min-h-[400px] flex flex-col">
                            <svg viewBox="0 0 900 600" class="fabric-svg flex-1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                    
                                    <pattern id="weavePattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                        <path d="M0 7h15M7 0v15" stroke="rgba(74, 222, 128, 0.15)" stroke-width="0.5"/>
                                    </pattern>
                                </defs>

                                <g class="spine-group">
                                    <line x1="450" y1="50" x2="450" y2="520" class="spine-line" filter="url(#glow)" />
                                    <circle cx="450" cy="120" r="6" class="proof-node" />
                                    <circle cx="450" cy="240" r="6" class="proof-node" />
                                    <circle cx="450" cy="360" r="6" class="proof-node" />
                                    <text x="465" y="80" class="label-sub">Digital Immune System</text>
                                </g>

                                <g class="heart-core">
                                    <rect x="350" y="140" width="200" height="200" rx="100" fill="url(#weavePattern)" stroke="rgba(169, 255, 0, 0.3)" />
                                    <g transform="translate(450, 240) scale(0.7)">
                                        <ellipse cx="0" cy="0" rx="40" ry="80" stroke="#a9ff00" stroke-width="3" fill="none" opacity="0.6" />
                                        <circle cx="0" cy="-30" r="45" stroke="#a9ff00" stroke-width="2" fill="none" opacity="0.4" />
                                    </g>
                                    <text x="450" y="360" class="label-main">SafeFlow-ECS</text>
                                </g>

                                <g class="besearch-group" transform="translate(450, 480)">
                                    <g transform="translate(-180, 0)">
                                        <circle r="12" class="besearch-icon stage-1" />
                                        <text y="30" class="icon-label">1. Context</text>
                                    </g>
                                    <g transform="translate(-60, 0)">
                                        <circle r="12" class="besearch-icon stage-2" />
                                        <text y="30" class="icon-label">2. Research</text>
                                    </g>
                                    <g transform="translate(60, 0)">
                                        <circle r="12" class="besearch-icon stage-3" />
                                        <text y="30" class="icon-label">3. Search</text>
                                    </g>
                                    <g transform="translate(180, 0)">
                                        <circle r="12" class="besearch-icon stage-4" />
                                        <text y="30" class="icon-label">4. Emulation</text>
                                    </g>
                                    <path d="M-180 -20 Q0 -80 180 -20" fill="none" stroke="rgba(169, 255, 0, 0.2)" stroke-dasharray="5,5" />
                                </g>

                                <path d="M100 240 Q250 240 350 240" class="filament-path pulse-left" />
                                <text x="100" y="220" class="label-sub">Sensing Skin (BentoBox/Bio)</text>
                                
                                <path d="M550 240 Q700 240 800 240" class="filament-path pulse-right" />
                                <text x="800" y="220" class="label-sub" text-anchor="end">Living Mind (BeeBee/ResonAgents)</text>
                            </svg>

                            <div class="diagram-footer mt-4 text-center">
                                <button class="btn-playground group inline-flex items-center gap-3 px-6 py-3 border border-neon/50 bg-neon/5 hover:bg-neon/10 transition-all rounded-full" onclick="this.getRootNode().host.dispatchEvent(new CustomEvent('open-playground', {bubbles: true, composed: true}))">
                                    <span class="daisy-world"></span>
                                    <span class="text-neon font-mono text-xs tracking-widest uppercase">Explore the Playground</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: The HeliClock -->
                    <div class="lego-module p-6 bg-pine/5 border-pine/30 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-light text-primary mb-6">The HeliClock: The Mathematics of Resonance</h3>
                            <div class="space-y-6">
                                <p class="text-secondary text-sm leading-relaxed italic font-serif">
                                    At the center of every Besearch Cycle sits the HeliClock. This is the peg we’ve driven deep into the ground of geometry. It provides the rhythmic baseline for the entire protocol.
                                </p>
                                <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">ResonancePulse:</span> 
                                        <p class="text-xs text-secondary/80 leading-relaxed">The HeliClock isn't a standard timer; it is a mathematical clock that tracks the "Phase" of biological systems. It ensures that the Consilience Weave remains in sync across the swarm.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">The Geometry of Time:</span>
                                        <p class="text-xs text-secondary/80 leading-relaxed">By grounding the protocol in the physics of the HeliClock, we move away from "linear data" and into Geometric Resonance. This allows the NEAT-HOP search to find solutions that aren't just statistically likely, but biologically harmonious.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section 6: The Sovereign Skeleton -->
                    <div class="lego-module p-6 bg-pine/5 border-pine/30 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-light text-primary mb-6">The Sovereign Skeleton: Cryptography as Skin</h3>
                            <div class="space-y-6">
                                <p class="text-secondary text-sm leading-relaxed italic font-serif">
                                    The Fabric of Gaia Intelligence is held together by a Sovereign Skeleton of mathematics. This isn't just about "security"—it is about Identity and Integrity.
                                </p>
                                <div class="pl-4 border-l-2 border-neon/30 space-y-6">
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">The Merkle-Spine (Hyperbees):</span> 
                                        <p class="text-xs text-secondary/80 leading-relaxed">Your data isn't a messy file; it’s a structured, cryptographic tree. Every pulse is hashed and signed, allowing for rapid, local-first search and retrieval without ever exposing the root to the swarm.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">Swarm Noise & Privacy:</span>
                                        <p class="text-xs text-secondary/80 leading-relaxed">We use Noise-protocol handshakes and peer-to-peer encryption to ensure that when Peers "resonate," they do so in a private sanctuary.</p>
                                    </div>
                                    <div class="space-y-2">
                                        <span class="text-primary font-medium block font-mono text-xs uppercase tracking-wider">Account Identity:</span>
                                        <p class="text-xs text-secondary/80 leading-relaxed">You are not a username on a server. You are a Key. Your Secure ID is the mathematical root of your existence in the fabric, giving you total ownership of your BentoBox.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Repository of Truth Section -->
                <div class="mt-20 pt-12 border-t border-pine/20">
                    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div class="max-w-xl">
                            <h3 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-4">The Repository of Truth</h3>
                            <p class="text-secondary text-sm leading-relaxed italic font-serif">
                                Everything discussed on the site is backed by open, verifiable code and deep documentation. This signals that our foundations are grounded in the "Repository of Truth."
                            </p>
                            <div class="flex gap-4 mt-6">
                                <button 
                                    onclick="this.getRootNode().host.dispatchEvent(new CustomEvent('open-glossary', {bubbles: true, composed: true}))"
                                    class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded bg-transparent hover:bg-neon/10 transition-all cursor-pointer"
                                >
                                    Explore the Glossary
                                </button>
                                <button 
                                    onclick="this.getRootNode().host.dispatchEvent(new CustomEvent('open-maths', {bubbles: true, composed: true}))"
                                    class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded bg-transparent hover:bg-neon/10 transition-all cursor-pointer"
                                >
                                    View Maths
                                </button>
                            </div>
                        </div>
                        
                        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); width: 100%;">
                            <a href="https://github.com/healthscience" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block" style="text-decoration: none;">
                                <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Repository</div>
                                <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">github.com/healthscience</div>
                                <p class="text-[10px] text-secondary/70 leading-relaxed">The raw mechanics of the Fabric, SafeFlow-ECS, and the PeerStack.</p>
                            </a>
                            
                            <a href="https://bentobox-ds.gitbook.io" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block" style="text-decoration: none;">
                                <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Specification</div>
                                <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">bentobox-ds.gitbook.io</div>
                                <p class="text-[10px] text-secondary/70 leading-relaxed">The deep-dive documentation for BentoBoxDS and the Health Oracle Protocol.</p>
                            </a>
                        </div>
                    </div>
                </div>
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
                    <div class="daisy-node"></div>
                    <p class="serif">
                        At the dawn of super-intelligence, we return to the living way. The Health Oracle Protocol (HOP) provides the foundational physics for the living way. It is a Peer-to-Peer Fabric that treats biological signals as Sovereign Intelligences, guiding every cell to bioregion towards health.
                    </p>
                    <div class="download-section">
                        <a href="https://bentoboxds.org" target="_blank" class="lego-button">Download</a>
                        <a href="https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence" target="_blank" class="lego-button lego-button-outline">Read opening dialogue</a>
                        <a href="https://beebeehop.any.org/another-tiny-hop-to-the-great-orbit" target="_blank" class="lego-button lego-button-outline">Read second dialogue</a>
                    </div>
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
