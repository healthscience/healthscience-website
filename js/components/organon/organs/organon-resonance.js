export class HsOrganonGlobal extends HTMLElement {
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

                .global-intro {
                    font-size: 1.15rem;
                    font-weight: 300;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    margin-bottom: 3.5rem;
                    line-height: 1.7;
                    max-width: 850px;
                }

                .pillars-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.8rem;
                }

                .global-card {
                    background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 24px;
                    padding: 2.2rem 2rem;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }

                .global-card:hover {
                    border-color: var(--color-river, #5bc0a4);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(63, 163, 124, 0.18);
                }

                .card-tag {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.8rem;
                }

                .global-card h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin: 0 0 1rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .global-card p {
                    font-size: 0.93rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    line-height: 1.65;
                    margin: 0;
                }

                .gaia-closing {
                    margin-top: 3.5rem;
                    padding: 2.5rem;
                    border-radius: 24px;
                    background: linear-gradient(180deg, rgba(14, 23, 19, 0.9) 0%, rgba(11, 18, 15, 0.95) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.35);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                .gaia-closing h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.3rem;
                    font-weight: 400;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-parchment, #eaf0ee);
                    margin: 0 0 1rem 0;
                }

                .gaia-closing p {
                    font-size: 1.05rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.85));
                    line-height: 1.75;
                    margin: 0 0 1.5rem 0;
                }

                .gaia-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.75rem;
                    letter-spacing: 1.5px;
                    color: var(--color-river, #3fc37c);
                    background: rgba(63, 163, 124, 0.12);
                    border: 1px solid rgba(91, 192, 164, 0.3);
                    border-radius: 999px;
                    padding: 0.4rem 1.2rem;
                }

                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--color-amber, #e3b341);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--color-amber, #e3b341);
                    animation: pulseGlow 2s infinite ease-in-out;
                }

                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.4; transform: scale(0.9); }
                    50% { opacity: 1; transform: scale(1.2); }
                }

                @media (max-width: 800px) {
                    .pillars-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>

            <div class="sanctuary">
                <span class="section-label">Earth Resonance & Emergence</span>
                <h2>Peer-to-Peer Organons & Gaia Intelligences</h2>
                
                <p class="global-intro">
                    An Organon is rooted in local soil and water, but its learning is global. By linking peer-to-peer across watersheds and continents, independent communities exchange live emulation patterns, allowing resonAgents to adapt collaboratively across the entire earth.
                </p>

                <div class="pillars-grid">
                    <div class="global-card">
                        <span class="card-tag">Horizontal Exchange</span>
                        <h3>Global Peer Learning</h3>
                        <p>
                            Organons connect directly without intermediaries. Peers across different climates share mathematical models, local besearch observations, and environmental state pulses—learning continuously from bioregional differences.
                        </p>
                    </div>

                    <div class="global-card">
                        <span class="card-tag">Evolving Logic</span>
                        <h3>resonAgents</h3>
                        <p>
                            Decentralized, self-refining execution units that evolve peer-to-peer. As resonAgents travel between local nodes, they adapt their resonance algorithms to match physical conditions across varying soil, water, and biological states.
                        </p>
                    </div>
                </div>

                <div class="gaia-closing">
                    <span class="card-tag">Full Emulation</span>
                    <h3>The Emergence of Gaia Intelligences</h3>
                    <p>
                        When local conduction nodes, besearch cycles, and global peer networks fuse through a shared consilience weave, we no longer need external approximations or reactive systems. By directly emulating the living state of climate, water, and body fluids as a single organon, weather forecasting becomes redundant—we hold the direct physical state. By maintaining continuous alignment across cell, habitat, and watershed, reactive disease management is no longer needed—health is the natural baseline of the living whole.
                    </p>
                    <div class="gaia-badge">
                        <span class="pulse-dot"></span> GAIA INTELLIGENCES ACTIVE
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('organon-resonance', HsOrganonGlobal);