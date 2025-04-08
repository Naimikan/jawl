import type { GetArrowBoundingClientRectParams } from './types';

const getArrowBoundingClientRect = ({
  floatingElement,
}: GetArrowBoundingClientRectParams) => {
  const arrowStyles = window.getComputedStyle(floatingElement, ':before');

  return {
    borderBottom: parseInt(arrowStyles.borderBottom, 10),
    borderTop: parseInt(arrowStyles.borderTop, 10),
    height: parseInt(arrowStyles.height, 10),
    width: parseInt(arrowStyles.width, 10),
  };
};

export default getArrowBoundingClientRect;
