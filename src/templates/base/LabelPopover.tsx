'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';

type PopoverState = {
  label: string;
  desc: string;
  rect: DOMRect;
} | null;

type PopoverCtx = {
  open: (label: string, desc: string, rect: DOMRect) => void;
  close: () => void;
};

const LabelPopoverCtx = createContext<PopoverCtx>({
  open: () => {},
  close: () => {},
});

export function useLabelPopover() {
  return useContext(LabelPopoverCtx);
}

export function DescribedLabel({
  label,
  desc,
  className,
}: {
  label: string;
  desc?: string;
  className?: string;
}) {
  const { open } = useLabelPopover();

  if (!desc) {
    return <span className={className}>{label}</span>;
  }

  return (
    <button
      type='button'
      className={`label-described ${className ?? ''}`}
      onClick={e => {
        e.stopPropagation();
        open(label, desc, e.currentTarget.getBoundingClientRect());
      }}
    >
      {label}
    </button>
  );
}

function PopoverOverlay({
  state,
  onClose,
}: {
  state: PopoverState;
  onClose: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const triggerRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (state) triggerRect.current = state.rect;
  }, [state]);

  useEffect(() => {
    if (!state) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const onClickAway = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const onScroll = () => onClose();

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickAway);
    window.addEventListener('scroll', onScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickAway);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [state, onClose]);

  if (!state) return null;

  const desktopLeft = Math.min(state.rect.left, window.innerWidth - 320);
  const desktopTop = state.rect.bottom + 6;

  return (
    <>
      {/* Mobile scrim — visible only below 640px via CSS */}
      <div
        className='label-popover-scrim'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Desktop card — anchored below the label */}
      <div
        ref={cardRef}
        className='label-popover-card'
        role='dialog'
        aria-label={state.label}
        style={
          {
            '--lp-left': `${desktopLeft}px`,
            '--lp-top': `${desktopTop}px`,
          } as React.CSSProperties
        }
        data-popover
      >
        <div className='label-popover-header'>
          <span className='label-popover-title'>{state.label}</span>
          <button
            type='button'
            className='label-popover-close'
            onClick={onClose}
            aria-label='Close'
          >
            ×
          </button>
        </div>
        <p className='label-popover-body'>{state.desc}</p>
      </div>
    </>
  );
}

export function LabelPopoverProvider({ children }: { children: ReactNode }) {
  const [popover, setPopover] = useState<PopoverState>(null);

  const close = useCallback(() => setPopover(null), []);
  const open = useCallback((label: string, desc: string, rect: DOMRect) => {
    setPopover({ label, desc, rect });
  }, []);

  return (
    <LabelPopoverCtx.Provider value={{ open, close }}>
      {children}
      <PopoverOverlay state={popover} onClose={close} />
    </LabelPopoverCtx.Provider>
  );
}
