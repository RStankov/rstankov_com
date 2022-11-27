import React from 'react';
import NextLink from 'next/link';

interface IProps {
  replace?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default React.forwardRef(function Link(
  { href, ...props }: IProps,
  ref: any,
) {
  if (href.startsWith('http')) {
    return <a {...props} ref={ref} rel="noopener" target="_blank" />;
  }

  return (
    <NextLink href={href}>
      <a {...props} ref={ref} />
    </NextLink>
  );
});
