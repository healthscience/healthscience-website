import './components/hs-hub-navigator.js';
import './components/hs-emulation-trinity.js';
import './components/hs-organon-emulation.js';
import './components/resonance-pulse.js';
import './components/hs-lens-emulation.js';
import './components/hs-lens-poetry.js';
import './components/hs-lens-skeleton.js';
import './components/hs-lens-roadmap.js';
import './components/hs-playground.js';
import './components/hs-lens-explorer.js';

// New sub-components for Skeleton Lens
import './components/hs-gaia-protocol.js';
import './components/hs-beebee.js';
import './components/hs-beebee-section.js';
import './components/hs-heli-section.js';
import './components/hs-strata-participation.js';
import './components/hs-emulation-section.js';
import './components/hs-interplay-section.js';
import './components/hs-story-section.js';
import './components/hs-cue-space-button.js';
import './components/hs-repository-truth.js';
import './components/hs-glossary.js';
import './components/hs-maths.js';
import './components/hs-resonagents-trinity.js';
import './components/hs-von-mises-viz.js';
import './components/hs-scale-slider.js';
import './components/hs-daisy-engine.js';
import './components/hs-texture-extractor.js';
import './components/hs-hop-diagram.js';
import './components/hs-coherence-ledger.js';
import './components/hs-besearch.js';
import './components/hs-resonagents.js';
import './components/hs-library.js';
import './components/hs-ptop-storage.js';
import './components/hs-cue-currency.js';
import './components/hs-safeflow-ecs.js';
import './components/hs-consilience-weave.js';

// Sub-Organons
import './components/organon/hs-organon-finland.js';
import './components/organon/hs-organon-scotland.js';
import './components/organon/hs-organon-andes.js';
import './components/organon/hs-organon-beems.js';

// Organs
import './components/organon/organs/organon-primer.js';
import './components/organon/organs/organon-peers.js';
import './components/organon/organs/organon-conduction.js';
import './components/organon/organs/organon-besearch.js';
import './components/organon/organs/organon-resonance.js';

class StateController {
    constructor() {
        this.state = {
            activeLens: 'emulation',
            subState: null,
            playgroundActive: false,
            glossaryActive: false
        };
        
        this.lenses = [
            'emulation', 'poetry', 'skeleton', 'playground', 'explorer', 'roadmap',
            'organon', 'hop-diagram', 'coherence-ledger', 'besearch', 'resonagents', 
            'library', 'ptop-storage', 'cue-currency', 'safeflow-ecs', 'consilience-weave', 
            'beebee', 'heli', 'glossary', 'maths',
            'organon-primer', 'organon-peers', 'organon-conduction', 'organon-besearch', 'organon-resonance'
        ];

        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });
        window.addEventListener('open-glossary', () => { window.location.hash = '#glossary'; });
        window.addEventListener('open-maths', () => { window.location.hash = '#maths'; });
        window.addEventListener('close', () => {
            if (this.state.activeLens === 'glossary' || this.state.activeLens === 'maths') {
                window.history.back();
            }
        });
        
        if (!window.location.hash) {
            window.location.hash = '#emulation';
        }
        
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'emulation';
        let [lens, ...rest] = hash.split('/');
        

        if (lens.includes('?')) {
            lens = lens.split('?')[0];
        }
        
        if (lens === 'playground') {
            this.setPlayground(true, rest[0]);
        } else if (this.lenses.includes(lens)) {
            this.setLens(lens, rest.join('/')); 
        } else {
            console.warn(`[StateController] Unknown lens "${lens}", falling back to #emulation`);
            window.location.hash = '#emulation';
        }
    }

    setPlayground(active, mode) {
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
        if (active && !this.state.activeLens) {
            this.state.activeLens = 'playground';
        }
        this.updateUI();
    }

    setLens(lens, subState) {
        if (this.state.activeLens === lens && this.state.subState === subState && !this.state.playgroundActive) return;

        this.state.activeLens = lens;
        this.state.subState = subState;
        this.state.playgroundActive = false;

        this.updateUI();
    }

    updateUI() {
        const activeLens = this.state.activeLens;
        const sub = this.state.subState;

        // 1. Top-Level Lens Activation
        document.querySelectorAll('.lens').forEach(el => {
            const isTargetLens = el.id === activeLens || 
                (activeLens === 'organon' && el.id === 'emulation') || 
                (activeLens === 'emulation' && el.id === 'organon');

            if (isTargetLens) {
                el.classList.add('active');
                if (el.onActivate) {
                    el.onActivate(sub);
                }
            } else {
                el.classList.remove('active');
            }
        });

        // 2. Scoped Sub-Organon Panel Activation
        const subOrganonPanels = document.querySelectorAll('.sub-organon-panel');
        subOrganonPanels.forEach(panel => {
            const region = panel.getAttribute('data-region');
            const isSubTarget = sub && (
                panel.id === `organon-${sub}` || 
                region === sub
            );

            if (isSubTarget) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        // 3. Update Hub Navigator
        const hub = document.getElementById('hub');
        if (hub && hub.setActive) {
            hub.setActive(activeLens);
        }
    }

    togglePlayground(mode) {
        this.state.playgroundActive = !this.state.playgroundActive;
        if (this.state.playgroundActive && mode) {
            const pg = document.getElementById('playground');
            if (pg && pg.setMode) pg.setMode(mode);
        }
        this.updateUI();
    }
}

window.app = new StateController();