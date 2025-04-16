import { css } from 'lit';

const getRightTopArrowStyle = () => css`
  div[role="tooltip"][data-placement="right_top"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    left: -6px;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 9px;
  }
`;

export default getRightTopArrowStyle;
