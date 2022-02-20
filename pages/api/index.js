import generateSvg from "utils/generateSVG";
import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get('https://api.wojakindex.biz/current_wojak_index.json');
  console.log(data);
  const { pink_wojak_index: wji } = data;
  const svg = generateSvg(wji);
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
