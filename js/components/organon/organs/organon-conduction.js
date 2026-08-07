export class HsOrganonDevices extends HTMLElement {
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

                .devices-intro {
                    font-size: 1.15rem;
                    font-weight: 300;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    margin-bottom: 3.5rem;
                    line-height: 1.7;
                    max-width: 850px;
                }

                .devices-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.8rem;
                }

                .device-card {
                    background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 24px;
                    padding: 2.2rem 2rem;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
                    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }

                .device-card:hover {
                    border-color: var(--color-river, #5bc0a4);
                    transform: translateY(-4px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(63, 163, 124, 0.18);
                }

                .device-type {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e3b341);
                    display: block;
                    margin-bottom: 0.8rem;
                }

                .device-card h3 {
                    font-family: "ui-monospace", "SF Mono", monospace;
                    font-size: 1.2rem;
                    font-weight: 400;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin: 0 0 1rem;
                    color: var(--color-parchment, #eaf0ee);
                }

                .device-card p {
                    font-size: 0.93rem;
                    color: var(--color-subtle, rgba(234, 240, 238, 0.75));
                    line-height: 1.65;
                    margin: 0 0 1.2rem 0;
                }

                .specs-list {
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

                .spec-tag {
                    background: rgba(63, 163, 124, 0.12);
                    border: 1px solid rgba(91, 192, 164, 0.25);
                    border-radius: 6px;
                    padding: 0.3rem 0.6rem;
                }

                @media (max-width: 800px) {
                    .devices-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>

            <div class="sanctuary">
                <span class="section-label">Sensory Hardware</span>
                <h2>Tiny Conduction Devices</h2>
                
                <p class="devices-intro">
                    Conduction devices serve as the biological and environmental nerve endings of the Organon. Ultra-lightweight and energy-efficient, these nodes connect directly to peer devices to stream raw physical realities—from cellular heart rhythms up to atmospheric shifts—keeping state updates completely grounded in local observation.
                </p>

                <div class="devices-grid">
                    <div class="device-card">
                        <span class="device-type">Body Conduction</span>
                        <h3>Movesense Wearable</h3>
                        <p>
                            Lightweight medical-grade sensors attached directly to the body. Streams continuous single-lead ECG, high-resolution R-R intervals for HRV, skin temperature, and 9-axis movement directly into the local heart emulation.
                        </p>
                        <div class="specs-list">
                            <span class="spec-tag">Single-Lead ECG</span>
                            <span class="spec-tag">R-R Intervals</span>
                            <span class="spec-tag">9-Axis Motion</span>
                            <span class="spec-tag">Direct Bluetooth LE</span>
                        </div>
                    </div>

                    <div class="device-card">
                        <span class="device-type">Water Conduction</span>
                        <h3>Aquatic Load Probes</h3>
                        <p>
                            Submerged sensors positioned within streams, rivers, and water collection points. Measures hydrological conduction, aquatic temperature gradients, flow velocity, and chemical equilibrium as water traverses the bioregion.
                        </p>
                        <div class="specs-list">
                            <span class="spec-tag">Hydrological EC</span>
                            <span class="spec-tag">Flow Velocity</span>
                            <span class="spec-tag">Thermal Gradients</span>
                            <span class="spec-tag">Aquatic Load</span>
                        </div>
                    </div>

                    <div class="device-card">
                        <span class="device-type">Soil Conduction</span>
                        <h3>Soil Hydrology Nodes</h3>
                        <p>
                            Subterranean probes placed at root level across gardens and agricultural plots. Monitors moisture retention curves, soil electrical conductivity, and subterranean thermal cycles to mirror land metabolism.
                        </p>
                        <div class="specs-list">
                            <span class="spec-tag">Volumetric Water Content</span>
                            <span class="spec-tag">Soil EC</span>
                            <span class="spec-tag">Root Zone Temp</span>
                            <span class="spec-tag">Low Power RF</span>
                        </div>
                    </div>

                    <div class="device-card">
                        <span class="device-type">Air Conduction</span>
                        <h3>Atmospheric Sensors</h3>
                        <p>
                            Low-profile ambient monitors evaluating micro-climate conditions. Tracks local barometric pressure dynamics, humidity shifts, particulate movement, and ambient light cycles to anchor nodes to solar rhythms.
                        </p>
                        <div class="specs-list">
                            <span class="spec-tag">Barometric Pressure</span>
                            <span class="spec-tag">Ambient Temp & RH</span>
                            <span class="spec-tag">Particulate Density</span>
                            <span class="spec-tag">Photic Solar Tracking</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('organon-conduction', HsOrganonDevices);