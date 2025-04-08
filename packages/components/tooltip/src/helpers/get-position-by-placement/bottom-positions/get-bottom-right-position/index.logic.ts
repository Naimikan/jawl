import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getBottomRightPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    right: triggerElementRight,
    bottom: triggerElementBottom,
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
    left: triggerElementRight - floatingElementWidth,
  };
};

export default getBottomRightPosition;
