import { css } from 'lit';

const getLeftTopArrowStyle = () => css`
  div[role="tooltip"][data-placement="left_top"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    right: -6px;
    position: absolute;
    top: 5px;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getLeftTopArrowStyle;
