import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    name: { type: Object }
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h1>${this.header} Nr. ${this.counter}!</h2>
      <p>${this.name?.first}</p>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
