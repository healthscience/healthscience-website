class HeliArcResonancepulse extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Orbital configurations (Conduction, Ecological, Environment, Metabolic)
        this.rings = [
            { id: 'conduction', r: 42, color: '#b6ff3b' },
            { id: 'ecological', r: 32, color: '#40e0ff' },
            { id: 'environment', r: 22, color: '#ffffff' },
            { id: 'metabolic', r: 12, color: '#ff4d4d' }
        ];

        this.solarAngle = 0;
        this.cycleDurationMs = 4 * 60 * 1000; // 4-minute solar sweep (240,000 ms)
        this.lastTime = null;
        this.animFrameId = null;
        this.autoPulseInterval = null;
        this.activeArcs = new Map();

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 260px;
                    margin: 1.5rem auto 0;
                }
                .orrery-canvas {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    background: rgba(11, 18, 15, 0.95);
                    border: 1px solid var(--border-organic, rgba(91, 192, 164, 0.25));
                    border-radius: 50%;
                    box-shadow: 
                        0 0 25px rgba(0, 0, 0, 0.7), 
                        inset 0 0 15px rgba(91, 192, 164, 0.05);
                    display: grid;
                    place-items: center;
                    position: relative;
                    overflow: visible;
                }
                svg {
                    width: 88%;
                    height: 88%;
                    overflow: visible;
                }
                .orbit-ring {
                    fill: none;
                    stroke-width: 1.2;
                    opacity: 0.35;
                    transition: opacity 0.4s ease;
                }
                .orbit-conduction { stroke: #b6ff3b; }
                .orbit-ecological { stroke: #40e0ff; }
                .orbit-environment { stroke: #ffffff; stroke-dasharray: 2 2; }
                .orbit-metabolic { stroke: #ff4d4d; }

                .solar-hand {
                    stroke: #00f2ff;
                    stroke-width: 0.8;
                    stroke-dasharray: 1 1.5;
                    filter: drop-shadow(0 0 3px #00f2ff);
                }
                .center-pivot {
                    fill: #00f2ff;
                    filter: drop-shadow(0 0 5px #00f2ff);
                }
                .heli-arc {
                    fill: none;
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    filter: drop-shadow(0 0 5px currentColor);
                    animation: fadePulse 2.4s ease-out forwards;
                }
                @keyframes fadePulse {
                    0% { opacity: 0; stroke-width: 4; }
                    15% { opacity: 1; stroke-width: 3; }
                    100% { opacity: 0; stroke-width: 1; }
                }
            </style>

            <div class="orrery-canvas">
                <svg viewBox="-50 -50 100 100">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <!-- Concentric Orbit Rings -->
                    <circle class="orbit-ring orbit-conduction" r="42" />
                    <circle class="orbit-ring orbit-ecological" r="32" />
                    <circle class="orbit-ring orbit-environment" r="22" />
                    <circle class="orbit-ring orbit-metabolic" r="12" />

                    <!-- Dynamic Heli-Arcs Layer -->
                    <g class="arc-layer"></g>

                    <!-- Sweeping Solar Hand -->
                    <line x1="0" y1="0" x2="0" y2="-46" class="solar-hand" />
                    <circle class="center-pivot" cx="0" cy="0" r="1.5" />
                </svg>
            </div>
        `;
    }

    connectedCallback() {
        this.startOrrery();
        this.startAutoPulseEmulation();
    }

    disconnectedCallback() {
        if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
        if (this.autoPulseInterval) clearInterval(this.autoPulseInterval);
    }

    // --- Orrery Loop & Sweep Hand ---
    startOrrery() {
        const step = (timestamp) => {
            if (!this.lastTime) this.lastTime = timestamp;
            const delta = timestamp - this.lastTime;
            this.lastTime = timestamp;

            // Advance solar hand through 360° over 4 minutes
            const angleIncrement = (delta / this.cycleDurationMs) * 360;
            this.solarAngle = (this.solarAngle + angleIncrement) % 360;

            const hand = this.shadowRoot.querySelector('.solar-hand');
            if (hand) {
                hand.setAttribute('transform', `rotate(${this.solarAngle})`);
            }

            this.pruneArcs(timestamp);
            this.animFrameId = requestAnimationFrame(step);
        };

        this.animFrameId = requestAnimationFrame(step);
    }

    // --- Public Emulation API: Trigger Heli-Arcs ---
    pulseArc(ringId, startAngle, endAngle, durationMs = 2400) {
        const ring = this.rings.find((r) => r.id === ringId);
        if (!ring) return;

        const arcId = `${ringId}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        pathEl.setAttribute('class', 'heli-arc');
        pathEl.setAttribute('stroke', ring.color);
        pathEl.setAttribute('d', this.describeArc(0, 0, ring.r, startAngle, endAngle));

        const arcContainer = this.shadowRoot.querySelector('.arc-layer');
        if (arcContainer) {
            arcContainer.appendChild(pathEl);
            this.activeArcs.set(arcId, {
                element: pathEl,
                expiresAt: performance.now() + durationMs
            });
        }
    }

    // --- Autonomous Rhythmic Pulse Emulation ---
    startAutoPulseEmulation() {
        // Fires periodic coherence pulses ahead of the sweeping solar hand
        this.autoPulseInterval = setInterval(() => {
            const leadAngle = (this.solarAngle + 15) % 360;
            const trailAngle = (this.solarAngle + 55) % 360;
            
            // Cycle through rings to demonstrate multi-layer interplay
            const randomRing = this.rings[Math.floor(Math.random() * this.rings.length)];
            this.pulseArc(randomRing.id, leadAngle, trailAngle, 2200);
        }, 3500);
    }

    pruneArcs(now) {
        for (const [id, arc] of this.activeArcs.entries()) {
            if (now >= arc.expiresAt) {
                arc.element.remove();
                this.activeArcs.delete(id);
            }
        }
    }

    // --- SVG Polar/Cartesian Geometry Helpers ---
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians)
        };
    }

    describeArc(x, y, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(x, y, radius, endAngle);
        const end = this.polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(' ');
    }
}

customElements.define('heli-arc-resonancepulse', HeliArcResonancepulse);