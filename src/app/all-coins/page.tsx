import { fetchCoinsList } from '../../api/coins';
import { CoinItem } from '../../components/allCoins';

export default async function AllCoins() {
  const coinsList = await fetchCoinsList();

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
