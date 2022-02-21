import fs from 'fs';

import { css } from "@emotion/react";
import getWojak from "utils/wojak/getWojak.js";

export default function Card({ pwi, wojak, width, height }) {
  return (
    <foreignObject x="0" y="0" width={width} height={height}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        css={css`
          width: 100%;
          height: 100%;
          color: green;
          background-color: orange;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <img src={`data:image/png;base64,${wojak}`} alt="wojak" width={150} height={150} objectfit="cover" />
        <span>pwi: {pwi}</span>
      </div>
    </foreignObject>
  );
}
