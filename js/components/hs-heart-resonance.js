/**
 * <hs-heart-resonance>
 * A standalone web component that renders a pulsing icosahedron (heart)
 * Ported from bentoboxds/organSurface.vue
 */
class HsHeartResonance extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.phi = (1 + Math.sqrt(5)) / 2;
        this.vertices = [
            [-1, this.phi, 0], [1, this.phi, 0], [-1, -this.phi, 0], [1, -this.phi, 0],
            [0, -1, this.phi], [0, 1, this.phi], [0, -1, -this.phi], [0, 1, -this.phi],
            [this.phi, 0, -1], [this.phi, 0, 1], [-this.phi, 0, -1], [-this.phi, 0, 1]
        ];
        
        this.angle = 0;
        this.animationId = null;
        this.bpm = 72;
        this.color = '#00f2ff'; // Default cyan emulation color
    }

    static get observedAttributes() {
        return ['bpm', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'bpm') this.bpm = parseInt(newValue) || 72;
        if (name === 'color') this.color = newValue;
    }

    connectedCallback() {
        this.render();
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
            canvas.width = this.clientWidth || 800;
            canvas.height = this.clientHeight || 600;
        }
    }

    initCanvas() {
        const canvas = this.shadowRoot.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.handleResize();
    }

    project(v, scale) {
        // Simple 3D to 2D rotation & projection
        // Rotate around Y axis
        const x = v[0] * Math.cos(this.angle) - v[2] * Math.sin(this.angle);
        const z = v[0] * Math.sin(this.angle) + v[2] * Math.cos(this.angle);

        // Rotate around X axis slightly for better perspective
        const y = v[1] * Math.cos(0.5) - z * Math.sin(0.5);

        // Orthographic projection
        return { x: x * scale, y: y * scale };
    }

    renderHeart(time) {
        if (!this.ctx) return;

        const canvas = this.shadowRoot.querySelector('canvas');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        // Pulse logic
        const bps = this.bpm / 60;
        const period = 1000 / bps;
        const t = (time % period) / period;
        let pulseValue = 1.0;

        if (t < 0.15) {
            pulseValue = 1.0 + Math.sin((t / 0.15) * Math.PI) * 0.15;
        } else if (t > 0.25 && t < 0.4) {
            pulseValue = 1.0 + Math.sin(((t - 0.25) / 0.15) * Math.PI) * 0.1;
        }

        const scale = (Math.min(width, height) / 8) * pulseValue;
        
        this.ctx.clearRect(0, 0, width, height);

        // Background glow
        const glow = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, scale * 3);
        glow.addColorStop(0, `${this.color}26`); // 15% opacity hex
        glow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = glow;
        this.ctx.fillRect(0, 0, width, height);

        this.ctx.save();
        this.ctx.translate(centerX, centerY);

        this.angle += 0.01;

        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.lineJoin = 'round';
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = this.color;

        this.ctx.beginPath();
        for (let i = 0; i < this.vertices.length; i++) {
            for (let j = i + 1; j < this.vertices.length; j++) {
                const d2 = 
                    Math.pow(this.vertices[i][0] - this.vertices[j][0], 2) +
                    Math.pow(this.vertices[i][1] - this.vertices[j][1], 2) +
                    Math.pow(this.vertices[i][2] - this.vertices[j][2], 2);

                if (d2 < 4.1 && d2 > 3.9) {
                    const p1 = this.project(this.vertices[i], scale);
                    const p2 = this.project(this.vertices[j], scale);
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                }
            }
        }
        this.ctx.stroke();
        this.ctx.restore();

        // Labeling
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.ctx.font = 'bold 18px "Inter", sans-serif';
        this.ctx.textAlign = "center";
        this.ctx.shadowBlur = 0;
        this.ctx.fillText("HEART RESONANCE", centerX, centerY + scale + 60);
        this.ctx.font = '14px "Inter", sans-serif';
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        this.ctx.fillText(`${this.bpm} BPM | RESONANCE ACTIVE`, centerX, centerY + scale + 85);
    }

    startAnimation() {
        const animate = (time) => {
            this.renderHeart(time);
            this.animationId = requestAnimationFrame(animate);
        };
        this.animationId = requestAnimationFrame(animate);
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
            }
            canvas {
                display: block;
                width: 100%;
                height: 100%;
            }
        </style>
        <canvas></canvas>
        `;
    }
}

customElements.define('hs-heart-resonance', HsHeartResonance);
