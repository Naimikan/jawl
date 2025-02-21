import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import JwButtonStyles from './index.styles';

@customElement('jw-button')
class JwButton extends LitElement {
  static override styles = JwButtonStyles;

  override render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

export default JwButton;
