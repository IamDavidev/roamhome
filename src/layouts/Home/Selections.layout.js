import { LitElement, html, css } from 'lit';

import '../../components/CardSelection.component';

export const tagName = 'selection-layout';
export class Selection extends LitElement {
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
      .content-cards{
        display:flex;
        flex-direction:row;
        gap:28.5px;
        flex-wrap:wrap;
      }

      .selections__title{
        font-size:var(--size--large);
        color:var(--color--gray);
        font-weight:bold;
        margin:11px 0;
      }
      .selections__status{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:10px;
        justify-content:space-between;
        margin-bottom:28px;
      }
      .selections__status--description{
        font-size:var(--size--small);
        color:var(--color--gray);  
      }
      .selections__status--see-all{
        font-size:var(--size--medium);
        font-family:var(--font--family);
        color:#66101F;
        border:none;
        font-weight:500;
        background:transparent;
      }
      @media (min-width:768px) {
        .content-cards{
          justify-content:center;
        }
        .container {
          margin:122px 0
        }
      }
    `;
  }

  render() {
    return html`
      <section class="container">
        <div class="selections">
          <h2 class="selections__title">
            ${this.title}
          </h2>
          <div class="selections__status">
            <span class="selections__status--description">Take a look at the best places in the Work</span>
            <button class="selections__status--see-all">See All</button>
          </div>
        </div>   
        <section class="content-cards">
         <card-selection selection="Beloshi s Cliffhanger" image="Beloshis" bedroms="10" bathrooms="10" garages="10" price="$45,545" posted="Dr.Drake"></card-selection>
         <card-selection selection="Sky Penthouse |Luxurious 3bhk" image="Sky" bedroms="10" bathrooms="10" garages="10" price="$45,545" posted="Dr.Drake"></card-selection>
          <card-selection selection="Beloshis Cliffhanger" image="Mystic" bedroms="10" bathrooms="10" garages="10" price="$45,553" posted="Dr.Drake"></card-selection>
           <card-selection selection="Beloshi s Cliffhanger" image="Waking" bedroms="10" bathrooms="10" garages="10" price="$45,545" posted="Dr.Drake"></card-selection>
        </section>
        </section>
        `;
  }
}
customElements.define(tagName, Selection);
