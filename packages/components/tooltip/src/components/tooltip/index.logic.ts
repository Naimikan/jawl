import { html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ThemeableElement } from '@jawl/theme-manager';

import JwTooltipStyles from './index.styles';

import type { JwTooltipProps } from './types';

import getPositionByPlacement from '../../helpers/get-position-by-placement';
import { COMPONENT_TAG, DEFAULT_DELAY, DEFAULT_TRIGGER } from '../../constants';
import getDelay from '../../helpers/get-delay';

@customElement(COMPONENT_TAG)
class JwTooltip extends ThemeableElement implements JwTooltipProps {
  static override get styles() {
    return [JwTooltipStyles];
  }

  static override shadowRootOptions = {
    ...ThemeableElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true }) withoutArrow?: boolean = false;

  @property({ type: String, reflect: true }) placement: JwTooltipProps['placement'] = 'auto';

  @property({ attribute: false }) delay: JwTooltipProps['delay'] = DEFAULT_DELAY;

  @property({ attribute: false }) trigger: JwTooltipProps['trigger'] = DEFAULT_TRIGGER;

  @queryAssignedElements({ slot: 'tooltip_trigger' }) triggerElements!: HTMLElement[];

  @query('[role="tooltip"]') tooltipElement!: HTMLElement;

  private _delayOpenTimeout?: NodeJS.Timeout;

  private _delayCloseTimeout?: NodeJS.Timeout;

  private _listeners = new Map<HTMLElement | Document, {
    pointerenter?: EventListener;
    pointerleave?: EventListener;
    focus?: EventListener;
    blur?: EventListener;
    click?: EventListener;
    keydown?: EventListener;
  }>();

  private get parsedDelay(): JwTooltipProps['delay'] {
    if (typeof this.delay === 'string') {
      try {
        const parsed = JSON.parse(this.delay);
        return Array.isArray(parsed) ? [parsed[0], parsed[1]] : Number(parsed);
      } catch {
        return Number(this.delay);
      }
    }

    return this.delay;
  }

  private get parsedTrigger(): JwTooltipProps['trigger'] {
    if (typeof this.trigger === 'string') {
      try {
        const purgedTrigger = this.trigger.replaceAll('\'', '"');

        const parsed = JSON.parse(purgedTrigger);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [this.trigger];
      }
    }

    return this.trigger ? this.trigger : [];
  }

  public showTooltip(triggerElement: HTMLElement) {
    if (this._delayCloseTimeout) {
      clearTimeout(this._delayCloseTimeout);
    }

    const { delayStart } = getDelay(this.parsedDelay ?? DEFAULT_DELAY);

    this._delayOpenTimeout = setTimeout(() => {
      this.tooltipElement.showPopover();

      const { top, left } = getPositionByPlacement({
        triggerElement,
        floatingElement: this.tooltipElement,
        placement: this.placement || 'auto',
        withoutArrow: !!this.withoutArrow,
      });

      console.log(left, top);

      this.tooltipElement.style.transform = `translate(${left}px, ${top}px)`;
    }, delayStart);
  }

  public hideTooltip() {
    const { delayEnd } = getDelay(this.parsedDelay ?? DEFAULT_DELAY);

    if (this._delayOpenTimeout) {
      clearTimeout(this._delayOpenTimeout);
    }

    this._delayCloseTimeout = setTimeout(() => {
      this.tooltipElement.hidePopover();
    }, delayEnd);
  }

  private openTooltipEventHandler(triggerElement: HTMLElement) {
    return () => {
      this.showTooltip(triggerElement);
    };
  }

  private closeTooltipEventHandler() {
    return () => {
      this.hideTooltip();
    };
  }

  private onEscapeEventHandler() {
    return (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.hideTooltip();
      }
    };
  }

  private setupEventListeners() {
    const triggerToProcess = Array.isArray(this.parsedTrigger) ? this.parsedTrigger : [this.parsedTrigger];

    this.triggerElements.forEach((triggerElement) => {
      if (triggerToProcess.includes('hover') && matchMedia('(hover: hover)').matches) {
        const pointerEnterHandler = this.openTooltipEventHandler(triggerElement);
        const pointerLeaveHandler = this.closeTooltipEventHandler();

        triggerElement.addEventListener('pointerenter', pointerEnterHandler);
        // triggerElement.addEventListener('pointerleave', pointerLeaveHandler);

        this._listeners.set(triggerElement, {
          pointerenter: pointerEnterHandler,
          pointerleave: pointerLeaveHandler,
        });
      }

      if (triggerToProcess.includes('click')) {
        console.log('click');
      }

      if (triggerToProcess.includes('focus')) {
        const focusHandler = this.openTooltipEventHandler(triggerElement);
        const blurHandler = this.closeTooltipEventHandler();

        triggerElement.addEventListener('focus', focusHandler);
        triggerElement.addEventListener('blur', blurHandler);

        this._listeners.set(triggerElement, {
          focus: focusHandler,
          blur: blurHandler,
        });
      }
    });

    // Escape press
    const escapeHandler = this.onEscapeEventHandler();

    this.ownerDocument.addEventListener('keydown', escapeHandler);

    this._listeners.set(this.ownerDocument, {
      keydown: escapeHandler as EventListener,
    });
  }

  override firstUpdated() {
    this.setupEventListeners();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this._listeners.forEach((handlers, triggerElement) => {
      if (handlers.pointerenter) {
        triggerElement.removeEventListener('pointerenter', handlers.pointerenter);
      }

      if (handlers.pointerleave) {
        triggerElement.removeEventListener('pointerleave', handlers.pointerleave);
      }

      if (handlers.focus) {
        triggerElement.removeEventListener('focus', handlers.focus);
      }

      if (handlers.blur) {
        triggerElement.removeEventListener('blur', handlers.blur);
      }

      if (handlers.click) {
        triggerElement.removeEventListener('click', handlers.click);
      }
    });

    this._listeners.clear();
  }

  override render() {
    return html`
      <slot name="tooltip_trigger"></slot>
      <div
        role="tooltip"
        id=${ifDefined(this.id)}
        part="jw-tooltip-container"
        aria-label="tooltip"
        aria-hidden="true"
        data-placement=${ifDefined(this.placement)}
        data-with-arrow=${!this.withoutArrow}
        popover="manual"
      >
        <slot name="tooltip_content"></slot>
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
