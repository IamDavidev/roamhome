
import { LitElement, html, css } from 'lit';

import search from '../../assets/icons/search.svg';
import header from '../../assets/images/image-header.png';

export const tagName = 'header-home';
export class Header extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Vacation Rentals in India';
  }

  static get styles() {
    return css`
            :host {
                display: block;
            }
            .container {
              position: relative;
            }
            .header,.search {
              background: rgba(255, 255, 255, 0.8);
              position: relative;
              z-index:6;
            }
            .header-image{
              margin:0;
              padding:0;
              position:absolute;
              top:0;
              width:100%;
              left:0;
            }
            .header-image > img {
              width:100%;
            }
        `;
  }

  render() {
    return html`
            <header class='container'>
                <div class="header">
                  <h1 class="header__title">${this.title}</h1>
                  <span class="header__description">Find and book unique accommodation on Rentals</span>
                </div>
                <div class="search">
                  <div class="search__location">
                    <h4>Location</h4>
                    <span>Where are you going?</span>
                  </div>
                  <div class="search__date">
                    <h4>DatesCheck-In - Check-Out</h4>
                    <span>Add dates</span>
                  </div>
                  <div class="search__guests">
                    <label>
                      <div>
                         <span>Guests</span>
                      </div>
                      <button><img src="${search}" atl="search"/> Search</button>
                    </label>
                  </div>
                </div>
                <div>
                  <p>Categories:</p>
                </div>
                <figure class="header-image">
                  <img src="${header}" alt="RoadHome" title="RoadHome" class="header-image"/>
                </figure>
            </header>
        `;
  }
}
customElements.define(tagName, Header);
