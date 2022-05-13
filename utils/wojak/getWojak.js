import axios from 'axios';
import sample from "lodash.sample";

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

export default function getWojak(state) {
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
