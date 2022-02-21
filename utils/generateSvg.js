import ReactDomServer from "react-dom/server";
import Card from "components/Card";
import getWojak from "./wojak/getWojak";
import { getWojakStateFromPwi } from './wojak/wojakState';

export default async function generateSvg(pwi) {
  const width = 250;
  const height = 250;
  const wojakState = getWojakStateFromPwi(pwi);
  const wojak = await getWojak(wojakState);
  const svgBody = ReactDomServer.renderToStaticMarkup(<Card value={pwi} wojakState={wojakState} wojak={wojak} height={height} width={width} />);
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
