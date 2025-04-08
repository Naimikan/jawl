import getArrowBoundingClientRect from '../../../get-arrow-bounding-client-rect';

import type { GetPositionParams } from '../../types';

const getTopLeftPosition = ({
  triggerElement,
  floatingElement,
  withoutArrow,
}: GetPositionParams) => {
  const {
    left: triggerElementLeft,
    top: triggerElementTop,
  } = triggerElement.getBoundingClientRect();

  const {
    height: floatingElementHeight,
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
    left: triggerElementLeft,
  };
};

export default getTopLeftPosition;
