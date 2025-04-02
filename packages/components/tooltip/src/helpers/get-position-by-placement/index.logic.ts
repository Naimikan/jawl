import { GetPositionByPlacementParams } from './types';

const getPositionByPlacement = ({
  triggerElement,
  floatingElement,
}: GetPositionByPlacementParams) => {
  console.log(floatingElement);

  const {
    left: triggerElementLeft,
    top: triggerElementTop,
    height: triggerElementHeight,
  } = triggerElement.getBoundingClientRect();

  return {
    top: triggerElementTop + triggerElementHeight,
    left: triggerElementLeft,
  };
};

export default getPositionByPlacement;
