import ReactDomServer from "react-dom/server";
import Card from "components/Card";

export default function generateSvg(wji) {
  const width = 250;
  const height = 250;
  const svgBody = ReactDomServer.renderToStaticMarkup(<Card wji={wji} height={height} width={width} />);
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
