import * as React from 'react';
import paths from '~/paths';
import styles from './styles.module.css';
import LinkExternal from '~/components/LinkExternal';
import Link from '~/components/Link';
import Stack from '~/components/Stack';

export default function Page() {
  return (
    <Stack.Column gap="m">
      <Stack.ResponsiveRow gap="m">
        <img
          src={paths.image.avatar}
          className={styles.avatar}
          alt="Radoslav Stankov"
        />
        <h1>Hey, I'm Rado 👋</h1>
      </Stack.ResponsiveRow>
      <p className={styles.paragraph}>
        I'm head of engineering at{' '}
        <LinkExternal href="https://www.producthunt.com">
          Product Hunt
        </LinkExternal>{' '}
        (part of{' '}
        <LinkExternal href="https://prologue.xyz">Prologue</LinkExternal>
        ).
      </p>
      <p className={styles.paragraph}>
        In my spare time, I'm:
        <ul>
          <li>
            Blogging at{' '}
            <LinkExternal href="https://blog.rstankov.com">
              📝 blog.rstankov.com
            </LinkExternal>
          </li>
          <li>
            Building{' '}
            <LinkExternal href="https://github.com/RStankov/FocusedTask">
              🎯 Focused Task{' '}
            </LinkExternal>
          </li>
          <li>
            Speaking at various <Link href={paths.appearances}>📅 events</Link>{' '}
            and <Link href={paths.appearances}>🎤 podcasts</Link>.
          </li>
          <li>
            Supporting couple of{' '}
            <LinkExternal href="https://github.com/RStankov">
              💻 open source
            </LinkExternal>{' '}
            projects like{' '}
            <LinkExternal href="https://github.com/RStankov/SearchObject">
              🔎 SearchObject
            </LinkExternal>{' '}
            and{' '}
            <LinkExternal href="https://github.com/producthunt/kitty-policy">
              😸 KittyPolicy
            </LinkExternal>
          </li>
        </ul>
      </p>
      <div className={styles.paragraph}>
        If you want me to speak at your event or podcast, reach out to at
        rstankov at gmail.
      </div>
      <div className={styles.paragraph}>
        You can ping me on{' '}
        <LinkExternal href={paths.external.twitter}>Twitter</LinkExternal> about
        anything related to GraphQL, React, JavaScript, Ruby, product
        development, remote work, or software engineering in general.
      </div>
    </Stack.Column>
  );
}

Page.meta = {
  title: 'Radoslav Stankov',
  description:
    'Personal website of Radoslav Stankov, Head of Engineering of Product Hunt.',
  image: paths.image.avatar,
};
