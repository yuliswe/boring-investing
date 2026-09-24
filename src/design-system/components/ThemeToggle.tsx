'use client';

import { useCallback, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'boring-investing.theme';

function getSnapshot(): 'light' | 'dark' {
  return (
    (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') ??
    'light'
  );
}

function getServerSnapshot(): 'light' | 'dark' {
  return 'light';
}

function subscribe(onStoreChange: () => void): () => void {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, [theme]);

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      className='flex-none flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-hover)] transition-colors'
    >
      {theme === 'dark' ? (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='8' cy='8' r='3' />
          <path d='M8 1.5v1M8 13.5v1M3.4 3.4l.7.7M11.9 11.9l.7.7M1.5 8h1M13.5 8h1M3.4 12.6l.7-.7M11.9 4.1l.7-.7' />
        </svg>
      ) : (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M13.5 8.5a5.5 5.5 0 1 1-6-6 4.5 4.5 0 0 0 6 6z' />
        </svg>
      )}
    </button>
  );
}
