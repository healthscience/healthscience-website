class HsCoherenceLedger extends HTMLElement {
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
                top: 8rem;
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

            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; }
            .daisy-black { background: #000; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000; }
            .daisy-tr { top: -12px; right: -12px; }
        </style>
        <div class="container">
            <button class="close-btn" onclick="window.history.back();">[ CLOSE ]</button>
            <section class="has-vines">
                <div class="daisy-node daisy-black daisy-tr"></div>
                <h2>Coherence Ledger: The Witness of Alignment</h2>
                
                <div class="infobox">
                    <h3>Unique proof of evidence</h3>
                    <p>
                        The Coherence Ledger serves as the cryptographic witness for the forest. It is a localized, tamper-proof record of biological and environmental alignment. By acting as a Lightweight State Machine, it verifies that the "Biological Story" told by a peer is mathematically consistent across different scales of time, ensuring that the evidence remains fertile and honest without the heavy overhead of traditional centralized systems.
                    </p>

                    <h3>Logic</h3>
                    <p>
                        The ledger operates as a deterministic Sign-Chain of Proof. Every entry is formed by a high-performance Key/Value pair:
                    </p>
                    <ul>
                        <li><strong>The Key (Sign-Chain of Proof):</strong> A binary-encoded identity (e.g., [Context_Byte][Heli_Cycle][Solar_Theta]) that proves data provenance.</li>
                        <li><strong>The Value (Hash of Result):</strong> The cryptographic footprint of the computation performed.</li>
                    </ul>

                    <p>
                        <em>Note: The ledger moves in 360° Solar Arcs rather than linear timestamps. A single Solar Cycle Pulse produces 24 hours of verified data provenance, creating an immutable rhythm for the peer's record.</em>
                    </p>

                    <h3>Core Properties</h3>
                    <p>By utilizing SafeFlow-ECS as a state machine rather than heavy ZKPs, the protocol achieves unique functional advantages:</p>
                    <ol>
                        <li><strong>Computational Efficiency:</strong> Peers can retrieve and reuse results within Besearch cycles without re-performing expensive computations.</li>
                        <li><strong>Symmetric Verification:</strong> The deterministic hash-chain allows one peer to challenge another and verify 20,000 entries in milliseconds—proving that "Work" (biological compute) was actually performed.</li>
                        <li><strong>DML Infrastructure:</strong> The ledger provides the "Proof of Health-Work" required for Decentralized Machine Learning (DML), allowing model weights to evolve based on verified evidence rather than unverified data.</li>
                    </ol>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [HARDENING / AUDIT] — Work in progress</li>
                        <li><strong>Focus:</strong>An entity component system with chain proof of evidence.</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/node-safeflow" target="_blank"></a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-coherence-ledger', HsCoherenceLedger);
