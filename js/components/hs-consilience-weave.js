class HsConsilienceWeave extends HTMLElement {
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
            :host(.active) { display: block !important; }
            
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
                top: 5rem;
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
                z-index: 1000;
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
            <button class="close-btn" onclick="window.history.back();">[ CLOSE ]</button>
            <section class="has-vines">
                <h2>Consilience Weave: The Multi-Vantage Synthesis</h2>
                
                <div class="infobox">
                    <h3>The Fabric of Unity</h3>
                    <p>
                        The <strong>Consilience Weave</strong> is the final synthesis layer where multiple Cues and patterns from across the forest are unified. It prevents "data cascades"—where one false signal might corrupt the whole—by requiring multi-vantage verification before a pattern is accepted as planetary truth.
                    </p>

                    <h3>Weaving Rituals</h3>
                    <ul>
                        <li><strong>Pattern Synthesis:</strong> Merging disparate biological intents into a coherent planetary Pulse.</li>
                        <li><strong>Vantage Verification:</strong> Cross-referencing patterns from different bioregions to find universal biological constants.</li>
                        <li><strong>The Living Tapestry:</strong> The resulting weave is a dynamic, ever-evolving map of the forest's collective health state.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [INTERPLAY / STORY] — Desgin basic concepts cascade resolution and rules .. </li>
                        <li><strong>Focus:</strong>Experimental</li>
                         <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/consilience-weave" target="_blank">Consilience Weave</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-consilience-weave', HsConsilienceWeave);
