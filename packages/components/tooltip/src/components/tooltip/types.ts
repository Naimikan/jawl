import type { Placement, Trigger } from '../../types';

export interface JwTooltipProps {
  id?: string;
  delay?: number | [number, number];
  disabled?: boolean;
  interactive?: boolean;
  placement?: Placement;
  trigger?: Trigger | Trigger[];
  withoutArrow?: boolean;
}
