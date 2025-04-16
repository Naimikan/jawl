import { css } from 'lit';

const getBottomRightArrowStyle = () => css`
  div[role="tooltip"][data-placement="bottom_right"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    right: 10px;
    position: absolute;
    top: -6px;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getBottomRightArrowStyle;
