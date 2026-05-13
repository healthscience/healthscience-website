class HsRepositoryTruth extends HTMLElement {
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
            }

            /* Reuse relevant styles from hs-lens-poetry or common patterns */
            .mt-20 { margin-top: 5rem; }
            .pt-12 { padding-top: 3rem; }
            .border-t { border-top: 1px solid rgba(169, 255, 0, 0.2); }
            .border-pine\\/20 { border-color: rgba(45, 70, 53, 0.2); }
            
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .items-start { align-items: flex-start; }
            .items-center { align-items: center; }
            .justify-between { justify-content: space-between; }
            .gap-8 { gap: 2rem; }
            .gap-4 { gap: 1rem; }
            
            .max-w-xl { max-width: 36rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mt-6 { margin-top: 1.5rem; }
            
            .text-xs { font-size: 0.75rem; }
            .text-sm { font-size: 0.875rem; }
            .text-\\[10px\\] { font-size: 10px; }
            
            .font-mono { font-family: 'Inter', monospace; }
            .font-serif { font-family: 'Georgia', serif; }
            .font-medium { font-weight: 500; }
            
            .text-neon { color: #a9ff00; }
            .text-secondary { color: #9ca3af; }
            .text-primary { color: #ffffff; }
            .text-secondary\\/70 { color: rgba(156, 163, 175, 0.7); }
            
            .uppercase { text-transform: uppercase; }
            .tracking-\\[0\\.3em\\] { letter-spacing: 0.3em; }
            .tracking-widest { letter-spacing: 0.2em; }
            .leading-relaxed { line-height: 1.625; }
            .italic { font-style: italic; }
            
            .border { border: 1px solid rgba(169, 255, 0, 0.2); }
            .border-neon\\/30 { border-color: rgba(169, 255, 0, 0.3); }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
            .p-6 { padding: 1.5rem; }
            .rounded { border-radius: 4px; }
            .rounded-lg { border-radius: 8px; }
            
            .bg-transparent { background-color: transparent; }
            .bg-pine\\/5 { background-color: rgba(45, 70, 53, 0.05); }
            
            .transition-all { transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
            .cursor-pointer { cursor: pointer; }
            
            .hover\\:bg-neon\\/10:hover { background-color: rgba(169, 255, 0, 0.1); }
            .hover\\:bg-pine\\/10:hover { background-color: rgba(45, 70, 53, 0.1); }
            
            .grid { display: grid; }
            .block { display: block; }
            
            a { text-decoration: none; }
            
            .group:hover .group-hover\\:text-neon {
                color: #a9ff00;
            }

            @media (min-width: 768px) {
                .md\\:flex-row { flex-direction: row; }
                .md\\:items-center { align-items: center; }
            }

            @media (max-width: 767px) {
                .max-w-xl { max-width: 100%; }
            }
        </style>
        <div class="mt-20 pt-12 border-t border-pine/20">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div class="max-w-xl">
                    <h3 class="text-xs font-mono text-neon uppercase tracking-[0.3em] mb-4">The Repository of Truth</h3>
                    <p class="text-secondary text-sm leading-relaxed italic font-serif">
                        Everything discussed on the site is backed by open, verifiable code and deep documentation. This signals that our foundations are grounded in the "Repository of Truth."
                    </p>
                    <div class="flex gap-4 mt-6">
                        <button 
                            onclick="this.getRootNode().host.dispatchEvent(new CustomEvent('open-glossary', {bubbles: true, composed: true}))"
                            class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded bg-transparent hover:bg-neon/10 transition-all cursor-pointer"
                        >
                            Explore the Glossary
                        </button>
                        <button 
                            onclick="this.getRootNode().host.dispatchEvent(new CustomEvent('open-maths', {bubbles: true, composed: true}))"
                            class="text-neon font-mono text-[10px] uppercase tracking-widest border border-neon/30 px-4 py-2 rounded bg-transparent hover:bg-neon/10 transition-all cursor-pointer"
                        >
                            View Maths
                        </button>
                    </div>
                </div>
                
                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); width: 100%;">
                    <a href="https://github.com/healthscience" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block">
                        <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Repository</div>
                        <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">github.com/healthscience</div>
                        <p class="text-[10px] text-secondary/70 leading-relaxed">The raw mechanics of the Fabric, SafeFlow-ECS, and the PeerStack.</p>
                    </a>
                    
                    <a href="https://healthscience.network/docs" target="_blank" class="group p-6 border border-pine/20 bg-pine/5 hover:bg-pine/10 transition-all rounded-lg block">
                        <div class="text-neon font-mono text-[10px] mb-2 uppercase tracking-widest">The Specification</div>
                        <div class="text-primary font-medium mb-2 group-hover:text-neon transition-colors">bentobox-ds.gitbook.io</div>
                        <p class="text-[10px] text-secondary/70 leading-relaxed">The deep-dive documentation for BentoBoxDS and the Health Oracle Protocol.</p>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('hs-repository-truth', HsRepositoryTruth);
