import Image from 'next/image';
import { notFound } from 'next/navigation';

import { fetchSingleCoinById } from '@/api/coins';
import { Coin } from '@/types';

const PRICE_HISTORY_ITEMS: Array<{
  period: string;
  priceKey: keyof Coin;
}> = [
  { period: 'Hour', priceKey: 'percent_change_1h' },
  { period: 'Day', priceKey: 'percent_change_24h' },
  { period: 'Week', priceKey: 'percent_change_7d' },
  { period: 'Month', priceKey: 'percent_change_30d' },
  { period: '2 Months', priceKey: 'percent_change_60d' },
  { period: '3 Months', priceKey: 'percent_change_90d' },
];

export default async function CoinPage({
  params,
}: {
  params: { coinId: string };
}) {
  const { coinId } = params;
  const coin = await fetchSingleCoinById(coinId);

  if (!coin) {
    notFound();
  }

  return (
    <>
      <Image
        src={coin.logo}
        width={70}
        height={70}
        quality={100}
        priority
        alt={`${coin.name} logo icon`}
        className='mb-2 h-16 w-auto select-none'
      />
      <h1 className='text-center text-3xl font-medium uppercase tracking-wider'>
        {coin.name} <span className='text-gray-600'>({coin.symbol})</span>
      </h1>

      <div className='mb-2 mt-4 flex flex-col items-center'>
        <div className='flex w-full items-center justify-between px-1 text-3xl tracking-wider '>
          <div className='w-56 rounded border-2 border-my-col-1 bg-my-col-4 py-3 text-center shadow-xl'>
            Rank {coin.cmc_rank}
          </div>
          <div className='w-56 rounded border-2 border-my-col-1 bg-my-col-4 py-3 text-center shadow-xl'>
            {`${(+coin.price).toFixed(3)} $`}
          </div>
        </div>

        <div className='mt-3 flex w-full flex-wrap justify-between text-xl font-medium'>
          {PRICE_HISTORY_ITEMS.map(({ priceKey, period }) => (
            <ul
              key={priceKey}
              className='m-1 flex w-36 flex-col items-center justify-center rounded border-2 border-my-col-1 bg-my-col-4 shadow-lg'
            >
              <li className='w-full grow bg-my-col-1 p-2 text-center text-my-col-3'>
                {period}
              </li>
              <li
                className={`grow p-2 tracking-wider ${
                  +coin[priceKey] > 0 ? 'text-lime-700' : 'text-red-700'
                }`}
              >
                {coin ? `${coin[priceKey]}%` : '---'}
              </li>
            </ul>
          ))}
        </div>

        <div className='mx-1 mt-3 flex flex-col self-stretch rounded border-2 border-my-col-1 bg-my-col-4 p-3 shadow-lg'>
          {coin.description && <p>{coin.description}</p>}
          {coin.website && (
            <a
              href={coin.website}
              className='externalLink mt-1'
              target='_blank'
            >
              Website
            </a>
          )}
          {coin.technical_doc && (
            <a
              href={coin.technical_doc}
              className='externalLink mt-1'
              target='_blank'
            >
              Technical Documentation
            </a>
          )}
        </div>
      </div>
    </>
  );
}
