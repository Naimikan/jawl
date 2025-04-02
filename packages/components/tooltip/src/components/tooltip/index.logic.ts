import { html } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';
import { ThemeableElement } from '@jawl/theme-manager';

import JwTooltipStyles from './index.styles';

import type { JwTooltipProps } from './types';

import getPositionByPlacement from '../../helpers/get-position-by-placement';
import { COMPONENT_TAG } from '../../constants';

@customElement(COMPONENT_TAG)
class JwTooltip extends ThemeableElement implements JwTooltipProps {
  static override get styles() {
    return [JwTooltipStyles];
  }

  static override shadowRootOptions = {
    ...ThemeableElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @queryAssignedElements() triggerElements!: HTMLElement[];

  @query('[role="tooltip"]') tooltipElement!: HTMLElement;

  override firstUpdated() {
    if (matchMedia('(hover: hover)').matches) {
      this.triggerElements.forEach((triggerElement) => {
        triggerElement.addEventListener('pointerenter', () => {
          this.tooltipElement.showPopover();
          const { top, left } = getPositionByPlacement({
            triggerElement,
            floatingElement: this.tooltipElement,
          });
          this.tooltipElement.style.transform = `translate(${left}px, ${top}px)`;
        });

        triggerElement.addEventListener('pointerleave', () => {
          this.tooltipElement.hidePopover();
        });

        triggerElement.addEventListener('focus', () => {
          this.tooltipElement.showPopover();
          const { top, left } = getPositionByPlacement({
            triggerElement,
            floatingElement: this.tooltipElement,
          });
          this.tooltipElement.style.transform = `translate(${left}px, ${top}px)`;
        });

        triggerElement.addEventListener('blur', () => {
          this.tooltipElement.hidePopover();
        });
      });
    }
  }

  // ToDo: remove event listener on destroy

  override render() {
    return html`
      <slot></slot>
      <div
        role="tooltip"
        .id=${this.id}
        part="jw-tooltip-container"
        aria-label="tooltip"
        aria-hidden="true"
        popover="manual"
      >
        Tooltip content
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [COMPONENT_TAG]: JwTooltip;
  }
}

export default JwTooltip;
