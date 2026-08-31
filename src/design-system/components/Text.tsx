import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type TextVariant =
  | 'display'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'overline'
  | 'body'
  | 'small'
  | 'caption';

const HEADING_VARIANTS: Record<string, string> = {
  display: 'ds-heading ds-text-display',
  h2: 'ds-heading ds-text-h2',
  h3: 'ds-heading ds-text-h3',
  h4: 'ds-heading ds-text-h4',
  h5: 'ds-heading ds-text-h5',
};

const OTHER_VARIANTS: Record<string, string> = {
  overline: 'ds-text-overline',
  body: 'ds-text-body',
  small: 'ds-text-small',
  caption: 'ds-text-caption',
};

const DEFAULT_ELEMENT: Record<TextVariant, ElementType> = {
  display: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  overline: 'p',
  body: 'p',
  small: 'p',
  caption: 'p',
};

type TextProps = {
  variant?: TextVariant;
  as?: ElementType;
  muted?: boolean;
  tabular?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<'p'>, 'className' | 'children'>;

export function Text({
  variant = 'body',
  as,
  muted = false,
  tabular = false,
  className = '',
  children,
  ...rest
}: TextProps) {
  const Component = as ?? DEFAULT_ELEMENT[variant];
  const variantClass = HEADING_VARIANTS[variant] ?? OTHER_VARIANTS[variant];
  const classes = [
    variantClass,
    muted ? 'ds-muted' : '',
    tabular ? 'ds-tnum' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
