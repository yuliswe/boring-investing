'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type NoteBubbleNote = {
  text: string;
  author: string;
  time: string;
};

type NoteBubbleProps = {
  note?: NoteBubbleNote;
  onSave?: (text: string) => void;
  onDelete?: () => void;
  className?: string;
  children?: ReactNode;
};

function ChatIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 24 24'
      fill='none'
      stroke='var(--color-bg)'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    </svg>
  );
}

export function NoteBubble({
  note,
  onSave,
  onDelete,
  className = '',
  children,
}: NoteBubbleProps) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLButtonElement>(null);

  const handleToggle = useCallback(() => {
    setOpen(prev => {
      if (!prev) {
        setDraft(note?.text ?? '');
        setEditing(false);
      }
      return !prev;
    });
  }, [note?.text]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClickAway = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        cardRef.current &&
        !cardRef.current.contains(target) &&
        pinRef.current &&
        !pinRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickAway);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickAway);
    };
  }, [open]);

  const handleSave = useCallback(() => {
    if (!draft.trim()) return;
    onSave?.(draft.trim());
    setEditing(false);
  }, [draft, onSave]);

  const handleDelete = useCallback(() => {
    onDelete?.();
    setOpen(false);
  }, [onDelete]);

  const handleEdit = useCallback(() => {
    setDraft(note?.text ?? '');
    setEditing(true);
  }, [note?.text]);

  return (
    <div className={`note-bubble ${className}`.trim()}>
      {children}

      <div className='note-bubble-anchor'>
        <button
          ref={pinRef}
          type='button'
          className='note-bubble-pin'
          onClick={handleToggle}
          aria-label={note ? 'View note' : 'Add note'}
        >
          <ChatIcon />
          {note ? <span className='note-bubble-badge'>1</span> : null}
        </button>
        <div className='note-bubble-stem' />
        <div className='note-bubble-dot' />

        {open ? (
          <div ref={cardRef} className='note-bubble-card'>
            {note && !editing ? (
              <>
                <div className='note-bubble-header'>
                  <div className='note-bubble-meta'>
                    <span className='note-bubble-author'>{note.author}</span>
                    <span className='note-bubble-time'>{note.time}</span>
                  </div>
                  <div className='note-bubble-actions'>
                    <button
                      type='button'
                      className='note-bubble-action'
                      onClick={handleEdit}
                      aria-label='Edit note'
                    >
                      &#9998;
                    </button>
                    <button
                      type='button'
                      className='note-bubble-action note-bubble-action-delete'
                      onClick={handleDelete}
                      aria-label='Delete note'
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <div className='note-bubble-text'>{note.text}</div>
              </>
            ) : (
              <NoteBubbleEditor
                draft={draft}
                onDraftChange={setDraft}
                onSave={handleSave}
                onCancel={editing ? () => setEditing(false) : undefined}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function NoteBubbleEditor({
  draft,
  onDraftChange,
  onSave,
  onCancel,
}: {
  draft: string;
  onDraftChange: (v: string) => void;
  onSave: () => void;
  onCancel?: () => void;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className='note-bubble-editor'>
      <textarea
        ref={ref}
        className='note-bubble-textarea'
        value={draft}
        onChange={e => onDraftChange(e.target.value)}
        placeholder='Write a note about this section...'
      />
      <div className='note-bubble-editor-footer'>
        {onCancel ? (
          <button
            type='button'
            className='btn btn-ghost btn-sm'
            onClick={onCancel}
          >
            Cancel
          </button>
        ) : null}
        <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={onSave}
          disabled={!draft.trim()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
