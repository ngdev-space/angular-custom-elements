export class HelloGetAttribute extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const hello = this.getAttribute('static');
    this.render(hello + ' ' + name);
  }

  render(name) {
    this.innerHTML = `
    <div style="border: 1px solid #000">
      <h1> Static Attribute Component </h1>
      <p>${name}</p>
    </div>`;
  }
}
