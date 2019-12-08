import React from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  replace?: boolean;
  [name: string]: any;
}

export default React.forwardRef(({ href, ...props }: IProps, ref: any) => {
  return (
    <Link href={href} prefetch={false}>
      <a {...props} ref={ref} />
    </Link>
  );
});
