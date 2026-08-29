import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import '@/design-system/classical.css';

export const metadata: Metadata = {
  title: 'Boring Investing',
  description: 'Static stock-analysis showcase for a handful of companies.',
};

const themeScript = `(function(){
  var s;try{s=localStorage.getItem('boring-investing.theme')}catch(e){}
  var t=s||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
})()`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className='min-h-screen antialiased'>{children}</body>
    </html>
  );
}
