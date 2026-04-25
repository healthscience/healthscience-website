class HsHubNavigator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activeLens = null;
    }

    connectedCallback() {
        this.render();
    }

    setActive(lens) {
        this.activeLens = lens;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000;
                pointer-events: none;
            }

            .hud-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;
                background: rgba(5, 5, 5, 0.8);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                pointer-events: auto;
                font-family: 'Inter', monospace;
                height: 60px;
            }

            .hud-left {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .logo {
                font-weight: 900;
                letter-spacing: 3px;
                color: white;
                text-transform: uppercase;
                font-size: 1.2rem;
            }

            .version {
                font-size: 0.7rem;
                color: #888;
                padding: 2px 6px;
                border: 1px solid #444;
                border-radius: 3px;
                text-transform: uppercase;
            }

            .hud-center {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                gap: 40px;
            }

            .nav-item {
                cursor: pointer;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #666;
                transition: all 0.3s ease;
                position: relative;
                padding: 5px 0;
            }

            .nav-item:hover {
                color: white;
            }

            .nav-item.active {
                color: white;
            }

            .nav-item.active::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background: currentColor;
                box-shadow: 0 0 10px currentColor;
            }

            .item-emulation.active { color: var(--color-emulation); }
            .item-poetry.active { color: var(--color-poetry); }
            .item-skeleton.active { color: var(--color-skeleton); }

            .hud-right {
                display: flex;
                gap: 20px;
                font-size: 0.7rem;
                color: #00ff88;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .status-item {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .status-dot {
                width: 6px;
                height: 6px;
                background: currentColor;
                border-radius: 50%;
                box-shadow: 0 0 5px currentColor;
            }

            /* The Tri-Axis Indicator (Visual Motif) */
            .tri-axis {
                position: absolute;
                top: 60px;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 20px;
                display: flex;
                justify-content: center;
                pointer-events: none;
            }

            .axis-line {
                width: 2px;
                height: 15px;
                background: #333;
                margin: 0 10px;
                transition: all 0.5s ease;
            }

            .axis-line.active {
                height: 25px;
                background: white;
                box-shadow: 0 0 10px white;
            }

            .axis-emulation.active { background: var(--color-emulation); box-shadow: 0 0 10px var(--color-emulation); }
            .axis-poetry.active { background: var(--color-poetry); box-shadow: 0 0 10px var(--color-poetry); }
            .axis-skeleton.active { background: var(--color-skeleton); box-shadow: 0 0 10px var(--color-skeleton); }

        </style>
        <div class="hud-bar">
            <div class="hud-left">
                <div class="logo">HOP</div>
                <div class="version">v1.0.0 experimental</div>
            </div>
            
            <div class="hud-center">
                <div class="nav-item item-emulation ${this.activeLens === 'emulation' ? 'active' : ''}" 
                     onclick="window.location.hash = '#emulation'">Emulation</div>
                <div class="nav-item item-poetry ${this.activeLens === 'poetry' ? 'active' : ''}" 
                     onclick="window.location.hash = '#poetry'">Poetry</div>
                <div class="nav-item item-skeleton ${this.activeLens === 'skeleton' ? 'active' : ''}" 
                     onclick="window.location.hash = '#skeleton'">Skeleton</div>
            </div>

            <div class="hud-right">
                <div class="status-item">
                    <div class="status-dot"></div>
                    COHERENCE: 98%
                </div>
                <div class="status-item">
                    <div class="status-dot"></div>
                    LOCAL-FIRST
                </div>
            </div>
        </div>
        <div class="tri-axis">
            <div class="axis-line axis-poetry ${this.activeLens === 'poetry' ? 'active' : ''}"></div>
            <div class="axis-line axis-emulation ${this.activeLens === 'emulation' ? 'active' : ''}"></div>
            <div class="axis-line axis-skeleton ${this.activeLens === 'skeleton' ? 'active' : ''}"></div>
        </div>
        `;
    }
}

customElements.define('hs-hub-navigator', HsHubNavigator);
