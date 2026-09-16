'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type PopoverProps = {
  open: boolean;
  onClose: () => void;
  /** Horizontal edge the card aligns to within its positioned parent. */
  anchor?: 'left' | 'right';
  children: ReactNode;
};

/**
 * A floating surface anchored below its trigger. Render inside a
 * `position: relative` container alongside the trigger element;
 * the card appears at `top: calc(100% + space-2)` on the chosen side.
 * Dismisses on Escape and outside mousedown.
 */
export function Popover({
  open,
  onClose,
  anchor = 'left',
  children,
}: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const onClickAway = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickAway);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickAway);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={`popover ${anchor === 'right' ? 'popover-right' : ''}`}
      role='dialog'
    >
      {children}
    </div>
  );
}

type PopoverMenuItemProps = {
  onClick?: () => void;
  children: ReactNode;
};

export function PopoverMenuItem({ onClick, children }: PopoverMenuItemProps) {
  return (
    <button type='button' className='popover-menu-item' onClick={onClick}>
      {children}
    </button>
  );
}
