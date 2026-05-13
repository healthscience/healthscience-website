class HsMaths extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #06110e;
                z-index: 1000;
                overflow-y: auto;
                color: #ffffff;
                font-family: 'Inter', sans-serif;
            }

            .maths-page {
                min-height: 100vh;
                background: #06110e;
                position: relative;
                overflow: hidden;
                padding: 2rem;
            }

            @media (min-width: 768px) {
                .maths-page { padding: 4rem; }
            }

            .max-w-5xl { max-width: 64rem; margin: 0 auto; }
            .relative { position: relative; }
            .z-10 { z-index: 10; }

            /* Vine Leaf Decorative Elements */
            .vine-cluster {
                position: absolute;
                width: 200px;
                height: 200px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234ade8022'%3E%3Cpath d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' /%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-size: contain;
                pointer-events: none;
                z-index: 1;
                opacity: 0.6;
            }

            .top-left { top: -40px; left: -40px; transform: rotate(-15deg); }
            .top-right { top: 40px; right: -80px; transform: rotate(45deg) scale(1.5); opacity: 0.3; }
            .left-mid { top: 40%; left: -100px; transform: rotate(-90deg) scale(2); opacity: 0.2; }

            .back-btn {
                margin-bottom: 3rem;
                display: inline-flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1.5rem;
                border: 1px solid rgba(169, 255, 0, 0.3);
                background: rgba(169, 255, 0, 0.05);
                color: #a9ff00;
                font-family: monospace;
                font-size: 0.75rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                border-radius: 9999px;
                cursor: pointer;
                transition: all 0.2s;
            }

            .back-btn:hover { background: rgba(169, 255, 0, 0.1); }

            header { margin-bottom: 5rem; }
            .header-label { font-size: 1.5rem; font-family: monospace; color: #a9ff00; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 1rem; }
            h1 { font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; line-height: 1.2; font-style: italic; font-family: serif; }
            @media (min-width: 768px) { h1 { font-size: 3rem; } }
            .description { color: #9ca3af; font-size: 1.125rem; max-width: 42rem; line-height: 1.625; }

            /* Formula Section */
            .formula-container {
                margin-bottom: 5rem;
                padding: 2rem;
                border: 1px solid rgba(169, 255, 0, 0.3);
                border-radius: 1rem;
                background: rgba(45, 70, 53, 0.1);
                backdrop-filter: blur(8px);
                position: relative;
                overflow: hidden;
            }
            @media (min-width: 768px) { .formula-container { padding: 3rem; } }

            .formula-svg-bg {
                position: absolute;
                top: 0;
                right: 0;
                padding: 1rem;
                opacity: 0.2;
                transition: opacity 0.3s;
            }
            .formula-container:hover .formula-svg-bg { opacity: 0.4; }

            .formula-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }

            .formula-text {
                font-size: 1.875rem;
                font-family: monospace;
                color: #a9ff00;
                letter-spacing: 0.05em;
                text-align: center;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            @media (min-width: 768px) { .formula-text { font-size: 2.25rem; } }

            .fraction {
                display: inline-flex;
                flex-direction: column;
                vertical-align: middle;
                align-items: center;
                font-size: 0.6em;
                margin: 0 0.2em;
            }

            .fraction .separator {
                width: 100%;
                height: 1px;
                background: #a9ff00;
                margin: 4px 0;
            }

            .parameter-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
                width: 100%;
                margin-top: 3rem;
            }
            @media (min-width: 768px) { .parameter-grid { grid-template-columns: repeat(3, 1fr); } }

            .parameter-card {
                padding: 1.5rem;
                border: 1px solid rgba(45, 70, 53, 0.2);
                border-radius: 0.75rem;
                background: rgba(6, 17, 14, 0.4);
            }

            .param-symbol { font-family: monospace; font-size: 1.25rem; color: #a9ff00; margin-bottom: 0.5rem; }
            .param-title { font-weight: 500; margin-bottom: 0.25rem; }
            .param-desc { font-size: 0.75rem; color: #9ca3af; line-height: 1.625; }

            /* Role Section */
            .role-section { margin-top: 4rem; }
            .section-label { font-size: 0.75rem; font-family: monospace; color: #a9ff00; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 3rem; border-bottom: 1px solid rgba(45, 70, 53, 0.2); padding-bottom: 1rem; }

            .grid-split {
                display: grid;
                grid-template-columns: 1fr;
                gap: 3rem;
                align-items: center;
                margin-bottom: 4rem;
            }
            @media (min-width: 768px) { .grid-split { grid-template-columns: 1fr 1fr; } }

            .role-title { font-size: 1.5rem; font-weight: 300; color: #ffffff; margin-bottom: 1.5rem; }
            .role-desc { color: #9ca3af; line-height: 1.625; font-family: serif; }

            .viz-box {
                padding: 2rem;
                border: 1px solid rgba(45, 70, 53, 0.2);
                border-radius: 1rem;
                background: rgba(45, 70, 53, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            /* Animations */
            .v-mises-arc {
                fill: none;
                stroke: rgba(169, 255, 0, 0.4);
                stroke-width: 15;
                stroke-linecap: round;
                filter: drop-shadow(0 0 8px #a9ff00);
            }

            .mean-vector {
                stroke: #fff;
                stroke-width: 2;
                stroke-dasharray: 5, 2;
                animation: rotate-vector 10s linear infinite;
                transform-origin: 200px 200px;
            }

            @keyframes rotate-vector {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            .neat-viz {
                position: relative;
                width: 12rem;
                height: 12rem;
            }
            .ping-layer { position: absolute; inset: 0; border: 2px solid rgba(169, 255, 0, 0.2); border-radius: 9999px; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
            .pulse-layer { position: absolute; inset: 1rem; border: 1px solid rgba(169, 255, 0, 0.4); border-radius: 9999px; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            .core-dot { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
            .dot { width: 0.5rem; height: 0.5rem; background: #a9ff00; border-radius: 9999px; box-shadow: 0 0 15px #a9ff00; }

            @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
            @keyframes pulse { 50% { opacity: .5; } }

            .bubble-stack { width: 100%; display: flex; flex-direction: column; gap: 1rem; }
            .bubble-item { height: 2.5rem; border: 1px solid rgba(169, 255, 0, 0.3); border-radius: 0.25rem; background: rgba(169, 255, 0, 0.05); display: flex; align-items: center; padding: 0 1rem; }
            .bubble-dot { width: 0.5rem; height: 0.5rem; background: #a9ff00; border-radius: 9999px; margin-right: 0.75rem; }
            .bubble-line { height: 0.25rem; width: 6rem; background: rgba(169, 255, 0, 0.2); border-radius: 9999px; }

            .kilo-spec {
                margin-top: 5rem;
                padding: 2rem;
                border-left: 4px solid #a9ff00;
                background: rgba(45, 70, 53, 0.1);
            }
            .spec-label { color: #a9ff00; font-family: monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem; }
            .spec-text { color: #9ca3af; font-size: 0.875rem; font-style: italic; font-family: serif; line-height: 1.625; }

            footer { margin-top: 5rem; padding-top: 3rem; border-top: 1px solid rgba(45, 70, 53, 0.2); text-align: center; }
            .footer-text { color: rgba(156, 163, 175, 0.6); font-size: 0.75rem; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; }

            /* Custom scrollbar */
            :host::-webkit-scrollbar { width: 6px; }
            :host::-webkit-scrollbar-track { background: #06110e; }
            :host::-webkit-scrollbar-thumb { background: rgba(74, 222, 128, 0.2); border-radius: 3px; }
            :host::-webkit-scrollbar-thumb:hover { background: rgba(74, 222, 128, 0.4); }
        </style>
        <div class="maths-page">
            <div class="vine-cluster top-left"></div>
            <div class="vine-cluster top-right"></div>
            <div class="vine-cluster left-mid"></div>

            <div class="max-w-5xl relative z-10">
                <button class="back-btn" onclick="this.getRootNode().host.handleClose()">
                    ← Back to Homepage
                </button>

                <header>
                    <div class="header-label">HOP Mathematics</div>
                    <h1>Von Mises: The Mathematics of the Circle</h1>
                    <p class="description">
                        In the Boreal, we don't just measure "when" an event happens; we measure its Phase. The Von Mises distribution (often called the "Circular Normal" distribution) is the essential toolkit for a Digital Immune System that understands rhythm.
                    </p>
                </header>

                <div class="formula-container">
                    <div class="formula-svg-bg">
                        <svg width="120" height="120" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#a9ff00" stroke-width="0.5" stroke-dasharray="2 2" />
                            <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="#a9ff00" stroke-width="2" />
                        </svg>
                    </div>
                    
                    <div class="formula-content">
                        <div class="formula-text">
                            f(x | μ, κ) = 
                            <span class="fraction">
                                <span>e<sup>κ cos(x - μ)</sup></span>
                                <span class="separator"></span>
                                <span>2π I₀(κ)</span>
                            </span>
                        </div>
                        
                        <div class="parameter-grid">
                            <div class="parameter-card">
                                <div class="param-symbol">μ</div>
                                <div class="param-title">The Mean Direction</div>
                                <p class="param-desc">In the Besearch Cycle, this is the "Target Resonance"—the peak of the biological cycle (e.g., the optimal point of a Vagus-Strap pulse).</p>
                            </div>
                            <div class="parameter-card">
                                <div class="param-symbol">κ</div>
                                <div class="param-title">Concentration</div>
                                <p class="param-desc">This is the "Strength of the Pulse." A high κ means the Peer is tightly locked into a rhythmic baseline; a low κ signals "Noise" or biological stress.</p>
                            </div>
                            <div class="parameter-card">
                                <div class="param-symbol">I₀(κ)</div>
                                <div class="param-title">Bessel Function</div>
                                <p class="param-desc">The modified Bessel function of the first kind, ensuring the total probability around the circle always equals 1.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="role-section">
                    <h2 class="section-label">The Role in the HOP Fabric</h2>
                    
                    <div class="grid-split">
                        <div>
                            <h3 class="role-title">I. The HeliClock & ResonancePulse</h3>
                            <p class="role-desc">
                                The HeliClock uses Von Mises math to calculate the Coherence of the swarm. Instead of averaging disparate data points, the Consilience Weave calculates the circular mean of Peers. This prevents the "feedback loop" failure of linear systems, allowing the network to stay in sync without running out of control.
                            </p>
                        </div>
                        <div class="viz-box">
                            <svg width="200" height="200" viewBox="0 0 400 400">
                                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(169, 255, 0, 0.1)" stroke-width="1" />
                                <g transform="translate(200, 200)">
                                    <path d="M -120 0 A 120 120 0 0 1 120 0" class="v-mises-arc" />
                                </g>
                                <line x1="200" y1="200" x2="200" y2="60" class="mean-vector" />
                            </svg>
                        </div>
                    </div>

                    <div class="grid-split">
                        <div class="viz-box">
                            <div class="neat-viz">
                                <div class="ping-layer"></div>
                                <div class="pulse-layer"></div>
                                <div class="core-dot"><div class="dot"></div></div>
                            </div>
                        </div>
                        <div>
                            <h3 class="role-title">II. NEAT-HOP & The Geometry of Search</h3>
                            <p class="role-desc">
                                When NEAT-HOP searches the space of solutions (Stage 3 of the Besearch Cycle), it isn't looking for a "high score" in a linear database. It is looking for Directional Convergence. It uses Von Mises to determine if a new "Lego Brick" of science aligns with the Peer's existing biological phase.
                            </p>
                        </div>
                    </div>

                    <div class="grid-split">
                        <div>
                            <h3 class="role-title">III. Levin Bubble Sort (v2) Integration</h3>
                            <p class="role-desc">
                                In the browser-based environment, the Levin Bubble Sort uses the κ (concentration) value to bubble the most "coherent" Cues to the top. If a piece of knowledge doesn't fit the circular geometry of the Peer's current state, it is filtered out by the Digital Immune System.
                            </p>
                        </div>
                        <div class="viz-box">
                            <div class="bubble-stack">
                                <div class="bubble-item" style="opacity: 1;">
                                    <div class="bubble-dot"></div>
                                    <div class="bubble-line"></div>
                                </div>
                                <div class="bubble-item" style="opacity: 0.7; transform: translateX(10px);">
                                    <div class="bubble-dot"></div>
                                    <div class="bubble-line"></div>
                                </div>
                                <div class="bubble-item" style="opacity: 0.4; transform: translateX(20px);">
                                    <div class="bubble-dot"></div>
                                    <div class="bubble-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <p class="footer-text">
                        Health Oracle Protocol // Continuous Evolution
                    </p>
                </footer>
            </div>
        </div>
        `;
    }
}

customElements.define('hs-maths', HsMaths);
