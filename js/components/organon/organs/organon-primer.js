export class HsOrganonPrimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background: var(--bg-loam, #0b120f);
                    color: var(--color-parchment, #eaf0ee);
                    font-family: system-ui, -apple-system, sans-serif;
                    padding: 4rem 1rem 6rem;
                    box-sizing: border-box;
                }

                *, *::before, *::after {
                    box-sizing: inherit;
                }

                .sanctuary {
                    max-width: 1040px;
                    margin: 0 auto;
                }

                .section-label {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.75rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.5rem;
                }

                h2 {
                    font-size: 2.2rem;
                    font-weight: 300;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin: 0 0 1.5rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .primer-lead {
                    font-size: 1.15rem;
                    font-weight: 300;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    margin-bottom: 3.5rem;
                    line-height: 1.7;
                    max-width: 800px;
                }

                .pillars-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }

                .pillar-card {
                    background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 24px;
                    padding: 2.5rem 2rem;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }

                .pillar-card:hover {
                    border-color: var(--color-river, #5bc0a4);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(63, 163, 124, 0.18);
                }

                .pillar-number {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.8rem;
                }

                .pillar-card h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin: 0 0 1rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .pillar-card p {
                    font-size: 0.95rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    line-height: 1.7;
                    margin: 0;
                }

                @media (max-width: 800px) {
                    .pillars-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>

            <div class="sanctuary">
                <span class="section-label">Foundation Primer</span>
                <h2>How the Organon Works</h2>
                <p class="primer-lead">
                    An Organon is a living bioregional feedback loop. By uniting local peers, edge hardware, and collaborative scientific inquiry, the network translates land metabolism into shared protocol health.
                </p>

                <div class="pillars-grid">
                    <div class="pillar-card">
                        <span class="pillar-number">Pillar 01</span>
                        <h3>Peers & Community</h3>
                        <p>
                            Local participants embedded directly in the physical watershed. Running local-first JavaScript, peers hold sovereign control of their data while coordinating state pulses peer-to-peer across the landscape.
                        </p>
                    </div>

                    <div class="pillar-card">
                        <span class="pillar-number">Pillar 02</span>
                        <h3>Tiny Conduction Devices</h3>
                        <p>
                            Low-power hardware acting as a direct sensory membrane. These devices interface locally with hydrological flow, ambient temperatures, and biological markers to keep the protocol grounded in physical reality.
                        </p>
                    </div>

                    <div class="pillar-card">
                        <span class="pillar-number">Pillar 03</span>
                        <h3>Two-Year Besearch Cycles</h3>
                        <p>
                            A grounded, peer-to-peer scientific method operating over a structural two-year horizon—advancing through baseline observation, micro-climate mapping, and cross-peer synthesis.
                        </p>
                    </div>

                    <div class="pillar-card">
                        <span class="pillar-number">Pillar 04</span>
                        <h3>Apps & Consilience Weave</h3>
                        <p>
                            Native web apps interfacing directly with hardware streams. Governed by a coherence ledger and a consilience weave, they fuse local readings into the emergent intelligence of the whole.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('organon-primer', HsOrganonPrimer);