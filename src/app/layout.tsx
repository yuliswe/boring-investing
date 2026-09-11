import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Karla:ital,wght@0,400..700;1,400..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-screen antialiased'>{children}</body>
    </html>
  );
}
