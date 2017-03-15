export class HelloElement extends HTMLElement {
  private _name: string;
  public name: string;
  // Monitor the 'name' attribute for changes.
  static get observedAttributes() {
    return ['name'];
  }
  // Respond to attribute changes.
  attributeChangedCallback(attr, oldValue, newValue) {
    console.log(attr, newValue);
    if (attr === 'name') {
      this._name = newValue;
      this.render();
    }
  }

  render() {
    this.innerHTML = `
    <div style="border: 1px solid #000">
      <h1> Attribute Changed Callback Element </h1>
      <p>${this._name}</p>
    </div>`;
  }
}
