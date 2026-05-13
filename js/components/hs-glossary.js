class HsGlossary extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.glossaryItems = [
            {
                term: "Baseline of Zero",
                definition: "The state of uncorrupted, raw biological truth before any external interpretation or centralized bias is applied. The starting point for all Sovereign metadata."
            },
            {
                term: "BeeBee",
                definition: "The \"Translator\" agent. A local-first conversational interface that digests Cues and converts complex biological resonance into human-navigable insights."
            },
            {
                term: "BentoBox (BentoBoxDS)",
                definition: "The cellular container of the Peer. A local-first, sovereign boundary where a Peer curates their unique selection of \"Data Nutrition\" across four scales (Now/Future/Peer/Community)."
            },
            {
                term: "Besearch Cycle",
                definition: "The 4-stage metabolic loop (Context → Research → Search → Emulation) used to evolve \"New Science\" tailored specifically to a Peer’s unique biological signature."
            },
            {
                term: "Bring to Be",
                definition: "The act of moving a configuration or \"Lego Brick\" from the theoretical Library into a functional, localized existence within the PeerStack."
            },
            {
                term: "Coherence Ledger",
                definition: "The \"Spine\" of the protocol. A digital immune system that uses sampling proofs of evidence to anchor every Besearch Cycle in immutable truth."
            },
            {
                term: "Consilience Weave",
                definition: "The mathematical fabric that allows for a cascade of updates across the network without central oversight, maintaining stability through controlled feedback loops."
            },
            {
                term: "cueCube",
                definition: "A dense, cryptographic \"Lego Brick\" of truth used to emulate health outcomes in the physical before they manifest. A navigation stone for the future."
            },
            {
                term: "Cues",
                definition: "The primary units of computational knowledge. Signed, resonant threads of data that act as the \"Guide Book\" for navigating the Fabric."
            },
            {
                term: "Digital Immune System",
                definition: "The protective layer of the Coherence Ledger that filters out uncorrupted data and ensures the integrity of the Peer’s sovereign sanctuary."
            },
            {
                term: "HeliClock",
                definition: "The mathematical peg driven into the ground of geometry. It provides the rhythmic ResonancePulse that synchronizes the Fabric and guides NEAT-HOP searches."
            },
            {
                term: "HOP (Health Oracle Protocol)",
                definition: "The underlying physics and P2P tapestry of the network. It treats every biological signal as a thread of sovereign truth."
            },
            {
                term: "Levin Bubble Sort",
                definition: "A localized sorting mechanism (prominent in v2) that prioritizes the most \"nutritional\" and coherent Cues, bringing the most relevant medicine to the surface."
            },
            {
                term: "NEAT-HOP",
                definition: "The evolutionary engine that searches the space of biological solutions to create \"New Science\" tailored to the Peer's context."
            },
            {
                term: "Peer / Peers",
                definition: "The sovereign entities that make up the network. There are no \"users\" in HOP; only Peers who clone, calibrate, and contribute to the weave."
            },
            {
                term: "PeerStack",
                definition: "The localized suite of tools (BeeBee, BentoBox, Ledger) that enables a Peer to experience the Fabric on their own hardware."
            },
            {
                term: "ResonAgents",
                definition: "Tiny, localized learning agents that work in concert with the HeliClock to emulate health outcomes and maintain the Consilience Weave."
            },
            {
                term: "SafeFlow-ECS",
                definition: "The \"Heart\" of the system. An Entity Component System that manages the flow of biological signals into signed, cryptographic records."
            },
            {
                term: "Sensing Skin",
                definition: "The decentralized inflow of raw data from the \"Urban Mine\" (sensors, devices, BeeBee conversations) before it is processed by the Ledger."
            },
            {
                term: "Sovereign Skeleton",
                definition: "The mathematical and cryptographic framework (Merkle trees, Hyperbees, Secure IDs) that ensures Peer ownership and privacy."
            },
            {
                term: "The Boreal",
                definition: "The conceptual \"living forest\" environment where the Fabric is grown—characterized by local-first sovereignty and biological harmony."
            },
            { 
                term: "Levin Complexity (Levin Search)",
                definition: "The mathematical foundation for the v2 Bubble Sort. It ensures that the \"Search\" stage of a Besearch Cycle prioritizes solutions that are not only computationally efficient but biologically \"simplest\" and most likely to be true."
            },
            {
                term: "Von Mises Distribution",
                definition:	"The Circular Compass of the HeliClock. Unlike linear statistics, this math accounts for the rhythmic, periodic nature of biological life (cycles, pulses, and phases). It is the geometry used to calculate Consilience."
            }
        ];
    }

    connectedCallback() {
        this.render();
    }

    onActivate() {
        this.setupPermalink();
    }

    setupPermalink() {
        const urlParams = new URLSearchParams(window.location.search);
        const term = urlParams.get('term');
        if (term) {
            const element = this.shadowRoot.getElementById(`term-${this.slugify(term)}`);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('highlight-term');
                }, 100);
            }
        }
    }

    slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    copyPermalink(term) {
        const url = new URL(window.location.origin + window.location.pathname);
        url.hash = `glossary?term=${encodeURIComponent(term)}`;
        navigator.clipboard.writeText(url.toString()).then(() => {
            alert('Permalink copied to clipboard: ' + url.toString());
        });
    }

    setupPermalink() {
        const hash = window.location.hash;
        if (hash.includes('?term=')) {
            const term = hash.split('?term=')[1];
            if (term) {
                const decodedTerm = decodeURIComponent(term);
                const element = this.shadowRoot.getElementById(`term-${this.slugify(decodedTerm)}`);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        element.classList.add('highlight-term');
                    }, 300);
                }
            }
        }
    }

    render() {
        const glossaryHtml = this.glossaryItems.map((item, index) => `
            <div id="term-${this.slugify(item.term)}" class="grid-row border-b border-pine/10 last:border-0 hover:bg-neon/5 transition-colors group">
                <div class="p-6 text-primary font-medium font-mono text-sm self-start group-hover:text-neon transition-colors flex justify-between items-center">
                    <span>${item.term}</span>
                    <button class="permalink-btn opacity-0 group-hover:opacity-100 transition-opacity" onclick="this.getRootNode().host.copyPermalink('${item.term}')" title="Copy Permalink">
                        <svg class="w-4 h-4 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    </button>
                </div>
                <div class="p-6 text-secondary text-sm leading-relaxed border-l border-pine/20 font-serif md:font-sans relative">
                    <span class="block md:hidden text-[10px] font-mono text-neon/60 uppercase mb-2 tracking-widest">Definition</span>
                    ${item.definition}
                </div>
            </div>
        `).join('');

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #06110e;
                z-index: 1000;
                overflow-y: auto;
                color: #ffffff;
                font-family: 'Inter', sans-serif;
            }

            .glossary-page {
                min-h-screen: 100vh;
                background: #06110e;
                position: relative;
                overflow: hidden;
                padding: 2rem;
            }

            @media (min-width: 768px) {
                .glossary-page { padding: 4rem; }
            }

            .max-w-5xl { max-width: 64rem; margin: 0 auto; }
            .relative { position: relative; }
            .z-10 { z-index: 10; }

            .vine-cluster {
                position: absolute;
                width: 200px;
                height: 200px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234ade8022'%3E%3Cpath d='M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z' /%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-size: contain;
                pointer-events: none;
                z-index: 1;
                opacity: 0.6;
            }

            .top-left { top: -40px; left: -40px; transform: rotate(-15deg); }
            .top-right { top: 40px; right: -80px; transform: rotate(45deg) scale(1.5); opacity: 0.3; }
            .left-mid { top: 40%; left: -100px; transform: rotate(-90deg) scale(2); opacity: 0.2; }

            .back-btn {
                margin-bottom: 3rem;
                display: inline-flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1.5rem;
                border: 1px solid rgba(169, 255, 0, 0.3);
                background: rgba(169, 255, 0, 0.05);
                color: #a9ff00;
                font-family: monospace;
                font-size: 0.75rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                border-radius: 9999px;
                cursor: pointer;
                transition: all 0.2s;
            }

            .back-btn:hover { background: rgba(169, 255, 0, 0.1); }

            header { margin-bottom: 5rem; }
            .header-label { font-size: 1.5rem; font-family: monospace; color: #a9ff00; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 1rem; }
            h1 { font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; line-height: 1.2; font-style: italic; font-family: serif; }
            @media (min-width: 768px) { h1 { font-size: 3rem; } }
            .description { color: #9ca3af; font-size: 1.125rem; max-width: 42rem; line-height: 1.625; }

            .glossary-container {
                border: 1px solid rgba(45, 70, 53, 0.2);
                border-radius: 1rem;
                background: rgba(45, 70, 53, 0.05);
                backdrop-filter: blur(4px);
                overflow: hidden;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            }

            .grid-header {
                display: grid;
                grid-template-columns: 1fr;
                border-bottom: 1px solid rgba(45, 70, 53, 0.2);
                background: rgba(45, 70, 53, 0.1);
            }

            @media (min-width: 768px) {
                .grid-header { grid-template-columns: 280px 1fr; }
            }

            .grid-row {
                display: grid;
                grid-template-columns: 1fr;
            }

            @media (min-width: 768px) {
                .grid-row { grid-template-columns: 280px 1fr; }
            }

            .header-cell { padding: 1.5rem; font-size: 0.75rem; font-family: monospace; color: #a9ff00; text-transform: uppercase; letter-spacing: 0.2em; }
            .p-6 { padding: 1.5rem; }
            .text-neon { color: #a9ff00; }
            .text-primary { color: #ffffff; }
            .text-secondary { color: #9ca3af; }
            .font-mono { font-family: monospace; }
            .font-serif { font-family: serif; }
            .text-sm { font-size: 0.875rem; }
            .border-b { border-bottom: 1px solid rgba(45, 70, 53, 0.1); }
            .border-l { border-left: 1px solid rgba(45, 70, 53, 0.2); }
            .hover\\:bg-neon\\/5:hover { background: rgba(169, 255, 0, 0.05); }
            .group:hover .group-hover\\:text-neon { color: #a9ff00; }
            .transition-colors { transition: color 0.2s, background-color 0.2s; }
            
            .permalink-btn {
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .w-4 { width: 1rem; }
            .h-4 { height: 1rem; }
            .opacity-0 { opacity: 0; }
            .group:hover .opacity-100 { opacity: 1; }
            .transition-opacity { transition: opacity 0.2s; }

            footer { margin-top: 5rem; padding-top: 3rem; border-top: 1px solid rgba(45, 70, 53, 0.2); text-align: center; }
            .footer-text { color: rgba(156, 163, 175, 0.6); font-size: 0.75rem; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; }

            .highlight-term {
                background: rgba(169, 255, 0, 0.15) !important;
                transition: background 1s;
            }

            /* Custom scrollbar */
            :host::-webkit-scrollbar { width: 6px; }
            :host::-webkit-scrollbar-track { background: #06110e; }
            :host::-webkit-scrollbar-thumb { background: rgba(74, 222, 128, 0.2); border-radius: 3px; }
            :host::-webkit-scrollbar-thumb:hover { background: rgba(74, 222, 128, 0.4); }
        </style>
        <div class="glossary-page">
            <div class="vine-cluster top-left"></div>
            <div class="vine-cluster top-right"></div>
            <div class="vine-cluster left-mid"></div>

            <div class="max-w-5xl relative z-10">
                <button class="back-btn" onclick="this.getRootNode().host.handleClose()">
                    ← Back to Homepage
                </button>

                <header>
                    <div class="header-label">The HOP Glossary</div>
                    <h1>A Peer’s Guide to the Fabric</h1>
                    <p class="description">
                        The lexicon of the Health Oracle Protocol. Understanding these terms is the first step in navigating the Boreal environment and reclaiming biological sovereignty.
                    </p>
                </header>

                <div class="glossary-container">
                    <div class="grid-header">
                        <div class="header-cell">Term</div>
                        <div class="header-cell border-l hidden-mobile">Definition</div>
                    </div>
                    ${glossaryHtml}
                </div>

                <footer>
                    <p class="footer-text">
                        Health Oracle Protocol // Continuous Evolution
                    </p>
                </footer>
            </div>
        </div>
        `;
    }
}

customElements.define('hs-glossary', HsGlossary);
