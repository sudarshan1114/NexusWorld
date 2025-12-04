/* src/js/main.js */

// 1. Import Components
import { Accordion } from './components/accordion.js';
// import { Modal } from './components/modal.js'; 

// 2. The Nexus Orchestrator
const NexusUI = {
  // Store active instances
  components: [],

  // The "Wake Up" Function
  init() {
    console.log('Nexus UI: Initializing components...');

    // Initialize Accordions
    const accordionElements = document.querySelectorAll('[data-nxs-component="accordion"]');
    accordionElements.forEach(el => {
      this.components.push(new Accordion(el));
    });

    // Initialize Modals (Future)
    // ...
  }
};

// 3. Auto-Init on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  NexusUI.init();
});

// 4. Export for manual usage if needed
export default NexusUI;