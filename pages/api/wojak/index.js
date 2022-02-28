import generateSvg from "utils/generateSvg";
import binance from "apis/bianance";
import axios from "axios";

const fetchPwi = async () => {
  try {
    const { data } = await axios.get(
      "https://api.wojakindex.biz/current_wojak_index.json"
    );
    const { pink_wojak_index: pwi } = data;
    return { pwi };
  } catch (err) {
    console.error(
      "Error occured when fetching Pink Wojak Index: ",
      err.message
    );
    return { error: err };
  }
};

const fetchTicker = async (symbol) => {
  try {
    const response = await binance.get(`/v3/ticker/24hr?symbol=${symbol}`);
    const { lastPrice, priceChangePercent } = response.data;
    return {
      tickerData: {
        lastPrice: Number(lastPrice),
        priceChangePercent: Number(priceChangePercent),
        symbol,
      },
    };
  } catch (err) {
    console.error(
      "Error occured when fetching ticker from Binance: ",
      err.message
    );
    const status = err?.response?.status;
    if (status && status >= 400 && status < 500) {
      err.message = "Invalid symbol provided";
    }
    return { error: err };
  }
};

export default async function handler(req, res) {
  const { symbol } = req.query;
  const showTicker = !!symbol;
  const data = showTicker ? await fetchTicker(symbol) : await fetchPwi();
  const svg = await generateSvg({ ...data, showTicker });
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
