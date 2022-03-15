
<div align="center">
  <p align="center">
    <a href="https://wojak-topaz.vercel.app">
      <img src="https://wojak-topaz.vercel.app/api/wojak?symbol=SOLUSDT" />
    </a>
  </p>
  <h2 align="center">Wojak</h2>
  <p align="center">
    Dynamically generated Wojaks based on the crypto market.
    <br />
    <a href="https://wojak-topaz.vercel.app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wojak-topaz.vercel.app/api/wojak?symbol=DOGEUSDT">View Demo</a>
    ·
    <a href="https://github.com/fireteam99/wojak/issues">Report Bug</a>
    ·
    <a href="https://github.com/fireteam99/wojak/issues">Request Feature</a>
  </p>
  <a href="https://github.com/fireteam99/wojak/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/fireteam99/wojak"></a>
  <img src="https://img.shields.io/github/license/fireteam99/wojak">
  <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/fireteam99/wojak/production?label=vercel">
</div>


## Usage
Simply paste the corresponding url into your README.md or any other markdown file. 

### Wojak Index (default)
The [Wojak Index](https://www.wojakindex.biz/) represents the percentage of pink Wojaks posted on 4chan's /biz/ catalog at a given moment scaled from 0 (no pink Wojaks) to 1000 (all pink Wojaks). To support the author and view more information, checkout https://www.wojakindex.biz. (Seems to go down sometimes)
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak)
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak)
### Ticker Symbol
You can also base your Wojak's state off of a crypto ticker symbol via the `symbol` query string. Data is provided using Binance API's 24hr [price change statistics](https://binance-docs.github.io/apidocs/spot/en/#current-average-price). View a list of available symbols at https://wojak-topaz.vercel.app/.
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak?symbol=BTCUSDT)
```
![Wojak Index](https://wojak-topaz.vercel.app/api/wojak?symbol=BTCUSDT)

## Getting Started
Instructions on getting a local copy running and deployed on [Vercel](https://vercel.com/).

### Prerequisites
Make sure you have at least the minimum supported version of Node.js for [Next.js](https://nextjs.org/docs).
### Installation
1. Clone the repository: `git clone https://github.com/fireteam99/wojak.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Navigate to: `http://localhost:3000`
### Deploy with Vercel
1. Build locally: `npm run build`
2. Check build: `npm start`
3. Deploy to staging: `npm run deploy`
4. Deploy to prod: `npm run deploy:prod`


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffireteam99%2Fwojak)

## Roadmap
- [ ] Store image locally
- [ ] More config options
- [ ] More Wojaks
- [ ] More widgets
- [ ] Improved home page
- [ ] Logging
- [ ] Tests

## Contributing
Pull requests and suggestions are welcome!

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See [LICENSE.md](https://github.com/fireteam99/wojak/blob/main/LICENSE.md) for more information.

## Acknowledgments
Speical thanks to the author of https://www.wojakindex.biz/ and [Bizonacci](https://www.youtube.com/c/Bizonacci/videos).
