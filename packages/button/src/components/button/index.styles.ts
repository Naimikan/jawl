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

  button:not(:disabled):focus-visible {
    outline: 2px solid #007b77;
    outline-offset: 2px;
  }

  ::slotted([slot="prefix"]) {
    margin-right: 4px;
  }

  ::slotted([slot="suffix"]) {
    margin-left: 4px;
  }
`;

export default JwButtonStyles;
