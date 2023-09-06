import { CoinItem } from '../../components/allCoins';

const coinsList = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    cmc_rank: 1,
    price: '25940.50085',
    percent_change_1h: '-0.166',
    percent_change_24h: '0.469',
    percent_change_7d: '-0.717',
    percent_change_30d: '-10.706',
    percent_change_60d: '-14.940',
    percent_change_90d: '1.831',
    description:
      'Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,475,462. The last known price of Bitcoin is 25,938.77936388 USD and is up 0.46 over the last 24 hours. It is currently trading on 10440 active market(s) with $8,177,121,183.88 traded over the last 24 hours. More information can be found at https://bitcoin.org/.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    website: 'https://bitcoin.org/',
    technical_doc: 'https://bitcoin.org/bitcoin.pdf',
  },
  {
    id: 1027,
    name: 'Ethereum',
    symbol: 'ETH',
    cmc_rank: 2,
    price: '1636.99161',
    percent_change_1h: '-0.135',
    percent_change_24h: '0.259',
    percent_change_7d: '-1.196',
    percent_change_30d: '-10.611',
    percent_change_60d: '-14.304',
    percent_change_90d: '-9.253',
    description:
      'Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,216,736.72469984. The last known price of Ethereum is 1,637.07501985 USD and is up 0.23 over the last 24 hours. It is currently trading on 7327 active market(s) with $2,894,911,894.98 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    website: 'https://www.ethereum.org/',
    technical_doc: 'https://github.com/ethereum/wiki/wiki/White-Paper',
  },
  {
    id: 825,
    name: 'Tether USDt',
    symbol: 'USDT',
    cmc_rank: 3,
    price: '0.99981',
    percent_change_1h: '-0.014',
    percent_change_24h: '-0.012',
    percent_change_7d: '0.027',
    percent_change_30d: '0.076',
    percent_change_60d: '-0.009',
    percent_change_90d: '-0.035',
    description:
      'Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 85,437,198,727.27763 with 82,900,167,311.56065 in circulation. The last known price of Tether USDt is 0.99988349 USD and is up -0.00 over the last 24 hours. It is currently trading on 61266 active market(s) with $13,791,124,099.53 traded over the last 24 hours. More information can be found at https://tether.to.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    website: 'https://tether.to',
    technical_doc:
      'https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf',
  },
  {
    id: 1839,
    name: 'BNB',
    symbol: 'BNB',
    cmc_rank: 4,
    price: '214.14080',
    percent_change_1h: '-0.249',
    percent_change_24h: '0.140',
    percent_change_7d: '-2.142',
    percent_change_30d: '-11.365',
    percent_change_60d: '-10.566',
    percent_change_90d: '-22.515',
    description:
      'BNB (BNB) is a cryptocurrency . BNB has a current supply of 153,850,057.24789038. The last known price of BNB is 214.17182023 USD and is up 0.19 over the last 24 hours. It is currently trading on 1605 active market(s) with $260,338,420.42 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    website: 'https://bnbchain.org/en',
    technical_doc: 'No technical doc',
  },
  {
    id: 52,
    name: 'XRP',
    symbol: 'XRP',
    cmc_rank: 5,
    price: '0.50572',
    percent_change_1h: '-0.319',
    percent_change_24h: '1.703',
    percent_change_7d: '-3.776',
    percent_change_30d: '-22.782',
    percent_change_60d: '5.876',
    percent_change_90d: '0.898',
    description:
      'XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,988,458,761 with 52,977,697,600 in circulation. The last known price of XRP is 0.50535093 USD and is up 1.64 over the last 24 hours. It is currently trading on 1060 active market(s) with $587,226,267.45 traded over the last 24 hours. More information can be found at https://xrpl.org/.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    website: 'https://xrpl.org/',
    technical_doc: 'https://ripple.com/files/ripple_consensus_whitepaper.pdf',
  },
  {
    id: 3408,
    name: 'USD Coin',
    symbol: 'USDC',
    cmc_rank: 6,
    price: '0.99991',
    percent_change_1h: '-0.023',
    percent_change_24h: '-0.017',
    percent_change_7d: '-0.004',
    percent_change_30d: '-0.019',
    percent_change_60d: '0.007',
    percent_change_90d: '0.001',
    description:
      'USD Coin (USDC) is a cryptocurrency and operates on the Ethereum platform. USD Coin has a current supply of 26,181,261,785.53309. The last known price of USD Coin is 0.99997615 USD and is down -0.01 over the last 24 hours. It is currently trading on 13932 active market(s) with $1,762,018,703.15 traded over the last 24 hours. More information can be found at https://www.centre.io/usdc.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    website: 'https://www.centre.io/usdc',
    technical_doc:
      'https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf',
  },
  {
    id: 2010,
    name: 'Cardano',
    symbol: 'ADA',
    cmc_rank: 7,
    price: '0.25507',
    percent_change_1h: '-0.175',
    percent_change_24h: '-0.125',
    percent_change_7d: '-2.992',
    percent_change_30d: '-13.163',
    percent_change_60d: '-10.283',
    percent_change_90d: '-27.153',
    description:
      'Cardano (ADA) is a cryptocurrency launched in 2017. Cardano has a current supply of 36,137,410,585.885 with 35,077,955,788.313 in circulation. The last known price of Cardano is 0.25494355 USD and is down -0.06 over the last 24 hours. It is currently trading on 921 active market(s) with $98,841,300.96 traded over the last 24 hours. More information can be found at https://www.cardano.org.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    website: 'https://www.cardano.org',
    technical_doc: 'https://docs.cardano.org/en/latest/',
  },
  {
    id: 74,
    name: 'Dogecoin',
    symbol: 'DOGE',
    cmc_rank: 8,
    price: '0.06332',
    percent_change_1h: '-0.094',
    percent_change_24h: '0.007',
    percent_change_7d: '0.328',
    percent_change_30d: '-13.753',
    percent_change_60d: '-5.276',
    percent_change_90d: '-4.735',
    description:
      'Dogecoin (DOGE) is a cryptocurrency . Users are able to generate DOGE through the process of mining. Dogecoin has a current supply of 140,858,736,383.70523. The last known price of Dogecoin is 0.06334563 USD and is up 0.10 over the last 24 hours. It is currently trading on 774 active market(s) with $152,810,034.29 traded over the last 24 hours. More information can be found at http://dogecoin.com/.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
    website: 'http://dogecoin.com/',
    technical_doc: 'https://github.com/dogecoin/dogecoin/blob/master/README.md',
  },
  {
    id: 5426,
    name: 'Solana',
    symbol: 'SOL',
    cmc_rank: 9,
    price: '19.43056',
    percent_change_1h: '-0.395',
    percent_change_24h: '0.391',
    percent_change_7d: '-6.229',
    percent_change_30d: '-15.442',
    percent_change_60d: '4.162',
    percent_change_90d: '-2.524',
    description:
      'Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 556,524,547.9628849 with 408,701,294.42706645 in circulation. The last known price of Solana is 19.42242828 USD and is up 0.35 over the last 24 hours. It is currently trading on 501 active market(s) with $163,242,346.54 traded over the last 24 hours. More information can be found at https://solana.com.',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
    website: 'https://solana.com',
    technical_doc: 'https://solana.com/solana-whitepaper.pdf',
  },
];

export default function AllCoins() {
  const coins = coinsList.map(({ cmc_rank, symbol, name, price, logo }) => (
    <CoinItem
      key={symbol}
      rank={cmc_rank}
      name={name}
      price={price}
      logo={logo}
    />
  ));

  return (
    <div className='w-full'>
      <h1 className='mb-2 text-center text-2xl uppercase'>Coins List</h1>
      {coins}
    </div>
  );
}
