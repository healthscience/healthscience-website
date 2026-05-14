class HsPtopStorage extends HTMLElement {
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
                 <h2>P2P Infrastructure: The Distributed Substrate</h2>
                
                <div class="infobox">
                    <h3>The Simple Message</h3>
                    <p>
                        HOP is a biological reimagining of the P2P stack. We don't use centralized servers or "cloud" databases; we grow a decentralized, self-organizing substrate. Using <strong>Holepunch</strong> for the plumbing and <strong>hop-crypto</strong> for the cellular membrane, we treat data as an emergent anatomy. This ensures that Conduction is resilient, zero-latency, and entirely peer-driven.
                    </p>

                    <h3>1. The Networking Layer (Hyperswarm & DHT)</h3>
                    <p>We utilize Hyperswarm to eliminate the need for "phone books" or central authorities.</p>
                    <ul>
                        <li><strong>DHT-Based Discovery:</strong> Peers find each other through a Distributed Hash Table. Every node is a first-class citizen, capable of routing and discovery.</li>
                        <li><strong>Noise Protocol:</strong> All connections are end-to-end encrypted using the Noise Protocol Framework. "Interference" is mathematically impossible at the transport level.</li>
                        <li><strong>Zero-Conf Networking:</strong> We demand that a peer can join the swarm and begin the Consilience Weave regardless of firewalls or local network topology.</li>
                    </ul>

                    <h3>2. The Storage Layer (Hypercore & The 18 Hyperbees)</h3>
                    <p>We don't store data in static tables; we store it in Append-Only Logs that are cryptographically signed.</p>
                    <ul>
                        <li><strong>Hypercore:</strong> The foundation is a Merkle-tree-based log providing immutable provenance. You cannot change history without breaking the hashchain.</li>
                        <li><strong>The 18 Hyperbees:</strong> We deploy 18 specialized B-tree indexes—the "internal organs" of the node.</li>
                        <li><strong>Search Efficiency:</strong> Using Prefixed Binary Keys, we achieve $O(\log n)$ search performance directly on the peer's local compute.</li>
                        <li><strong>Sparse Replication:</strong> Peers only download the "leaves" they actually need. You don't sync a database; you "pulse" the relevant data on demand.</li>
                    </ul>

                    <h3>3. The Privacy Layer (hop-crypto)</h3>
                    <p>We differentiate between Physical Availability and Semantic Accessibility to ensure the integrity of conduction.</p>
                    <ul>
                        <li><strong>The Shared Reality:</strong> Reference contracts and the Coherence Ledger are public, allowing the swarm to reach a stable state.</li>
                        <li><strong>The Private Membrane:</strong> Utilizing AEAD (Authenticated Encryption with Associated Data), sensitive biomarkers and private Besearch are encrypted before they hit the disk.</li>
                        <li><strong>The Discovery Gap:</strong> We decouple the Data Host from the Data Owner. Even if an encrypted block is replicated for backup, it remains a "black box" to the host.</li>
                    </ul>

                    <h3>4. Agentic Integrity: The Self-Healing Forest</h3>
                    <p>This is where the stack moves beyond traditional P2P and into a living metabolism.</p>
                    <ul>
                        <li><strong>Morphogenetic Sorting:</strong> Instead of an "Admin" enforcing rules, peers use agentic sorting. If a block is dishonest (broken hashchain), the peer calculates a Repulsion Gradient and "bubbles" that data out of its local tissue.</li>
                        <li><strong>Crystallized Truth:</strong> When multiple Hyperbees across different peers agree on a hashchain result, the data reaches a state of "High Fitness" and is integrated into the BentoBoxDS on the fly.</li>
                        <li><strong>Self-Healing:</strong> If a segment of the network is disconnected, the remaining peers use Sampling Challenges to re-grow the missing parts of the ledger from the most fit available sources.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Technical Focus</h3>
                    <ul>
                        <li><strong>Status:</strong> [RESEARCH / PROTOTYPING] — Optimizing swarm discovery for high-density local networks.</li>
                        <li><strong>Focus:</strong> Content-addressed persistence and sparse replication.</li>
                        <li><strong>Technology:</strong> Hypercore Protocol, Hyperswarm, dht-rpc.</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/holepunch-hop" target="_blank">Holepunch-hop</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-ptop-storage', HsPtopStorage);
