import fs from "fs";
const fsPromises = fs.promises;
import path, { relative } from "path";

import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

import sample from "lodash.sample";
import {
  darkWojaks,
  greenWojaks,
  happyWojaks,
  neutralWojaks,
  pinkWojaks,
  sadWojaks,
  worriedWojaks,
} from "./wojaks";

// pwi has a range from 0 - 1000
function getWojakPublicPath(pwi) {
  if (pwi >= 800) {
    return sample(darkWojaks);
  }
  if (pwi >= 600) {
    return sample(pinkWojaks);
  }
  if (pwi >= 400) {
    return sample(sadWojaks);
  }
  if (pwi >= 300) {
    return sample(worriedWojaks);
  }
  if (pwi >= 200) {
    return sample(neutralWojaks);
  }
  if (pwi >= 100) {
    return sample(happyWojaks);
  }
  return sample(greenWojaks);
}

/**
 * 
 * @param {Number} pwi - pink wojak index
 * @returns Base64 encoded Wojak
 */
export default async function getWojak(pwi) {
  console.log("test");
  const wojakPublicPath = getWojakPublicPath(pwi);
  const pathFromRoot = `./public/${wojakPublicPath}`;
  const absolutePath = path.join(serverRuntimeConfig.PROJECT_ROOT, pathFromRoot);
  // convert image to base64
  const image = await fsPromises.readFile(absolutePath);
  const base64 = Buffer.from(image, "binary").toString("base64");
  return base64;
}
