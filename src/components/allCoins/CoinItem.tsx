import Image from 'next/image';

export default function CoinItem({
  rank,
  name,
  price,
  logo,
}: {
  rank: number;
  name: string;
  price: string;
  logo: string;
}) {
  return (
    <div className='mb-4 flex h-12 w-full cursor-pointer items-center justify-between rounded border border-solid border-my-col-1 bg-my-col-4 px-3'>
      <div className='mr-1 flex w-1/3 min-w-fit'>
        <span>{rank}</span>
        <Image
          src={logo}
          width={25}
          height={25}
          alt={`${name} logo icon`}
          className='ml-8'
        />
      </div>
      <div className='bold mx-1 w-1/3 min-w-fit text-center text-xl'>
        {name}
      </div>
      <div className='ali ml-1 w-1/3 min-w-fit text-end font-bold'>
        {(+price).toFixed(3)}
      </div>
    </div>
  );
}
