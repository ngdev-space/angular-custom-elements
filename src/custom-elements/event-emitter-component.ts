export class HelloWorldEmitter extends HTMLElement {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
    <div style="border: 1px solid #000">
      <h1> Emitter Custom Element </h1>
      <button class="button">Click me!</button>
    </div>`;

    const button = this.querySelectorAll('.button')[0];
    button.addEventListener('click', this.clickHandler);
  }

  disconnectedCallback() {
    const button = this.querySelectorAll('.button')[0];
    button.removeEventListener('click', this.clickHandler);
  }

  clickHandler(e) {
    e.preventDefault();
    const event = new CustomEvent('test', { 'detail': `Hello from emitter at ${new Date().toISOString()}.` });
    this.dispatchEvent(event);
  }

}
