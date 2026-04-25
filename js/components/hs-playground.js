class HsPlayground extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.state = {
            mode: 'grafting', // grafting, coupling, melding
            code: {
                grafting: `// HOPquery: Move Gelle to coherent state\n> swarm.initiate(peer_id)\n> evolution.start(fitness: resonance_score)\n> status: ADAPTING_TO_PULSE`,
                coupling: `// UI Coupling: Snapping components\n{\n  "component": "CoherenceLedger",\n  "anchor": "vessel-root",\n  "sync": "bioregional"\n}`,
                melding: `// Hardware Melding: Vagus-strap pulse\nsimulatePulse({\n  bpm: 65,\n  mode: 'resonant',\n  target: 'HOP-shim'\n})`
            },
            shimConnected: true
        };
        this.animationFrameId = null;
        this.frame = 0;
    }

    connectedCallback() {
        this.render();
        this.initCanvas();
    }

    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    setMode(mode) {
        this.state.mode = mode;
        this.render();
        this.initCanvas();
        // Update hash without triggering a full lens switch if possible
        // But for now, let the StateController handle it if needed
    }

    updateCode(code) {
        this.state.code[this.state.mode] = code;
    }

    initCanvas() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        
        const canvas = this.shadowRoot.getElementById('trace-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        
        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            this.frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if (this.state.mode === 'grafting') {
                this.drawGrafting(ctx, canvas);
            } else if (this.state.mode === 'coupling') {
                this.drawCoupling(ctx, canvas);
            } else if (this.state.mode === 'melding') {
                this.drawMelding(ctx, canvas);
            }

            this.animationFrameId = requestAnimationFrame(draw);
        };
        draw();
    }

    drawGrafting(ctx, canvas) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        const time = this.frame * 0.02;
        const capacity = Math.sin(time * 0.5) * 50 + 150;
        const coherence = Math.cos(time * 0.2);
        
        ctx.beginPath();
        for (let i = 0; i < Math.PI * 2; i += 0.05) {
            const r = capacity + (Math.sin(i * 10 + this.frame * 0.1) * 20 * coherence);
            const x = Math.cos(i) * r;
            const y = Math.sin(i) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = '#00ffcc';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Glow effect
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.restore();
    }

    drawCoupling(ctx, canvas) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        const count = 8;
        const radius = 100 + Math.sin(this.frame * 0.05) * 20;
        
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 + (this.frame * 0.01);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            ctx.fillStyle = '#ffb000';
            ctx.beginPath();
            ctx.rect(x - 15, y - 15, 30, 30);
            ctx.fill();
            
            // Connect to center
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(255, 176, 0, 0.3)';
            ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.arc(0, 0, 40, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffb000';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
    }

    drawMelding(ctx, canvas) {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        const time = this.frame * 0.1;
        const pulse = Math.abs(Math.sin(time)) * 0.5 + 0.5;
        
        // Vagus pulse ripples
        for (let i = 0; i < 3; i++) {
            const r = ((this.frame * 2 + i * 100) % 300);
            const alpha = 1 - (r / 300);
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 255, 204, ${alpha * 0.5})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Core
        ctx.beginPath();
        ctx.arc(0, 0, 50 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffcc';
        ctx.fill();
        
        ctx.restore();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                flex-direction: column;
                background: #0a0a0a;
                color: #00ffcc;
                font-family: 'Courier New', Courier, monospace;
                height: 100%;
                width: 100%;
                overflow: hidden;
                position: relative;
            }

            /* Terminal Grid Background */
            :host::before {
                content: "";
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background-image: 
                    linear-gradient(rgba(0, 255, 204, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 204, 0.05) 1px, transparent 1px);
                background-size: 30px 30px;
                pointer-events: none;
                z-index: 0;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 2rem;
                background: rgba(0, 0, 0, 0.8);
                border-bottom: 1px solid rgba(0, 255, 204, 0.3);
                z-index: 10;
            }

            .modes {
                display: flex;
                gap: 1rem;
            }

            .mode-tab {
                padding: 0.5rem 1rem;
                border: 1px solid rgba(0, 255, 204, 0.3);
                cursor: pointer;
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            }

            .mode-tab.active {
                background: #00ffcc;
                color: #0a0a0a;
                box-shadow: 0 0 15px #00ffcc;
            }

            .main-view {
                display: flex;
                flex: 1;
                z-index: 1;
            }

            .editor-pane {
                flex: 1;
                border-right: 1px solid rgba(0, 255, 204, 0.2);
                display: flex;
                flex-direction: column;
                background: rgba(0, 0, 0, 0.4);
            }

            .pane-header {
                padding: 0.5rem 1rem;
                font-size: 0.7rem;
                opacity: 0.6;
                text-transform: uppercase;
                border-bottom: 1px solid rgba(0, 255, 204, 0.1);
            }

            textarea {
                flex: 1;
                background: transparent;
                border: none;
                color: #ffb000; /* Neon Amber for editor */
                padding: 1.5rem;
                font-family: inherit;
                font-size: 0.9rem;
                line-height: 1.6;
                outline: none;
                resize: none;
            }

            .viz-pane {
                flex: 1.5;
                position: relative;
                display: flex;
                flex-direction: column;
            }

            canvas {
                flex: 1;
                width: 100%;
            }

            footer {
                padding: 0.5rem 2rem;
                background: rgba(0, 0, 0, 0.9);
                border-top: 1px solid rgba(0, 255, 204, 0.3);
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.7rem;
                z-index: 10;
            }

            .status-group {
                display: flex;
                gap: 20px;
            }

            .status-item {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #00ffcc;
                box-shadow: 0 0 5px #00ffcc;
            }

            .btn-action {
                background: transparent;
                border: 1px solid #00ffcc;
                color: #00ffcc;
                padding: 4px 12px;
                font-family: inherit;
                font-size: 0.7rem;
                cursor: pointer;
                text-transform: uppercase;
                transition: all 0.2s ease;
            }

            .btn-action:hover {
                background: rgba(0, 255, 204, 0.1);
                box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
            }

            .resonance-ripple {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                pointer-events: none;
                z-index: -1;
            }

        </style>
        
        <header>
            <div class="modes">
                <div class="mode-tab ${this.state.mode === 'coupling' ? 'active' : ''}" onclick="this.getRootNode().host.setMode('coupling')">Coupling</div>
                <div class="mode-tab ${this.state.mode === 'grafting' ? 'active' : ''}" onclick="this.getRootNode().host.setMode('grafting')">Grafting</div>
                <div class="mode-tab ${this.state.mode === 'melding' ? 'active' : ''}" onclick="this.getRootNode().host.setMode('melding')">Melding</div>
            </div>
            <div style="font-size: 0.8rem; font-weight: bold; letter-spacing: 2px;">GRAFTING_BENCH // ZERO_DRAFT</div>
        </header>

        <div class="main-view">
            <div class="editor-pane">
                <div class="pane-header">Input_Stream // ${this.state.mode.toUpperCase()}</div>
                <textarea spellcheck="false" oninput="this.getRootNode().host.updateCode(this.value)">${this.state.code[this.state.mode]}</textarea>
            </div>
            <div class="viz-pane">
                <div class="pane-header">Trace_Visualization // LIVE</div>
                <canvas id="trace-canvas"></canvas>
            </div>
        </div>

        <footer>
            <div class="status-group">
                <div class="status-item">
                    <div class="dot"></div>
                    HOP_SHIM: ACTIVE
                </div>
                <div class="status-item">
                    <div class="dot"></div>
                    COHERENCE: 0.9421
                </div>
            </div>
            <button class="btn-action" onclick="alert('Sending to BentoBoxDS...')">SEND TO BENTOBOXDS V2</button>
        </footer>
        `;
    }
}

customElements.define('hs-playground', HsPlayground);
