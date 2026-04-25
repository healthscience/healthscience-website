class HsVonMisesViz extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.draw();
    }

    draw() {
        const canvas = this.shadowRoot.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.35;

        // Simple animation loop
        let frame = 0;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Draw circle
            ctx.strokeStyle = 'rgba(45, 42, 34, 0.2)';
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.stroke();

            // Draw noisy "biological" stream wrapped
            ctx.strokeStyle = '#2d5a27';
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            for (let i = 0; i <= 360; i++) {
                const angle = (i * Math.PI) / 180;
                // Add noise and a base "pulse"
                const noise = Math.sin(angle * 10 + frame * 0.05) * 5 + Math.random() * 2;
                const base = Math.sin(angle - Math.PI / 2) * 15; // Peak at "noon"
                const r = radius + base + noise;
                
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Labels
            ctx.fillStyle = '#1a2a22';
            ctx.font = '10px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('00:00', centerX, centerY - radius - 20);
            ctx.fillText('12:00', centerX, centerY + radius + 25);

            frame++;
            requestAnimationFrame(animate);
        };
        animate();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 100%;
                max-width: 400px;
                margin: 2rem auto;
                background: #fdfaf6;
                border: 1px solid #dcd3c1;
                border-radius: 50%;
                aspect-ratio: 1;
            }
            canvas {
                width: 100%;
                height: 100%;
            }
        </style>
        <canvas width="400" height="400"></canvas>
        `;
    }
}
customElements.define('hs-von-mises-viz', HsVonMisesViz);
