import fs from "fs";
const fsPromises = fs.promises;
import path from "path";

import sample from "lodash.sample";

import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

import {
  darkWojaks,
  greenWojaks,
  happyWojaks,
  neutralWojaks,
  pinkWojaks,
  sadWojaks,
  worriedWojaks,
} from "./wojaks";
import { WOJAK_STATE } from "./wojakState";

function getWojakPublicPath(state) {
  switch (state) {
    case WOJAK_STATE.DARK:
      return sample(darkWojaks);
    case WOJAK_STATE.PINK:
      return sample(pinkWojaks);
    case WOJAK_STATE.SAD:
      return sample(sadWojaks);
    case WOJAK_STATE.WORRIED:
      return sample(worriedWojaks);
    case WOJAK_STATE.NEUTRAL:
      return sample(neutralWojaks);
    case WOJAK_STATE.HAPPY:
      return sample(happyWojaks);
    case WOJAK_STATE.GREEN:
      return sample(greenWojaks);
    default:
      return sample(neutralWojaks);
  }
}

/**
 *
 * @param {Enum} state - WOJAK_STATE enum
 * @returns Base64 encoded Wojak
 */
export default async function getWojak(state) {
  const wojakPublicPath = getWojakPublicPath(state);
  const pathFromRoot = `./public/${wojakPublicPath}`;
  const absolutePath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    pathFromRoot
  );
  // convert image to base64
  const image = await fsPromises.readFile(absolutePath);
  const base64 = Buffer.from(image, "binary").toString("base64");
  return base64;
}
