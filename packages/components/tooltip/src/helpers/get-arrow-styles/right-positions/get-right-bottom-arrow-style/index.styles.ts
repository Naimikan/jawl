import { css } from 'lit';

const getRightBottomArrowStyle = () => css`
  div[role="tooltip"][data-placement="right_bottom"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    bottom: 5px;
    content: '';
    display: block;
    height: 9px;
    left: -6px;
    position: absolute;
    transform: rotate(-45deg);
    width: 9px;
  }
`;

export default getRightBottomArrowStyle;
