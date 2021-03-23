import * as React from 'react';
import paths from '~/paths';
import styles from './styles.module.css';
import LinkExternal from '~/components/LinkExternal';
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
        (owned by <LinkExternal href="https://angel.co">AngelList</LinkExternal>
        ).
      </p>
      <p className={styles.paragraph}>
        In my spare time, I'm:
        <ul>
          <li>
            blogging at{' '}
            <LinkExternal href="https://blog.rstankov.com">
              📝 blog.rstankov.com
            </LinkExternal>
          </li>
          <li>
            building{' '}
            <LinkExternal href="https://github.com/RStankov/FocusedTask">
              🎯 Focused Task{' '}
            </LinkExternal>
          </li>
          <li>
            organizing{' '}
            <LinkExternal href="http://react-not-a-conf.com/">
              🚀 React.NotAConf
            </LinkExternal>{' '}
            conference and{' '}
            <LinkExternal href="https://www.meetup.com/React-Sofia">
              ⚛️ React Sofia Meetup
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
    'Personal website of Radoslav Stankov, head of engineering of Product Hunt.',
  image: paths.image.avatar,
};
