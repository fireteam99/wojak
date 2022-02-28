<h1 align="center">Wojak</h1>

<p align="center">Dynamically generated Wojaks based on the crypto market.</p>

<p align="center">
  <img src="https://wojak-topaz.vercel.app/api/wojak?symbol=DOGEUSDT" />
</p>

## Usage
Simply paste the corresponding url into your README.md or any other markdown file. 

### Wojak Index (default)
The [Wojak Index](https://www.wojakindex.biz/) represents the percentage of pink Wojaks posted on 4chan's /biz/ catalog at a given moment scaled from 0 (no pink Wojaks) to 1000 (all pink Wojaks). To support the author and view more information, checkout https://www.wojakindex.biz.
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak)
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak)
### Ticker Symbol
You can also base your Wojak's state off of a crypto ticker symbol via the `symbol` query string. Data is provided using Binance API's 24hr [price change statistics](https://binance-docs.github.io/apidocs/spot/en/#current-average-price). You can get a list of available symbols at https://wojak-topaz.vercel.app/.
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak?symbol=BTCUSDT)
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak?symbol=BTCUSDT)

## Roadmap
- [ ] Logging
- [ ] More config options
- [ ] More Wojaks
- [ ] More widgets
- [ ] Home page

