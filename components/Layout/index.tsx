import React from 'react';
import Head from './Head';
import IconProductHunt from './IconProductHunt.svg';
import IconGithub from './IconGithub.svg';
import IconTwitter from './IconTwitter.svg';
import IconLinkedIn from './IconLinkedIn.svg';
import Link from '~/components/Link';
import styles from './styles.css';

import './html.css';

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
          <Link href="/" className={styles.name}>
            Radoslav Stankov
          </Link>
          <ul>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Speaking</Link>
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
                href="https://github.com/rstankov"
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
            <li>
              <a
                href="http://blog.rstankov.com"
                className={styles.footerLinkedIn}>
                <IconLinkedIn />
              </a>
            </li>
          </ul>
          <small>© 2019, Radoslav Stankov</small>
        </footer>
      </div>
    </>
  );
}
