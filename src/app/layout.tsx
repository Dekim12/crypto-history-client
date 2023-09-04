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
        <div className=' bg-my-col-3 text-my-col-2 max text-al flex-di w-fullfont-sans box-border flex min-h-screen flex-col'>
          <AppHeader />
          <main className='f-siz mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-3'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
