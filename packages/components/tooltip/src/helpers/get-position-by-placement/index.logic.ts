import getBottomLeftPosition from './bottom-positions/get-bottom-left-position';
import getBottomPosition from './bottom-positions/get-bottom-position';
import getBottomRightPosition from './bottom-positions/get-bottom-right-position';

import getLeftBottomPosition from './left-positions/get-left-bottom-position';
import getLeftPosition from './left-positions/get-left-position';
import getLeftTopPosition from './left-positions/get-left-top-position';

import getRightBottomPosition from './right-positions/get-right-bottom-position';
import getRightPosition from './right-positions/get-right-position';
import getRightTopPosition from './right-positions/get-right-top-position';

import getTopLeftPosition from './top-positions/get-top-left-position';
import getTopPosition from './top-positions/get-top-position';
import getTopRightPosition from './top-positions/get-top-right-position';

import type { GetPositionByPlacementParams } from './types';

const getPositionByPlacement = ({
  triggerElement,
  floatingElement,
  placement,
  withoutArrow,
}: GetPositionByPlacementParams) => {
  let functionToExecute;

  switch (placement) {
    case 'bottom_left':
      functionToExecute = getBottomLeftPosition;
      break;

    case 'bottom':
      functionToExecute = getBottomPosition;
      break;

    case 'bottom_right':
      functionToExecute = getBottomRightPosition;
      break;

    case 'left_bottom':
      functionToExecute = getLeftBottomPosition;
      break;

    case 'left':
      functionToExecute = getLeftPosition;
      break;

    case 'left_top':
      functionToExecute = getLeftTopPosition;
      break;

    case 'right_bottom':
      functionToExecute = getRightBottomPosition;
      break;

    case 'right':
      functionToExecute = getRightPosition;
      break;

    case 'right_top':
      functionToExecute = getRightTopPosition;
      break;

    case 'top_left':
      functionToExecute = getTopLeftPosition;
      break;

    case 'top':
      functionToExecute = getTopPosition;
      break;

    case 'top_right':
      functionToExecute = getTopRightPosition;
      break;

    default:
      // ToDo: implement reposition
      functionToExecute = getBottomPosition;
      break;
  }

  return functionToExecute({
    triggerElement,
    floatingElement,
    withoutArrow,
  });
};

export default getPositionByPlacement;
