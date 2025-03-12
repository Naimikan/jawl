import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import themeContext from '../../context';
import type { ThemeContext } from '../../context';

import { COMPONENT_TAG } from '../../constants';
import type { ChangedPropertiesParam } from './types';

@customElement(COMPONENT_TAG)
class JwThemeManager extends LitElement {
  @property({ type: Object }) styles!: ThemeContext;

  @provide({ context: themeContext })
  @state() theme: ThemeContext = this.styles;

  override updated(changedProperties: ChangedPropertiesParam) {
    if (changedProperties.has('styles')) {
      this.theme = { ...this.styles };
    }
  }

  override render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jw-theme-manager': JwThemeManager;
  }
}

export default JwThemeManager;
