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
                    <p>The Consilience Weave is where the protocol moves from individual pulses to shared certainty. In any complex system, the biggest risk is a "Research Cascade"—a state where one data point triggers an infinite chain of dependencies that "explodes" and freezes the compute.</p>

                    <p>The Weave is the regulatory layer that prevents this by applying hard mathematical and energetic limits to Conduction.</p>

                    <h3>The Consilience Weave: Convergence of Evidence</h3>
                    
                    <h4>The Definition</h4>
                    <p>Consilience is the "jumping together" of knowledge. In the forest, truth is not dictated by a central authority; it is identified through the convergence of independent lines of evidence. If the Heli-Clock, the Coherence Ledger, and the Local Buffer all point to the same state-change, the pulse is verified and moves toward Emulation.</p>

                    <h3>The Design Choice: Why a Weave?</h3>
                    <p>We use a Weave to solve the Dependency Spiral. Without rules, a single research thread can trigger a cascade of data that overwhelms a "Life-Strap" device. The Weave acts as a high-integrity filter that manages the intensity of connections to keep the node performant.</p>

                    <ul>
                        <li><strong>Independent Verification:</strong> Different peers and different data streams (Gaian health, local energy, code updates) arrive as independent lines of evidence. The Weave only validates patterns that show consilience across multiple vantages.</li>
                        <li><strong>Cascade Prevention:</strong> It applies a "Circuit Breaker" to knowledge. Instead of allowing a research pulse to trigger infinite dependencies, it enforces physical and computational limits to ensure the system never "thinks" itself into a freeze.</li>
                    </ul>

                    <h3>The Rules of Conduction (The Logic)</h3>
                    <p>To manage the complexity of a peer-to-peer network, the Weave utilizes four primary technical constraints:</p>

                    <ul>
                        <li><strong>Energy-Based Circuit Breakers:</strong> Conduction is limited by Energy-Based Scheduling. If the "computational energy" or the peer’s contextual capacity is reached, the cascade is paused.</li>
                        <li><strong>Contextual Buffer Geometry:</strong> We treat the local buffer as a physical space. A research pulse can only trigger a "leaf" if there is spatial room in the current geometry. If the buffer is full, the cascade is truncated, forcing the system to prioritize the most relevant evidence.</li>
                        <li><strong>The Rule of Local Proximity:</strong> Interdependencies are restricted to the immediate bioregion or peer group unless explicitly Grafted elsewhere. By keeping the "explosion" local, we prevent a single rogue thread from destabilizing the wider network.</li>
                        <li><strong>The Story Anchor:</strong> Every cascade must be traceable back to the original Story. If a research thread drifts too far from the initial intent (the Zero-Draft anchor), the Weave identifies it as noise and dissolves the branch.</li>
                    </ul>

                    <h3>Operational Pipeline: From Story to Emulation</h3>
                    <p>The Consilience Weave is the core engine of the Interplay stage.</p>

                    <ul>
                        <li><strong>Story (Inception):</strong> The intent is set in natural language.</li>
                        <li><strong>Interplay (Synthesis):</strong> The Weave tests the Story against existing peer states and technical constraints. It looks for where independent lines of knowledge "jump together."</li>
                        <li><strong>Emulation (Result):</strong> Once consilience is reached, the pulse becomes a functional, deterministic reality in the SafeFlow-ECS.</li>
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
