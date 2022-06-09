import { LitElement, html, css } from 'lit';

import Goa from '../../assets/images/destination-1.png';
// import Himachal from '../../assets/images/destination-2.png`';
import Himachal from '../../assets/images/destination-2.png';
import kerala from '../../assets/images/destination-3.png';
import Rajasthan from '../../assets/images/destination-4.png';
import Uttrakhand from '../../assets/images/destination-5.png';


export const tagName = 'destination-layout';

export class Destination extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
        name: 'Chose Your Destination'
      }

    };
  }

  static get styles() {
    return css`
            :host {
                display: block;
            }
            .header h2{
              font-size: var(--size--large);
              margin:0;
            }
            .header span{
              color:var(--color--gray);
            }
            .destinations { 
              margin:40px 0;
              display:flex;
              flex-wrap:wrap;
              justify-content:center;
              align-items:center;
              gap:1rem;
            }
            .destinations__figure {
              display: flex;
              flex-direction: row;
              align-items: center;
              flex-wrap: wrap;
              justify-content: center;
              width:180px;
              margin:0;
            }
            .destinations__figure img {
              width: 100%;
              border-radius:.2rem;
              height: 100%;
            }
            .destinations__figure span {
              font-weight: bold;
              font-size:var(--size--small);
            }
        `;
  }

  render() {
    return html`
            <section class='container'>
              <header class="header">
                <h2>${this.title}</h2>
                <span>Take a look at the best places in the Work</span>
              </header>
              <div class="destinations">
                <figure  class="destinations__figure">
                  <img src="${Goa}" alt="Goa" title="Goa"/>
                  <span>Goa</span>
                </figure>
                <figure class="destinations__figure">
                  <img src="${Himachal}" alt="Himachal" title="Himachal"/>
                  <span>Himachal</span>
                </figure>
                <figure class="destinations__figure">
                  <img src="${kerala}" alt="Kerala" title="Kerala"/>
                  <span>kerala</span>
                </figure>
                <figure class="destinations__figure">
                  <img src="${Rajasthan}" alt="Rajasthan" titl="Rajasthan"/>
                  <span>Rajasthan</span>
                  </figure>
                <figure class="destinations__figure">
                  <img src="${Uttrakhand}" alt="Uttrakand" title="Uttrakhand"/>
                  <span>Uttrakhand</span>
                </figure>
            </section>
        `;
  }
}
customElements.define(tagName, Destination);
