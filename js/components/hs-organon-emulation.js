class HsOrganonEmulation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    margin: 1rem 0;
                }
                .bioregional-canvas {
                    position: relative;
                    width: 100%;
                    min-height: 540px;
                    border-radius: 28px;
                    border: 1px solid var(--border-organic, rgba(91, 192, 164, 0.25));
                    background: url('images/finland-organon.png');
                    padding: 3rem;
                    box-sizing: border-box;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                }
                .emulation-overlay-grid {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 2.5rem;
                    align-items: start;
                    width: 100%;
                }
                .emulation-nodes-card {
                    background: rgba(14, 23, 19, 0.88);
                    border: 1px solid rgba(91, 192, 164, 0.25);
                    border-radius: 20px;
                    padding: 2.2rem;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    box-sizing: border-box;
                    width: 80%;
                }
                .heli-clock-card {
                    background: rgba(14, 23, 19, 0.88);
                    border: 1px solid rgba(91, 192, 164, 0.25);
                    border-radius: 20px;
                    padding: 2.2rem;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    box-sizing: border-box;
                    width: 80%;
                    margin-left: auto;
                }
                .heli-small {
                    display: grid;
                    grid-template-columns: 1fr;
                    width: 100%;
                }
                .node-tag {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e5a93b);
                    display: block;
                    margin-bottom: 0.6rem;
                }
                h3 {
                    margin: 0 0 1rem 0;
                    color: var(--color-text-primary, #eaf0ee);
                    font-size: 1.4rem;
                    font-weight: 500;
                }
                p {
                    color: var(--color-text-secondary, #a3b8b0);
                    line-height: 1.6;
                    margin: 0 0 1rem 0;
                    font-size: 0.95rem;
                }
                .emulation-status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    color: var(--color-river, #3fc37c);
                    background: rgba(63, 163, 124, 0.1);
                    border: 1px solid var(--border-organic, rgba(91, 192, 164, 0.25));
                    border-radius: 999px;
                    padding: 0.4rem 1rem;
                    margin-top: 1.5rem;
                }
                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--color-amber, #e5a93b);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--color-amber, #e5a93b);
                    animation: pulseGlow 2s infinite ease-in-out;
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.4; transform: scale(0.9); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @media (max-width: 900px) {
                    .emulation-overlay-grid {
                        grid-template-columns: 1fr;
                    }
                    .bioregional-canvas {
                        padding: 1.5rem;
                    }
                }
            </style>

            <section class="bioregional-canvas">
                <div class="emulation-overlay-grid">
                    <div class="emulation-nodes-card">
                        <span class="node-tag">Organon Emulation</span>
                        <h3>Watershed, Body & Heart</h3>
                        <hs-resilience-spiral></hs-resilience-spiral>
                        <hs-body-emulation></hs-body-emulation>
                        <hs-heart-resonance></hs-heart-resonance>
                    </div>

                    <div class="heli-clock-card">
                        <span class="node-tag">Temporal Synchrony</span>
                        <h3>Heli</h3>
                        <p>
                            Digital solar clock.
                        </p>
                        <div class="heli-small">
                            <heli-clock></heli-clock>
                        </div>
                        <heli-arc-resonancepulse id="orrery"></heli-arc-resonancepulse>
                        <h3>resonancePulse</h3>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('hs-organon-emulation', HsOrganonEmulation);