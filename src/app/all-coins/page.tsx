import { fetchCoinsList } from '../../api/coins';
import { CoinItem } from '../../components/allCoins';

export default async function AllCoinsPage() {
  const coinsList = await fetchCoinsList();

  return (
    <div className='w-full'>
      <h1 className='mb-2 text-center text-2xl uppercase'>Crypto Coins List</h1>
      {coinsList.length > 0 ? (
        coinsList.map(({ cmc_rank, symbol, name, price, logo, id }) => (
          <CoinItem
            key={id + symbol}
            rank={cmc_rank}
            name={name}
            price={price}
            logo={logo}
            id={id}
          />
        ))
      ) : (
        <p className='mt-2 text-center text-xl'>Coins are not found.</p>
      )}
    </div>
  );
}
