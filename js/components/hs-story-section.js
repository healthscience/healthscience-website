class HsStorySection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = 'rooting';
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
                        <span class="context-tag">Scale</span>
                        <span class="context-tag">Identifier</span>
                        <span class="context-tag">Property</span>
                        <span class="context-tag">Peer ID</span>
                        <span class="context-tag">Sovereign intent</span>
                        <span class="context-tag">Building</span>
                        <span class="context-tag">Environment ID</span>
                        <span class="context-tag">Local metabolism</span>
                        <span class="context-tag">Bioregion</span>
                        <span class="context-tag">Geospatial Bound</span>
                        <span class="context-tag">Gaian context</span>
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
        return states[this.state] || states['rooting'];
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
            .scale-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: center; margin-top: 2rem; }
            .card { background: white; border: 1px solid #dcd3c1; padding: 2rem; margin: 2rem 0; }
            .context-tag { font-size: 0.65rem; background: rgba(39, 174, 96, 0.1); border: 1px solid rgba(39, 174, 96, 0.3); color: #2d5a27; padding: 4px 10px; border-radius: 15px; text-transform: uppercase; }
        </style>
        <section id="story-soil" class="has-vines">
            <div class="section-header-group">
                <div>
                    <h2>A. STORY: The Sovereign Soil</h2>
                    <div class="sub-nav">
                        <button class="${this.state === 'rooting' ? 'active' : ''}" data-state="rooting">The Source</button>
                        <button class="${this.state === 'edge' ? 'active' : ''}" data-state="edge">Edge Intelligence</button>
                        <button class="${this.state === 'melding' ? 'active' : ''}" data-state="melding">Root System</button>
                        <button class="${this.state === 'context' ? 'active' : ''}" data-state="context">Unique Context</button>
                        <button class="${this.state === 'status' ? 'active' : ''}" data-state="status">Status Map</button>
                    </div>
                </div>
                <div class="section-metadata">
                    <div class="property">Property: Sovereign Tiny Data</div>
                    <div class="status">Status: [STORY / ROOTING]</div>
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
customElements.define('hs-story-section', HsStorySection);
