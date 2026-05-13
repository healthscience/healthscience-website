class HsBesearch extends HTMLElement {
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
                <h2>Besearch: The Metabolic Discovery</h2>
                
                <div class="infobox">
                    <h3>What is a Besearch Cycle?</h3>
                    <p>
                        A Besearch Cycle is a sovereign framework for biological and intentional evolution. It is an "empty engine" that allows a peer to take a subjective <strong>Story</strong> (how you feel) and <strong>Graft</strong> it onto objective science (models and logic) to produce a living <strong>Emulation</strong>. It is the bridge between a human "hunch" and a high-fidelity biological feedback loop.
                    </p>

                    <h3>The Lifestrap Lens: The "3 C’s + H"</h3>
                    <p>
                        The Cycle begins with the Lens. This is a combination of human intent and Regex Patterns that act as a prism, focusing raw knowledge into a structured, executable format.
                    </p>
                    <ul>
                        <li><strong>Capacity:</strong> The "Work Level" or threshold of the intent (e.g., a 400IM swim or a 10-solar-day fast).</li>
                        <li><strong>Context:</strong> The biological or environmental "Where" (e.g., Cardiovascular system, the local pool, or a specific joint).</li>
                        <li><strong>Attunement:</strong> The "Why" behind the work, categorized as <strong>PHeli</strong>: The "When." The timing, frequency, and project horizons governed by solar cycles.</li>
                        <li><strong>Coherence:</strong> The "How Well." A measure of resonance between your intent and the resulting biological state.</li>
                    </ul>

                    <h3>The Workflow: From Feeling to Fact</h3>
                    <p>The process is a movement from the fuzzy edges of human experience to the sharp reality of data-driven physics.</p>
                    
                    <ol>
                        <li>
                            <strong>The Story (Natural Language):</strong> The peer enters their "Zero-Draft" intent. You describe your current state or your desired horizon. The system uses Lens Glue (Regex) to help you categorize this raw input into the initial Capacity and Context.
                        </li>
                        <li>
                            <strong>The Interplay (Grafting & Sculpting):</strong> This is the novel, experimental core of the system. You enter the Sculpting Lab to build a Braid:
                            <ul>
                                <li><strong>Select Strands:</strong> You layer your intent across specific contexts and attunements.</li>
                                <li><strong>Graft the Orgo:</strong> You select a biological model (e.g., a heart or muscle model) from the peer library.</li>
                                <li><strong>Graft the Gelle:</strong> You select the logic/math (e.g., fluid dynamics or recovery formulas) to drive the model.</li>
                                <li><strong>Attach Tiny Devices:</strong> You link your sovereign sensors (wearables, markers) to feed real-time pulses into the Braid.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>The Emulation (Projections):</strong> Once the graft is bound, the Emulation begins. The SafeFlow-ECS (Entity Component System) pulses the data through your logic. You don't just see a graph; you see a visual projection of your biology (the Seer) and receive a summary of the feedback (the Scribe).
                        </li>
                    </ol>

                    <h3>Why These Properties Matter</h3>
                    <p>Traditional health tech is a "black box" that harvests your data and tells you what to do. HOP Besearch Cycles are the inverse:</p>
                    <ul>
                        <li><strong>Sovereign by Design:</strong> There is no central intelligence. You choose the models (Orgo) and the logic (Gelle). If you don't like the science, you change the part.</li>
                        <li><strong>Local-First / Peer-Only:</strong> Your pulses stay in your local Hyperbee ledger. They only move to other peers if you explicitly choose to share your Braid.</li>
                        <li><strong>Evidence-Based Intent:</strong> By separating Story from Emulation, you can see if your subjective feelings match your biological reality.</li>
                        <li><strong>Resonant Growth:</strong> resonAgents monitor the gaps between your different Braids, ensuring that a "Speed" goal isn't physically undermining a "Repair" goal.</li>
                    </ul>

                    <h3>Evolution of the Process</h3>
                    <p>We have moved from a rigid four-step science model to a fluid, peer-directed journey:</p>
                    <ul>
                        <li><strong>Story:</strong> The draft intent.</li>
                        <li><strong>Interplay:</strong> The experimental grafting of models and logic.</li>
                        <li><strong>Emulation:</strong> The live, evidence-based feedback loop.</li>
                    </ul>
                    <p>This isn't a program you "run"; it is a Life-strap you wear. It turns your daily activities into a "Loom" of biological and computational truth.</p>
                </div>

                <div class="status-tag">
                    <h3>Status & Resources</h3>
                    <ul>
                        <li><strong>Status:</strong> [INTERPLAY / PULSING] — A four part method of science: ground in context, research, search discovery sapce & emulation.</li>
                        <li><strong>Focus:</strong> Experimental</li>
                        <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/hop-besearch" target="_blank">hop-besearch</a></code></li>
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}

customElements.define('hs-besearch', HsBesearch);
