import './components/hs-hub-navigator.js';
import './components/hs-lens-emulation.js';
import './components/hs-lens-poetry.js';
import './components/hs-lens-skeleton.js';

// New sub-components for Skeleton Lens
import './components/hs-von-mises-viz.js';
import './components/hs-scale-slider.js';
import './components/hs-daisy-engine.js';
import './components/hs-texture-extractor.js';

class StateController {
    constructor() {
        this.state = {
            activeLens: null,
            subState: null
        };
        
        this.lenses = ['emulation', 'poetry', 'skeleton'];
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'emulation';
        const [lens, ...rest] = hash.split('/');
        
        if (this.lenses.includes(lens)) {
            this.setLens(lens, rest.join('/'));
        } else {
            // Default or 404
            window.location.hash = '#emulation';
        }
    }

    setLens(lens, subState) {
        if (this.state.activeLens === lens && this.state.subState === subState) return;

        console.log(`Switching to lens: ${lens}${subState ? ' / ' + subState : ''}`);
        
        this.state.activeLens = lens;
        this.state.subState = subState;

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

        // Update Hub Navigator
        const hub = document.getElementById('hub');
        if (hub && hub.setActive) {
            hub.setActive(this.state.activeLens);
        }
    }
}

// Initialize the app
window.app = new StateController();
