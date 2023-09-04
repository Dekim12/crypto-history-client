export default function AppHeader() {
  return (
    <header className='align-it bg t bg-my-col-1 flex h-12 items-center justify-between px-4 text-neutral-200'>
      <a className='text-xl font-bold' href='#'>
        CRPT
      </a>
      <button className='p-1 text-lg font-medium'>Log Out</button>
    </header>
  );
}
