class HsCueSpaceButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const isActive = this.hasAttribute('active') || this.classList.contains('active');
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: inline-block;
            }
            button {
                background: none;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                text-decoration: none;
                color: #1a2a22;
                opacity: ${isActive ? '1' : '0.6'};
                transition: all 0.3s ease;
                border-bottom: 1px solid ${isActive ? '#2d5a27' : 'transparent'};
                font-weight: ${isActive ? 'bold' : 'normal'};
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 0.7rem;
            }
            button:hover {
                opacity: 1;
                color: #e67e22;
            }
            .popover {
                display: none;
                position: absolute;
                background: white;
                border: 1px solid #dcd3c1;
                padding: 1.5rem;
                width: 300px;
                z-index: 100;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                margin-top: 0.5rem;
                text-transform: none;
                letter-spacing: normal;
                font-weight: normal;
                color: #1a2a22;
                font-family: sans-serif;
            }
            :host(:hover) .popover {
                display: block;
            }
            h4 {
                margin: 0 0 0.5rem 0;
                color: #2d5a27;
                font-size: 1rem;
            }
            p {
                margin: 0 0 1rem 0;
                font-size: 0.9rem;
                line-height: 1.4;
            }
            ul {
                margin: 0;
                padding-left: 1.2rem;
                font-size: 0.85rem;
            }
            li {
                margin-bottom: 0.5rem;
            }
            strong {
                color: #2d5a27;
            }
        </style>
        <div style="position: relative;">
            <button><slot></slot></button>
            <div class="popover">
                <h4>Cue Spaces</h4>
                <p>The specialized environments where context is deepened. Cue Spaces are the interactive intersections of a story.</p>
                <ul>
                    <li><strong>Contextual Hubs:</strong> These are not static folders, but dynamic spaces where dialogues, specific media, and relevant links are brought together.</li>
                    <li><strong>Pattern Extraction:</strong> Within a Cue Space, the protocol looks for the same "texture" of health across multiple inputs, ensuring that a "Heart Rate Cue" and a "Mood Cue" speak the same language.</li>
                </ul>
            </div>
        </div>
        `;
    }
}

customElements.define('hs-cue-space-button', HsCueSpaceButton);
