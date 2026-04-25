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
            :host {
                display: block;
                background: #050505;
                color: var(--color-skeleton);
                height: 100%;
                overflow-y: auto;
                font-family: 'Courier New', Courier, monospace;
                scroll-behavior: smooth;
            }

            .engine-room {
                max-width: 1000px;
                margin: 0 auto;
                padding: 4rem 2rem;
                border-left: 1px solid rgba(0, 255, 136, 0.1);
                border-right: 1px solid rgba(0, 255, 136, 0.1);
                min-height: 100vh;
            }

            header {
                border-bottom: 2px solid var(--color-skeleton);
                padding-bottom: 1rem;
                margin-bottom: 4rem;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            }

            .version-tag {
                font-size: 0.7rem;
                opacity: 0.6;
            }

            section {
                margin-bottom: 6rem;
                scroll-margin-top: 80px;
            }

            h1, h2, h3 {
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 1.5rem;
            }

            h1 { font-size: 2rem; border-left: 4px solid var(--color-skeleton); padding-left: 1rem; }
            h2 { font-size: 1.5rem; color: #fff; }
            h3 { font-size: 1.1rem; opacity: 0.9; }

            .code-block {
                background: rgba(0, 255, 136, 0.05);
                border: 1px solid rgba(0, 255, 136, 0.2);
                padding: 1.5rem;
                margin: 1.5rem 0;
                font-size: 0.85rem;
                line-height: 1.5;
                position: relative;
                overflow-x: auto;
            }

            .code-block::before {
                content: 'RAW_INSPECT';
                position: absolute;
                top: 0; right: 0;
                font-size: 0.6rem;
                padding: 2px 6px;
                background: rgba(0, 255, 136, 0.2);
            }

            .roadmap-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 2rem;
            }

            .roadmap-item {
                border: 1px solid rgba(0, 255, 136, 0.3);
                padding: 1rem;
                cursor: pointer;
                transition: all 0.2s ease;
                text-decoration: none;
                color: inherit;
            }

            .roadmap-item:hover {
                background: var(--color-skeleton);
                color: #000;
            }

            .roadmap-item .tag {
                font-size: 0.6rem;
                display: block;
                margin-bottom: 0.5rem;
                opacity: 0.7;
            }

            .roadmap-item .label {
                font-weight: bold;
                font-size: 0.9rem;
            }

            .pillar {
                border-top: 1px dashed rgba(0, 255, 136, 0.3);
                padding-top: 2rem;
                margin-top: 2rem;
            }

            .pillar-num {
                font-size: 3rem;
                font-weight: 900;
                opacity: 0.1;
                line-height: 1;
            }

            .permalink {
                font-size: 0.7rem;
                color: var(--color-skeleton);
                text-decoration: none;
                opacity: 0.5;
                margin-left: 10px;
            }

            .permalink:hover { opacity: 1; }

            .terminal-footer {
                margin-top: 4rem;
                border-top: 1px solid rgba(0, 255, 136, 0.2);
                padding-top: 2rem;
                display: flex;
                gap: 1rem;
            }

            .terminal-input {
                background: transparent;
                border: 1px solid rgba(0, 255, 136, 0.5);
                color: var(--color-skeleton);
                padding: 0.5rem;
                font-family: inherit;
                outline: none;
                flex: 1;
            }

            .swarm-btn {
                background: var(--color-skeleton);
                color: black;
                border: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                font-weight: bold;
            }

            p {
                line-height: 1.6;
                margin-bottom: 1rem;
                color: #ccc;
            }

            strong { color: var(--color-skeleton); }
        </style>

        <div class="engine-room">
            <header>
                <div>SKELETON // REPOSITORY_OF_TRUTH</div>
                <div class="version-tag">SYSTEM_CORE v1.0.42</div>
            </header>

            <section id="intro">
                <h1>The Repository of Truth</h1>
                <p>
                    Everything discussed on the site is backed by open, verifiable code and deep documentation. 
                    This signals that our foundations are grounded in the <strong>"Repository of Truth."</strong>
                </p>
                <div class="code-block">
                    > git clone https://github.com/healthscience/protocol
                    > status: VERIFIED_BUILD
                    > integrity: 0xFF92A1
                </div>
            </section>

            <section id="peerstack">
                <header style="border:none; margin-bottom: 2rem;">
                    <h2>HEALTH ORACLE PROTOCOL - PeerStack</h2>
                </header>

                <div id="physics">
                    <h3>I. Gaia as Systems Physics</h3>
                    <p>
                        "In the Boreal, Gaia Intelligence is not a metaphor. It is the mathematical recognition of nested, self-regulating systems—from the mitochondrial pulse to the bioregional weave. The Health Oracle Protocol provides the first-ever computational interface for these feedbacks, moving science from 'Reductionist Observation' to 'Resonant Participation.'"
                    </p>
                </div>

                <div id="bentobox" class="pillar">
                    <h3>II. The "Gaming Engine for Life" (BentoBoxDS)</h3>
                    <p>
                        "BentoBoxDS is the local-first execution environment. It treats your biology not as a static record, but as a dynamic state-machine. Using SafeFlow-ECS, we apply the same high-performance logic used in world-class simulation engines to the navigation of human health."
                    </p>
                    <div class="code-block">
