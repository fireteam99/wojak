import ReactDomServer from "react-dom/server";
import Card from "components/Card";
import getWojak from "./wojak/getWojak";
import {
  getWojakStateFromPwi,
  getWojakStateFromChange,
  WOJAK_STATE,
} from "./wojak/wojakState";

export default async function generateSvg({ pwi, tickerData, error, showTicker }) {
  const width = 250;
  const height = 250;
  const wojakState = error
    ? WOJAK_STATE.ERROR
    : showTicker
    ? getWojakStateFromChange(tickerData.priceChangePercent)
    : getWojakStateFromPwi(pwi);
  const wojak = getWojak(wojakState);
  const svgBody = ReactDomServer.renderToStaticMarkup(
    <Card
      showTicker={showTicker}
      pwi={pwi}
      tickerData={tickerData}
      wojakState={wojakState}
      wojak={wojak}
      height={height}
      width={width}
      error={error}
    />
  );
  return `<svg
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${svgBody}
  </svg>`;
}
