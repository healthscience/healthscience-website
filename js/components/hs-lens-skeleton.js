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
            const emulationStates = ['on-the-fly', 'orgo', 'gelle', 'pulse', 'dml-neat', 'open-lab'];
            const interplayStates = ['pulse', 'safeflow', 'beebee', 'resonagents', 'besearch', 'coupling', 'map'];
            const storyStates = ['rooting', 'edge', 'melding', 'context', 'status'];

            if (emulationStates.includes(subState)) {
                const el = this.shadowRoot.querySelector('hs-emulation-section');
                if (el) el.setState(subState);
            } else if (interplayStates.includes(subState)) {
                const el = this.shadowRoot.querySelector('hs-interplay-section');
                if (el) el.setState(subState);
            } else if (storyStates.includes(subState)) {
                const el = this.shadowRoot.querySelector('hs-story-section');
                if (el) el.setState(subState);
            } else {
                const el = this.shadowRoot.getElementById(subState);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
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
                padding-top: 80px;
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

            section {
                margin-bottom: 8rem;
                scroll-margin-top: 80px;
                position: relative;
                padding: 2.5rem;
                border: 1px solid transparent;
                transition: border-color 0.3s ease;
            }

            h1 { 
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #1a2a22;
                font-size: 2.5rem; 
                border-bottom: 4px solid #e67e22; 
                display: inline-block;
                margin-bottom: 3rem;
            }

            .strategy-box {
                border-left: 4px solid #e67e22;
                padding-left: 2rem;
                margin: 4rem 0;
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

            .footer-note {
                margin-top: 6rem;
                padding-top: 2rem;
                border-top: 1px solid #dcd3c1;
                font-size: 0.9rem;
                opacity: 0.7;
                font-style: italic;
                text-align: center;
            }

            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-white { background: #fff !important; box-shadow: 0 8px 0 -2px #fff, 0 -8px 0 -2px #fff, 8px 0 0 -2px #fff, -8px 0 0 -2px #fff, 6px 6px 0 -2px #fff, -6px -6px 0 -2px #fff, 6px -6px 0 -2px #fff, -6px 6px 0 -2px #fff !important; border: 1px solid rgba(0,0,0,0.1) !important; }
            .daisy-white::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #fbbf24 !important; border-radius: 50%; }
            .daisy-tl { top: -12px; left: -12px; }

            .leaf-pair { position: absolute; width: 20px; height: 20px; pointer-events: none; z-index: 99; }
            .leaf-pair::before, .leaf-pair::after { content: ""; position: absolute; width: 14px; height: 7px; background: #2d5a27; border-radius: 0 100% 0 100%; }
            .leaf-pair::after { background: #1a3a17; transform: rotate(35deg); left: 8px; top: 4px; opacity: 0.9; }

            .leaf-cluster-8 .leaf-pair:nth-child(1) { top: -10px; left: 15%; transform: rotate(0deg); }
            .leaf-cluster-8 .leaf-pair:nth-child(2) { top: -12px; left: 17%; transform: rotate(5deg); scale: 0.8; }
            .leaf-cluster-8 .leaf-pair:nth-child(3) { top: -9px; left: 19%; transform: rotate(-5deg); scale: 1.1; }
            .leaf-cluster-8 .leaf-pair:nth-child(4) { top: -11px; left: 21%; transform: rotate(10deg); scale: 0.7; }
            .leaf-cluster-8 .leaf-pair:nth-child(5) { top: -10px; left: 23%; transform: rotate(-10deg); scale: 1.2; }
            .leaf-cluster-8 .leaf-pair:nth-child(6) { top: -8px; left: 25%; transform: rotate(3deg); scale: 0.9; }
            .leaf-cluster-8 .leaf-pair:nth-child(7) { top: -12px; left: 27%; transform: rotate(-7deg); scale: 1.0; }
            .leaf-cluster-8 .leaf-pair:nth-child(8) { top: -10px; left: 29%; transform: rotate(15deg); scale: 0.8; opacity: 0.8; }
        </style>

        <div class="container">
            <button class="btn-explorer" style="position: absolute; top: 1rem; right: 2rem; z-index: 100;" onclick="window.location.hash='#hub'">[ CLOSE ]</button>
            <header>
                <div class="daisy-node daisy-white daisy-tl"></div>
                <div>
                    <div>SKELETON // Repository of Truth</div>
                    <div class="version-tag">HOP v1.0.0 experimental</div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn-explorer" onclick="window.location.hash='#roadmap'">[ ROAD MAP ]</button>
                    <button class="btn-explorer" onclick="window.location.hash='#explorer'">[ EXPLORER ]</button>
                    <button class="btn-playground" id="playground-toggle" onclick="window.app.togglePlayground('grafting')">[ OPEN GRAFTING BENCH ]</button>
                    <button class="btn-explorer" onclick="window.open('https://healthscience.network/docs', '_blank')">[ INTRODUCTION ]</button>
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
                
                <h2>The Living Protocol: Gaia Intelligences</h2>

                <div class="strategy-box">
                    <p><strong>The Goal:</strong>
                    Science should function like a living body. HOP envisions a system governed by Gaia Intelligences—architectures that are self-organizing and dynamically balanced. These intelligences maintain a flexible equilibrium through Conduction, where signals are carried and traded across the network rather than being rigidly locked.

                    Like an immune system in the open, the protocol allows for individual variation and localized "flares"—points of private Besearch—while tending to the health of the collective. By allowing these tiny data points to interact organically as Cues, the protocol ensures that the quality of science remains adaptive and resilient. This system doesn't just store data; it evolves, learning through natural selection and resonance to bring the peer into a state of Attunement with their own biological truth.</p>

                    <p><strong>The Logic (The Architecture & design)</strong>
                    

                    Notice: HOP is a novel and experimental software. The countdown to the V1 candidate release is in progress. The protocol sets out the following core properties and design choices:

                    The architecture operates as a three-strata transition: moving from the Story (the conductive soil) through the metabolic Interplay of SafeFlow-ECS, toward a deterministic Emulation. It utilizes circular statistics and energy-based scheduling to verify patterns across the forest, ensuring that every Cue conducted contributes to a verifiable Coherence Ledger without interrupting the private nature of the peer.</p>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [STORY / ROOTING] — The mathematical foundation is finalized; the narrative is currently being pulsed into the HOP-ECS skeleton.</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <a href="https://github.com/healthscience/hop" target="_blank">HOP Repository</a></li>
                        <li><strong>Code:</strong> <a href="https://github.com/healthscience/bentoboxds" target="_blank">BentoBoxDS</a></li>
                        <li><strong>Design Pattern:</strong> Story &rarr; Interplay &rarr; Emulation</li>
                    </ul>
                </div>
            </section>

            <!-- access to code and documentation <a href="" target="_blank"></a> -->
            <hs-repository-truth></hs-repository-truth>

            <hs-beebee></hs-beebee>
            <hs-gaia-protocol></hs-gaia-protocol>
            <hs-strata-participation></hs-strata-participation>
            <hs-emulation-section></hs-emulation-section>
            <hs-interplay-section></hs-interplay-section>
            <hs-story-section></hs-story-section>

            <div class="footer-note">
                "We move from Reductionist Observation to Resonant Participation."
            </div>
        </div>
        `;
    }
}
customElements.define('hs-lens-skeleton', HsLensSkeleton);
