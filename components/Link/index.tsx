import React from 'react';
import NextLink from 'next/link';

interface IProps {
  href: string;
  replace?: boolean;
  [name: string]: any;
}

export default React.forwardRef(function Link(
  { href, ...props }: IProps,
  ref: any,
) {
  return (
    <NextLink href={href}>
      <a {...props} ref={ref} />
    </NextLink>
  );
});
