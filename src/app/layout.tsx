import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { AppHeader } from '@/components';

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
        <div className='box-border flex min-h-screen w-full flex-col bg-my-col-3 font-sans text-lg text-my-col-2'>
          <AppHeader />
          <main className='mx-auto flex w-full max-w-5xl grow flex-col items-center px-5 py-3'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
