import axios from 'axios';
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
  errorWojaks
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
    case WOJAK_STATE.ERROR:
      return sample(errorWojaks)
    default:
      return sample(errorWojaks);
  }
}

/**
 *
 * @param {Enum} state - WOJAK_STATE enum
 * @returns Base64 encoded Wojak
 */
export default async function getWojak(state) {
  const wojakPublicPath = getWojakPublicPath(state);
  const hostedUrl = `https://raw.githubusercontent.com/fireteam99/wojak/main/public${wojakPublicPath}`
  const { data: image } = await axios.get(hostedUrl, { responseType: 'arraybuffer' });
  const base64 = Buffer.from(image, "binary").toString("base64");
  return base64;
}
