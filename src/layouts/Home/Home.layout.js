import { LitElement, html, css } from 'lit';
import '../../styles/styles.global.css';

import './Destination.layout';
import './Hostin.layout';
import './Selections.layout';
import './Clients.layout';
import './Footer.layout';
import './header.layout';

export const tagName = 'home-layout';
export class Home extends LitElement {
  static get properties() {
    return {
      title: 'Chose Your Destination'
    };
  }

  static get styles() {
    return css`
            :host {
                display: block;
            }
            .container {
            }
            main{
              padding:35px;
            }
        `;
  }

  render() {
    return html`
            <section class="" ${this.title} >
              <div class="container">
                <header>
                  <header-home title="Vacation Rentals in India"></header-home>
                </header>
                <main>
                    <destination-layout title="Chose Your Destination"></destination-layout>
                    <hosting-layout title="Try Hosting"></hosting-layout>
                    <selection-layout title="Explore Our Selections"></selection-layout>
                    <clients-layout title="What Our Clients Say About Us" ></clients-layout>  
                  </main>
                  <footer>
                    <footer-home title="footer"></footer-home>
                  </footer>
              </div>
            </section>
            `;
  }
}
customElements.define(tagName, Home);

// ${this.title}
