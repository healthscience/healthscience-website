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
                <h2>The Library: The Science Building Blocks</h2>
                
                <div class="infobox">
                    <h3>The Simple Message</h3>
                    <p>
                        The <strong>Library</strong> is a shared collection of building blocks that allows peers to stitch together their own biological science. It doesn't hold your personal data; it holds the "blueprints" for how to understand it.
                    </p>
                    <p>
                        By using a common set of blocks, peers who have never met can speak the same biological language. Some blocks are <strong>Static</strong> (the fixed rules of physics and data), while others, like <strong>Cue Contracts</strong>, are <strong>Dynamic</strong>—growing and changing as the forest learns. This ensures that every peer remains sovereign while staying perfectly compatible with the rest of the network.
                    </p>

                    <h3>The Technical Detail: Contract Architecture</h3>
                    <p>
                        The Library organizes these building blocks into a hierarchy of Contracts. These are bundled into Modules that a peer can pull from the public forest and make private.
                    </p>

                    <h4>1. The Static Blocks (Interoperability)</h4>
                    <p>These contracts provide the "firm ground" that ensures different devices and peers can work together without errors.</p>
                    <ul>
                        <li><strong>Reference Contracts:</strong> The immutable definitions of biological truths and scientific standards.</li>
                        <li><strong>Datatype Contracts:</strong> The "packaging" rules. They define how raw pulses (heart rate, movement, etc.) are structured so they can be read by any node.</li>
                        <li><strong>Life-Strap & Lens Contracts:</strong> The hardware and interface blueprints that tell the protocol how to "graft" onto your specific devices.</li>
                    </ul>

                    <h4>2. The Dynamic Blocks (Evolution)</h4>
                    <p>These contracts handle the active intelligence and results of the network.</p>
                    <ul>
                        <li><strong>Cue Contracts:</strong> The units of computational knowledge. These are dynamic; they represent the evolving "conclusions" of the forest.</li>
                        <li><strong>Compute Contracts:</strong> The WASM-based logic engines. These are the active tools that perform the "Work" during a Besearch cycle.</li>
                        <li><strong>Visualization Contracts:</strong> The blueprints for the Emulation—defining how your data looks and feels (e.g., Gelle textures and Orgo projections).</li>
                    </ul>

                    <h4>3. The Bundles: Modules</h4>
                    <p>A <strong>Module</strong> is a complete "Science Kit." It bundles together the necessary Reference, Compute, and Visualization contracts into a Network Experiment.</p>
                    <ul>
                        <li><strong>Public:</strong> A Module exists in the Library as a public template.</li>
                        <li><strong>Private:</strong> When a peer selects a Module, they "graft" it to their node. It becomes a private, local instance that only touches the peer's data.</li>
                    </ul>

                    <h3>The Trigger: HOPquery & SafeFlow-ECS</h3>
                    <p>To put these blocks into motion, the peer issues a <strong>HOPquery</strong>.</p>
                    <ul>
                        <li><strong>The Query:</strong> This is a specific instruction sent to the SafeFlow-ECS (the metabolic engine).</li>
                        <li><strong>The Execution:</strong> The HOPquery tells the engine which Module to use and which Compute Contracts to run against the peer's raw pulses.</li>
                        <li><strong>The State-Change:</strong> The result isn't just a number; it’s a state-change in the peer's own Context.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [HARDENING / STABLE] — Implementing the final Hyperbee-to-DML bridge.</li>
                        <li><strong>Focus:</strong> Local-first persistence with global resonance capabilities.</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/library-hop" target="_blank">Library</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-library', HsLibrary);
