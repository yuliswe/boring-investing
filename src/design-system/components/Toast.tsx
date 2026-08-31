import type { ReactNode } from 'react';

type ToastProps = {
  mark?: ReactNode;
  onDismiss?: () => void;
  children: ReactNode;
};

export function Toast({ mark = '✓', onDismiss, children }: ToastProps) {
  return (
    <div className='toast' role='status'>
      <span className='toast-mark' aria-hidden='true'>
        {mark}
      </span>
      <span className='toast-msg'>{children}</span>
      <button
        type='button'
        className='toast-dismiss'
        aria-label='Dismiss'
        onClick={onDismiss}
      >
        &times;
      </button>
    </div>
  );
}

export function ToastViewport({ children }: { children: ReactNode }) {
  return <div className='toast-viewport'>{children}</div>;
}
