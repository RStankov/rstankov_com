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
      <Row year={2002}>
        Started web development with{' '}
        <LinkExternal href="https://en.wikipedia.org/wiki/Adobe_Flash">
          Flash
        </LinkExternal>{' '}
        in an agency in my home town of{' '}
        <LinkExternal href="https://www.google.com/maps?q=Dobrich+Bulgaria">
          Dobrich, Bulgaria
        </LinkExternal>
        . I quickly switched to PHP and JavaScript. Then moved to Ruby on Rails.
        👨‍💻
      </Row>
      <Row year={2009}>
        First contribution to major open source project -
        <LinkExternal href="http://prototypejs.org/">Prototype.js</LinkExternal>
        .
      </Row>
      <Row year={2010}>
        Finished my bachelor in computer science from{' '}
        <LinkExternal href="http://fs.tu-varna.bg/">
          Technical University Varna
        </LinkExternal>
        .<br />
        First talk at conference -{' '}
        <LinkExternal href="https://www.openfest.org/">OpenFest</LinkExternal>
        <br />
        Joined a startup named{' '}
        <LinkExternal href="https://www.crunchbase.com/organization/lookk">
          LOOKK
        </LinkExternal>
        . <i>I became its CTO in 2012.</i> 🎓
      </Row>
      <Row year={2012}>
        Started a conference named{' '}
        <LinkExternal href="http://varnaconf.com/">VarnaConf</LinkExternal>.{' '}
        <i>
          It is still going to this day as part of{' '}
          <LinkExternal href="http://it-tour.bg/">IT Tour</LinkExternal>{' '}
          conferences.
        </i>{' '}
        🎬
      </Row>
      <Row year={2013}>
        Created, together with{' '}
        <LinkExternal href="https://twitter.com/DeVladinci">
          Vladimir Vladimir
        </LinkExternal>
        , a music creation iOS app -{' '}
        <LinkExternal href="https://www.producthunt.com/posts/4beats-music-creator">
          4Beats
        </LinkExternal>
        . 🎶 📲
        <br />
        Open sourced{' '}
        <LinkExternal href="https://github.com/RStankov/SearchObject">
          Search Object
        </LinkExternal>
        💎
      </Row>
      <Row year={2014}>
        Joined{' '}
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>
        . 😸
      </Row>
      <Row year={2015}>
        Started to blogging at{' '}
        <LinkExternal href={paths.blog}>blog.rstankov.com</LinkExternal>.
      </Row>
      <Row year={2016}>
        Started to organize{' '}
        <LinkExternal href="https://www.meetup.com/React-Sofia">
          React Sofia Meetup
        </LinkExternal>
        . ⚛️
      </Row>
      <Row year={2017}>
        Started using{' '}
        <LinkExternal href="https://graphql.org/">GraphQL</LinkExternal> at{' '}
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>
        .
        <br />
        First talk at international conference{' '}
        <LinkExternal href="https://www.wearedevelopers.com/">
          WeAreDevelopers
        </LinkExternal>
        . 🎤
        <br />
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>{' '}
        got acquired by{' '}
        <LinkExternal href="https://angel.co/">AngelList</LinkExternal>.
      </Row>
      <Row year={2018}>
        Became head of engineering at{' '}
        <LinkExternal href="https://www.producthunt.com/">
          Product Hunt
        </LinkExternal>
        .<br />
        Wrote the{' '}
        <LinkExternal href="https://www.howtographql.com/graphql-ruby/0-introduction/">
          Ruby
        </LinkExternal>{' '}
        section on{' '}
        <LinkExternal href="howtographql.com">HowToGraphQL.com</LinkExternal>.
        <br />
        Started organizing{' '}
        <LinkExternal href="http://react-not-a-conf.com/">
          React.NotAConf
        </LinkExternal>
        .
        <br />
        <i>This was a busy year</i> 🤩
      </Row>
      <div className={styles.continue}>
        <i>...to be continue</i> 😅
      </div>
    </>
  );
}

function Row({ year, children }: { year: number; children: React.ReactNode }) {
  return (
    <div className={styles.row}>
      <div className={styles.year}>{year}</div>
      <div>{children}</div>
    </div>
  );
}

Page.meta = {
  title: 'About',
  description: 'A bit information about Radoslav Stankov.',
  image: paths.image.cover,
};
