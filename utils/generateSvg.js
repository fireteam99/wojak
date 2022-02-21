import ReactDomServer from "react-dom/server";
import Card from "components/Card";
import getWojak from "./wojak/getWojak";

export default async function generateSvg(pwi) {
  const width = 250;
  const height = 250;
  const wojak = await getWojak(pwi);
  const svgBody = ReactDomServer.renderToStaticMarkup(<Card pwi={pwi} wojak={wojak} height={height} width={width} />);
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
