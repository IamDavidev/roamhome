import { LitElement, html, css } from 'lit';

import hosting from '../../assets/images/hostinger.png';

export const tagName = 'hosting-layout';
export class Hosting extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        position: relative;
        min-height: 300px;
        padding: 1rem;
      }
      .hosting {
        /* position:absolute;
              top:0;
              left:1rem;
              width:100%;
              z-index:6;
              color:var(--color--white) */
        margin: 20px 0;
      }
      .hosting__title {
        font-size: var(--size--large);
        margin: 0;
      }
      .hosting__description {
        margin: 0;
      }
      .hosting__learn-btn {
        margin-top: 10px;
        border: none;
        font-size: var(--size--small);
        font-family: "Roboto", sans-serif;
        border-radius: 5px;
        color: var(--color--black);
        background: transparent;
        border: 1px solid var(--color--black);
      }
      .hosting-img {
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <section class="container">
        <div class="hosting">
          <h1 class="hosting__title">${this.title}</h1>
          <p class="hosting__description">
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
          <button class="hosting__learn-btn">Learn More</button>
        </div>
        <img src="${hosting}" alt="${this.title}" class="hosting-img" />
      </section>
    `;
  }
}
customElements.define(tagName, Hosting);
