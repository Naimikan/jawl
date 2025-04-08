import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getRightTopPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    right: triggerElementRight,
    top: triggerElementTop,
  } = triggerElement.getBoundingClientRect();

  let arrowHeight = 0;

  if (!withoutArrow) {
    const {
      width: parsedArrowWidth,
      borderTop: parsedArrowBorderTop,
    } = getArrowBoundingClientRect({ floatingElement });

    arrowHeight = parsedArrowWidth + parsedArrowBorderTop;
  }

  return {
    top: triggerElementTop,
    left: triggerElementRight + arrowHeight,
  };
};

export default getRightTopPosition;
