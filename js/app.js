import './components/hs-hub-navigator.js';
import './components/hs-lens-emulation.js';
import './components/hs-lens-poetry.js';
import './components/hs-lens-skeleton.js';
import './components/hs-playground.js';

// New sub-components for Skeleton Lens
import './components/hs-von-mises-viz.js';
import './components/hs-scale-slider.js';
import './components/hs-daisy-engine.js';
import './components/hs-texture-extractor.js';

class StateController {
    constructor() {
        this.state = {
            activeLens: null,
            subState: null,
            playgroundActive: false
        };
        
        this.lenses = ['emulation', 'poetry', 'skeleton', 'playground'];
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'emulation';
        const [lens, ...rest] = hash.split('/');
        
        if (lens === 'playground') {
            this.setPlayground(true, rest[0]);
        } else if (this.lenses.includes(lens)) {
            this.setLens(lens, rest.join('/'));
        } else {
            // Default or 404
            window.location.hash = '#emulation';
        }
    }

    setPlayground(active, mode) {
        console.log(`Playground state: ${active}, mode: ${mode}`);
        this.state.playgroundActive = active;
        
        const pg = document.getElementById('playground');
        if (pg) {
            if (active) {
                pg.classList.add('active');
                if (mode && pg.setMode) pg.setMode(mode);
            } else {
                pg.classList.remove('active');
            }
        }

        // If playground is active from a lens (not full screen), we might want to keep the lens active
        // For now, let's treat playground as a lens itself if called via #playground
        if (active && !this.state.activeLens) {
            this.state.activeLens = 'playground';
        }
        
        this.updateUI();
    }

    setLens(lens, subState) {
        if (this.state.activeLens === lens && this.state.subState === subState && !this.state.playgroundActive) return;

        console.log(`Switching to lens: ${lens}${subState ? ' / ' + subState : ''}`);
        
        this.state.activeLens = lens;
        this.state.subState = subState;
        this.state.playgroundActive = false; // Reset playground when switching lenses normally

        this.updateUI();
    }

    updateUI() {
        // Update lens visibility
        document.querySelectorAll('.lens').forEach(el => {
            if (el.id === this.state.activeLens) {
                el.classList.add('active');
                if (el.onActivate) el.onActivate(this.state.subState);
            } else {
                el.classList.remove('active');
            }
        });

        // Toggle playground class on body/app for layout changes
        if (this.state.playgroundActive) {
            document.body.classList.add('playground-open');
        } else {
            document.body.classList.remove('playground-open');
        }

        // Update Toggle Button Text in Skeleton Lens
        const skeleton = document.getElementById('skeleton');
        if (skeleton && skeleton.shadowRoot) {
            const toggleBtn = skeleton.shadowRoot.getElementById('playground-toggle');
            if (toggleBtn) {
                toggleBtn.textContent = this.state.playgroundActive ? '[ CLOSE GRAFTING BENCH ]' : '[ OPEN GRAFTING BENCH ]';
            }
        }

        const pg = document.getElementById('playground');
        if (pg) {
            if (this.state.playgroundActive) {
                pg.classList.add('active');
            } else {
                pg.classList.remove('active');
            }
        }

        // Update Hub Navigator
        const hub = document.getElementById('hub');
        if (hub && hub.setActive) {
            hub.setActive(this.state.activeLens);
        }
    }

    togglePlayground(mode) {
        this.state.playgroundActive = !this.state.playgroundActive;
        if (this.state.playgroundActive) {
            if (mode) {
                const pg = document.getElementById('playground');
                if (pg && pg.setMode) pg.setMode(mode);
            }
        }
        this.updateUI();
    }
}

// Initialize the app
window.app = new StateController();
