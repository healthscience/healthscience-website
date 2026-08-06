/**
 * <hs-body-emulation>
 * A standalone Web Component rendering a rotatable 3D somatic body wireframe
 * with joint conduction nodes and breathing resonance animation.
 */
class HsBodyEmulation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // 3D Humanoid Vertices [x, y, z]
        this.vertices = [
            // Head (0 - 5)
            [0, 3.1, 0],       // 0: Head Top
            [0, 2.7, -0.35],   // 1: Head Back
            [0, 2.7, 0.35],    // 2: Head Front
            [-0.35, 2.7, 0],   // 3: Head Left
            [0.35, 2.7, 0],    // 4: Head Right
            [0, 2.2, 0],       // 5: Neck Base

            // Torso & Shoulders (6 - 14)
            [-1.1, 1.9, 0],    // 6: L Shoulder
            [1.1, 1.9, 0],     // 7: R Shoulder
            [0, 1.3, 0.3],     // 8: Sternum / Chest Front
            [0, 1.3, -0.3],    // 9: Upper Spine Back
            [-0.85, 1.2, 0],   // 10: L Rib Cage
            [0.85, 1.2, 0],    // 11: R Rib Cage
            [0, 0.4, 0],       // 12: Navel / Core
            [-0.65, -0.2, 0],  // 13: L Hip
            [0.65, -0.2, 0],   // 14: R Hip

            // Arms (15 - 18)
            [-1.65, 1.0, 0.1], // 15: L Elbow
            [1.65, 1.0, 0.1],  // 16: R Elbow
            [-2.05, 0.1, 0.2], // 17: L Hand
            [2.05, 0.1, 0.2],  // 18: R Hand

            // Legs (19 - 22)
            [-0.75, -1.5, 0.1],// 19: L Knee
            [0.75, -1.5, 0.1], // 20: R Knee
            [-0.85, -2.8, 0.25],// 21: L Foot
            [0.85, -2.8, 0.25]  // 22: R Foot
        ];

        // Structural Edges [vertexA, vertexB]
        this.edges = [
            // Head Cage
            [0,1], [0,2], [0,3], [0,4], [1,3], [3,2], [2,4], [4,1],
            [1,5], [2,5], [3,5], [4,5],

            // Collar & Torso Cage
            [5,6], [5,7], [5,8], [5,9],
            [6,8], [7,8], [6,9], [7,9],
            [6,10], [7,11], [8,10], [8,11],
            [10,12], [11,12], [8,12], [9,12],
            [12,13], [12,14], [13,14],

            // Left Arm
            [6,15], [15,17],
            // Right Arm
            [7,16], [16,18],

            // Left Leg
            [13,19], [19,21],
            // Right Leg
            [14,20], [20,22]
        ];

        this.angle = 0;
        this.animationId = null;
        this.color = '#3fc37c'; // Default river green conduction tone
    }

    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
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
            canvas.width = this.clientWidth || 400;
            canvas.height = this.clientHeight || 500;
        }
    }

    initCanvas() {
        const canvas = this.shadowRoot.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.handleResize();
    }

    project(v, scale, breathExpansion) {
        // Apply dynamic expansion to chest/torso vertices for breathing animation
        let vx = v[0];
        let vy = v[1];
        let vz = v[2];

        // Breath expansion applied to chest/ribs
        if (vy > 0.2 && vy < 2.0) {
            vx *= breathExpansion;
            vz *= breathExpansion;
        }

        // 3D Rotations around Y and slightly tilted X
        const cosY = Math.cos(this.angle);
        const sinY = Math.sin(this.angle);
        const x = vx * cosY - vz * sinY;
        const z = vx * sinY + vz * cosY;

        const cosX = Math.cos(0.15);
        const sinX = Math.sin(0.15);
        const y = vy * cosX - z * sinX;

        // Projection
        return { x: x * scale, y: -y * scale }; // Invert Y for Canvas space
    }

    renderBody(time) {
        if (!this.ctx) return;

        const canvas = this.shadowRoot.querySelector('canvas');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2 + 10;

        // Respiratory cadence (Breathing expansion scale)
        const breathCycle = Math.sin(time * 0.0018);
        const breathExpansion = 1.0 + breathCycle * 0.04;

        const baseScale = Math.min(width, height) / 8.5;

        this.ctx.clearRect(0, 0, width, height);

        // Somatic Field Glow
        const glow = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseScale * 4);
        glow.addColorStop(0, `${this.color}1F`);
        glow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = glow;
        this.ctx.fillRect(0, 0, width, height);

        this.ctx.save();
        this.ctx.translate(centerX, centerY);

        // Rotation increment
        this.angle += 0.008;

        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 1.6;
        this.ctx.lineJoin = 'round';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = this.color;

        // Render Wireframe Skeleton Edges
        this.ctx.beginPath();
        for (const [i, j] of this.edges) {
            const p1 = this.project(this.vertices[i], baseScale, breathExpansion);
            const p2 = this.project(this.vertices[j], baseScale, breathExpansion);
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
        }
        this.ctx.stroke();

        // Render Conduction Joint Nodes
        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < this.vertices.length; i++) {
            const pt = this.project(this.vertices[i], baseScale, breathExpansion);
            this.ctx.beginPath();
            this.ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
            this.ctx.fill();
        }

        this.ctx.restore();

        // Overlay Telemetry
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        this.ctx.font = 'bold 14px "Inter", monospace';
        this.ctx.textAlign = "center";
        this.ctx.shadowBlur = 0;
        this.ctx.fillText("BODY EMULATION", centerX, height - 40);
        
        this.ctx.font = '11px "Inter", monospace';
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        this.ctx.fillText("SOMATIC CONDUCTION | ACTIVE", centerX, height - 22);
    }

    startAnimation() {
        const animate = (time) => {
            this.renderBody(time);
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

customElements.define('hs-body-emulation', HsBodyEmulation);