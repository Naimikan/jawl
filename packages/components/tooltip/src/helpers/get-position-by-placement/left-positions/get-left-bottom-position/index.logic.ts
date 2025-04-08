import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getLeftBottomPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    top: triggerElementTop,
  } = triggerElement.getBoundingClientRect();

  const {
    width: floatingElementWidth,
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
    top: triggerElementTop,
    left: triggerElementLeft - floatingElementWidth - arrowHeight,
  };
};

export default getLeftBottomPosition;
