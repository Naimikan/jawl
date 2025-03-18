import { LitElement } from 'lit';
import type { CSSResult } from 'lit';
import { consume } from '@lit/context';
import themeContext from '../../context';
import type { ThemeContext } from '../../context';

import type { ChangedPropertiesParam } from './types';

class ThemeableElement extends LitElement {
  static themeStyles: CSSResult[] = [];

  @consume({ context: themeContext, subscribe: true }) theme?: ThemeContext;

  static override get styles() {
    return [...this.themeStyles];
  }

  override updated(changedProperties: ChangedPropertiesParam) {
    super.updated(changedProperties);

    if (this.theme) {
      const themeByTag = this.theme[this.tagName.toLowerCase()];

      if (themeByTag) {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(themeByTag.cssText);

        if (this.shadowRoot) {
          this.shadowRoot.adoptedStyleSheets = [styleSheet];
        }
      }
    }
  }
}

export default ThemeableElement;
