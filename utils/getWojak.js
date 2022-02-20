import sample from 'lodash.sample';
import { darkWojaks, greenWojaks, happyWojaks, neutralWojaks, pinkWojaks, sadWojaks, worriedWojaks } from "./wojaks";

// wji has a range from 0 - 1000
export default function getWojak(wji) {
  if (wji >= 800) {
    return sample(darkWojaks);
  }
  if (wji >= 600) {
    return sample(pinkWojaks);
  }
  if (wji >= 400) {
    return sample(sadWojaks);
  }
  if (wji >= 300) {
    return sample(worriedWojaks);
  }
  if (wji >= 200) {
    return sample(neutralWojaks);
  }
  if (wji >= 100) {
    return sample(happyWojaks);
  }
  return sample(greenWojaks);
}