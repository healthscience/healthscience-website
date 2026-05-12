class HsResonagentsTrinity extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
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
            h2 { 
                font-family: sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 1.5rem;
                color: #2d5a27; 
                border-left: 4px solid #2d5a27; 
                padding-left: 1rem; 
                font-size: 1.8rem;
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
            p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
                color: #1a2a22;
            }
            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-white { background: #fff !important; box-shadow: 0 8px 0 -2px #fff, 0 -8px 0 -2px #fff, 8px 0 0 -2px #fff, -8px 0 0 -2px #fff, 6px 6px 0 -2px #fff, -6px -6px 0 -2px #fff, 6px -6px 0 -2px #fff, -6px 6px 0 -2px #fff !important; border: 1px solid rgba(0,0,0,0.1) !important; }
            .daisy-white::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #fbbf24 !important; border-radius: 50%; }
            .daisy-tl { top: -12px; left: -12px; }
        </style>
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
        `;
    }
}
customElements.define('hs-resonagents-trinity', HsResonagentsTrinity);
