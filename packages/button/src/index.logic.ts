/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import JwButtonStyles from './index.styles';

import { JwButtonProps, ChangedPropertiesParam } from './types';

@customElement('jw-button')
class JwButton extends LitElement implements JwButtonProps {
  static override styles = JwButtonStyles;

  private _availableAriaAttributes = [
    'aria-label',
    'aria-labelledby',
    'aria-pressed',
    'aria-disabled',
    'aria-describedby',
    'aria-expanded',
    'aria-haspopup',
    'aria-controls',
  ];

  @query('button') buttonElement!: HTMLButtonElement;

  @property({ type: String, reflect: true }) type: JwButtonProps['type'] = 'button';

  @property({ type: Boolean }) disabled?: JwButtonProps['disabled'];

  @property({ type: String, reflect: true }) form?: JwButtonProps['form'];

  private _dispatchClickEvent(event: MouseEvent) {
    const newClickEvent = new CustomEvent('jw-button-clicked', {
      bubbles: true,
      composed: true,
      detail: event,
    });

    this.buttonElement.dispatchEvent(newClickEvent);
  }

  override createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
    });
  }

  protected override firstUpdated(): void {
    if (this.buttonElement) {
      this.buttonElement.addEventListener('click', this._dispatchClickEvent.bind(this));
    }
  }

  override updated(changedProperties: ChangedPropertiesParam): void {
    super.updated(changedProperties);

    if (this.buttonElement) {
      if (changedProperties.has('disabled')) {
        if (this.disabled) {
          this.buttonElement.setAttribute('aria-disabled', 'true');
        } else {
          this.buttonElement.removeAttribute('aria-disabled');
        }
      }

      this._availableAriaAttributes.forEach((attr) => {
        const value = this.getAttribute(attr);

        if (value) {
          this.buttonElement.setAttribute(attr, value);
        } else {
          this.buttonElement.removeAttribute(attr);
        }

        this.removeAttribute(attr);
      });
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    if (this.buttonElement) {
      this.buttonElement.removeEventListener('click', this._dispatchClickEvent.bind(this));
    }
  }

  override render() {
    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        form=${ifDefined(this.form)}
        part="jw-internal-button"
      >
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jw-button': JwButton;
  }
}

export default JwButton;
