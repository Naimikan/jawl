import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getBottomLeftPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    bottom: triggerElementBottom,
  } = triggerElement.getBoundingClientRect();

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
    left: triggerElementLeft,
  };
};

export default getBottomLeftPosition;
