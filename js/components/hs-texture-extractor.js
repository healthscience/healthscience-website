class HsTextureExtractor extends HTMLElement {
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
                height: 100px;
                background: linear-gradient(90deg, #fdfaf6 25%, #2d5a27 25%, #2d5a27 50%, #fdfaf6 50%, #fdfaf6 75%, #2d5a27 75%);
                background-size: 20px 20px;
                border: 1px solid #dcd3c1;
                margin: 1rem 0;
                position: relative;
                overflow: hidden;
            }
            .overlay {
                position: absolute;
                inset: 0;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(2px);
                display: flex;
                align-items: center;
                justify-content: center;
                color: #1a2a22;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 0.8rem;
                letter-spacing: 3px;
            }
        </style>
        <div class="overlay">Pattern Matrix</div>
        `;
    }
}
customElements.define('hs-texture-extractor', HsTextureExtractor);
