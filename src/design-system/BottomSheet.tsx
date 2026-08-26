'use client';

import { useEffect } from 'react';
import type { MouseEvent, ReactNode } from 'react';

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
};

export function BottomSheet({
  open,
  onClose,
  title,
  children,
}: BottomSheetProps) {
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
    <div className='sheet-backdrop' onClick={onClose}>
      <div className='sheet' role='dialog' aria-modal='true' onClick={stop}>
        <div className='sheet-handle' />
        {title ? <div className='sheet-title'>{title}</div> : null}
        {children}
      </div>
    </div>
  );
}

type SheetOptionProps = {
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
};

export function SheetOption({
  onClick,
  selected = false,
  children,
}: SheetOptionProps) {
  return (
    <button type='button' className='sheet-option' onClick={onClick}>
      <span style={{ flex: 1 }}>{children}</span>
      {selected ? (
        <span style={{ color: 'var(--color-accent)' }} aria-hidden='true'>
          ✓
        </span>
      ) : null}
    </button>
  );
}
