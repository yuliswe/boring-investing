import type { Metadata } from 'next';
import { Gallery } from '@/app/components/Gallery';

export const metadata: Metadata = {
  title: 'Components — Boring Investing',
  description: 'Every design-system component and its variations.',
};

export default function ComponentsPage() {
  return <Gallery />;
}
