import '../heli-clock.js';

class HsLensEmulation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    onActivate(subState) {
        console.log('Emulation Lens Activated', subState);
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                background: radial-gradient(circle at center, #101010 0%, #000 100%);
                color: var(--color-emulation);
                padding: 2rem;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
            }
            .content {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            canvas {
                border: 1px solid rgba(0, 242, 255, 0.2);
                box-shadow: 0 0 50px rgba(0, 242, 255, 0.1);
                max-width: 90%;
                max-height: 70vh;
            }
            heli-clock {
                position: absolute;
                top: 4rem;
                right: 2rem;
                width: 150px;
                opacity: 0.5;
                transition: opacity 0.3s var(--pulse-ease);
                z-index: 10;
            }
            heli-clock:hover {
                opacity: 1;
            }
            h1 {
                margin-bottom: 1rem;
                font-weight: 200;
                letter-spacing: 10px;
            }
        </style>
        <div class="content">
            <h1>EMULATION</h1>
            <canvas id="orgos-canvas" width="800" height="600"></canvas>
            <heli-clock></heli-clock>
        </div>
        `;
    }
}
customElements.define('hs-lens-emulation', HsLensEmulation);
