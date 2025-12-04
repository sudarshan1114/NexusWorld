/* src/js/components/accordion.js */

export class Accordion {
  constructor(element) {
    this.root = element;
    this.triggers = this.root.querySelectorAll('.nxs-accordion-trigger');
    
    // Bind events immediately
    this.init();
  }

  init() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => this.toggle(e));
    });
  }

  toggle(e) {
    const trigger = e.currentTarget;
    // Find the target content ID from aria-controls
    const contentId = trigger.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    if (!content) return;

    // Toggle State
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    // Switch accessibility attributes
    trigger.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle Visuals (CSS handles the animation via max-height or display)
    if (isExpanded) {
      content.classList.remove('is-open');
      content.style.maxHeight = null; // Collapse
    } else {
      content.classList.add('is-open');
      content.style.maxHeight = content.scrollHeight + "px"; // Expand to fit
    }
  }
}