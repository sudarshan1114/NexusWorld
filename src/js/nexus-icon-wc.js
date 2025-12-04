/* src/js/nexus-icon-wc.js */

class NexusIcon extends HTMLElement {
    // Watch for changes to the 'name' attribute
    static get observedAttributes() {
        return ['name'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const iconName = this.getAttribute('name');
        
        // If no name is provided, do nothing
        if (!iconName) return;

        // We inject the SVG markup pointing to the sprite
        // Note: Ensure the path 'dist/nexus-icons.svg' is correct relative to your HTML file
        this.innerHTML = `
            <svg class="nxs-icon" aria-hidden="true" focusable="false">
                <use href="dist/nexus-icons.svg#${iconName}"></use>
            </svg>
        `;
    }
}

// Register the web component
if (!customElements.get('nxs-icon')) {
    customElements.define('nxs-icon', NexusIcon);
}