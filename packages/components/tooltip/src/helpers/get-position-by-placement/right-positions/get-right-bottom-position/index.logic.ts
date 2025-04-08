import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getRightBottomPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    right: triggerElementRight,
    bottom: triggerElementBottom,
  } = triggerElement.getBoundingClientRect();

  const {
    height: floatingElementHeight,
  } = floatingElement.getBoundingClientRect();

  let arrowHeight = 0;

  if (!withoutArrow) {
    const {
      width: parsedArrowWidth,
      borderTop: parsedArrowBorderTop,
    } = getArrowBoundingClientRect({ floatingElement });

    arrowHeight = parsedArrowWidth + parsedArrowBorderTop;
  }

  return {
    top: triggerElementBottom - floatingElementHeight,
    left: triggerElementRight + arrowHeight,
  };
};

export default getRightBottomPosition;
