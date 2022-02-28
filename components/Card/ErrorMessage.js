import { css } from "@emotion/react";

const ErrorMessage = ({ error }) => (
  <span
    css={css`
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
  >
    {error.message || error.toString()}
  </span>
);

export default ErrorMessage;
