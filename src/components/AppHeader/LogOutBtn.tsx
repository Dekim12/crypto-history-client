'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NOT_AVAILABLE_ROUTES = ['/sign-in', '/login'];

export default function LogOutBtn() {
  const pathname = usePathname();

  const isUserLogout = NOT_AVAILABLE_ROUTES.includes(pathname);

  return (
    <Link
      href='/login'
      className={`btn transition duration-500 ease-out hover:bg-my-col-4 hover:text-my-col-1 ${
        isUserLogout ? 'invisible' : 'visible'
      }`}
    >
      Log Out
    </Link>
  );
}
