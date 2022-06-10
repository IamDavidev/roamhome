import { LitElement, html, css } from 'lit';

import Beloshis from '../assets/images/belshis.png';
import Sky from '../assets/images/sky.png';
import Mystic from '../assets/images/mystic.png';
import Waking from '../assets/images/waking.png';

const destinations = {
  Beloshis,
  Sky,
  Mystic,
  Waking
};


export const tagName = 'card-selection';
export class Card extends LitElement {
  static get properties() {
    return {
      selection: { type: String },
      image: { type: String },
      bedroms: { type: String },
      bathrooms: { type: String },
      garages: { type: String },
      price: { type: String },
      posted: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        gap:14px;
        border:1px solid var(--color--gray);
        border-radius:35px;
        background: transparent;
        padding:14px;
        box-sizing:border-box;
      }
      .selections-img {
        margin:0;
      }
      .statistics {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
      }
      .statistics__home {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        color:var(--color--gray);
      }
      .statistics__footer {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        gap:2rem;
        margin:1rem 0;
      }
      .statistics__footer--price-btn {
        border:none;
        border-radius:35px;
        font-family:var(--font--family);
        background: var(--color--red--primary);
        padding:0 .5rem;
      }
    `;
  }

  render() {
    return html`
      <article class="container">
        <figure class="selections-img">
          <img src="${destinations[this.image]}" />
        </figure>
        <div class="statistics">
          <h3>${this.selection}</h3>
          <div class="statistics__home">
            <span>${this.bedroms} Bedrooms</span>
            <span>${this.bathrooms} Bathrooms</span>
          </div>
          <div class="statistics__footer">
            <span class="statistics__footer--posted">Posted by ${this.posted}</span>
            <button class="statistics__footer--price-btn">
              <span>
                ${this.price}
              </span>
            </button>
          </div>
        </div>
      </article>
    `;
  }
}
customElements.define(tagName, Card);
