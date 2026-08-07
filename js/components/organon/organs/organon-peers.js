export class HsOrganonPeers extends HTMLElement {
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

                .community-intro {
                    font-size: 1.15rem;
                    font-weight: 300;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    margin-bottom: 3.5rem;
                    line-height: 1.7;
                    max-width: 850px;
                }

                .peers-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.8rem;
                }

                .peer-card {
                    background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 24px;
                    padding: 2.2rem 1.8rem;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }

                .peer-card:hover {
                    border-color: var(--color-river, #5bc0a4);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(63, 163, 124, 0.18);
                }

                .peer-role {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.8rem;
                }

                .peer-card h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.15rem;
                    font-weight: 400;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin: 0 0 1rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .peer-card p {
                    font-size: 0.92rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    line-height: 1.65;
                    margin: 0;
                }

                .weave-footer {
                    margin-top: 3.5rem;
                    padding: 1.8rem 2.2rem;
                    border-radius: 20px;
                    background: rgba(14, 23, 19, 0.6);
                    border: 1px dashed rgba(91, 192, 164, 0.3);
                    font-size: 0.95rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.8));
                    line-height: 1.6;
                }

                @media (max-width: 960px) {
                    .peers-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>

            <div class="sanctuary">
                <span class="section-label">Human Topography</span>
                <h2>Peers & Community</h2>
                
                <p class="community-intro">
                    The Organon takes root not through abstract networks, but through genuine human trust spread across the landscape. The initial triad of peers lives across different points of the bioregion—distinct in their daily work, yet fully interwoven through shared hydrology, off-grid energy, local food cycles, and long-standing friendship.
                </p>

                <div class="peers-grid">
                    <div class="peer-card">
                        <span class="peer-role">Peer 01 — Water</span>
                        <h3>Watershed Steward</h3>
                        <p>
                            Positioned along key river catchments and lakes. Manages the tiny conduction devices monitoring hydrological flow, water temperature, and aquatic load—keeping the network attuned to the bioregion’s fluid balance.
                        </p>
                    </div>

                    <div class="peer-card">
                        <span class="peer-role">Peer 02 — Energy & Mesh</span>
                        <h3>Infrastructure Steward</h3>
                        <p>
                            Anchors off-grid solar compute nodes and local mesh communication hardware. Ensures peer-to-peer data transport and ledger consensus remain resilient, sovereign, and active regardless of grid status.
                        </p>
                    </div>

                    <div class="peer-card">
                        <span class="peer-role">Peer 03 — Soil & Food</span>
                        <h3>Sanctuary & Land Steward</h3>
                        <p>
                            Grounded in local agriculture, soil health, and community gathering spaces. Connects living food systems, micro-climates, and physical hospitality directly into the organon's metabolic feedback loops.
                        </p>
                    </div>
                </div>

                <div class="weave-footer">
                    <strong>The Interwoven Triad:</strong> While each peer oversees distinct hardware and land interfaces, they operate as a single organon. Energy generated at one node powers local conduction streams; watershed data informs soil cultivation; shared meals and deep friendship keep the human protocol scientifically honest and aligned.
                </div>
            </div>
        `;
    }
}

customElements.define('organon-peers', HsOrganonPeers);