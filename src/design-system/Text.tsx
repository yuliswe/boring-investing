import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type TextVariant = 'display' | 'heading' | 'subheading' | 'body' | 'caption';

const VARIANT_CLASSES: Record<TextVariant, string> = {
  display: 'text-4xl font-bold tracking-tight text-ink',
  heading: 'text-2xl font-semibold tracking-tight text-ink',
  subheading: 'text-lg font-semibold text-ink',
  body: 'text-base leading-relaxed text-ink',
  caption: 'text-sm text-ink-muted',
};

const DEFAULT_ELEMENT: Record<TextVariant, ElementType> = {
  display: 'h1',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  caption: 'p',
};

type TextProps = {
  variant?: TextVariant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Text({
  variant = 'body',
  as,
  className = '',
  children,
  ...rest
}: TextProps & Omit<ComponentPropsWithoutRef<ElementType>, keyof TextProps>) {
  const Component = as ?? DEFAULT_ELEMENT[variant];
  return (
    <Component className={`${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
