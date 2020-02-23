import React from 'react';
import Head from './Head';
import IconProductHunt from './IconProductHunt';
import IconGithub from './IconGithub';
import IconTwitter from './IconTwitter';
import Link from '~/components/Link';
import styles from './styles.module.css';
import paths from '~/paths';
import useCurrentPath from '~/hooks/useCurrentPath';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Layout({ children, ...headProps }: IProps) {
  return (
    <>
      <Head {...headProps} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href={paths.home} className={styles.name}>
            Radoslav Stankov
          </Link>
          <ul>
            <li>
              <NavLink href={paths.blog} label="Blog" />
            </li>
            <li>
              <NavLink href={paths.appearances} label="Appearances" />
            </li>
            <li>
              <NavLink href={paths.projects} label="Projects" />
            </li>
            <li>
              <NavLink href={paths.about} label="About" />
            </li>
          </ul>
        </header>
        {children}
        <footer className={styles.footer}>
          <ul>
            <li>
              <a
                href="https://twitter.com/rstankov"
                className={styles.footerTwitter}>
                <IconTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rstankov"
                className={styles.footerGithub}>
                <IconGithub />
              </a>
            </li>
            <li>
              <a
                href="https://producthunt.com/@rstankov"
                className={styles.footerProductHunt}>
                <IconProductHunt />
              </a>
            </li>
          </ul>
          <small>© 2019 Radoslav Stankov</small>
        </footer>
      </div>
    </>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const currentPath = useCurrentPath();

  return (
    <Link
      href={href}
      className={classNames({
        [styles.active]: currentPath === href,
      })}>
      {label}
    </Link>
  );
}
