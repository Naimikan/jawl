import { css } from 'lit';

const getBottomLeftArrowStyle = () => css`
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
`;

export default getBottomLeftArrowStyle;
