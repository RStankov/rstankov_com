'use client';

import { useState } from 'react';
import Link from '~/components/Link';
import NavLink from './NavLink';
import tw from '~/types/tailwind';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className={tw('relative')}>
      <header className={tw('flex items-center py-4')}>
        <Link
          href="/"
          className={tw('text-lg font-bold hover:text-brand flex-1')}
        >
          Radoslav Stankov
        </Link>
        <ul className={tw('hidden sm:flex gap-2')}>
          <li>
            <NavLink href="/" label="Home" />
          </li>
          <li>
            <NavLink href="/appearances" label="Appearances" />
          </li>
          <li>
            <NavLink href="/about" label="About" />
          </li>
          <li>
            <NavLink href="https://tips.rstankov.com" label="Newsletter" />
          </li>
          <li>
            <NavLink href="https://blog.rstankov.com" label="Blog" />
          </li>
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className={tw('sm:hidden p-1 text-gray-600')}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </header>
      {open && (
        <nav
          className={tw(
            'sm:hidden absolute top-full left-0 right-0 z-10 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-col gap-1 p-3',
          )}
          onClick={() => setOpen(false)}
        >
          <NavLink href="/" label="Home" />
          <NavLink href="/appearances" label="Appearances" />
          <NavLink href="/about" label="About" />
          <NavLink href="https://tips.rstankov.com" label="Newsletter" />
          <NavLink href="https://blog.rstankov.com" label="Blog" />
        </nav>
      )}
    </div>
  );
}
