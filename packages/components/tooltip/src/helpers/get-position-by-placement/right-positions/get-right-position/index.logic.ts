import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getRightPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    right: triggerElementRight,
    top: triggerElementTop,
    height: triggerElementHeight,
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
    top: (triggerElementTop + (triggerElementHeight / 2)) - (floatingElementHeight / 2),
    left: triggerElementRight + arrowHeight,
  };
};

export default getRightPosition;
