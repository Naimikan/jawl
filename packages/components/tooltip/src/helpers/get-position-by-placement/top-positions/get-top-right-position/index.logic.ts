import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getTopRightPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    right: triggerElementRight,
    top: triggerElementTop,
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
    left: triggerElementRight - floatingElementWidth,
  };
};

export default getTopRightPosition;
