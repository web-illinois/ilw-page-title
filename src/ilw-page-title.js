import { LitElement, html } from 'lit';
import styles from './ilw-page-title.styles';
import './ilw-page-title.css';

class PageTitle extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.align = '';
        this.focus = '';
        this.shadow = false;
        this.collapse = false;
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-page-title', PageTitle);