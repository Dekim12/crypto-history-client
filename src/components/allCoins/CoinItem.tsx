import Image from 'next/image';
import Link from 'next/link';

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
    <Link
      href='/coin'
      className='mb-4 flex h-12 w-full transform cursor-pointer items-center justify-between rounded bg-my-col-4 px-3 text-lg shadow-lg transition duration-500 ease-out hover:scale-105 hover:bg-my-col-1 hover:text-my-col-3'
    >
      <div className='mr-1 flex w-1/3 min-w-fit items-center'>
        <span className='w-6'>{rank}</span>
        <Image
          src={logo}
          width={25}
          height={25}
          quality={100}
          alt={`${name} logo icon`}
          className='mx-8 h-auto w-auto select-none'
        />
        <div>
          <svg
            className='w-8 select-none text-green-600'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='bold mx-1 w-1/3 min-w-fit text-center text-xl'>
        {name}
      </div>
      <div className='ml-1 w-1/3 min-w-fit text-end font-bold'>
        {(+price).toFixed(3)}
      </div>
    </Link>
  );
}
