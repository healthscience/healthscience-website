import './hs-heart-resonance.js';
import './hs-body-emulation.js';
import './hs-organon-resilience.js';

export class HsEmulationTrinity extends HTMLElement {

    constructor() { 
        super(); 
        this.attachShadow({ mode: 'open' }); 
        this.activeOrganon = 'finland';
    } 

    connectedCallback() { 
        this.render(); 
        this.attachEventListeners();
    } 

    onActivate(subState) {
        if (subState) {
            this.showOrganonDetail(subState);
        } else {
            this.previewRegion(this.activeOrganon || 'finland');
        }
    }

    previewRegion(region) {
        if (!region) return;
        this.activeOrganon = region;

        const tabs = this.shadowRoot.querySelectorAll('.organon-tab');
        const panels = this.shadowRoot.querySelectorAll('.organon-panel');
        const mapNodes = this.shadowRoot.querySelectorAll('.map-node');

        tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-region') === region));
        panels.forEach(p => p.classList.toggle('active', p.getAttribute('data-region') === region));
        mapNodes.forEach(n => n.classList.toggle('active', n.getAttribute('data-region') === region));

        const subOrganons = document.querySelectorAll('.sub-organon-panel');
        subOrganons.forEach(el => el.classList.remove('active'));
    }

    showOrganonDetail(region) {
        if (!region) return;
        this.previewRegion(region);

        const subOrganons = document.querySelectorAll('.sub-organon-panel');
        subOrganons.forEach(el => {
            const isTarget = el.getAttribute('data-region') === region || el.id === `organon-${region}`;
            el.classList.toggle('active', isTarget);
        });
    }

    openCommunityModal() {
        const dialog = this.shadowRoot.getElementById('community-dialog');
        if (dialog) {
            dialog.showModal(); // Opens directly into the browser's native top layer
        }
    }

    closeCommunityModal() {
        const dialog = this.shadowRoot.getElementById('community-dialog');
        if (dialog) {
            dialog.close();
        }
    }

