import { css } from 'lit';

const getRightArrowStyle = () => css`
  div[role="tooltip"][data-placement="right"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    left: -6px;
    position: absolute;
    top: calc(50% - 5px);
    transform: rotate(-45deg);
    width: 9px;
  }
`;

export default getRightArrowStyle;
