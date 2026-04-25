class HsScaleSlider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.scales = ['Cell', 'Building', 'Environment', 'Earth'];
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
            const val = e.target.value;
            this.shadowRoot.querySelector('.label').textContent = this.scales[val];
            this.dispatchEvent(new CustomEvent('scale-change', { detail: { scale: this.scales[val], index: val } }));
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.5);
                border: 1px solid #dcd3c1;
                margin: 1rem 0;
            }
            .container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            input {
                width: 100%;
                cursor: pointer;
            }
            .label {
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #2d5a27;
            }
        </style>
        <div class="container">
            <span class="label">Cell</span>
            <input type="range" min="0" max="3" value="0" step="1">
            <div style="display:flex; width: 100%; justify-content: space-between; font-size: 0.7rem; opacity: 0.6;">
                <span>MICROSCOPIC</span>
                <span>PLANETARY</span>
            </div>
        </div>
        `;
    }
}
customElements.define('hs-scale-slider', HsScaleSlider);
