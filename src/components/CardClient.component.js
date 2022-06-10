import { LitElement, html, css } from 'lit';

import qoute from '../assets/icons/quote.svg';
import client1 from '../assets/images/client-1.png';
import client2 from '../assets/images/client-2.png';
import client3 from '../assets/images/client-3.png';

const clientsIDs = {
  1: client1,
  2: client2,
  3: client3
};

export const tagName = 'card-client';
export class CardClient extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      position: { type: String },
      message: { type: String },
      clientId: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        position: relative;
      }
      .client-image {
        position: absolute;
        top: -1.5rem;
        left: 30%;
        z-index: 10;
        width:85px;
        height:85px;
        object-fit: cover;
      }
      .client {
        background-color: #fefefe;
        clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        border-radius: 1rem;
        height: 100%;
        padding-bottom: 1.5rem;
      }
      .client-header {
        padding-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .client-header__name {
        font-weight: bold;
      }
      .client-header-position {
        font-size: 0.8rem;
      }
      .client-message {
        font-size: 10px;
      }
      @media (min-width:424px) {
        .client-image {
          left: 40%;
        }  
        .client-message{
          font-size:1rem;
        }
      }
      @media (min-width:768px) {
        .container{
          width:425px;
          margin: 1rem auto;
        }
        .client-header__name{
          font-size:var(--size--medium);
        }
        .client-header__position{
          font-size:var(--size--small);
        }
      }
      @media (min-width:1024px) {
        .container{
          width:583px;
        }
      }
    `;
  }

  render() {
    return html`
      <section class="container">
        <img
          src=${clientsIDs[this.clientId]}
          alt="${this.name}"
          class="client-image"
        />
        <div class="client">
          <header class="client-header">
            <span class="client-header__name">${this.name}</span>
            <span class="client-header__position">${this.position}</span>
          </header>
          <img src="${qoute}" alt="qoute" />
          <p class="client-message">${this.message}</p>
        </div>
      </section>
    `;
  }
}
customElements.define(tagName, CardClient);
