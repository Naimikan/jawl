import type { Placement } from '../../types';

export interface GetPositionByPlacementParams {
  triggerElement: HTMLElement;
  floatingElement: HTMLElement;
  placement: Placement;
  withoutArrow: boolean;
}

export interface GetPositionParams {
  triggerElement: HTMLElement;
  floatingElement: HTMLElement;
  withoutArrow: boolean;
}
