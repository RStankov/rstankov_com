'use client';

import cn from 'classnames';
import { usePathname } from 'next/navigation';
import Link from '~/components/Link';
import IPaths from '~/types/paths';
import tw from '~/types/tailwind';

export default function NavLink({
  label,
  href,
}: {
  label: string;
  href: IPaths;
}) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        tw('hover:text-brand'),
        currentPath === href && tw('text-brand'),
      )}>
      {label}
    </Link>
  );
}
