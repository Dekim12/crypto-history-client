import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { AppHeader } from '../components';

import './globals.css';

export const revalidate = 300;

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-family-roboto',
});

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
      <body className={`${roboto.variable} font-sans`}>
        <div className=' max text-al flex-di w-fullfont-sans box-border flex min-h-screen flex-col bg-my-col-3 text-my-col-2'>
          <AppHeader />
          <main className='f-siz text-al mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-3'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
