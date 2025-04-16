import { css } from 'lit';

const getTopArrowStyle = () => css`
  div[role="tooltip"][data-placement="top"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    bottom: -6px;
    content: '';
    display: block;
    height: 9px;
    left: calc(50% - 5px);
    position: absolute;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getTopArrowStyle;
