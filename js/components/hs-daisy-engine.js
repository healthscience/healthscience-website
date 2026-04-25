class HsDaisyEngine extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initSim();
    }

    initSim() {
        const canvas = this.shadowRoot.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const dots = Array.from({ length: 100 }, () => ({
            x: Math.random() * 300,
            y: Math.random() * 150,
            type: Math.random() > 0.5 ? 'white' : 'black',
            size: 2 + Math.random() * 4
        }));

        const animate = () => {
            ctx.clearRect(0, 0, 300, 150);
            
            // Draw "planet" background
            ctx.fillStyle = '#fcfaf2';
            ctx.fillRect(0, 0, 300, 150);

            dots.forEach(dot => {
                ctx.fillStyle = dot.type === 'white' ? '#fff' : '#333';
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Subtle growth/shrink
                dot.size += (Math.random() - 0.5) * 0.1;
                dot.size = Math.max(1, Math.min(8, dot.size));
            });

            ctx.fillStyle = '#1a2a22';
            ctx.font = '10px monospace';
            ctx.fillText('DAISYWORLD_SIM: ACTIVE', 10, 20);
            ctx.fillText(`ALBEDO: ${(0.3 + Math.random() * 0.1).toFixed(2)}`, 10, 35);

            requestAnimationFrame(animate);
        };
        animate();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                border: 1px solid #dcd3c1;
                margin: 1rem 0;
                overflow: hidden;
            }
            canvas {
                width: 100%;
                height: auto;
                display: block;
            }
        </style>
        <canvas width="300" height="150"></canvas>
        `;
    }
}
customElements.define('hs-daisy-engine', HsDaisyEngine);
