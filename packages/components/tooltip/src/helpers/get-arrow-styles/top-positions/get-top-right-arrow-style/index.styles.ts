import { css } from 'lit';

const getTopRightArrowStyle = () => css`
  div[role="tooltip"][data-placement="top_right"][data-with-arrow="true"]::before {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    bottom: -6px;
    content: '';
    display: block;
    height: 9px;
    right: 10px;
    position: absolute;
    transform: rotate(45deg);
    width: 9px;
  }
`;

export default getTopRightArrowStyle;
