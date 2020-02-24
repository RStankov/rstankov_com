import * as React from 'react';
import styles from './styles.module.css';
import paths from '~/paths';
import LinkExternal from '~/components/LinkExternal';

export default function Page() {
  return (
    <>
      <img
        src={paths.image.cover}
        className={styles.cover}
        alt="Radoslav Stankov"
      />
      <h1 className={styles.title}>A bit about me</h1>
      <p>
        In 2002, I started web development with{' '}
        <LinkExternal href="https://en.wikipedia.org/wiki/Adobe_Flash">
          Flash
        </LinkExternal>{' '}
        in an agency in my home town of{' '}
        <LinkExternal href="https://www.google.com/maps?q=Dobrich+Bulgaria">
          Dobrich, Bulgaria
        </LinkExternal>
        . I quickly switched to PHP and JavaScript. Then moved to Ruby on Rails.
      </p>
      <p>
        In 2010, I finished my bachelor in computer science from{' '}
        <LinkExternal href="http://fs.tu-varna.bg/">
          Technical University Varna
        </LinkExternal>
        , I joined a startup named{' '}
        <LinkExternal href="https://www.crunchbase.com/organization/lookk">
          LOOKK
        </LinkExternal>
        . <i>I became its CTO in 2012.</i>
      </p>
      <p>
        In 2012, I started a conference named{' '}
        <LinkExternal href="http://varnaconf.com/">VarnaConf</LinkExternal>. It
        is still going to this day as part of{' '}
        <LinkExternal href="http://it-tour.bg/">IT Tour</LinkExternal>{' '}
        conferences.
      </p>
      <p>
        In 2013, together with{' '}
        <LinkExternal href="https://twitter.com/DeVladinci">
          Vladimir Vladimir
        </LinkExternal>
        , we created an iOS Music creation app - named{' '}
        <LinkExternal href="https://www.producthunt.com/posts/4beats-music-creator">
          4Beats
        </LinkExternal>
        .
      </p>
      <p>
        In 2014, I joined{' '}
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>
        . It was{' '}
        <LinkExternal href="https://techcrunch.com/2016/12/01/angelhunt/">
          acquired
        </LinkExternal>{' '}
        by <LinkExternal href="https://angel.co/">AngelList</LinkExternal> in
        2017.
      </p>
      <p>
        In 2017, I started to organize{' '}
        <LinkExternal href="https://www.meetup.com/React-Sofia">
          React Sofia Meetup
        </LinkExternal>
        , which grew to{' '}
        <LinkExternal href="http://react-not-a-conf.com/">
          React.NotAConf
        </LinkExternal>{' '}
        conference in 2018.
      </p>
      <p>
        In 2018, I became head of engineering at{' '}
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>
        . The same year, I wrote the{' '}
        <LinkExternal href="https://www.howtographql.com/graphql-ruby/0-introduction/">
          Ruby
        </LinkExternal>{' '}
        section on{' '}
        <LinkExternal href="howtographql.com">HowToGraphQL.com</LinkExternal>.{' '}
        <i>This was a busy year</i> 🤩
      </p>
      <p>
        I try to{' '}
        <LinkExternal href="http://blog.rstankov.com/">blog</LinkExternal> and
        contribute to{' '}
        <LinkExternal href="https://github.com/rstankov">
          open source
        </LinkExternal>
        , whenever I have time 😅
      </p>
      <p>
        You can ping me on{' '}
        <LinkExternal href="https://twitter.com/rstankov">Twitter</LinkExternal>{' '}
        about anything related to GraphQL, React, JavaScript, Ruby, product
        development, remote work, or software engineering in general.
      </p>
    </>
  );
}
