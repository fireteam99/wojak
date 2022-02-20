import { css } from "@emotion/react";
import getWojak from "utils/getWojak";
import Image from 'next/image';

export default function Card({ wji, width, height }) {
  const wojak = getWojak(wji);
  console.log(wojak);
  return (
    <foreignObject x="0" y="0" width={width} height={height}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        css={css`
          width: 100%;
          height: 100%;
          color: green;
          background-color: orange;
        `}
      >
        <img src={wojak} alt="wojak" width={150} height={150} />
        WJI: {wji}
      </div>
    </foreignObject>
  );
}
