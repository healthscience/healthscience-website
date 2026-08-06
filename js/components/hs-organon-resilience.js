/**
 * <hs-resilience-spiral>
 * Web Component rendering an overlapping multi-year bioregional resilience diagram.
 * Rather than expanding outward, multi-year cycles orbit a shared baseline seasonal ring,
 * overlapping to reveal multi-year climate trends (e.g. multi-year droughts vs wet cycles).
 */
class HsResilienceSpiral extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.animationId = null;
        this.rotationAngle = 0;
        this.totalYears = 6;
        this.samplesPerYear = 120; // High seasonal resolution

        // Generated multi-year bioregional data across shared solar wheel
        this.yearData = this.generateOverlappingHistory();

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
                min-height: 400px;
                position: relative;
                overflow: hidden;
            }
            .spiral-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
            }
            canvas {
                display: block;
                width: 100%;
                height: 100%;
            }
        </style>
        <div class="spiral-wrapper">
            <canvas></canvas>
        </div>
        `;
    }

    connectedCallback() {
        this.initCanvas();
        this.startAnimation();
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    disconnectedCallback() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        const canvas = this.shadowRoot.querySelector('canvas');
        if (canvas) {
            canvas.width = this.clientWidth || 420;
            canvas.height = this.clientHeight || 420;
        }
    }

    initCanvas() {
        const canvas = this.shadowRoot.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.handleResize();
    }

    // Generates multi-year climate trends (drought spells, rain cycles) that layer on top of each other
    generateOverlappingHistory() {
        const years = [];
        const baseYear = 2021;

        // Climate narrative profile across 6 overlapping years
        // Year 0-1: Mild / Baseline
        // Year 2-3: 2-year Drought spell (inward contraction, brown)
        // Year 4-5: Heavy rain / Flood & Recovery spell (outward expansion, green)
        const climateRegimes = [
            { baseline: 0.82, variance: 0.08 }, // 2021: Balanced
            { baseline: 0.70, variance: 0.12 }, // 2022: Early dry spell
            { baseline: 0.38, variance: 0.15 }, // 2023: Severe Drought (Brown / contracted)
            { baseline: 0.45, variance: 0.20 }, // 2024: Irregular Rain / Flood spikes
            { baseline: 0.88, variance: 0.10 }, // 2025: Lush Regeneration (Vibrant Green)
            { baseline: 0.92, variance: 0.06 }  // 2026: Deep Resilience
        ];

        for (let y = 0; y < this.totalYears; y++) {
            const regime = climateRegimes[y];
            const samples = [];

            for (let i = 0; i < this.samplesPerYear; i++) {
                const seasonRatio = i / this.samplesPerYear; // 0 to 1 around 360 solar cycle
                const angle = seasonRatio * Math.PI * 2;

                // Natural seasonal dip in late summer / dry months (around 220° - 270°)
                const seasonalDip = Math.sin(angle - Math.PI / 3) * 0.12;

                // Local environmental fluctuation
                const microNoise = (Math.sin(i * 0.4 + y) * 0.05);

                const resilience = Math.max(0.15, Math.min(1.0, regime.baseline + seasonalDip + microNoise));

                samples.push({
                    angle: angle,
                    resilience: resilience,
                    seasonRatio: seasonRatio
                });
            }

            years.push({
                yearLabel: baseYear + y,
                yearIndex: y,
                samples: samples
            });
        }

        return years;
    }

    // Maps resilience values to the requested green/brown color gradient
    getResilienceColor(val, alpha = 1.0) {
        if (val >= 0.80) {
            // Lush Vibrant Green
            return `rgba(63, 195, 124, ${alpha})`;
        } else if (val >= 0.60) {
            // Mossy / Transition Olive Green
            return `rgba(143, 184, 59, ${alpha})`;
        } else if (val >= 0.40) {
            // Light Brown / Ochre (Not-so-good dry phase)
            return `rgba(229, 169, 59, ${alpha})`;
        } else {
            // Dry Earth Brown (Severe drought or degraded state)
            return `rgba(168, 101, 45, ${alpha})`;
        }
    }

    renderSpiral() {
        if (!this.ctx) return;

        const canvas = this.shadowRoot.querySelector('canvas');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        // Baseline radius around which all years orbit
        const baseRadius = Math.min(width, height) * 0.32;
        const radialScale = 65; // Radius offset multiplier for health fluctuations

        this.ctx.clearRect(0, 0, width, height);

        // Subtly rotate solar wheel over time
        this.rotationAngle += 0.001;

        this.ctx.save();
        this.ctx.translate(centerX, centerY);
        this.ctx.rotate(this.rotationAngle);

        // --- 1. Draw Baseline Solar Reference Ring & Crosshairs ---
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([4, 4]);

        // Shared Baseline Equilibrium Ring
        this.ctx.beginPath();
        this.ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
        this.ctx.stroke();

        // Seasonal Axes
        this.ctx.beginPath();
        this.ctx.moveTo(-baseRadius - 30, 0); this.ctx.lineTo(baseRadius + 30, 0);
        this.ctx.moveTo(0, -baseRadius - 30); this.ctx.lineTo(0, baseRadius + 30);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // --- 2. Render Overlapping Annual Loops ---
        this.yearData.forEach((yearObj) => {
            const isCurrentYear = yearObj.yearIndex === this.totalYears - 1;
            
            // Older years have lower opacity to keep the weave readable; current year is boldest
            const alphaBase = isCurrentYear ? 0.95 : 0.25 + (yearObj.yearIndex * 0.1);
            const lineWidth = isCurrentYear ? 2.8 : 1.4;

            const samples = yearObj.samples;

            for (let i = 0; i < samples.length; i++) {
                const curr = samples[i];
                const next = samples[(i + 1) % samples.length];

                // Radius fluctuates around shared baseRadius based on resilience:
                // High resilience (>0.8) expands outward, Low resilience (<0.4) shrinks inward
                const rCurr = baseRadius + (curr.resilience - 0.65) * radialScale;
                const rNext = baseRadius + (next.resilience - 0.65) * radialScale;

                const x1 = rCurr * Math.cos(curr.angle - Math.PI / 2);
                const y1 = rCurr * Math.sin(curr.angle - Math.PI / 2);
                const x2 = rNext * Math.cos(next.angle - Math.PI / 2);
                const y2 = rNext * Math.sin(next.angle - Math.PI / 2);

                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);

                this.ctx.lineWidth = lineWidth;
                this.ctx.strokeStyle = this.getResilienceColor(curr.resilience, alphaBase);
                
                if (isCurrentYear) {
                    this.ctx.shadowColor = this.getResilienceColor(curr.resilience, 0.8);
                    this.ctx.shadowBlur = 8;
                } else {
                    this.ctx.shadowBlur = 0;
                }

                this.ctx.stroke();
            }
        });

        this.ctx.restore();

        // --- 3. Static Seasonal Quadrant Labels ---
        this.ctx.fillStyle = 'rgba(163, 184, 176, 0.65)';
        this.ctx.font = '10px "Inter", monospace';
        this.ctx.textAlign = 'center';

        this.ctx.fillText('SPRING EQUINOX', centerX, centerY - baseRadius - 40);
        this.ctx.fillText('AUTUMN EQUINOX', centerX, centerY + baseRadius + 48);
        this.ctx.textAlign = 'right';
        this.ctx.fillText('SUMMER SOLSTICE', centerX + baseRadius + 45, centerY + 4);
        this.ctx.textAlign = 'left';
        this.ctx.fillText('WINTER SOLSTICE', centerX - baseRadius - 45, centerY + 4);

        // --- 4. Color Legend & Telemetry ---
        const legendY = height - 38;
        const legendX = centerX - 110;

        const legendItems = [
            { color: '#3fc37c', label: 'Lush Green' },
            { color: '#8fb83b', label: 'Transitive' },
            { color: '#e5a93b', label: 'Stress' },
            { color: '#a8652d', label: 'Drought' }
        ];

        legendItems.forEach((item, idx) => {
            const x = legendX + idx * 60;
            this.ctx.fillStyle = item.color;
            this.ctx.beginPath();
            this.ctx.arc(x, legendY, 4, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.font = '9px "Inter", monospace';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, x + 7, legendY + 3);
        });

        // Header Title
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        this.ctx.font = 'bold 12px "Inter", monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('OVERLAPPING BIOREGIONAL RESILIENCE WEAVE', centerX, height - 16);
    }

    startAnimation() {
        const animate = () => {
            this.renderSpiral();
            this.animationId = requestAnimationFrame(animate);
        };
        this.animationId = requestAnimationFrame(animate);
    }
}

customElements.define('hs-resilience-spiral', HsResilienceSpiral);