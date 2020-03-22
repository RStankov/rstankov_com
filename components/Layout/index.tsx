import Head from './Head';
import IconGithub from '~/icons/Github';
import IconProductHunt from '~/icons/ProductHunt';
import IconTwitter from '~/icons/Twitter';
import Link from '~/components/Link';
import LinkExternal from '~/components/LinkExternal';
import React from 'react';
import classNames from 'classnames';
import paths from '~/paths';
import styles from './styles.module.css';
import useCurrentPath from '~/hooks/useCurrentPath';

interface IProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export default function Layout({ children, meta }: IProps) {
  return (
    <>
      <Head meta={meta} />
      <header className={styles.header}>
        <Link href={paths.home} className={styles.name}>
          Radoslav Stankov
        </Link>
        <ul>
          <li className="home">
            <NavLink href={paths.home} label="Home" />
          </li>
          <li>
            <LinkExternal href={paths.blog}>Blog</LinkExternal>
          </li>
          <li>
            <NavLink href={paths.appearances} label="Appearances" />
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
            <LinkExternal
              href={paths.external.twitter}
              title="Twitter"
              className={styles.footerTwitter}>
              <IconTwitter />
            </LinkExternal>
          </li>
          <li>
            <LinkExternal
              href={paths.external.github}
              title="GitHub"
              className={styles.footerGithub}>
              <IconGithub />
            </LinkExternal>
          </li>
          <li>
            <LinkExternal
              href={paths.external.productHunt}
              title="Product Hunt"
              className={styles.footerProductHunt}>
              <IconProductHunt />
            </LinkExternal>
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
