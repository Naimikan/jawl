import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getLeftPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    top: triggerElementTop,
    height: triggerElementHeight,
  } = triggerElement.getBoundingClientRect();

  const {
    height: floatingElementHeight,
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
    top: (triggerElementTop + (triggerElementHeight / 2)) - (floatingElementHeight / 2),
    left: triggerElementLeft - floatingElementWidth - arrowHeight,
  };
};

export default getLeftPosition;
