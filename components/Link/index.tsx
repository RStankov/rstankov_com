import React from 'react';
import NextLink from 'next/link';
import IPaths from '~/types/paths';

interface IProps {
  href: IPaths;
  children: React.ReactNode;
  replace?: boolean;
  className?: string;
  title?: string;
  rel?: string;
  target?: '_blank';
}

export default React.forwardRef(function Link(
  { href, rel, ...props }: IProps,
  ref: any,
) {
  if (href.startsWith('http')) {
    return <a {...props} href={href} rel={rel || 'noopener'} ref={ref} />;
  }

  return <NextLink href={href} {...props} ref={ref} />;
});
