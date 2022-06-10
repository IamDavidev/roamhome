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
        margin:50px 0;
        position: relative;
        min-height: 300px;
        padding: 1rem;
        position:relative;
        overflow:hidden;
        display:flex;
        align-items:center;
        border-radius:1rem;
      }
      .hosting {
        color:var(--color--white) ;
        position:relative;
        z-index:6;
        margin: 20px 0;
      }
      .hosting__title {
        font-size: var(--size--large);
        margin: 0;
      }
      .hosting__description {
        width:30ch;
      }
      .hosting__learn-btn {
        margin-top: 10px;
        border: none;
        font-size: var(--size--small);
        font-family: "Roboto", sans-serif;
        border-radius: 5px;
        color: var(--color--white);
        background: transparent;
        border: 1px solid var(--color--white);
      }
      .hosting-img {
        position: absolute;
        top:0;
        left:0;
        z-index:3;
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
