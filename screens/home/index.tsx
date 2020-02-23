import * as React from 'react';
import paths from '~/paths';
import styles from './styles.module.css';

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <h1>👋 Hey, I'm Rado</h1>
        <img
          src={paths.image.avatar}
          className={styles.avatar}
          alt="Radoslav Stankov"
        />
      </div>
      <p>
        I'm head of engineering of{' '}
        <a href="https://www.producthunt.com" target="_blank">
          Product Hunt
        </a>{' '}
        (owned by{' '}
        <a href="https://angel.co" target="_blank">
          AngelList
        </a>
        ).
        <br />
        In my spare time, I'm organizing{' '}
        <a href="http://react-not-a-conf.com/" target="_blank">
          React.NotAConf
        </a>{' '}
        conference and{' '}
        <a href="https://www.meetup.com/React-Sofia" target="_blank">
          React Sofia Meetup
        </a>
        .
      </p>
      <p>
        I try to{' '}
        <a href="http://blog.rstankov.com/" target="_blank">
          blog
        </a>{' '}
        and contribute to{' '}
        <a href="https://github.com/rstankov" target="_blank">
          open source
        </a>
        , whenever I have time 😅
      </p>
      <p>
        You can ping me on{' '}
        <a href="https://twitter.com/rstankov" target="_blank">
          Twitter
        </a>{' '}
        about anything related to GraphQL, React, JavaScript, Ruby, product
        development, remote work, or software engineering in general.
      </p>
    </>
  );
}
