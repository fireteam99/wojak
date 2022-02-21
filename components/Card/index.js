import { css } from "@emotion/react";
import { getTheme } from "utils/theme";
import { shake } from "./animations";

// animation: ${shake} .05s linear infinite;

export default function Card({ value, wojak, wojakState, width, height }) {
  const { bg, color } = getTheme(wojakState);
  return (
    <foreignObject x="0" y="0" width={width} height={height}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        css={css`
          width: 100%;
          height: 100%;
          color: ${color};
          background: ${bg};
          background: linear-gradient(0deg, #020024 0%, ${bg} 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        `}
      >
        <div
          css={css`
            margin-bottom: 10px;
          `}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${wojak}`}
            alt="wojak"
            width={150}
            height={150}
            css={css`
              object-fit: cover;
            `}
          />
        </div>
        <span>Wojak Index: {value.toFixed(2)}</span>
      </div>
    </foreignObject>
  );
}
