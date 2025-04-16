import { css } from 'lit';

import getTopArrowStyle from './top-positions/get-top-arrow-style';
import getTopLeftArrowStyle from './top-positions/get-top-left-arrow-style';
import getTopRightArrowStyle from './top-positions/get-top-right-arrow-style';

import getLeftArrowStyle from './left-positions/get-left-arrow-style';
import getLeftBottomArrowStyle from './left-positions/get-left-bottom-arrow-style';
import getLeftTopArrowStyle from './left-positions/get-left-top-arrow-style';

import getBottomArrowStyle from './bottom-positions/get-bottom-arrow-style';
import getBottomLeftArrowStyle from './bottom-positions/get-bottom-left-arrow-style';
import getBottomRightArrowStyle from './bottom-positions/get-bottom-right-arrow-style';

import getRightArrowStyle from './right-positions/get-right-arrow-style';
import getRightBottomArrowStyle from './right-positions/get-right-bottom-arrow-style';
import getRightTopArrowStyle from './right-positions/get-right-top-arrow-style';

const getArrowStyles = () => css`
  ${getTopArrowStyle()}
  ${getTopLeftArrowStyle()}
  ${getTopRightArrowStyle()}

  ${getLeftArrowStyle()}
  ${getLeftBottomArrowStyle()}
  ${getLeftTopArrowStyle()}

  ${getBottomArrowStyle()}
  ${getBottomLeftArrowStyle()}
  ${getBottomRightArrowStyle()}

  ${getRightArrowStyle()}
  ${getRightBottomArrowStyle()}
  ${getRightTopArrowStyle()}
`;

export default getArrowStyles;
