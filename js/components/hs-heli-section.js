class HsHeliSection extends HTMLElement {
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

            h4 {
                font-family: 'Courier New', monospace;
                color: #e67e22;
                text-transform: uppercase;
                font-size: 0.9rem;
                margin-bottom: 1rem;
                letter-spacing: 1px;
            }

            h5 {
                font-family: sans-serif;
                font-size: 1.2rem;
                margin-bottom: 1rem;
                color: #2d5a27;
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

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 2rem 0;
                font-family: sans-serif;
            }

            th, td {
                text-align: left;
                padding: 1rem;
                border-bottom: 1px solid #dcd3c1;
            }

            th {
                color: #2d5a27;
                text-transform: uppercase;
                font-size: 0.9rem;
                letter-spacing: 1px;
            }

            .infobox {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2rem;
                margin: 2rem 0;
                position: relative;
            }

            .math-box {
                background: #f4f4f4;
                padding: 2rem;
                border-radius: 4px;
                font-family: 'Times New Roman', serif;
                font-size: 1.4rem;
                text-align: center;
                margin: 2rem 0;
                border-left: 4px solid #2d5a27;
            }

            .status-tag {
                background: #f0f4f1;
                border-left: 4px solid #2d5a27;
                padding: 1.5rem;
                margin-top: 2rem;
                font-family: monospace;
            }

            .daisy-node { position: absolute; width: 14px; height: 14px; border-radius: 50%; z-index: 100; display: block !important; }
            .daisy-black { background: #000 !important; box-shadow: 0 8px 0 -2px #000, 0 -8px 0 -2px #000, 8px 0 0 -2px #000, -8px 0 0 -2px #000, 6px 6px 0 -2px #000, -6px -6px 0 -2px #000, 6px -6px 0 -2px #000, -6px 6px 0 -2px #000 !important; border: 1px solid rgba(255, 255, 255, 0.4) !important; }
            .daisy-black::after { content: ""; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6px; height: 6px; background: #4ade80 !important; border-radius: 50%; }
            .daisy-tr { top: -12px; right: -12px; }

            .strata-action-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 2rem;
            }

            .action-card {
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                padding: 2rem;
                position: relative;
            }

            @media (max-width: 768px) {
                .strata-action-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
        <div class="container">
            <button class="close-btn" onclick="window.history.back();">[ CLOSE ]</button>
            <section id="heli-clock" class="has-vines">
                <div class="daisy-node daisy-black daisy-tr"></div>
                <h2>Heli: The Physics of Temporal Conduction</h2>
                
                <div class="infobox">
                    <h3>The Definition</h3>
                    <p>
                        Heli (or the Heli-clock) is the master oscillator of the protocol. It is the temporal backbone that replaces abstract Unix epochs and Gregorian calendars with a deterministic physical model of the Earth’s position in space. By anchoring technical logic to the fundamental physics of the sun, Heli provides the "Life-Strap Unified View" necessary for high-fidelity biological attunement.
                    </p>
                </div>

                <h3>The Shift: From "Clocks" to "Spirals"</h3>
                <p>
                    In the old world, time is a digital construct divorced from the biology it measures. Heli asks a different question: "Where are we in the spiral?"
                </p>
                <p>
                    By measuring rotational position rather than counting ticks, Heli ensures that every HOPquery is synchronized to physical reality. This temporal alignment is what allows a peer to move through the three strata of execution:
                </p>

                <div class="strata-action-grid">
                    <div class="action-card">
                        <h4>Story</h4>
                        <p>Narrative patterns and natural language intent.</p>
                    </div>
                    <div class="action-card">
                        <h4>Interplay</h4>
                        <p>The metabolic synthesis and weight-tuning of physics models.</p>
                    </div>
                    <div class="action-card">
                        <h4>Emulation</h4>
                        <p>Real-time biological feedback and sensory attunement.</p>
                    </div>
                </div>

                <h3>HeliCore: The Geometry of Time</h3>
                <p>
                    Heli is built on a WASM-driven core (Rust) interfaced with Pure JavaScript. This architecture ensures that "Besearch" cycles remain high-performance and local-first, with zero dependencies on centralized time APIs.
                </p>

                <h3>The Calculation</h3>
                <p>
                    The engine calculates two primary vectors to generate a HeliStamp:
                </p>
                <ul>
                    <li><strong>Orbital Progress (L):</strong> The Earth’s precise position on the ecliptic plane, measured from 0° to 360°.</li>
                    <li><strong>Solar Daily Arc (A):</strong> The rotation of a specific longitude relative to the sun.</li>
                </ul>

                <p>The resulting HeliStamp is a high-precision floating-point value:</p>
                <div class="math-box">
                    HeliStamp = Orbits + ( \frac{L}{360} + A )
                </div>
                <ul>
                    <li><strong>Integer:</strong> Represents the number of completed orbits (laps around the sun).</li>
                    <li><strong>Decimal:</strong> Represents the current arc, providing the sub-second precision required for the SafeFlow-ECS.</li>
                </ul>

                <h3>The Network Genesis: A Shared Truth</h3>
                <p>
                    To facilitate peer-to-peer coordination without revealing private biological data, the network utilizes a Physical Truth Genesis.
                </p>
                <ul>
                    <li><strong>The Anchor:</strong> The 2026 Spring Equinox.</li>
                    <li><strong>The Coordinates:</strong> Anchored at 41.5° West (the Atlantic Prime Meridian).</li>
                    <li><strong>The Purpose:</strong> This creates a "Shared Zero" for peer contracts and the Coherence Ledger. It allows peers to verify temporal alignment without exposing their actual birth genesis or precise geographic identity.</li>
                </ul>

                <h3>Key Properties of the Heli-System</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Local-First (No-Spy)</strong></td>
                            <td>Encrypted in local Hyperbees. No cloud API tracks your location or time.</td>
                        </tr>
                        <tr>
                            <td><strong>Contextual Geometry</strong></td>
                            <td>Privacy is maintained by "blurring" coordinates when sharing arcs, preventing identity reverse-engineering.</td>
                        </tr>
                        <tr>
                            <td><strong>Energy-Based Scheduling</strong></td>
                            <td>Moves from rigid 9-to-5 schedules to windows of biological opportunity (e.g., UVB windows).</td>
                        </tr>
                        <tr>
                            <td><strong>Pure JavaScript</strong></td>
                            <td>Strictly JS/WASM. No TypeScript permitted to ensure lean, transparent execution.</td>
                        </tr>
                        <tr>
                            <td><strong>Zero-Draft Sovereignty</strong></td>
                            <td>Natural language (e.g., "February") is automatically mapped to geometric arcs by the engine.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Integration: SafeFlow-ECS & The Coherence Ledger</h3>
                <p>
                    Heli is the heartbeat of the SafeFlow-ECS. By pulsing solar day cycles into the ECS, we create Coherence Ledger Entries that are biologically honest.
                </p>
                <ul>
                    <li><strong>Deterministic State:</strong> Every entry in the ledger is signed against a HeliStamp, ensuring that state transitions across the network are synchronized to the same physical reality.</li>
                    <li><strong>Clock-Drift Elimination:</strong> Because Heli relies on the physics of the sun rather than a drifting system clock, it provides a "Hard Truth" that any peer can challenge and re-verify.</li>
                </ul>

                <div class="infobox">
                    <h3>The Scientific Imperative</h3>
                    <p>
                        Heli is not just a clock; it is a more scientific way to measure time for biological life.
                    </p>
                    <p>
                        Biological systems do not operate on a 24-hour digital grid; they operate on a rotational oscillator. By aligning our software to that oscillator, we move from "managing data" to Conducting Reality.
                    </p>
                </div>

                <div class="status-tag">
                    <p><strong>Status:</strong> [INTERPLAY / HARDENING]</p>
                    <p><strong>Target:</strong> V1 release as the central oscillator for the Cues Mantle.</p>
                    <li><strong>Documentation:</strong> <a href="https://healthscience.network/docs" target="_blank">Introduction</a></li>
                        <li><strong>Code:</strong> <code><a href="https://github.com/healthscience/heliclock-hop" target="_blank">heliclock-hop</a></code></li
                </div>
            </section>
        </div>
        `;
    }
}
customElements.define('hs-heli-section', HsHeliSection);
