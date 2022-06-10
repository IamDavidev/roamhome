import { LitElement, html, css } from 'lit';

import logo from '../../assets/icons/logo-white.svg';

import fb from '../../assets/icons/fb.svg';
import metamask from '../../assets/icons/metamask.svg';
import github from '../../assets/icons/github.svg';
import send from '../../assets/icons/env.svg';
import ig from '../../assets/icons/instagram.svg';
import figma from '../../assets/icons/figma.svg';

export const tagName = 'footer-home';
export class Footer extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'footer';
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        background:var(--color--gray);
        padding:1rem;
        color:var(--color--white);
        display:flex;
        flex-direction:column;
        gap:65px;
      }
      .container-logo {
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:flex-end;
        gap:10px;
        font-weight:bold;
      }
      .list-footer{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
        gap:10px;
      }
      .footer--title{
        font-size:var(--size--medium);
        color:var(--color--white);
        font-weight:bold;
        margin:0;
        margin-bottom:32px;
      }
      .content-socials{
        display:flex;
        flex-direction:row;
        gap:10px;
        justify-content:center;
        flex-wrap:wrap;
        align-items:center;
      }
      .label-subscribe{
        margin-top:24px;
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:0;
      }
      .footer--text{
        margin:24px 0;
      }
      .label-subscribe > input::placeholder {
        font-family: var(--font--family);
      }
      .label-subscribe > input {
        font-family: var(--font--family);
      }
      .label-subscribe button{
        border:none;
        margin:0;
        padding: 0.2rem;
        font-family:var(--font--family);
        background: var(--color--red--primary);
      }
      .policy{
        border-top:1px solid var(--color--gray--light);
        display:flex;
        flex-direction:row;
        align-items:center;
        flex-wrap:wrap;
        gap:10px;
        justify-content:center;
      }
      .menu{
        margin:0;
        margin-bottom:32px;
      }
    `;
  }

  render() {
    return html`
      <section class="container" ${this.title}>
        <div class="container-logo">
          <img src="${logo}" alt="RoamHome" title="RoamHome"/>
          <span>RoamHome</span>
        </div>
        <div>
          <div class="menu">
            <h3  class="footer--title">Resources</h3>
            <ul class="list-footer">
            
              <li>Contact Us</li>
              <li>Book Your Stay</li>
              <li>Become a Host</li>
              <li>Creers</li>
            </ul>
          </div>
          <div calss="menu">
            <h3 class="footer--title">Support</h3>
            <ul class="list-footer">
              <li>Help Center</li>
              <li>Safety information</li>
              <li>Cancellation options</li>
              <li>Our COVID-19 Response</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="footer--title">Lets do it !</h3>
          <figure class="content-socials">
              <img src="${fb}" alt="facebook" title="facebook"/>
              <img src="${metamask}" alt="metamask" title="metamask" />
              <img src="${github}" alt="github" title="github" />
              <img src="${send}" alt="send" title="send"/>
              <img src="${ig}" alt="instagram" title="instagram" />
              <img src="${figma}" alt="figma" title="figma"/>
          </figure>
          <h4 class="footer--title">
            Subscribe
          </h4>
          <span class="footer--text">Subscribe to stay tuned for new web design and latest updates. Let's do it! </span>
          <label class="label-subscribe">
            <input type="text" placeholder="Enter your email Address"/>
            <button>Subscribe</button>
          </label>
        </div>
        <div>
          <ul class="list-footer policy">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
            <li>Site Map</li>
          </ul>
        </div>
      </section>
    `;
  }
}
customElements.define(tagName, Footer);
