import { css } from 'lit';

const JwButtonStyles = css`
  button {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: center;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button:not(:disabled):hover {
    text-decoration: none;
  }

  ::slotted([slot="left-icon"]) {
    margin-right: 4px;
  }

  ::slotted([slot="right-icon"]) {
    margin-left: 4px;
  }
`;

export default JwButtonStyles;
