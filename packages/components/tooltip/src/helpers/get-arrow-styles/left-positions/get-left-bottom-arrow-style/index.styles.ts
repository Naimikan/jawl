import { css } from 'lit';

const getLeftBottomArrowStyle = () => css`
  div[role="tooltip"][data-placement="left_bottom"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    bottom: 5px;
    content: '';
    display: block;
    height: 9px;
    right: -6px;
    position: absolute;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getLeftBottomArrowStyle;
