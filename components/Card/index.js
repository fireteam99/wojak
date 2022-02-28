import { css } from "@emotion/react";

import Ticker from './Ticker';
import WojakIndex from "./WojakIndex";
import ErrorMessage from './ErrorMessage';

import { getTheme } from "utils/theme";
import { WOJAK_STATE } from "utils/wojak/wojakState";
import { shake } from "./animations";

export default function Card({
  pwi,
  tickerData,
  showTicker,
  wojak,
  wojakState,
  width,
  height,
  error,
}) {
  const { bg, color } = getTheme(wojakState);
  const caption = showTicker ? (
    <Ticker
      symbol={tickerData?.symbol}
      price={tickerData?.lastPrice}
      change={tickerData?.priceChangePercent}
      color={color}
    />
  ) : (
    <WojakIndex pwi={pwi} color={color} />
  );
  return (
    <foreignObject x="0" y="0" width={width} height={height}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        css={css`
          width: 100%;
          height: 100%;
          background: ${bg};
          background: linear-gradient(0deg, #020024 0%, ${bg} 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-family: Verdana, Arial, sans-serif;
          color: whitesmoke;
        `}
      >
        <div
          css={css`
            margin-bottom: 10px;
            ${wojakState === WOJAK_STATE.PINK
              ? css`
                  animation: ${shake} 0.05s linear infinite;
                `
              : ""}
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
        {error ? <ErrorMessage error={error} /> : caption}
      </div>
    </foreignObject>
  );
}
