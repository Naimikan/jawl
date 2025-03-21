import { css } from 'lit';

const JwButtonStyles = css`
  button {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    position: relative;
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

  ::slotted([slot="prefix"]) {
    margin-right: 4px;
  }

  ::slotted([slot="suffix"]) {
    margin-left: 4px;
  }
`;

export default JwButtonStyles;
