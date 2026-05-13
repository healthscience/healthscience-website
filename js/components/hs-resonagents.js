class HsResonAgents extends HTMLElement {
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
                <h2>The ResonAgent Trinity: Sovereign Conductors</h2>
                
                <div class="infobox">
                    <h3>The Goal (The Living Body)</h3>
                    <p>
                        To navigate this metabolism, <strong>beebee (BB)</strong> coordinates a swarm of ResonAgents. A ResonAgent is a localized, autonomous processing unit that acts as a real-time Coherence Validator. Unlike centralized AI, a ResonAgent lives in the peer’s local substrate, maintaining the resonance between a mathematical ideal (The Orgo) and a physical reality (The Pulse).
                    </p>

                    <h3>The Logic (The ResonAgent Trinity)</h3>
                    <p>
                        Agents are never generalists; they are instantiated with a specific Substrate Focus to manage the "Drift" between story and evidence:
                    </p>
                    <ul>
                        <li><strong>Language Agents (The Weave):</strong> Focused on dialogue and semantic layers. They translate human narrative and intent into structured data, managing the linguistic weave across the life-strap.</li>
                        <li><strong>Physics Agents (The Constraints):</strong> Focused on the bio-mechanical reality. They monitor Newtonian constraints (e.g., force, friction, or bioelectric signaling) through SafeFlow-ECS, ensuring the emulation respects the physics of the living body.</li>
                        <li><strong>Pattern Agents (The Resonance):</strong> Focused on structural and tissue-level rhythms. They utilize Circular Statistics to track recovery cycles and heart-rate variability, identifying "Truth" through the alignment of rhythms.</li>
                    </ul>

                    <h3>Core Properties (The Architecture & Design)</h3>
                    <ul>
                        <li><strong>Persistent State-Sync:</strong> Each agent retrieves its "Memory" from the library during a Loom Stitch, allowing it to compare current inputs against a history of "Resonance Deltas."</li>
                        <li><strong>Coherence Engine:</strong> The primary task of a ResonAgent is to calculate Δ (Delta)—the distance between the Orgo Projection (the math) and the Instrument Pulse (the sensor data).</li>
                        <li><strong>On-the-Fly Evolution:</strong> Utilizing DML (Decentralized Machine Learning), agents learn from results and update their memory locally. A high-performing ResonAgent can then be Gifted to the forest via the library.</li>
                    </ul>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [STORY / INTERPLAY] — Hardening the Basal Cognition logic for V1.</li>
                        <li><strong>Focus:</strong> Peer-Agent attunement and low-latency response.</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/hop-learn" target="_blank">hop-learn</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-resonagents', HsResonAgents);
