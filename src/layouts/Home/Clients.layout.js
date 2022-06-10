import { LitElement, html, css } from 'lit';

import '../../components/CardClient.component';

import next from '../../assets/icons/next.svg';
import back from '../../assets/icons/back.svg';
import clients from '../../_data/clients.data';


export const tagName = 'clients-layout';
export class Clients extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .nav-clients{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:1rem 0;
      }
      .nav-clients h2{
        text-align:center;
      }
      .btn-navigation {
        border:none;
        background: none;
     }
     .container_nav_position{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        margin:0;
        margin-top:.5rem;
        margin-bottom:3rem;
     }
     .container_nav_position >  div{
        width:10px;
        height:10px;
        background: #000;
        border-radius:50%;
     }
     .container_nav_position .active{
        background: var(--color--red--primary);
        width:15px;
        height:15px;
        border-radius:50%;
     }
     @media (min-width:424px){
       .container {
         margin:115px 0;
       }
       .nav-clients{
         justify-content:center;
         gap:10px;
       }
     }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      count: { type: Number },
      positonNav: { type: Array },
      cardSelected: { type: Object }
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.positonNav = [];
  }


  positionNavHandler(position) {
    this.positonNav.map(nav => nav.classList.remove('active'));
    this.positonNav[position].classList.add('active');
  }

  setAttributesCard(position) {
    this.card.setAttribute('name', clients[position].name);
    this.card.setAttribute('position', clients[position].position);
    this.card.setAttribute('message', clients[position].message);
    this.card.setAttribute('clientId', clients[position].clientId);
  }

  _navBack() {
    this.count -= 1;
    if (this.count === -1) this.count = 4;

    this.setAttributesCard(this.count);
    this.positionNavHandler(this.count);
  }

  _navNext() {
    this.count += 1;
    if (this.count === 5) this.count = 0;

    this.setAttributesCard(this.count);
    this.positionNavHandler(this.count);
  }

  firstUpdated() {
    const Btns = this.shadowRoot.querySelectorAll('.nav-postion');
    this.positonNav = Array.from(Btns);
    this.positonNav[this.count].classList.add('active');
    this.card = this.shadowRoot.querySelector('card-client');
  }

  render() {
    return html`
      <section class="container">
        <nav class="nav-clients">
          <button  id="btn-back" class="btn-navigation"  @click=${this._navBack}>
            <img src="${back}" alt="back" />
          </button>
          <h2>${this.title}</h2>
          <button id="btn-click" class="btn-navigation" @click=${this._navNext}>
            <img src="${next}" alt="next" />
          </button>
        </nav>
        <div class="container_nav_position">
          <div class="nav-postion"></div>
          <div class="nav-postion"></div>
          <div class="nav-postion"></div>
          <div class="nav-postion"></div>
          <div class="nav-postion"></div>
        </div>
        <section>
          <card-client name="Kato Drake Smith" position="App Developer" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim " clientId="1"></card-client>
        </section>
      </section>
    `;
  }
}
customElements.define(tagName, Clients);
