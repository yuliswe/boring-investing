'use client';

import { useEffect } from 'react';
import type { MouseEvent, ReactNode } from 'react';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
};

export function Dialog({
  open,
  onClose,
  title,
  actions,
  children,
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const stop = (event: MouseEvent) => event.stopPropagation();

  return (
    <div className='dialog-backdrop' onClick={onClose}>
      <div className='dialog' role='dialog' aria-modal='true' onClick={stop}>
        <div className='dialog-title'>{title}</div>
        <div className='dialog-body'>{children}</div>
        {actions ? <div className='dialog-actions'>{actions}</div> : null}
      </div>
    </div>
  );
}
