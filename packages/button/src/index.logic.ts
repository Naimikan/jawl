/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import JwButtonStyles from './index.styles';

import { JwButtonProps, ChangedPropertiesParam } from './types';

@customElement('jw-button')
class JwButton extends LitElement implements JwButtonProps {
  static override styles = JwButtonStyles;

  @property({ type: String }) type: JwButtonProps['type'] = 'button';

  @property({ type: Boolean }) disabled?: JwButtonProps['disabled'];

  @property({ type: String }) form?: JwButtonProps['form'];

  private dynamicAttributes: { [key: string]: string } = {};

  static override get observedAttributes() {
    return [
      ...Array.from({ length: 26 }, (_, i) => `aria-${String.fromCharCode(i + 65)}`),
    ];
  }

  override attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name.startsWith('aria-')) {
      this.dynamicAttributes[name] = newValue ?? '';
    }
  }

  override updated(changedProperties: ChangedPropertiesParam): void {
    super.updated(changedProperties);

    if (changedProperties.has('disabled')) {
      if (this.disabled) {
        this.setAttribute('aria-disabled', 'true');
      } else {
        this.removeAttribute('aria-disabled');
      }
    }
  }

  override render() {
    console.log(this.dynamicAttributes);

    return html`
      <button
        id=${ifDefined(this.id)}
        type=${this.type}
        ?disabled=${this.disabled}
        form=${ifDefined(this.form)}
        part="jw-internal-button"
        aria-label=${ifDefined(this.dynamicAttributes['aria-label'])}
        aria-labelledby=${ifDefined(this.dynamicAttributes['aria-labelledby'])}
        aria-describedby=${ifDefined(this.dynamicAttributes['aria-describedby'])}
      >
        <slot name="left-icon"></slot>
        <slot></slot>
        <slot name="right-icon"></slot>
      </button>
    `;
  }
}

export default JwButton;
