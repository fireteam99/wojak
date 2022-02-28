import { css } from "@emotion/react";
import millify from "millify";

import { getTheme } from "utils/theme";
import { WOJAK_STATE } from "utils/wojak/wojakState";
import { shake } from "./animations";

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

const getSymbolFontSize = (length) => {
  if (length > 12) {
    return "9pt";
  }
  if (length > 11) {
    return "9.5pt";
  }
  if (length > 10) {
    return "10pt";
  }
  if (length > 9) {
    return "11pt";
  }
  if (length > 8) {
    return "12pt";
  }
  if (length > 7) {
    return "13pt";
  }
  if (length > 6) {
    return "14pt";
  }
  if (length > 5) {
    return "15pt";
  }
  return "16pt";
};

const Ticker = ({ symbol, price, change, color }) => {
  const symbolFontSize = getSymbolFontSize(symbol.length);
  const formattedPrice = millify(price.toPrecision(7), {
    precision: 7,
    lowercase: true,
  });
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: start;
        width: fit-content;
        color: whitesmoke;
        line-height: 19px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: start;
          padding-right: 5px;
        `}
      >
        <span
          css={css`
            font-size: ${symbolFontSize};
          `}
        >
          {symbol}
        </span>
        <span
          css={css`
            font-size: 10pt;
          `}
        >
          Last 24hr
        </span>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: end;
          color: ${color};
          padding-left: 5px;
        `}
      >
        <span
          css={css`
            font-size: 12pt;
          `}
        >
          {formattedPrice}
        </span>
        <span
          css={css`
            font-size: 10pt;
          `}
        >
          {`${change > 0 ? "+" : ""}${change.toFixed(2)}`}%
        </span>
      </div>
    </div>
  );
};

const ErrorMessage = ({ error }) => (
  <span
    css={css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
  >
    {error.message || error.toString()}
  </span>
);

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
      symbol={tickerData.symbol}
      price={tickerData.lastPrice}
      change={tickerData.priceChangePercent}
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
        {error ? error : caption}
      </div>
    </foreignObject>
  );
}
