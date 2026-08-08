import { FinlandOrganon } from './organs/manifests/finland.manifest.js';
import './organs/organon-needs.js';

export class HsOrganonFinland extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.injectOrganonData();
        this.bindEvents();
    }

    onActivate(subState) {
        // Triggered when peers navigate directly to #organon/finland
        console.log("Finland Organon active state:", subState);
        
        // If the URL has #needs or subState asks for needs, auto-scroll down
        if (subState === 'needs' || window.location.hash.includes('needs')) {
            this.scrollToNeeds();
        }
    }

    injectOrganonData() {
        const needsElement = this.shadowRoot.getElementById('finland-needs-section');
        if (needsElement && typeof needsElement.setOrganonData === 'function') {
            needsElement.setOrganonData(FinlandOrganon);
        } else {
            customElements.whenDefined('organon-needs').then(() => {
                const retryElement = this.shadowRoot.getElementById('finland-needs-section');
                if (retryElement) {
                    retryElement.setOrganonData(FinlandOrganon);
                }
            });
        }
    }

    bindEvents() {
        const ctaBtn = this.shadowRoot.getElementById('jump-needs-btn');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => this.scrollToNeeds());
        }
    }

    scrollToNeeds() {
        const needsElement = this.shadowRoot.getElementById('finland-needs-section');
        if (needsElement) {
            needsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                color: #eaf0ee;
                font-family: system-ui, -apple-system, sans-serif;
                line-height: 1.75;
            }

            .organon-node-container {
                max-width: 1000px;
                margin: 0 auto;
                padding: 2rem 1rem 0;
            }

            .watershed-header {
                border-bottom: 1px solid rgba(91, 192, 164, 0.22);
                padding-bottom: 2rem;
                margin-bottom: 2.5rem;
            }

            .watershed-badge {
                font-family: "ui-monospace", "SF Mono", monospace;
                font-size: 0.75rem;
                letter-spacing: 2px;
                color: #e3b341;
                text-transform: uppercase;
                display: block;
                margin-bottom: 0.5rem;
            }

            h2 {
                font-size: 2.2rem;
                font-weight: 300;
                letter-spacing: 3px;
                text-transform: uppercase;
                margin: 0 0 1rem;
                color: #eaf0ee;
            }

            .lead-text {
                font-size: 1.15rem;
                font-weight: 300;
                color: rgba(234, 240, 238, 0.85);
                margin-bottom: 1.8rem;
            }

            .header-cta-bar {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            .cta-btn-amber {
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                background: rgba(229, 169, 59, 0.12);
                border: 1px solid rgba(229, 169, 59, 0.4);
                color: #e3b341;
                font-family: "ui-monospace", "SF Mono", monospace;
                font-size: 0.82rem;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                padding: 0.7rem 1.4rem;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .cta-btn-amber:hover {
                background: rgba(229, 169, 59, 0.22);
                border-color: #e3b341;
                transform: translateY(-1px);
            }

            .node-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1.5rem;
                margin: 3rem 0;
            }

            .node-card {
                background: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                border: 1px solid rgba(91, 192, 164, 0.22);
                border-radius: 18px;
                padding: 1.8rem;
            }

            .node-card h3 {
                font-family: "ui-monospace", "SF Mono", monospace;
                font-size: 1.1rem;
                color: #5bc0a4;
                margin: 0 0 0.8rem;
                letter-spacing: 1px;
            }

            .node-card p {
                font-size: 0.92rem;
                color: rgba(234, 240, 238, 0.72);
                margin: 0;
            }

            @media (max-width: 800px) {
                .node-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>

        <div class="organon-node-container">
            <header class="watershed-header">
                <span class="watershed-badge">Peers — Conduction — Uusimaa-Kymijoki Watershed</span>
                <h2>Finland Organon</h2>
                <p class="lead-text">
                    This Finland Organon brings human health and land vitality into continuous, real-time harmony. By pulsing human biopotentials and ground telemetry into a local solar-cycle orrery, the node emulates the metabolic interplay between the body, shelter microclimates, and the Uusimaa-Kymijoki watershed. This turns raw biological and environmental signals into direct, actionable health feedback—grounding daily vitality in the living rhythms of the local landscape.
                </p>
                <div class="header-cta-bar">
                    <button id="jump-needs-btn" class="cta-btn-amber" type="button">
                        <span>Mitä pitää tehdä &bull; What Needs Done</span> &darr;
                    </button>
                </div>
            </header>
        </div>

        <!-- the organon -->
        <organon-primer></organon-primer>
        <organon-peers></organon-peers>
        <organon-conduction></organon-conduction>
        <organon-besearch></organon-besearch>
        <organon-resonance></organon-resonance>

        <organon-needs id="finland-needs-section"></organon-needs>
        `;
    }
}

customElements.define('hs-organon-finland', HsOrganonFinland);