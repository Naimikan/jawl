import type { Trigger } from '../types';

const COMPONENT_TAG = 'jw-tooltip';

const AVAILABLE_ARIA_ATTRIBUTES = [
  'aria-label',
  'aria-labelledby',
  'aria-pressed',
  'aria-disabled',
  'aria-describedby',
  'aria-expanded',
  'aria-haspopup',
  'aria-controls',
];

const DEFAULT_DELAY: [number, number] = [0, 0];

const DEFAULT_TRIGGER: Trigger[] = ['hover', 'focus'];

export {
  AVAILABLE_ARIA_ATTRIBUTES,
  COMPONENT_TAG,
  DEFAULT_DELAY,
  DEFAULT_TRIGGER,
};
