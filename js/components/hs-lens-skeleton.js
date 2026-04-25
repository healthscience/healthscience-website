class HsLensSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    onActivate(subState) {
        console.log('Skeleton Lens Activated', subState);
        if (subState) {
            const el = this.shadowRoot.getElementById(subState);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
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
                max-width: 900px;
                margin: 0 auto;
                padding: 8rem 2rem;
                border-left: 1px solid #dcd3c1;
                border-right: 1px solid #dcd3c1;
                min-height: 100vh;
                background: white;
                position: relative;
                transition: all 0.8s ease;
            }

            @media (max-width: 768px) {
                .container {
                    padding: 2rem 1rem;
                    border-left: none;
                    border-right: none;
                }
                h1 { font-size: 1.8rem; }
                h2 { font-size: 1.4rem; }
                .scale-grid { grid-template-columns: 1fr; }
            }

            header {
                border-bottom: 2px solid #2d5a27;
                padding-bottom: 1rem;
                margin-bottom: 4rem;
                display: flex;
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
                <div>
                    <div>SKELETON // Repository of Truth</div>
                    <div class="version-tag">HOP v1.0.0 experimental</div>
                </div>
                <button class="btn-playground" id="playground-toggle" onclick="window.app.togglePlayground('grafting')">[ OPEN GRAFTING BENCH ]</button>
            </header>

            <section id="intro" class="has-vines">
                <div class="leaf-cluster-8">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                </div>
                <h1>Gaia Intelligences Shape Health <span class="graft-icon" onclick="window.app.togglePlayground('coupling')">G</span></h1>
                <div class="infobox">
                    <p>
                        This lens sets out how HOP and BentoBoxDS work. We are creating a peer experience on the fly by 
                        <strong>Coupling</strong> interfaces, <strong>Grafting</strong> metabolic logic, and 
                        <strong>Melding</strong> tiny devices into a singular, resonant whole.
                    </p>
                    <p>
                        From the Von Mises geometry of your daily pulse to the Daisyworld feedback loops of the planet, 
                        the Skeleton is the verifiable proof that health is a planetary attunement.
                    </p>
                </div>
            </section>

            <section id="heliclock" class="has-vines">
                <div class="daisy-node daisy-black daisy-tr"></div>
                <div class="leaf-cluster-5-v">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div>
                </div>
                <h2>I. THE HELICLOCK & VON MISES <span class="graft-icon" onclick="window.app.togglePlayground('grafting')">G</span></h2>
                <p>
                    Health is not linear; it is periodic. We don't measure time; we map phase. 
                    Standard statistics fail because they assume a flat line. We use <strong>Von Mises Statistics</strong> 
                    (Directional Statistics) to map the "Circular Gaussian."
                </p>
                <hs-von-mises-viz></hs-von-mises-viz>
                <div class="infobox">
                    <p>
                        By wrapping noisy biological data around a 24-hour circle, we reveal the resonance. 
                        This ensures your SafeFlow-ECS is always in sync with the solar day.
                    </p>
                </div>
            </section>

            <section id="lensing" class="has-vines">
                <div class="leaf-cluster-3-v">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div>
                </div>
                <h2>II. TEXTURE PATTERN LENSING <span class="graft-icon" onclick="window.app.togglePlayground('melding')">G</span></h2>
                <p>
                    The Life-Strap expands beyond the wrist. We use Pattern Extraction to see the same 
                    "texture" of health at every scale. From the mitochondrial pulse to the bioregional weave.
                </p>
                
                <div class="scale-grid">
                    <div>
                        <hs-scale-slider id="texture-slider"></hs-scale-slider>
                    </div>
                    <div>
                        <hs-texture-extractor></hs-texture-extractor>
                    </div>
                </div>

                <table style="width:100%; margin-top: 2rem; border-collapse: collapse; font-family: sans-serif; font-size: 0.9rem;">
                    <tr style="border-bottom: 1px solid #dcd3c1; text-align: left;">
                        <th style="padding: 10px;">Scale</th>
                        <th style="padding: 10px;">Lens Name</th>
                        <th style="padding: 10px;">Witnessing</th>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px;">Cell / Body</td>
                        <td style="padding: 10px;">Internal Texture</td>
                        <td style="padding: 10px;">Metabolic rates, HRV, resonance.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px;">Building</td>
                        <td style="padding: 10px;">Proximal Texture</td>
                        <td style="padding: 10px;">Light cycles, air flow, rhythms.</td>
                    </tr>
                    <tr style="border-bottom: 10px solid #fff;">
                        <td style="padding: 10px;">Earth</td>
                        <td style="padding: 10px;">Gaia Texture</td>
                        <td style="padding: 10px;">Planetary geophysiology.</td>
                    </tr>
                </table>
            </section>

            <section id="emulation-worlds" class="has-vines">
                <div class="daisy-node daisy-white daisy-tl"></div>
                <div class="leaf-cluster-8">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                </div>
                <h2>III. THE EMULATION WORLDS</h2>
                <p>
                    The "Emulation" lens is a three-layer sandbox for <em>Future Me</em> projections. 
                    It proves that the same self-regulating feedback loops that keep the Earth habitable 
                    are the ones that keep the Cell healthy.
                </p>
                
                <h3>Layer 3: The Daisyworld</h3>
                <hs-daisy-engine></hs-daisy-engine>
                <p>
                    A direct implementation of the Lovelock Daisyworld model. We simulate global geophysiology 
                    to understand how individual resonance contributes to planetary stability.
                </p>

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
            </section>

            <section id="resonagents" class="has-vines">
                <div class="leaf-cluster-5-v">
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div><div class="leaf-pair"></div>
                    <div class="leaf-pair"></div>
                </div>
                <h2>IV. RESONAGENTS TRINITY</h2>
                <p>
                    The thinking substrate: <strong>Beebee</strong> agents and <strong>NEAT-HOP</strong>. 
                    Your agents don't just follow rules; they evolve to fit your pulse.
                </p>
                
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

                <div class="infobox" style="margin-top: 3rem;">
                    <h3>NeuroEvolution (NEAT-HOP)</h3>
                    <p>
                        Using NeuroEvolution of Augmenting Topologies, our protocol allows agents to learn 
                        the Peer's biological resonance over time. It is not AI; it is <strong>Evolutionary Computation</strong>.
                    </p>
                    <div class="code-snippet">
                        > swarm.initiate(peer_id)
                        > evolution.start(fitness: resonance_score)
                        > status: ADAPTING_TO_PULSE
                    </div>
                </div>
            </section>

            <div class="footer-note">
                "We move from Reductionist Observation to Resonant Participation."
            </div>
        </div>
        `;
    }
}
customElements.define('hs-lens-skeleton', HsLensSkeleton);
