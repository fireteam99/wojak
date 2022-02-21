import generateSvg from "utils/generateSvg";
import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get('https://api.wojakindex.biz/current_wojak_index.json');
  const { pink_wojak_index: pwi } = data;
  const svg = await generateSvg(pwi);
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
