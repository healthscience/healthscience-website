import '../heli-clock.js';
import './hs-heart-resonance.js';
import './hs-emulation-trinity.js';

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
                padding-top: calc(80px + 2rem); /* Offset for top menu header (60px) + tri-axis (20px) */
                height: 100%;
                overflow-y: auto;
                box-sizing: border-box;
            }
            .content {
                min-height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }
            hs-heart-resonance {
                width: 800px;
                height: 600px;
                max-width: 90%;
                max-height: 70vh;
                border: 1px solid rgba(0, 242, 255, 0.2);
                box-shadow: 0 0 50px rgba(0, 242, 255, 0.1);
            }
            heli-clock {
                position: absolute;
                top: calc(4rem + 80px);
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
            @media (max-width: 768px) {
                :host {
                    padding-top: 80px;
                }
                h1 {
                    font-size: 1.5rem;
                    letter-spacing: 5px;
                }
                heli-clock {
                    top: auto;
                    bottom: 2rem;
                    right: 50%;
                    transform: translateX(50%);
                    width: 100px;
                    opacity: 0.8;
                }
                hs-heart-resonance {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 4/3;
                }
            }
        </style>
        <div class="content">
            <h1>EMULATION</h1>
            <hs-heart-resonance color="#00f2ff"></hs-heart-resonance>
            <hs-emulation-trinity></hs-emulation-trinity>
            <heli-clock></heli-clock>
        </div>
        `;
    }
}
customElements.define('hs-lens-emulation', HsLensEmulation);
