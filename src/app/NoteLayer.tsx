'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { usePathname } from 'next/navigation';
import { NoteBubble } from '@/design-system';

type NoteData = {
  id: string;
  anchorId: string;
  xPct: number;
  yPct: number;
  text: string;
  author: string;
  createdAt: string;
};

const NOTES_CHANGED = 'notes-changed';

function storageKey(path: string) {
  return `notes:${path}`;
}

function readRaw(path: string): string {
  return localStorage.getItem(storageKey(path)) ?? '[]';
}

function writeNotes(path: string, notes: NoteData[]) {
  localStorage.setItem(storageKey(path), JSON.stringify(notes));
  window.dispatchEvent(new Event(NOTES_CHANGED));
}

function useStoredNotes(pathname: string) {
  const key = storageKey(pathname);

  const subscribe = useCallback(
    (cb: () => void) => {
      const onStorage = (e: StorageEvent) => {
        if (e.key === key) cb();
      };
      window.addEventListener('storage', onStorage);
      window.addEventListener(NOTES_CHANGED, cb);
      return () => {
        window.removeEventListener('storage', onStorage);
        window.removeEventListener(NOTES_CHANGED, cb);
      };
    },
    [key]
  );

  const getSnapshot = useCallback(() => readRaw(pathname), [pathname]);

  const raw = useSyncExternalStore(subscribe, getSnapshot, () => '[]');
  return useMemo(() => JSON.parse(raw) as NoteData[], [raw]);
}

function findAnchorId(el: Element): string | null {
  let current: Element | null = el;
  while (current && current !== document.documentElement) {
    if (current.id) return current.id;
    current = current.parentElement;
  }
  return null;
}

function formatTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  if (diff < 60_000) return 'just now';
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function useAnchorPosition(anchorId: string, xPct: number, yPct: number) {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useEffect(() => {
    const update = () => {
      const anchor = document.getElementById(anchorId);
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      setPos({
        left: rect.left + (xPct / 100) * rect.width + window.scrollX,
        top: rect.top + (yPct / 100) * rect.height + window.scrollY,
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [anchorId, xPct, yPct]);

  return pos;
}

function AnchoredNote({
  note,
  defaultOpen,
  onSave,
  onDelete,
  onClose,
}: {
  note: NoteData;
  defaultOpen?: boolean;
  onSave: (text: string) => void;
  onDelete: () => void;
  onClose?: () => void;
}) {
  const pos = useAnchorPosition(note.anchorId, note.xPct, note.yPct);

  const noteData = note.text
    ? {
        text: note.text,
        author: note.author,
        time: formatTime(note.createdAt),
      }
    : undefined;

  if (!pos) return null;

  return (
    <div
      className='note-anchor-wrapper'
      style={{ left: pos.left, top: pos.top }}
    >
      <NoteBubble
        note={noteData}
        defaultOpen={defaultOpen}
        onSave={onSave}
        onDelete={onDelete}
        onClose={onClose}
      />
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    </svg>
  );
}

export function NoteLayer() {
  const [noteMode, setNoteMode] = useState(false);
  const [placingId, setPlacingId] = useState<string | null>(null);
  const pathname = usePathname();
  const notes = useStoredNotes(pathname);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === 'c' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setNoteMode(prev => {
          if (prev) setPlacingId(null);
          return !prev;
        });
      }
      if (e.key === 'Escape') {
        setNoteMode(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (noteMode) {
      document.body.classList.add('note-mode-active');
    } else {
      document.body.classList.remove('note-mode-active');
    }
    return () => document.body.classList.remove('note-mode-active');
  }, [noteMode]);

  const pathnameRef = useRef(pathname);
  useEffect(() => {
    pathnameRef.current = pathname;
  });

  useEffect(() => {
    if (!noteMode) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('.note-bubble') || target.closest('.note-mode-bar'))
        return;

      e.preventDefault();
      e.stopPropagation();

      const anchorId = findAnchorId(target);
      if (!anchorId) return;

      const anchor = document.getElementById(anchorId)!;
      const rect = anchor.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;

      const newNote: NoteData = {
        id: crypto.randomUUID(),
        anchorId,
        xPct,
        yPct,
        text: '',
        author: 'You',
        createdAt: new Date().toISOString(),
      };

      const current = JSON.parse(readRaw(pathnameRef.current)) as NoteData[];
      writeNotes(pathnameRef.current, [...current, newNote]);
      setPlacingId(newNote.id);
      setNoteMode(false);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [noteMode]);

  const handleSave = useCallback(
    (noteId: string, text: string) => {
      const current = JSON.parse(readRaw(pathname)) as NoteData[];
      writeNotes(
        pathname,
        current.map(n => (n.id === noteId ? { ...n, text } : n))
      );
      setPlacingId(prev => (prev === noteId ? null : prev));
    },
    [pathname]
  );

  const handleDelete = useCallback(
    (noteId: string) => {
      const current = JSON.parse(readRaw(pathname)) as NoteData[];
      writeNotes(
        pathname,
        current.filter(n => n.id !== noteId)
      );
      setPlacingId(prev => (prev === noteId ? null : prev));
    },
    [pathname]
  );

  const handleClose = useCallback(
    (noteId: string) => {
      const current = JSON.parse(readRaw(pathname)) as NoteData[];
      const note = current.find(n => n.id === noteId);
      if (note && !note.text) {
        writeNotes(
          pathname,
          current.filter(n => n.id !== noteId)
        );
      }
      setPlacingId(prev => (prev === noteId ? null : prev));
    },
    [pathname]
  );

  if (!isMounted) return null;

  return (
    <>
      {notes.map(note => (
        <AnchoredNote
          key={note.id}
          note={note}
          defaultOpen={note.id === placingId}
          onSave={text => handleSave(note.id, text)}
          onDelete={() => handleDelete(note.id)}
          onClose={() => handleClose(note.id)}
        />
      ))}

      {noteMode && (
        <div className='note-mode-bar'>
          <span className='note-mode-bar-icon'>
            <ChatIcon />
          </span>
          <span className='note-mode-bar-text'>
            Click anywhere to place a note
          </span>
          <button
            type='button'
            className='note-mode-bar-close'
            onClick={() => setNoteMode(false)}
            aria-label='Exit note mode'
          >
            &times;
          </button>
          <span className='note-mode-bar-hint'>
            Press C to toggle &middot; Esc to exit
          </span>
        </div>
      )}
    </>
  );
}
