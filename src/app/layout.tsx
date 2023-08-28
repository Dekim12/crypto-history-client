import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppHeader } from '../components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto coins app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='font-family: ui-sans-serif, Roboto; box-border min-h-screen w-full bg-neutral-100 text-base text-slate-800'>
          <AppHeader />
          <main className={'flex flex-col px-5 py-3'}>{children}</main>
        </div>
      </body>
    </html>
  );
}
