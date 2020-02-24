import React from 'react';
import Head from './Head';
import IconProductHunt from '~/icons/ProductHunt';
import IconGithub from '~/icons/Github';
import IconTwitter from '~/icons/Twitter';
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
      <header className={styles.header}>
        <Link href={paths.home} className={styles.name}>
          Radoslav Stankov
        </Link>
        <ul>
          <li>
            <a href={paths.blog}>Blog</a>
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
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a
              href="https://twitter.com/rstankov"
              target="_blank"
              title="Twitter"
              className={styles.footerTwitter}>
              <IconTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rstankov"
              target="_blank"
              title="GitHub"
              className={styles.footerGithub}>
              <IconGithub />
            </a>
          </li>
          <li>
            <a
              href="https://producthunt.com/@rstankov"
              target="_blank"
              title="Product Hunt"
              className={styles.footerProductHunt}>
              <IconProductHunt />
            </a>
          </li>
        </ul>
        <small>© Radoslav Stankov {new Date().getFullYear()} </small>
      </footer>
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