    copyKeetKey() {
        
        // Look inside global modal first, then shadow root
        const modal = document.getElementById('global-community-modal') || this.shadowRoot;
        const keyInput = modal.querySelector('#keet-key-input');
        const btn = modal.querySelector('#copy-btn');

        if (!keyInput || !btn) {
            console.error('[HsEmulationTrinity] Missing keyInput or copyBtn element!');
            return;
        }

        const originalText = btn.innerText;

        const feedback = () => {
            btn.innerText = 'Copied!';
            btn.style.background = '#34d399';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '#10b981';
            }, 2000);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(keyInput.value)
                .then(() => {
                    feedback();
                })
                .catch(err => {
                    console.error('[HsEmulationTrinity] Clipboard write error:', err);
                });
        } else {
            keyInput.select();
            document.execCommand('copy');
            feedback();
        }
    }

    closeCommunityModal() {
        const modal = this.shadowRoot.getElementById('community-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    copyKeetKey() {
        const keyInput = this.shadowRoot.getElementById('keet-key-input');
        const btn = this.shadowRoot.getElementById('copy-btn');
        if (!keyInput || !btn) {
            console.error('[HsEmulationTrinity] Missing keyInput or copyBtn element!');
            return;
        }

        const originalText = btn.innerText;

        const feedback = () => {
            btn.innerText = 'Copied!';
            btn.style.background = '#34d399';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '#10b981';
            }, 2000);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(keyInput.value)
                .then(() => {
                    feedback();
                })
                .catch(err => {
                    console.error('[HsEmulationTrinity] Clipboard write error:', err);
                });
        } else {
            keyInput.select();
            document.execCommand('copy');
            feedback();
        }
    }

    attachEventListeners() {
        const tabs = this.shadowRoot.querySelectorAll('.organon-tab');
        const mapNodes = this.shadowRoot.querySelectorAll('.map-node');
        const learnMoreBtns = this.shadowRoot.querySelectorAll('.learn-more-btn');
        const joinCommunityBtns = this.shadowRoot.querySelectorAll('.join-community');
        const modalCloseBtn = this.shadowRoot.querySelector('.modal-close');
        const modalOverlay = this.shadowRoot.getElementById('community-modal');
        const copyBtn = this.shadowRoot.getElementById('copy-btn');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.previewRegion(e.currentTarget.getAttribute('data-region'));
            });
        });

        mapNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                this.previewRegion(e.currentTarget.getAttribute('data-region'));
            });
        });

        learnMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const region = e.currentTarget.getAttribute('data-region');
                this.showOrganonDetail(region);
                window.location.hash = `#organon/${region}`;

                const targetView = document.getElementById(`organon-${region}`) || document.getElementById('organon-detail-viewport');
                if (targetView) {
                    targetView.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Community Modal triggers
        joinCommunityBtns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents top-level routing interference
                this.openCommunityModal();
            });
        });

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => this.closeCommunityModal());
        } else {
            console.warn('[HsEmulationTrinity] .modal-close button not found');
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) this.closeCommunityModal();
            });
        } else {
            console.warn('[HsEmulationTrinity] #community-modal overlay not found');
        }

        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyKeetKey());
        } else {
            console.warn('[HsEmulationTrinity] #copy-btn not found');
        }
    }

    render() { 
        this.shadowRoot.innerHTML = ` 
        <style> 
            :host { 
                --bg-loam: #0b120f;
                --bg-loam-card: linear-gradient(145deg, rgba(20, 33, 27, 0.75) 0%, rgba(11, 18, 15, 0.9) 100%);
                --color-jade: #3fa37c;
                --color-jade-glow: rgba(63, 163, 124, 0.18);
                --color-river: #5bc0a4;
                --color-amber: #e3b341;
                --color-parchment: #eaf0ee;
                --color-subtle: rgba(234, 240, 238, 0.72);
                --border-organic: rgba(91, 192, 164, 0.22);

                --font-primary: system-ui, -apple-system, sans-serif;
                --font-mono: "ui-monospace", "SF Mono", monospace;

                display: block; 
                width: 100%; 
                background: var(--bg-loam);
                color: var(--color-parchment); 
                font-family: var(--font-primary); 
                line-height: 1.75; 
                box-sizing: border-box;
                padding: 2rem 1rem 4rem;
            } 

            *, *::before, *::after {
                box-sizing: inherit;
            }

            .sanctuary {
                max-width: 1140px;
                margin: 0 auto;
            }

            .section-label {
                font-family: var(--font-mono);
                font-size: 0.75rem;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: var(--color-amber);
                display: block;
                margin-bottom: 0.5rem;
            }

            h2 {
                font-size: 2rem;
                font-weight: 300;
                letter-spacing: 3px;
                text-transform: uppercase;
                margin: 0;
            }

            /* --- HERO & CONTINUUM --- */
            .hero-section {
                padding: 1rem 0 4rem;
                border-bottom: 1px solid var(--border-organic);
                margin-bottom: 0.5rem;
            }

            .hero-header-grid {
                display: grid;
                grid-template-columns: 1fr auto;
                margin-top: 5em;
                gap: 2.5rem;
                align-items: start;
                margin-bottom: 0.5rem;
            }

            .hero-intro {
                text-align: left;
                max-width: 820px;
            }

            #call-to-action {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            .continuum-badge {
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                font-family: var(--font-mono);
                font-size: 0.75rem;
                letter-spacing: 2px;
                color: var(--color-river);
                background: rgba(63, 163, 124, 0.08);
                border: 1px solid var(--border-organic);
                border-radius: 999px;
                padding: 0.4rem 1.2rem;
                margin-bottom: 1.8rem;
            }

            .continuum-badge span.arrow {
                color: var(--color-amber);
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                letter-spacing: 4px;
                text-transform: uppercase;
                margin: 0 0 1.5rem;
                color: var(--color-parchment);
                line-height: 1.25;
            }

            .hero-lead {
                font-size: 1.25rem;
                font-weight: 300;
                margin: 0 0 1.5rem;
                color: var(--color-parchment);
            }

            .pipeline-tag {
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                font-family: var(--font-mono);
                font-size: 0.75rem;
                color: var(--color-amber);
                margin-top: 1rem;
                padding: 0.4rem 1.2rem;
                background: rgba(0, 0, 0, 0.45);
                border-radius: 999px;
                border: 1px solid rgba(227, 179, 65, 0.25);
            }

            .call-to-download a {
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                font-family: var(--font-mono);
                font-size: 0.75rem;
                color: var(--color-amber);
                margin-top: 1rem;
                padding: 0.4rem 1.2rem;
                background: rgba(0, 0, 0, 0.45);
                border-radius: 999px;
                border: 1px solid rgba(227, 179, 65, 0.25);
                text-decoration: none;
                cursor: pointer;
                transition: all 0.25s ease;
            }

            .call-to-download a:hover {
                border-color: var(--color-river);
                color: var(--color-river);
                background: rgba(63, 163, 124, 0.08);
            }

            /* --- INITIAL EMULATION --- */
            .initial-emulation {
                padding: 2rem 0 4rem;
                border-bottom: 1px solid var(--border-organic);
                margin-bottom: 4rem;
            }

            /* --- MAP & ORGANONS --- */
            .organons-section {
                padding: 2rem 0 2rem;
            }

            .section-header {
                text-align: center;
                margin-bottom: 2.5rem;
            }

            .organon-tabs {
                display: flex;
                justify-content: center;
                gap: 1rem;
                flex-wrap: wrap;
                margin-bottom: 2.5rem;
            }

            .organon-tab {
                font-family: var(--font-mono);
                font-size: 0.8rem;
                letter-spacing: 2px;
                text-transform: uppercase;
                background: rgba(63, 163, 124, 0.08);
                color: var(--color-subtle);
                border: 1px solid var(--border-organic);
                padding: 0.8rem 1.6rem;
                border-radius: 999px;
                cursor: pointer;
                transition: all 0.25s ease;
            }

            .organon-tab:hover,
            .organon-tab.active {
                background: var(--color-river);
                color: var(--bg-loam);
                border-color: var(--color-river);
                font-weight: 600;
                box-shadow: 0 0 20px rgba(91, 192, 164, 0.3);
            }

            .map-container {
                width: 100%;
                max-width: 960px;
                margin: 0 auto 3rem;
                padding: 1.5rem;
                border-radius: 28px;
                background: rgba(10, 16, 13, 0.85);
                border: 1px solid var(--border-organic);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
            }

            .earth-svg {
                width: 100%;
                height: auto;
                display: block;
            }

            .map-node {
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .map-node circle.pulse-ring {
                transform-origin: center;
                animation: mapPulse 2.5s infinite ease-out;
            }

            .map-node:hover circle.core,
            .map-node.active circle.core {
                fill: var(--color-amber);
                stroke: #ffffff;
                r: 8px;
            }

            @keyframes mapPulse {
                0% { r: 6px; opacity: 0.8; stroke-width: 2px; }
                100% { r: 24px; opacity: 0; stroke-width: 0.5px; }
            }

            /* --- SUMMARY CONTENT PANELS --- */
            .organon-panels {
                margin-top: 2rem;
            }

            .organon-panel {
                display: none;
                border-radius: 24px;
                border: 1px solid var(--border-organic);
                padding: 3rem;
                background: var(--bg-loam-card);
                animation: fadeIn 0.4s ease;
            }

            .organon-panel.active {
                display: block;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .panel-watershed {
                font-family: var(--font-mono);
                font-size: 0.75rem;
                color: var(--color-amber);
                text-transform: uppercase;
                letter-spacing: 2px;
                display: block;
                margin-bottom: 0.5rem;
            }

            .organon-panel h3 {
                font-size: 1.8rem;
                font-weight: 300;
                margin: 0 0 1rem;
                color: var(--color-parchment);
            }

            .organon-panel p {
                font-size: 1.05rem;
                color: var(--color-subtle);
                max-width: 840px;
                margin: 0 0 1.5rem;
            }

            .cta-quote { 
                font-style: italic; 
                font-size: 0.95rem; 
                padding: 1.2rem 1.6rem; 
                border-left: 2px solid var(--color-amber);
                background: rgba(227, 179, 65, 0.04);
                color: var(--color-parchment);
                max-width: 800px;
                border-radius: 0 12px 12px 0;
                margin-bottom: 2rem;
            }

            .panel-actions {
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .learn-more-btn {
                font-family: var(--font-mono);
                font-size: 0.85rem;
                letter-spacing: 2px;
                text-transform: uppercase;
                background: transparent;
                color: var(--color-river);
                border: 1px solid var(--color-river);
                padding: 0.75rem 1.8rem;
                border-radius: 999px;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                transition: all 0.3s ease;
            }

            .learn-more-btn:hover {
                background: var(--color-river);
                color: var(--bg-loam);
                box-shadow: 0 0 20px rgba(91, 192, 164, 0.4);
                transform: translateX(4px);
            }

            .join-community {
                font-family: var(--font-mono);
                font-size: 0.85rem;
                letter-spacing: 2px;
                text-transform: uppercase;
                background: rgba(227, 179, 65, 0.1);
                color: var(--color-amber);
                border: 1px solid rgba(227, 179, 65, 0.4);
                padding: 0.75rem 1.8rem;
                border-radius: 999px;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 0.6rem;
                transition: all 0.3s ease;
            }

            .join-community:hover {
                background: var(--color-amber);
                color: var(--bg-loam);
                box-shadow: 0 0 20px rgba(227, 179, 65, 0.4);
            }

            /* --- COMMUNITY MODAL STYLES --- */
            dialog::backdrop {
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(6px);
            }

            dialog {
                background: #111827;
                color: #f9fafb;
                border: 1px solid var(--border-organic);
                border-radius: 16px;
                padding: 24px;
                max-width: 540px;
                width: 90%;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            }

            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                /* Maximize z-index and force GPU layer */
                z-index: 2147483647; 
                transform: translateZ(0);
            }

            .modal-content {
                background: #111827;
                color: #f9fafb;
                border: 1px solid var(--border-organic);
                border-radius: 16px;
                padding: 24px;
                max-width: 540px;
                width: 90%;
                position: relative;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            }

            .modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: transparent;
                border: none;
                color: #9ca3af;
                font-size: 24px;
                cursor: pointer;
            }
            .modal-close:hover { color: #ffffff; }

            .modal-subtitle {
                color: #9ca3af;
                font-size: 14px;
                margin-bottom: 20px;
            }

            .conduit-card {
                background: #1f2937;
                border: 1px solid #4b5563;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 16px;
            }
            .conduit-card p {
                font-size: 13px;
                color: #d1d5db;
                margin: 8px 0;
            }

            .conduit-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .badge {
                background: #059669;
                color: #ecfdf5;
                font-size: 11px;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: bold;
            }
            .badge.secondary {
                background: #4f46e5;
            }

            .copy-box {
                display: flex;
                gap: 8px;
                margin-top: 10px;
            }

            .copy-box input {
                flex: 1;
                background: #111827;
                border: 1px solid #374151;
                color: #9ca3af;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-family: var(--font-mono);
            }

            .copy-box button {
                background: #10b981;
                color: #064e3b;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                font-weight: bold;
                cursor: pointer;
                white-space: nowrap;
                transition: background 0.2s ease;
            }
            .copy-box button:hover { background: #34d399; }

            .conduit-footer {
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
                font-size: 12px;
                color: #9ca3af;
            }
            .conduit-footer a {
                color: #38bdf8;
                text-decoration: none;
            }
            .conduit-footer a:hover { text-decoration: underline; }

            .btn-discord {
                display: block;
                text-align: center;
                background: #5865f2;
                color: #ffffff;
                text-decoration: none;
                padding: 10px;
                border-radius: 6px;
                font-weight: bold;
                font-size: 14px;
                margin-top: 10px;
                transition: background 0.2s ease;
            }
            .btn-discord:hover { background: #4752c4; }

            /* --- FOOTER CTA BOX --- */
            .cta-box { 
                margin-top: 4rem; 
                padding: 3.5rem 2rem; 
                text-align: center; 
                border-radius: 28px;
                border: 1px solid rgba(91, 192, 164, 0.3);
                background: linear-gradient(180deg, rgba(63, 163, 124, 0.08) 0%, rgba(11, 18, 15, 0.8) 100%);
            } 

            .cta-box p {
                font-size: 1.15rem;
                font-style: italic;
                color: var(--color-parchment);
                max-width: 680px;
                margin: 0 auto 1rem;
            }
        </style> 

        <div class="sanctuary">
            <!-- HERO & CONTINUUM -->
            <section class="hero-section">
                <div class="hero-header-grid">
                    <div class="hero-intro">
                        <div class="continuum-badge">
                            <span>CELL</span> <span class="arrow">&rarr;</span>
                            <span>BODY</span> <span class="arrow">&rarr;</span>
                            <span>WATERSHED</span> <span class="arrow">&rarr;</span>
                            <span>GAIA</span>
                        </div>

                        <h1>Gaia Intelligences Shape Health</h1>
                        
                        <p class="hero-lead">
                            The Health Oracle Protocol (<strong>HOP</strong>): health is a continuous alignment across a living nested continuum: Cell -> Body -> Habitat -> Watershed -> Bioregion. An Organon.
                        </p>

                        <p>
                            The life pulse of an organon is felt through tiny conduction devices, flowing data through besearch cycles—a peer-to-peer scientific method giving a resonancePulse across all scales of the organon. A consilience weave grounded in a coherence ledger produces collective intelligences of the whole: Gaia intelligences.
                        </p>
                        <div id="call-to-action">                       
                            <div class="pipeline-tag">
                                <span>STORY</span> &rarr; <span>INTERPLAY</span> &rarr; <span><strong>EMULATION</strong></span>
                            </div>
                            <div class="call-to-download">
                                <a href="https://bentoboxds.org">DOWNLOAD BENTOBOXDS</a>
                            </div>
                        </div>
                    </div>
                    <div id="heli-clock">
                      <heli-clock></heli-clock>
                    </div>
                </div>
            </section>

            <!-- INITIAL EMULATION -->
            <section class="initial-emulation">
              <hs-organon-emulation></hs-organon-emulation>
            </section>

            <!-- MAP DIAGRAM & ORGANON SUMMARY SECTION -->
            <section class="organons-section">
                <div class="section-header">
                    <span class="section-label">Place</span>
                    <h2>The Organons</h2>
                </div>

                <!-- Bioregional Map -->
                <div class="map-container">
                    <svg class="earth-svg" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#3fa37c" stop-opacity="0.25" />
                                <stop offset="100%" stop-color="#5bc0a4" stop-opacity="0.08" />
                            </linearGradient>
                        </defs>

                        <path d="M 0,90 Q 400,120 800,90 M 0,180 Q 400,180 800,180 M 0,270 Q 400,240 800,270" fill="none" stroke="url(#gridGrad)" stroke-width="1" stroke-dasharray="6,6" />
                        <rect x="10" y="10" width="780" height="340" rx="16" fill="none" stroke="rgba(91,192,164,0.2)" stroke-width="1" />

                        <!-- Node 1: Scotland -->
                        <g class="map-node" data-region="scotland" transform="translate(380, 95)">
                            <circle class="pulse-ring" r="16" fill="none" stroke="#5bc0a4" />
                            <circle class="core" r="6" fill="#3fa37c" stroke="#5bc0a4" stroke-width="2" />
                            <text x="14" y="4" fill="#eaf0ee" font-family="monospace" font-size="11">SCOTLAND</text>
                        </g>

                        <!-- Node 2: Finland -->
                        <g class="map-node active" data-region="finland" transform="translate(460, 68)">
                            <circle class="pulse-ring" r="16" fill="none" stroke="#e3b341" />
                            <circle class="core" r="6" fill="#e3b341" stroke="#ffffff" stroke-width="2" />
                            <text x="14" y="4" fill="#e3b341" font-family="monospace" font-size="11" font-weight="bold">FINLAND</text>
                        </g>

                        <!-- Node 3: Andes -->
                        <g class="map-node" data-region="andes" transform="translate(230, 205)">
                            <circle class="pulse-ring" r="16" fill="none" stroke="#5bc0a4" />
                            <circle class="core" r="6" fill="#3fa37c" stroke="#5bc0a4" stroke-width="2" />
                            <text x="14" y="4" fill="#eaf0ee" font-family="monospace" font-size="11">ANDES</text>
                        </g>

                        <!-- Node 4: Beems -->
                        <g class="map-node" data-region="beems" transform="translate(190, 120)">
                            <circle class="pulse-ring" r="16" fill="none" stroke="#5bc0a4" />
                            <circle class="core" r="6" fill="#3fa37c" stroke="#5bc0a4" stroke-width="2" />
                            <text x="14" y="4" fill="#eaf0ee" font-family="monospace" font-size="11">BEEMS</text>
                        </g>
                    </svg>
                </div>

                <!-- Region Selector Tabs -->
                <div class="organon-tabs">
                    <button class="organon-tab active" data-region="finland">Finland</button>
                    <button class="organon-tab" data-region="scotland">Scotland</button>
                    <button class="organon-tab" data-region="andes">Andes</button>
                    <button class="organon-tab" data-region="beems">Beems</button>
                </div>

                <!-- Organon Content Summary Panels with Learn More Buttons -->
                <div class="organon-panels">
                    <div class="organon-panel active" data-region="finland">
                        <span class="panel-watershed">Northern European Boreal Shield &bull; Kymijoki Basin</span>
                        <h3>Finland Organon</h3>
                        <p>This Finland Organon binds human health to the Uusimaa-Kymijoki watershed. We track Nordic cellular resilience, local food systems, and peatland hydrologic pulse. This node converts biological and environmental energy signals into a unified bioregional coherence ledger, anchoring the local cohort and ecosystem into the global health orrery.</p>
                        <div class="cta-quote">
                            "Listening to the subterranean pulse of the taiga to harmonize human health with northern water tables."
                        </div>
                        <div class="panel-actions">
                            <button class="learn-more-btn" data-region="finland">
                                Learn More <span>&rarr;</span>
                            </button>
                            <button class="join-community">
                                JOIN HOP community
                            </button>
                        </div>
                    </div>

                    <div class="organon-panel" data-region="scotland">
                        <span class="panel-watershed">Caledonian Highland Waters &bull; Tay & Spey Watersheds</span>
                        <h3>NE Scotland Organon</h3>
                        <p>Focused on peatland rewetting, ancient pinewood restoration, and riverine ecosystem telemetry. Conduction sensors track watershed acidity and salmon migration corridors, reflecting mountain-to-sea vital forces.</p>
                        <div class="cta-quote">
                            "Rewilding the Scottish highlands through high-density ecological telemetry and community stewardship."
                        </div>
                        <div class="panel-actions">
                            <button class="learn-more-btn" data-region="scotland">
                                Learn More <span>&rarr;</span>
                            </button>
                            <button class="join-community">
                                JOIN HOP community
                            </button>
                        </div>
                    </div>

                    <div class="organon-panel" data-region="andes">
                        <span class="panel-watershed">Northern Andean Cloud Forests &bull; Chicamocha Canyon</span>
                        <h3>Northern Andes (Barichara) Organon</h3>
                        <p>Support work of <a href="https://medium.com/@joe_brewer/a-framework-for-large-scale-regeneration-in-the-northern-andes-9eda1d387be8">Bioregional Learning Center</a> restoring tropical dry forest hydrology, aquifer recharge, and terraced soil biology. Sensor meshes measure microclimate humidity and subterranean aquifers across deep canyon ecosystems.</p>
                        <div class="cta-quote">
                            "Bridging indigenous earth-knowledges with peer-to-peer planetary sensing in high-altitude watersheds."
                        </div>
                        <div class="panel-actions">
                            <button class="learn-more-btn" data-region="andes">
                                Learn More <span>&rarr;</span>
                            </button>
                            <button class="join-community">
                                JOIN HOP community
                            </button>
                        </div>
                    </div>

                    <div class="organon-panel" data-region="beems">
                        <span class="panel-watershed">Mid-Atlantic Piedmont & Appalachian Ridge & Valley &bull; Potomac River Watershed</span>
                        <h3>Beems Organon</h3>
                        <p>Monitoring tidal freshwater wetland dynamics, forest canopy resilience, and riparian buffer health across the Potomac basin. Integrated conduction nodes collect real-time biopotentials from source streams to the Chesapeake estuary, binding local watershed restoration into the global coherence ledger.</p>
                        <div class="cta-quote">
                            "Listening to the vital pulse of the Potomac from the Blue Ridge highlands to the tidal estuary."
                        </div>
                        <div class="panel-actions">
                            <button class="learn-more-btn" data-region="beems">
                                Learn More <span>&rarr;</span>
                            </button>
                            <button class="join-community">
                                JOIN HOP community
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <dialog id="community-dialog">
                <form method="dialog">
                    <button class="modal-close">&times;</button>
                </form>
                
                <h2>Join the HOP Community</h2>
                <p class="modal-subtitle">Connect with local peers via decentralized P2P chat or our public hub.</p>

                <!-- Option 1: Keet Room Key -->
                <div class="conduit-card">
                    <div class="conduit-header">
                        <strong>Keet P2P Room Key</strong>
                        <span class="badge">Decentralized</span>
                    </div>
                    <p>Copy the room key below and paste it directly into your Keet desktop or mobile app:</p>
                    
                    <div class="copy-box">
                        <input 
                            type="text" 
                            id="keet-key-input" 
                            readonly 
                            value="keet://chat/gfoi6w57791ijgwjfozph5utf6eghzrwjju8c8todksb1oso8e4neb6e5k79ypr3ykydds8b1t3cu15and4im4zqi3psdx6ys56cs45dioauaxmuyaiy16u9setdq38ar9fm37njd95m5n9za4r8tdwkrzpuryedjazzxxnjak6kc8ywp4f1r7t8us6swya" 
                        />
                        <button id="copy-btn">Copy Key</button>
                    </div>

                    <div class="conduit-footer">
                        <span>Don't have Keet installed?</span>
                        <a href="https://keet.io" target="_blank" rel="noopener noreferrer">Download Keet.io &rarr;</a>
                    </div>
                </div>

                <!-- Option 2: Discord Hub -->
                <div class="conduit-card secondary">
                    <div class="conduit-header">
                        <strong>Public Onboarding Hub</strong>
                        <span class="badge secondary">Discord</span>
                    </div>
                    <p>For general inquiries, browser-based chat, and public onboarding:</p>
                    <a href="https://discord.gg/EuMYA6vQ6" target="_blank" rel="noopener noreferrer" class="btn-discord">
                        Join HOP Discord Server
                    </a>
                </div>
            </dialog>

            <!-- Component Footer CTA -->
            <div class="cta-box">
                <div class="pipeline-tag">
                    <span>HOP: GAIA INTELLIGENCES SHAPE HEALTH</span>
                </div>
            </div>
        </div>
        `; 
    } 
}

customElements.define('hs-emulation-trinity', HsEmulationTrinity);