import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1 className='mb-2 mt-5 text-3xl'>Something went wrong!</h1>
      <p className='text-xl'>Please, go to Login page</p>
      <Link
        href='/login'
        className='btn mt-3 bg-my-col-4 shadow-lg transition duration-500 ease-out hover:scale-105 hover:bg-my-col-1 hover:text-my-col-3'
      >
        Login Page
      </Link>
    </>
  );
}
