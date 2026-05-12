class HsGaiaProtocol extends HTMLElement {
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
            h3 {
                font-family: sans-serif;
                font-size: 1.3rem;
                color: #2d5a27;
                margin: 2rem 0 1rem 0;
            }
            .infobox {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2rem;
                margin: 2rem 0;
                position: relative;
            }
            .status-tag {
                background: #f0f4f1;
                border-left: 4px solid #2d5a27;
                padding: 1.5rem;
                margin-top: 2rem;
                font-family: monospace;
            }
            p {
                margin-bottom: 1.5rem;
                font-size: 1.1rem;
                line-height: 1.8;
                color: #1a2a22;
            }
            ul {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
            }
            li {
                margin-bottom: 0.8rem;
                font-size: 1.1rem;
                line-height: 1.6;
                color: #1a2a22;
            }
            code {
                background: #eee;
                padding: 0.2rem 0.4rem;
                border-radius: 3px;
                font-family: monospace;
            }
            strong { color: #2d5a27; }
            .notice {
                font-style: italic;
                color: #555;
                padding: 1rem;
                border: 1px dashed #ccc;
                margin-bottom: 1.5rem;
            }
            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-black { background: #000 !important; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000, 6px 6px 0 -2px #000, -6px -6px 0 -2px #000, 6px -6px 0 -2px #000, -6px 6px 0 -2px #000 !important; border: 1px solid rgba(255, 255, 255, 0.4) !important; }
            .daisy-black::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #4ade80 !important; border-radius: 50%; }
            .daisy-tr { top: -12px; right: -12px; }
        </style>
        <section id="gaia-protocol" class="has-vines">
            <div class="daisy-node daisy-black daisy-tr"></div>
            <h2>Conductive Intelligence: The ML Metabolism</h2>
            
            <div class="infobox">
                <h3>The Goal (The Living Body)</h3>
                <p>
                    Machine learning within HOP functions as a distributed immune response. It is a living metabolism where intelligence is lived through the interaction of localized nodes. By prioritizing <strong>Peered Learning</strong>, the protocol ensures that intelligence remains as adaptive and localized as the biology it observes. This approach fosters a collective state of <strong>Attunement</strong>, where the network learns to recognize and conduct health patterns through natural resonance.
                </p>

                <h3>The Logic (The Architecture of the Forest)</h3>
                <div class="notice">
                    Notice: HOP is a novel and experimental software. The countdown to the V1 candidate release is in progress. The protocol sets out the following design choices for machine learning:
                </div>

                <ul>
                    <li><strong>Gifting Peers:</strong> Collective intelligence is sustained by peers who contribute local compute to validate and conduct patterns across the forest.</li>
                    <li><strong>Resonance Detection:</strong> The system utilizes Circular Statistics (Von Mises) to identify rhythms and cycles in biological data. This transforms machine learning into a process of finding mathematical harmony rather than simple curve-fitting.</li>
                    <li><strong>Local-First Refinement:</strong> Intelligence is refined on the individual node. The resulting Cues are then conducted to the forest, ensuring that the private nature of the data is preserved while the insights contribute to the planetary intelligence.</li>
                    <li><strong>The Autopoietic Engine:</strong> The machine learning logic is self-regenerating. The output of the Interplay layer serves as the continuous input for further Besearch, creating a self-sustaining loop of metabolic growth.</li>
                </ul>
            </div>

            <div class="status-tag">
                <h3>Status & Resources</h3>
                <ul>
                    <li><strong>Status:</strong> [INTERPLAY / HARDENING] — Finalizing the DML (Decentralized Machine Learning) validation rituals for V1.</li>
                    <li><strong>Documentation:</strong> Conductive Intelligence & Resonance</li>
                    <li><strong>Code:</strong> <code>hop-dml/swarm-bridge.js</code></li>
                    <li><strong>Focus:</strong> Scaling collective resonance through high-integrity Cues.</li>
                </ul>
            </div>
        </section>
        `;
    }
}
customElements.define('hs-gaia-protocol', HsGaiaProtocol);
