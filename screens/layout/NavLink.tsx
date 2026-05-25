'use client';

import cn from 'classnames';
import { usePathname } from 'next/navigation';
import Link from '~/components/Link';
import IPaths from '~/types/paths';

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
        'px-3 py-1 rounded-full text-sm font-medium transition-colors',
        currentPath === href
          ? 'bg-brand text-white'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
      )}
    >
      {label}
    </Link>
  );
}
