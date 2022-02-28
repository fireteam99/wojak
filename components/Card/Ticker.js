import millify from "millify";
import { css } from "@emotion/react";

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
          justify-content: space-around;
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

export default Ticker;

function getSymbolFontSize(length) {
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
    return "13.5pt";
  }
  if (length > 5) {
    return "14.5pt";
  }
  return "16pt";
};
