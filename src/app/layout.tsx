import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boring Investing',
  description: 'Static stock-analysis showcase for a handful of companies.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen antialiased'>{children}</body>
    </html>
  );
}
