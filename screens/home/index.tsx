import * as React from 'react';
import paths from '~/paths';
import styles from './styles.module.css';
import LinkExternal from '~/components/LinkExternal';

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <img
          src={paths.image.avatar}
          className={styles.avatar}
          alt="Radoslav Stankov"
        />
        <h1>Hey, I'm Rado 👋</h1>
      </div>
      <p className={styles.paragraph}>
        I'm head of engineering of{' '}
        <LinkExternal href="https://www.producthunt.com">
          Product Hunt
        </LinkExternal>{' '}
        (owned by <LinkExternal href="https://angel.co">AngelList</LinkExternal>
        ).
      </p>
      <p className={styles.paragraph}>
        In my spare time, I'm organizing{' '}
        <LinkExternal href="http://react-not-a-conf.com/">
          React.NotAConf
        </LinkExternal>{' '}
        conference and{' '}
        <LinkExternal href="https://www.meetup.com/React-Sofia">
          React Sofia Meetup
        </LinkExternal>
        .
      </p>
      <p className={styles.paragraph}>
        I try to{' '}
        <LinkExternal href="http://blog.rstankov.com/">blog</LinkExternal> and
        contribute to{' '}
        <LinkExternal href="https://github.com/rstankov">
          open source
        </LinkExternal>
        , whenever I have time 😅
      </p>
      <p className={styles.paragraph}>
        You can ping me on{' '}
        <LinkExternal href="https://twitter.com/rstankov">Twitter</LinkExternal>{' '}
        about anything related to GraphQL, React, JavaScript, Ruby, product
        development, remote work, or software engineering in general.
      </p>
    </>
  );
}
