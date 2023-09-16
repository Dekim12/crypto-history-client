import { CoinItem } from '../../components/allCoins';
import { coinsList } from '../../data/coinsList';

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
