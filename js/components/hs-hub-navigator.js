class HsHubNavigator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activeLens = null;
        this.isMenuOpen = false;
    }

    connectedCallback() {
        this.render();
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.render();
    }

    setActive(lens) {
        this.activeLens = lens;
        this.isMenuOpen = false;
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
                background: rgba(5, 5, 5, 0.85);
                backdrop-filter: blur(15px);
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
            .item-roadmap.active { color: #00ff88; }

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

            /* Mobile Menu Toggle */
            .menu-toggle {
                display: none;
                flex-direction: column;
                gap: 5px;
                cursor: pointer;
                padding: 5px;
            }

            .menu-toggle span {
                width: 25px;
                height: 2px;
                background: white;
                transition: all 0.3s ease;
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
            .axis-roadmap.active { background: #00ff88; box-shadow: 0 0 10px #00ff88; }

            @media (max-width: 768px) {
                .hud-center {
                    display: ${this.isMenuOpen ? 'flex' : 'none'};
                    position: fixed;
                    top: 60px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: calc(100vh - 60px);
                    background: rgba(5, 5, 5, 0.95);
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
                    transform: none;
                    pointer-events: auto;
                    z-index: 2000;
                }

                .nav-item {
                    font-size: 1.2rem;
                }

                .hud-right {
                    display: none;
                }

                .version {
                    display: none;
                }

                .menu-toggle {
                    display: flex;
                }

                .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
                .menu-toggle.open span:nth-child(2) { opacity: 0; }
                .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
                
                .tri-axis {
                    display: none;
                }
            }

        </style>
        <div class="hud-bar">
            <div class="hud-left">
                <div class="logo">HOP</div>
                <div class="version">v0.7.5 experimental</div>
            </div>
            
            <div class="hud-center">
                <div class="nav-item item-emulation ${this.activeLens === 'emulation' ? 'active' : ''}" 
                     onclick="window.location.hash = '#emulation'">Emulation</div>
                <div class="nav-item item-poetry ${this.activeLens === 'poetry' ? 'active' : ''}" 
                     onclick="window.location.hash = '#poetry'">Poetry</div>
                <div class="nav-item item-skeleton ${this.activeLens === 'skeleton' ? 'active' : ''}" 
                     onclick="window.location.hash = '#skeleton'">Skeleton</div>
                <div class="nav-item item-roadmap ${this.activeLens === 'roadmap' ? 'active' : ''}" 
                     onclick="window.location.hash = '#roadmap'">Road Map</div>
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

            <div class="menu-toggle ${this.isMenuOpen ? 'open' : ''}" onclick="this.getRootNode().host.toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="tri-axis">
            <div class="axis-line axis-poetry ${this.activeLens === 'poetry' ? 'active' : ''}"></div>
            <div class="axis-line axis-emulation ${this.activeLens === 'emulation' ? 'active' : ''}"></div>
            <div class="axis-line axis-skeleton ${this.activeLens === 'skeleton' ? 'active' : ''}"></div>
            <div class="axis-line axis-roadmap ${this.activeLens === 'roadmap' ? 'active' : ''}"></div>
        </div>
        `;
    }
}

customElements.define('hs-hub-navigator', HsHubNavigator);
