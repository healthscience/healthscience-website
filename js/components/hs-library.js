class HsLibrary extends HTMLElement {
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
                <h2>The Library: Levin-Bubble Storage</h2>
                
                <div class="infobox">
                    <h3>Living Data Architectures</h3>
                    <p>
                        The <strong>Library</strong> is the localized storage engine for a HOP node. Unlike static databases, the Library utilizes <strong>Hyperbee</strong> and goal-directed sorting logic where high-utility data "bubbles" to the top—a pattern we call the Levin-Bubble.
                    </p>

                    <h3>Storage Rituals</h3>
                    <ul>
                        <li><strong>Content-Addressable Sovereignty:</strong> Every piece of data is hashed and anchored to the Peer's root key.</li>
                        <li><strong>Dynamic Pruning:</strong> Low-resonance data is gracefully archived or pruned to maintain the metabolic efficiency of the node.</li>
                        <li><strong>P2P Synchronicity:</strong> The Library integrates with Hyperswarm to allow for seamless, private data conduction between trusted peers.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [HARDENING / STABLE] — Implementing the final Hyperbee-to-DML bridge.</li>
                        <li><strong>Focus:</strong> Local-first persistence with global resonance capabilities.</li>
                        <li><strong>Code:</strong> <code>hop-core/storage/levin-bubble.js</code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-library', HsLibrary);
