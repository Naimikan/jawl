import { css } from 'lit';

const JwButtonStyles = css`
	button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:focus {
    outline: none;
  }
`;

export default JwButtonStyles;
