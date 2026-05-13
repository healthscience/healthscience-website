class HsCueCurrency extends HTMLElement {
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
            :host { 
                display: none; 
                background: #fcfaf2;
                min-height: 100vh;
                padding-top: 80px;
            }
            :host(.active) { display: block; }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 4rem 2rem;
                background: white;
                border-left: 1px solid #dcd3c1;
                border-right: 1px solid #dcd3c1;
                min-height: calc(100vh - 80px);
                position: relative;
            }

            section {
                position: relative;
                padding: 2.5rem;
            }

            .close-btn {
                position: absolute;
                top: 2rem;
                right: 2rem;
                background: transparent;
                border: 1px solid #2d5a27;
                color: #2d5a27;
                padding: 0.5rem 1rem;
                font-family: monospace;
                cursor: pointer;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            }

            .close-btn:hover {
                background: #2d5a27;
                color: white;
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
        </style>
        <div class="container">
            <button class="close-btn" onclick="window.location.hash='#skeleton'">[ CLOSE ]</button>
            <section class="has-vines">
                <h2>Cue Currency: The Value of Resonance</h2>
                
                <div class="infobox">
                    <h3>The Medium of Exchange</h3>
                    <p>
                        <strong>Cue Currency</strong> is the internal value system of the HOP protocol. It is not a speculative asset but a functional medium for the exchange of high-integrity biological Cues. It incentivizes the conduction of truthful patterns and the contribution of compute to the forest's metabolism.
                    </p>

                    <h3>Currency Logic</h3>
                    <ul>
                        <li><strong>Proof of Alignment:</strong> Value is generated through the successful verification and conduction of biological resonance.</li>
                        <li><strong>Metabolic Gifting:</strong> Peers "gift" Cues to the network, receiving currency that can be used to request refined insights from the collective.</li>
                        <li><strong>Entropy-Resistant:</strong> The currency is designed to decay if not used or conducted, encouraging the constant flow of information.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [INTERPLAY / HARDENING] — Finalizing the resonance-based reward curves.</li>
                        <li><strong>Focus:</strong> Aligning individual incentives with the health of the planetary forest.</li>
                        <li><strong>Code:</strong> <code>hop-core/economy/resonance-reward.js</code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-cue-currency', HsCueCurrency);
