import { LitElement, html, css } from 'lit';

export const tagName = 'website-example';
export class WebsiteLayout extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  static styles = [
    css`
            :host {
                display: block;
            }
        `
  ];

  render() {
    return html`
      <div>
        <h1>Hello ${this.name}!</h1>
      </div>
    `;
  }
}
customElements.define(tagName, WebsiteLayout);
