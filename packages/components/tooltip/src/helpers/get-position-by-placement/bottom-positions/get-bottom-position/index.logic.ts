import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getBottomPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    bottom: triggerElementBottom,
    width: triggerElementWidth,
  } = triggerElement.getBoundingClientRect();

  const {
    width: floatingElementWidth,
  } = floatingElement.getBoundingClientRect();

  let arrowHeight = 0;

  if (!withoutArrow) {
    const {
      height: parsedArrowHeight,
      borderTop: parsedArrowBorderTop,
    } = getArrowBoundingClientRect({ floatingElement });

    arrowHeight = parsedArrowHeight + parsedArrowBorderTop;
  }

  return {
    top: triggerElementBottom + arrowHeight,
    left: (triggerElementLeft + (triggerElementWidth / 2)) - (floatingElementWidth / 2),
  };
};

export default getBottomPosition;
