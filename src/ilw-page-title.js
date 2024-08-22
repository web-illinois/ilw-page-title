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
        this.theme = '';
    }

    render() {
        return html`
            <div class="page-title">
                <div class="background">
                    <slot name="background"></slot>
                </div>
                <div class="inner">
                    <div class="text">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('ilw-page-title', PageTitle);