import { css } from 'lit';

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

  div[role="tooltip"][data-placement="bottom_left"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    left: 10px;
    position: absolute;
    top: -5px;
    transform: rotate(45deg);
    width: 9px;
  }

  div[role="tooltip"][data-placement="bottom"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    left: calc(50% - 5px);
    position: absolute;
    top: -5px;
    transform: rotate(45deg);
    width: 9px;
  }

  div[role="tooltip"][data-placement="bottom_right"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    right: 10px;
    position: absolute;
    top: -5px;
    transform: rotate(45deg);
    width: 9px;
  }

  div[role="tooltip"][data-placement="left_bottom"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    right: -5px;
    position: absolute;
    bottom: 10px;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default JwTooltipStyles;
