import * as React from 'react';
import styles from './styles.module.css';
import paths from '~/paths';

export default function Page() {
  return (
    <>
      <img
        src={paths.image.cover}
        className={styles.cover}
        alt="Radoslav Stankov"
      />
      <h1>A bit about me</h1>
      <p>
        In 2002, I started web development with{' '}
        <a href="https://en.wikipedia.org/wiki/Adobe_Flash" target="_blank">
          Flash
        </a>{' '}
        in an agency in my home town of{' '}
        <a
          href="https://www.google.com/maps?q=Dobrich+Bulgaria"
          target="_blank">
          Dobrich, Bulgaria
        </a>
        . I quickly switched to PHP and JavaScript. Then moved to Ruby on Rails.
      </p>
      <p>
        In 2010, I finished my bachelor in computer science from{' '}
        <a href="http://fs.tu-varna.bg/">Technical University Varna</a>, I
        joined a startup named{' '}
        <a href="https://www.crunchbase.com/organization/lookk" target="_blank">
          LOOKK
        </a>
        . <i>I became its CTO in 2012.</i>
      </p>
      <p>
        In 2012, I started a conference named{' '}
        <a href="http://varnaconf.com/" target="_blank">
          VarnaConf
        </a>
        . It is still going to this day as part of{' '}
        <a href="http://it-tour.bg/" target="_blank">
          IT Tour
        </a>{' '}
        conferences.
      </p>
      <p>
        In 2013, together with{' '}
        <a href="https://twitter.com/DeVladinci" target="_blank">
          Vladimir Vladimir
        </a>
        , we created an iOS Music creation app - named{' '}
        <a
          href="https://www.producthunt.com/posts/4beats-music-creator"
          target="_blank">
          4Beats
        </a>
        .
      </p>
      <p>
        In 2014, I joined{' '}
        <a href="https://www.producthunt.com/" target="_blank">
          Product Hunt
        </a>
        . It was{' '}
        <a href="https://techcrunch.com/2016/12/01/angelhunt/" target="_blank">
          acquired
        </a>{' '}
        by{' '}
        <a href="https://angel.co/" target="_blank">
          AngelList
        </a>{' '}
        in 2017.
      </p>
      <p>
        In 2017, I started to organize{' '}
        <a href="https://www.meetup.com/React-Sofia" target="_blank">
          React Sofia Meetup
        </a>
        , which grew to{' '}
        <a href="http://react-not-a-conf.com/" target="_blank">
          React.NotAConf
        </a>{' '}
        conference in 2018.
      </p>
      <p>
        In 2018, I became head of engineering at{' '}
        <a href="https://www.producthunt.com/" target="_blank">
          Product Hunt
        </a>
        . The same year, I wrote the{' '}
        <a
          href="https://www.howtographql.com/graphql-ruby/0-introduction/"
          target="_blank">
          Ruby
        </a>{' '}
        section on{' '}
        <a href="howtographql.com" target="_blank">
          HowToGraphQL.com
        </a>
        . <i>This was a busy year</i> 🤩
      </p>
      <p>
        I try to{' '}
        <a href="http://blog.rstankov.com/" target="_blank">
          blog
        </a>{' '}
        and contribute to{' '}
        <a href="https://github.com/rstankov" target="_blank">
          open source
        </a>{' '}
        whenever I have time. 😅
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
