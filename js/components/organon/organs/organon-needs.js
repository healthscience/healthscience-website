// components/hs-organon-needs.js
class HsOrganonNeeds extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.manifest = null;
    }

    setOrganonData(data) {
        this.manifest = data;
        this.render();
    }

    connectedCallback() {
        if (this.manifest) {
            this.render();
        }
    }

    render() {
        if (!this.manifest) return;

        const { name, watershed, sectionTitle, sectionSubtitle, manufacturers, peerCohort } = this.manifest;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    margin: 3rem 0;
                    font-family: var(--font-main, system-ui, -apple-system, sans-serif);
                    color: var(--color-text-primary, #eaf0ee);
                }
                .needs-container {
                    background-color: rgba(11, 18, 15, 0.94);
                    border: 1px solid var(--border-organic, rgba(91, 192, 164, 0.25));
                    border-radius: 28px;
                    padding: 3rem;
                    box-sizing: border-box;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                }
                .section-header {
                    margin-bottom: 2.5rem;
                    border-bottom: 1px solid rgba(91, 192, 164, 0.15);
                    padding-bottom: 1.5rem;
                }
                .tag {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-amber, #e5a93b);
                    display: block;
                    margin-bottom: 0.5rem;
                }
                h2 {
                    margin: 0 0 0.4rem 0;
                    font-size: 2rem;
                    font-weight: 500;
                    color: var(--color-text-primary, #eaf0ee);
                }
                .subtitle {
                    color: var(--color-river, #3fc37c);
                    font-family: var(--font-mono, monospace);
                    font-size: 0.9rem;
                    margin: 0;
                }
                .needs-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 2.5rem;
                    align-items: start;
                }
                .pillar-card {
                    background: rgba(14, 23, 19, 0.88);
                    border: 1px solid rgba(91, 192, 164, 0.22);
                    border-radius: 20px;
                    padding: 2rem;
                    box-sizing: border-box;
                }
                h3 {
                    margin: 0 0 1.5rem 0;
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--color-text-primary, #eaf0ee);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .pillar-count {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.75rem;
                    color: var(--color-amber, #e5a93b);
                    background: rgba(229, 169, 59, 0.1);
                    padding: 0.25rem 0.6rem;
                    border-radius: 999px;
                    border: 1px solid rgba(229, 169, 59, 0.3);
                }
                .item-card {
                    border-top: 1px solid rgba(91, 192, 164, 0.15);
                    padding-top: 1.2rem;
                    margin-top: 1.2rem;
                }
                .item-card:first-of-type {
                    border-top: none;
                    padding-top: 0;
                    margin-top: 0;
                }
                .partner-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    margin-bottom: 0.3rem;
                }
                .partner-name {
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--color-text-primary, #eaf0ee);
                }
                .partner-domain {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.75rem;
                    color: var(--color-river, #3fc37c);
                    margin-bottom: 0.6rem;
                    display: block;
                }
                .status-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    color: var(--color-amber, #e5a93b);
                }
                p {
                    color: var(--color-text-secondary, #a3b8b0);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0 0 1rem 0;
                }
                .action-btn {
                    display: inline-block;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.75rem;
                    color: var(--color-river, #3fc37c);
                    background: rgba(63, 163, 124, 0.08);
                    border: 1px solid rgba(63, 163, 124, 0.3);
                    padding: 0.45rem 0.9rem;
                    border-radius: 8px;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .action-btn:hover {
                    background: rgba(63, 163, 124, 0.18);
                    border-color: var(--color-river, #3fc37c);
                }
                .pipeline-note {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.75rem;
                    color: var(--color-amber, #e5a93b);
                    margin-bottom: 1.2rem;
                    display: block;
                }
                @media (max-width: 960px) {
                    .needs-grid {
                        grid-template-columns: 1fr;
                    }
                    .needs-container {
                        padding: 1.8rem;
                    }
                }
            </style>

            <section class="needs-container">
                <div class="section-header">
                    <span class="tag">${watershed} — Watershed & Body Conduction</span>
                    <h2>${sectionTitle}</h2>
                    <p class="subtitle">${sectionSubtitle}</p>
                </div>

                <div class="needs-grid">
                    <!-- PILLAR 1: MANUFACTURING & HARDWARE CONTRACTS -->
                    <div class="pillar-card">
                        <h3>
                            <span>Manufacturer Contracts</span>
                            <span class="pillar-count">3 Open Contracts</span>
                        </h3>
                        
                        ${manufacturers.map(m => `
                            <div class="item-card">
                                <div class="partner-header">
                                    <span class="partner-name">${m.partner}</span>
                                    <span class="status-badge">[${m.status}]</span>
                                </div>
                                <span class="partner-domain">${m.domain}</span>
                                <p>${m.specificNeed}</p>
                                <button class="action-btn" type="button">${m.actionLabel} &rarr;</button>
                            </div>
                        `).join('')}
                    </div>

                    <!-- PILLAR 2: PEOPLE / PEER COHORT RECRUITMENT -->
                    <div class="pillar-card">
                        <h3>
                            <span>Peer Cohort & Roles</span>
                            <span class="pillar-count">Seed Triangle</span>
                        </h3>
                        <span class="pipeline-note">Pipeline: ${peerCohort.pipelineStage}</span>

                        ${peerCohort.openRoles.map(r => `
                            <div class="item-card">
                                <div class="partner-header">
                                    <span class="partner-name">${r.title}</span>
                                    <span class="status-badge">[${r.deficit}]</span>
                                </div>
                                <span class="partner-domain">${r.finnishTitle}</span>
                                <p>${r.summary}</p>
                                <button class="action-btn" type="button">Initiate Conduction &rarr;</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('organon-needs', HsOrganonNeeds);