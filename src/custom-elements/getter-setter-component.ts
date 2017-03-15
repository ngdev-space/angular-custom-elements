export class HelloGetterSetter extends HTMLElement {
  private _name: string;

  get name () {
    return this._name;
  }

  set name (value) {
    if (this._name !== value) {
      this._name = value;

      this.render();
    }
  }

  render() {
    this.innerHTML = `
    <div style="border: 1px solid #000">
      <h1> Setter/Getter Element </h1>
      <p>${this.name}</p>
    </div>`;
  }
}
