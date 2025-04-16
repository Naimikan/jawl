import { css } from 'lit';

const getLeftArrowStyle = () => css`
  div[role="tooltip"][data-placement="left"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    content: '';
    display: block;
    height: 9px;
    right: -6px;
    position: absolute;
    top: calc(50% - 5px);
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getLeftArrowStyle;
