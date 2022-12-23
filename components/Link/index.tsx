import React from 'react';
import NextLink from 'next/link';
import IPaths from '~/types/paths';

interface IProps {
  href: IPaths;
  children: React.ReactNode;
  replace?: boolean;
  className?: string;
  title?: string;
}

export default React.forwardRef(function Link(
  { href, ...props }: IProps,
  ref: any,
) {
  if (href.startsWith('http')) {
    return <a {...props} href={href} rel="noopener" ref={ref} />;
  }

  return <NextLink href={href} {...props} ref={ref} />;
});
