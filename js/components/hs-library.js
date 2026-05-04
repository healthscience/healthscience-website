class HsLibrary extends HTMLElement {
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
                    display: none;
                    width: 100%;
                    height: 100%;
                    color: white;
                    padding: 40px;
                    box-sizing: border-box;
                    background: #050a05;
                }
                :host(.active) {
                    display: block;
                }
                h1 {
                    color: #00ffcc;
                    font-family: 'Cinzel', serif;
                    letter-spacing: 2px;
                }
                .content {
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
            </style>
            <div class="content">
                <h1>Library</h1>
                <p>The Library is a repository of signed scripts, Reference Contracts, and Module Contracts that define the logic of HOP.</p>
                <div class="status">[ PENDING DESIGN ]</div>
            </div>
        `;
    }
}

customElements.define('hs-library', HsLibrary);
