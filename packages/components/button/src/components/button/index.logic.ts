/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import JwButtonStyles from './index.styles';

import { AVAILABLE_ARIA_ATTRIBUTES } from '../../constants';

import { JwButtonProps, ChangedPropertiesParam, JwButtonClickedEvent } from './types';

@customElement('jw-button')
class JwButton extends LitElement implements JwButtonProps {
  static override styles = JwButtonStyles;

  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @query('button') buttonElement!: HTMLButtonElement;

  @property({ type: String, reflect: true }) type: JwButtonProps['type'] = 'button';

  @property({ type: Boolean }) disabled?: JwButtonProps['disabled'];

  @property({ type: String, reflect: true }) form?: JwButtonProps['form'];

  private _dispatchClickEvent = (event: MouseEvent) => {
    const newClickEvent = new CustomEvent('jw-button-clicked', {
      bubbles: true,
      composed: true,
      detail: event,
    }) as JwButtonClickedEvent;

    this.dispatchEvent(newClickEvent);
  };

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

      AVAILABLE_ARIA_ATTRIBUTES.forEach((attr) => {
        const value = this.getAttribute(attr);

        if (value) {
          this.buttonElement.setAttribute(attr, value);
        }
      });
    }
  }

  override render() {
    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        form=${ifDefined(this.form)}
        part="jw-internal-button"
        @click=${this._dispatchClickEvent}
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
