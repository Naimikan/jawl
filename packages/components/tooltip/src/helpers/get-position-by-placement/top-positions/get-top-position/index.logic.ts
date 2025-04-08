import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getTopPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    top: triggerElementTop,
    width: triggerElementWidth,
  } = triggerElement.getBoundingClientRect();

  const {
    height: floatingElementHeight,
    width: floatingElementWidth,
  } = floatingElement.getBoundingClientRect();

  let arrowHeight = 0;

  if (!withoutArrow) {
    const {
      height: parsedArrowHeight,
      borderBottom: parsedArrowBorderBottom,
    } = getArrowBoundingClientRect({ floatingElement });

    arrowHeight = parsedArrowHeight + parsedArrowBorderBottom;
  }

  return {
    top: triggerElementTop - floatingElementHeight - arrowHeight,
    left: (triggerElementLeft + (triggerElementWidth / 2)) - (floatingElementWidth / 2),
  };
};

export default getTopPosition;
