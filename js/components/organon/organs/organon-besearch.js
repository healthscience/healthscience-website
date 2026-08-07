export class HsOrganonBesearch extends HTMLElement {
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

                .besearch-intro {
                    font-size: 1.15rem;
                    font-weight: 300;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    margin-bottom: 3.5rem;
                    line-height: 1.7;
                    max-width: 850px;
                }

                .besearch-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.8rem;
                }

                .besearch-card {
                    background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 24px;
                    padding: 2.2rem 2rem;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }

                .besearch-card:hover {
                    border-color: var(--color-river, #5bc0a4);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(63, 163, 124, 0.18);
                }

                .cycle-tag {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.8rem;
                }

                .besearch-card h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin: 0 0 1rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .besearch-card p {
                    font-size: 0.93rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    line-height: 1.65;
                    margin: 0 0 1.2rem 0;
                }

                .domain-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.78rem;
                    color: rgba(91, 192, 164, 0.9);
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                }

                .domain-chip {
                    background: rgba(63, 163, 124, 0.12);
                    border: 1px solid rgba(91, 192, 164, 0.25);
                    border-radius: 6px;
                    padding: 0.3rem 0.6rem;
                }

                .interconnection-banner {
                    margin-top: 3.5rem;
                    padding: 2rem 2.5rem;
                    border-radius: 20px;
                    background: rgba(14, 23, 19, 0.7);
                    border: 1px solid rgba(91, 192, 164, 0.3);
                    font-size: 0.98rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.85));
                    line-height: 1.7;
                }

                .interconnection-banner strong {
                    color: var(--color-amber, #e3b341);
                    font-weight: 500;
                }

                @media (max-width: 800px) {
                    .besearch-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>

            <div class="sanctuary">
                <span class="section-label">Two-Year Scientific Roadmap</span>
                <h2>The Besearch Cycles</h2>
                
                <p class="besearch-intro">
                    Over a two-year horizon, peers engage in besearch cycles—a peer-to-peer scientific method that studies life as a unified continuum. By observing human physiology alongside watershed hydrology, atmospheric air movement, and soil metabolism, the protocol establishes how internal health directly mirrors environmental vitality.
                </p>

                <div class="besearch-grid">
                    <div class="device-card besearch-card">
                        <span class="cycle-tag">Domain 01 — Human Physiology</span>
                        <h3>Cardio, Nervous, Immune & Organs</h3>
                        <p>
                            Observing autonomic nervous system balance, cardiac rhythm dynamics via deterministic heart emulations, immune vitality, cellular energy pathways, and organ interaction as a single continuous fluid system.
                        </p>
                        <div class="domain-list">
                            <span class="domain-chip">Cardiorespiratory</span>
                            <span class="domain-chip">Autonomic Tone</span>
                            <span class="domain-chip">Immune Response</span>
                            <span class="domain-chip">Organ Dynamics</span>
                        </div>
                    </div>

                    <div class="device-card besearch-card">
                        <span class="cycle-tag">Domain 02 — Hydrology & Terrain</span>
                        <h3>River Flow & Water Security</h3>
                        <p>
                            Mapping watershed runoff, aquatic load, river flow dynamics, and local terrain retention models. Connects water availability and biological conduction directly to bioregional water security.
                        </p>
                        <div class="domain-list">
                            <span class="domain-chip">Catchment Dynamics</span>
                            <span class="domain-chip">Aquatic Load</span>
                            <span class="domain-chip">Terrain Modeling</span>
                            <span class="domain-chip">Water Security</span>
                        </div>
                    </div>

                    <div class="device-card besearch-card">
                        <span class="cycle-tag">Domain 03 — Atmosphere</span>
                        <h3>Indoor & Outdoor Air Quality</h3>
                        <p>
                            Evaluating gas exchange, humidity dynamics, particulate behavior, and air turnover across both indoor sanctuaries and open-air micro-climates to maintain respiratory alignment.
                        </p>
                        <div class="domain-list">
                            <span class="domain-chip">Indoor Micro-climate</span>
                            <span class="domain-chip">Air Shed Flow</span>
                            <span class="domain-chip">Particulate Cycles</span>
                            <span class="domain-chip">Photic Solar Balance</span>
                        </div>
                    </div>

                    <div class="device-card besearch-card">
                        <span class="cycle-tag">Domain 04 — Land Metabolism</span>
                        <h3>Soil Health & Nutritional Density</h3>
                        <p>
                            Tracking subterranean microbial activity, mineral availability, and soil moisture curves to determine the direct relationship between land health and nutritional density in local food harvests.
                        </p>
                        <div class="domain-list">
                            <span class="domain-chip">Soil Microbiome</span>
                            <span class="domain-chip">Mineral Density</span>
                            <span class="domain-chip">Root Hydrology</span>
                            <span class="domain-chip">Nutritional Yield</span>
                        </div>
                    </div>
                </div>

                <div class="interconnection-banner">
                    <strong>The Interconnected Whole:</strong> These domains are not studied in isolation. Water quality shapes soil mineral absorption; soil health dictates food nutritional density; food and air quality tune immune and cardiac rhythms. Besearch cycles synthesize all four domains through a shared local <em>resonancePulse</em>, kept scientifically honest by the <em>consilience weave</em>.
                </div>
            </div>
        `;
    }
}

customElements.define('organon-besearch', HsOrganonBesearch);