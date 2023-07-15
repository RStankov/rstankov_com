import IPaths from '~/types/paths';
import IconGithub from '~/icons/Github';
import IconProductHunt from '~/icons/ProductHunt';
import IconTwitter from '~/icons/Twitter';
import Link from '~/components/Link';
import React from 'react';
import classNames from 'classnames';
import tw from '~/types/tailwind';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en" className={tw('h-full')}>
      <body
        className={tw(
          'antialiased bg-gray-50 text-gray-900 border-t-brand border-t-8 h-full',
        )}>
        <div className={tw('flex flex-col h-full max-w-3xl mx-auto px-4')}>
          <header className={tw('flex items-center my-4')}>
            <Link
              href="/"
              className={tw(
                'text-lg font-bold hover:text-brand hidden sm:inline',
              )}>
              Radoslav Stankov
            </Link>
            <ul
              className={tw('flex flex-1 justify-center sm:justify-end gap-2')}>
              <li>
                <NavLink href="/" label="Home" />
              </li>
              <li>
                <NavLink href="https://blog.rstankov.com" label="Blog" />
              </li>
              <li>
                <NavLink href="/appearances" label="Appearances" />
              </li>
              <li>
                <NavLink href="/about" label="About" />
              </li>
            </ul>
          </header>
          <main className={tw('flex-1')}>{children}</main>
          <footer
            className={tw(
              'text-center border-t-gray-400 border-t mt-6 pt-6 pb-8 mx-40',
            )}>
            <div className={tw('flex gap-4 justify-center')}>
              <Link
                href="https://twitter.com/rstankov"
                title="Twitter"
                className={tw(
                  'rounded-full p-1.5 w-8 h-8 inline-block bg-gray-900 hover:bg-brand',
                )}>
                <IconTwitter className={tw('w-full h-full text-gray-50')} />
              </Link>
              <Link
                href="https://github.com/rstankov"
                title="GitHub"
                className={tw('text-gray-900 hover:text-brand')}>
                <IconGithub className={tw('w-8 h-8')} />
              </Link>
              <Link
                href="https://producthunt.com/@rstankov"
                title="Product Hunt"
                className={tw('text-gray-900 hover:text-brand')}>
                <IconProductHunt className={tw('w-8 h-8')} />
              </Link>
            </div>
            <small>© Radoslav Stankov {new Date().getFullYear()} </small>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

function NavLink({ label, href }: { label: string; href: IPaths }) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        tw('hover:text-brand'),
        currentPath === href && tw('text-brand'),
      )}>
      {label}
    </Link>
  );
}
