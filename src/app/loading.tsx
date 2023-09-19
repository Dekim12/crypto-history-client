export default function Loading() {
  return (
    <>
      <div
        className='mt-10 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-my-col-1 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      />
      <h1 className='mt-4 text-xl'>Loading...</h1>
    </>
  );
}
