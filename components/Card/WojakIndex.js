import { css } from "@emotion/react";

const WojakIndex = ({ pwi, color }) => (
  <span>
    <a
      href="https://www.wojakindex.biz/"
      css={css`
        color: whitesmoke;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      Wojak Index
    </a>
    :{" "}
    <span
      css={css`
        color: ${color};
      `}
    >
      {pwi.toPrecision(6)}
    </span>
  </span>
);

export default WojakIndex;
