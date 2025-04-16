import { css } from 'lit';

import getArrowStyles from '../../helpers/get-arrow-styles';

const JwTooltipStyles = css`
  div[role="tooltip"] {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-block: 0;
    margin-inline: 0;
    overflow: visible; // Needed for the arrow
    padding: 8px;
    will-change: transform;
  }

  ${getArrowStyles()}
`;

export default JwTooltipStyles;