// SafeFlow-ECS Implementation
class BiomeEntity {
    constructor() {
        this.components = new Map();
        this.tags = new Set(['LIVING', 'RESONANT']);
    }
    
    update(metabolic_rate) {
        // High-performance state transitions
    }
}
                    </div>
                </div>
            </section>

            <section id="roadmap">
                <h2>PROTOCOL ROAD MAP</h2>
                <p>The protocol modules & mathematics that empower the navigation.</p>
                
                <div class="roadmap-grid">
                    <a href="#skeleton/bentobox" class="roadmap-item">
                        <span class="tag">DIRECT</span>
                        <span class="label">BentoBoxDS & BeeBee</span>
                    </a>
                    <a href="#skeleton/besearch" class="roadmap-item">
                        <span class="tag">WARM RELATE</span>
                        <span class="label">Besearch science & Emulations</span>
                    </a>
                    <a href="#skeleton/library" class="roadmap-item">
                        <span class="tag">LEGO KNOWLEDGE</span>
                        <span class="label">The Library</span>
                    </a>
                    <a href="#skeleton/safeflow" class="roadmap-item">
                        <span class="tag">HEART</span>
                        <span class="label">SafeFlow-ECS</span>
                    </a>
                    <a href="#skeleton/reasoners" class="roadmap-item">
                        <span class="tag">TINY_REASONERS</span>
                        <span class="label">Consilience & Coherence</span>
                    </a>
                    <a href="#skeleton/p2p" class="roadmap-item">
                        <span class="tag">P2P_AGGREGATION</span>
                        <span class="label">NEAT-HOP & Peer to Peer</span>
                    </a>
                    <a href="#skeleton/guide" class="roadmap-item">
                        <span class="tag">GUIDE BOOK</span>
                        <span class="label">Cue Currency & RGB</span>
                    </a>
                    <a href="#skeleton/protocol" class="roadmap-item">
                        <span class="tag">PROTOCOL</span>
                        <span class="label">View all</span>
                    </a>
                </div>
            </section>

            <section id="pillars">
                <h2>PILLARS OF THE PROTOCOL</h2>
                
                <div id="gaia-intelligences" class="pillar">
                    <div class="pillar-num">01</div>
                    <h3>Gaia Intelligences</h3>
                    <p>
                        We recognize that mind is everywhere—from the basal cognition of a cell to the self-regulating flow of a river. 
                        HOP provides the protocol for these nested intelligences to communicate without corruption. 
                        It is the language of <strong>Resonance</strong>, not just data.
                    </p>
                    <a href="#skeleton/gaia-intelligences" class="permalink">#permalink</a>
                </div>

                <div id="sovereign-math" class="pillar">
                    <div class="pillar-num">02</div>
                    <h3>Sovereign Mathematics</h3>
                    <p>
                        Privacy is not a feature; it is a topological requirement. By using Local-First computation, 
                        your biological secrets never leave the BentoBox unless explicitly shared via Cue-distillation.
                    </p>
                    <a href="#skeleton/sovereign-math" class="permalink">#permalink</a>
                </div>
            </section>

            <div class="terminal-footer">
                <input type="text" class="terminal-input" placeholder="HOPquery: graft --branch main">
                <button class="swarm-btn" onclick="alert('Swarm initiated: Peers connecting...')">SWARM</button>
            </div>
        </div>
        `;
    }
}
customElements.define('hs-lens-skeleton', HsLensSkeleton);
