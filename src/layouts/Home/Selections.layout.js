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
    `;
  }

  render() {
    return html`
      <section class="container">
        <div>
          <h2>
            ${this.title}
          </h2>
          <span>Take a look at the best places in the Work</span>
        </div>   
        <section class="content-cards">
         <card-selection selection="Beloshi s Cliffhanger" image="Beloshis" bedroms="10" bathrooms="10" garages="10" price="45545" posted="Dr.Drake"></card-selection>
         <card-selection selection="Sky Penthouse |Luxurious 3bhk" image="Sky" bedroms="10" bathrooms="10" garages="10" price="45545" posted="Dr.Drake"></card-selection>
          <card-selection selection="Beloshis Cliffhanger" image="Mystic" bedroms="10" bathrooms="10" garages="10" price="45553" posted="Dr.Drake"></card-selection>
           <card-selection selection="Beloshi s Cliffhanger" image="Waking" bedroms="10" bathrooms="10" garages="10" price="45545" posted="Dr.Drake"></card-selection>
        </section>
        </section>
        `;
  }
}
customElements.define(tagName, Selection);
