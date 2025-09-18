import { LitElement, html, css, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './ilw-page-title.styles.js';
import './ilw-page-title.css';

@customElement('ilw-page-title')
export default class PageTitle extends LitElement {
    @property({ type: String, reflect: true })
    theme: string = '';

    @property({ type: String, reflect: true })
    width: string = '';

    @property({ type: Boolean, reflect: true })
    fade: boolean = false;

    static get styles(): CSSResultGroup {
        return styles;
    }

    get outerWidth(): string {
        if (this.width === 'page' || this.width === 'auto') {
            return 'fixed';
        }
        if (this.width === 'full') {
            return 'full';
        }
        return '';
    }

    render(): TemplateResult {
        return html`
      <div class="page-title ${this.outerWidth}">
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

declare global {
    interface HTMLElementTagNameMap {
        'ilw-page-title': PageTitle;
    }
}
