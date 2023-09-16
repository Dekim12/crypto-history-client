import LogOutBtn from './LogOutBtn';

export default function AppHeader() {
  return (
    <header className='flex h-14 items-center justify-between bg-my-col-1 pb-1 pl-5 pr-2 text-neutral-200 shadow-lg'>
      <a className='text-2xl font-bold' href='#'>
        CRPT
      </a>
      <LogOutBtn />
    </header>
  );
}
