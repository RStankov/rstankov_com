import React from 'react';
import Head from './Head';
import IconProductHunt from './IconProductHunt';
import IconGithub from './IconGithub';
import IconTwitter from './IconTwitter';
import IconLinkedIn from './IconLinkedIn';
import Link from '~/components/Link';
import styles from './styles.css';
import paths from '~/paths';
import useCurrentPath from '~/hooks/useCurrentPath';
import classNames from 'classnames';

import './html.css';

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Layout({ children, ...headProps }: IProps) {
  const currentPath = useCurrentPath();

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
              <Link href={paths.blog}>Blog</Link>
            </li>
            <li>
              <Link
                href={paths.appearances}
                className={classNames({
                  [styles.active]: currentPath === paths.appearances,
                })}>
                Appearances
              </Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
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
          <small>© 2019, Radoslav Stankov</small>
        </footer>
      </div>
    </>
  );
}
