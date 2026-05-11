class HsEmulationTrinity extends HTMLElement {
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
            :host {
                display: block;
                width: 100%;
                max-width: 1000px;
                margin: 4rem auto;
                color: var(--color-emulation, #00f2ff);
                font-family: var(--font-mono, monospace);
                line-height: 1.6;
            }

            .intro {
                text-align: center;
                margin-bottom: 4rem;
                padding: 0 1rem;
            }

            h2 {
                font-weight: 200;
                letter-spacing: 5px;
                text-transform: uppercase;
                margin-bottom: 0.5rem;
                opacity: 0.9;
            }

            .sub-header {
                font-size: 0.9rem;
                letter-spacing: 2px;
                opacity: 0.7;
                margin-bottom: 2rem;
            }

            .description {
                max-width: 600px;
                margin: 0 auto 2rem;
                font-size: 1rem;
                font-weight: 300;
                opacity: 0.8;
            }

            .cta {
                font-style: italic;
                font-size: 0.9rem;
                max-width: 500px;
                margin: 0 auto;
                padding: 1.5rem;
                border: 1px solid rgba(0, 242, 255, 0.1);
                background: rgba(0, 242, 255, 0.02);
            }

            .trinity-header {
                text-align: center;
                margin-bottom: 3rem;
                position: relative;
            }

            .trinity-header::after {
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                background: currentColor;
                margin: 1rem auto 0;
                opacity: 0.3;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1/3);
                gap: 2rem;
                padding: 0 1rem;
            }

            .column {
                padding: 1.5rem;
                border-left: 1px solid rgba(0, 242, 255, 0.1);
                transition: background 0.3s ease;
            }

            .column:hover {
                background: rgba(0, 242, 255, 0.03);
            }

            .column h3 {
                font-size: 1.2rem;
                letter-spacing: 4px;
                margin-bottom: 0.5rem;
                font-weight: 400;
            }

            .column .tagline {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                opacity: 0.6;
                margin-bottom: 1.5rem;
                display: block;
            }

            .column p {
                font-size: 0.85rem;
                font-weight: 300;
                opacity: 0.8;
            }

            @media (max-width: 768px) {
                .grid {
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }
                .column {
                    border-left: none;
                    border-bottom: 1px solid rgba(0, 242, 255, 0.1);
                    padding-bottom: 2rem;
                }
                .column:last-child {
                    border-bottom: none;
                }
            }
        </style>

        <section class="intro">
            <h2>The Plutonic Heart</h2>
            <div class="sub-header">Initial Emulation</div>
            <p class="description">
                We have implemented a foundational <strong>Plutonic solid emulation</strong> of the heart. 
                It is the first machine-sealed logic in HOP, using geometry to map the deterministic laws of aquatic load.
            </p>
            <div class="cta">
                "This is a starting point. Join, bring data, orgos, gelles and tiny device data to make it better."
            </div>
        </section>

        <div class="trinity-header">
            <h2>The Emulation Trinity</h2>
        </div>

        <div class="grid">
            <div class="column">
                <h3>ORGO</h3>
                <span class="tagline">The Logic Machine</span>
                <p>Deterministic physics. The sealed engine that calculates systemic laws (e.g., cardiac load) identically for every peer.</p>
            </div>
            <div class="column">
                <h3>GELLE</h3>
                <span class="tagline">The Texture</span>
                <p>Derived from Organelle. The phenomenological manifestation—the color, shape, and sensory feel of the data.</p>
            </div>
            <div class="column">
                <h3>PULSE</h3>
                <span class="tagline">The Life-Blood</span>
                <p>Data energy that fuses Orgo and Gelle into a living body of knowledge. Without the pulse, the structure is static.</p>
            </div>
        </div>
        `;
    }
}

customElements.define('hs-emulation-trinity', HsEmulationTrinity);
