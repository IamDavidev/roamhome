
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
            .header {
              margin-bottom:6rem;
            }
            .header > h1 {
              margin:0;
              font-weight:bold;
              font-size:var(--size--large);
              text-align:center;
            }
            .search, .categories {
              background: rgba(255, 255, 255, 0.8);
              position: relative;
              z-index:6;
            }
            .header-image{
              margin:0;
              padding:0;
              position:absolute;
              bottom:0;
              width:100%;
              left:0;
            }
            .header-image > img {
              width:100%;
            }
            .search {
              display: flex;
              flex-direction:row;
              justify-content:center;
              align-items:center;
              flex-wrap:wrap;
              gap:21px;
              padding:1rem 0;
            }
            .search__location {
              display:flex;
              flex-direction:column;
              gap:4px;
            }
            .search__location > h4,
            .search__date > h4,
            .search__guests > label > div > h4  {
              font-size:14px;
              font-weight:bold;
              color:var(--color--black);
              margin:0;
            }
            .search__location > span,
            .search__date > span {
              font-size:12px;
              color:var(--color--gray);
              margin:0;
            }
            .search__location{
              padding:0 1rem;
              border-right:1px solid var(--color--gray);
            }

            .categories > p > span{
              font-weight:bold;
              font-size:14px;
            }

            .search__guests{
              box-shadow:0 0 7px 1px var(--color--gray);
              padding: 6px 15px;
              border-radius:46px;
            }

            .search__guests > label {
              display:flex;
              flex-direction:row;
              justify-content:center;
              align-items:center;
            }
            .search__guests > label > div  > input{
              width:100px;
              border:none;
            }
            .search__guests > label > div > input:focus{
              outline:none;
            }
            .btn-search {
              border:none;
              background: linear-gradient(to right,#D33851, #C52A66);
              border-radius:42px;
              display:flex;
              flex-direction:row;
              justify-content:center;
              align-items:center;
              color:var(--color--white);
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
                    <h4>Check-In - Check-Out</h4>
                    <span>Add dates</span>
                  </div>
                  <div class="search__guests">
                    <label>
                      <div>
                         <h4>Guests</h4>
                         <input type="text" placeholder="Add guests"/>
                      </div>
                      <button class="btn-search"><img src="${search}" atl="search"/> <span>Search</span></button>
                    </label>
                  </div>
                </div>
                <div class="categories">
                  <p>Categories:
                  <span> Pet Friendly, Corporate Events, Family Vacation, Romantic Getaways</span>
                  </p>
                </div>
                <figure class="header-image">
                  <img src="${header}" alt="RoadHome" title="RoadHome" class="header-image"/>
                </figure>
            </header>
        `;
  }
}
customElements.define(tagName, Header);
