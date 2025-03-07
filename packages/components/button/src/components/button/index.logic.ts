import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import JwButtonStyles from './index.styles';

import { AVAILABLE_ARIA_ATTRIBUTES, COMPONENT_TAG } from '../../constants';

import { JwButtonProps, ChangedPropertiesParam } from './types';

@customElement(COMPONENT_TAG)
class JwButton extends LitElement implements JwButtonProps {
  static override styles = JwButtonStyles;

  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String, reflect: true }) type: JwButtonProps['type'] = 'button';

  @property({ type: Boolean }) disabled?: JwButtonProps['disabled'];

  @property({ type: String, reflect: true }) form?: JwButtonProps['form'];

  private _dispatchClickEvent = (event: MouseEvent) => {
    const newClickEvent = new CustomEvent('jw-button-clicked', {
      bubbles: true,
      composed: true,
      detail: event,
    });

    this.dispatchEvent(newClickEvent);
  };

  override updated(changedProperties: ChangedPropertiesParam): void {
    super.updated(changedProperties);

    const buttonElement = this.renderRoot.querySelector('button');

    if (buttonElement) {
      if (changedProperties.has('disabled')) {
        if (this.disabled) {
          buttonElement.setAttribute('aria-disabled', 'true');
        } else {
          buttonElement.removeAttribute('aria-disabled');
        }
      }

      AVAILABLE_ARIA_ATTRIBUTES.forEach((attr) => {
        const value = this.getAttribute(attr);

        if (value) {
          buttonElement.setAttribute(attr, value);
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
