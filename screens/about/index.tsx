import * as React from 'react';
import styles from './styles.module.css';
import paths from '~/paths';
import Link from '~/components/Link';
import Stack from '~/components/Stack';

export default function Page() {
  return (
    <Stack.Column gap="m">
      <img
        src={paths.image.cover}
        className={styles.cover}
        alt="Radoslav Stankov"
      />
      <h1>About me</h1>
      <Row year={2002}>
        Started web development with{' '}
        <Link href="https://en.wikipedia.org/wiki/Adobe_Flash">Flash</Link> in
        an agency in my home town of{' '}
        <Link href="https://www.google.com/maps?q=Dobrich+Bulgaria">
          Dobrich, Bulgaria
        </Link>
        . I quickly switched to PHP and JavaScript. Then moved to Ruby on Rails.
        👨‍💻
      </Row>
      <Row year={2009}>
        First contribution to major open source project -
        <Link href="http://prototypejs.org/">Prototype.js</Link>.
      </Row>
      <Row year={2010}>
        Finished my bachelor in computer science from{' '}
        <Link href="http://fs.tu-varna.bg/">Technical University Varna</Link>
        .<br />
        First talk at conference -{' '}
        <Link href="https://www.openfest.org/">OpenFest</Link>
        <br />
        Joined a startup named{' '}
        <Link href="https://www.crunchbase.com/organization/lookk">
          LOOKK
        </Link>. <i>I became its CTO in 2012.</i> 🎓
      </Row>
      <Row year={2012}>
        Started a conference named{' '}
        <Link href="http://varnaconf.com/">VarnaConf</Link>.{' '}
        <i>
          It is still going to this day as part of{' '}
          <Link href="http://it-tour.bg/">IT Tour</Link> conferences.
        </i>{' '}
        🎬
      </Row>
      <Row year={2013}>
        Created, together with{' '}
        <Link href="https://twitter.com/DeVladinci">Vladimir Vladimir</Link>, a
        music creation iOS app -{' '}
        <Link href="https://www.producthunt.com/posts/4beats-music-creator">
          4Beats
        </Link>
        . 🎶 📲
        <br />
        Open sourced{' '}
        <Link href="https://github.com/RStankov/SearchObject">
          Search Object
        </Link>
        💎
      </Row>
      <Row year={2014}>
        Joined <Link href="https://www.producthunt.com/">Product Hunt</Link>. 😸
      </Row>
      <Row year={2015}>
        Started to blogging at <Link href={paths.blog}>blog.rstankov.com</Link>.
      </Row>
      <Row year={2016}>
        Started to organize{' '}
        <Link href="https://www.meetup.com/React-Sofia">
          React Sofia Meetup
        </Link>
        . ⚛️
      </Row>
      <Row year={2017}>
        Started using <Link href="https://graphql.org/">GraphQL</Link> at{' '}
        <Link href="https://www.producthunt.com/">Product Hunt</Link>
        .
        <br />
        First talk at international conference{' '}
        <Link href="https://www.wearedevelopers.com/">WeAreDevelopers</Link>
        . 🎤
        <br />
        <Link href="https://www.producthunt.com/">Product Hunt</Link> got
        acquired by <Link href="https://angel.co/">AngelList</Link>.
      </Row>
      <Row year={2018}>
        Became Head of Engineering at{' '}
        <Link href="https://www.producthunt.com/">Product Hunt</Link>
        .<br />
        Wrote the{' '}
        <Link href="https://www.howtographql.com/graphql-ruby/0-introduction/">
          Ruby
        </Link>{' '}
        section on <Link href="howtographql.com">HowToGraphQL.com</Link>.
        <br />
        Started organizing{' '}
        <Link href="http://react-not-a-conf.com/">React.NotAConf</Link>
        .
        <br />
        <i>This was a busy year</i> 🤩
      </Row>
      <Row year={2020}>
        New <Link href="https://rstankov.com">rstankov.com</Link>
        <br />
        Beta Testing <Link href="https://yourstack.com">
          Your Stack
        </Link> at <Link href="https://www.producthunt.com/">Product Hunt</Link>{' '}
        🥞
        <br />
        Launched{' '}
        <Link href="https://github.com/RStankov/FocusedTask">
          Focused Task
        </Link>{' '}
        🎯
      </Row>
      <div className={styles.continue}>
        <i>...to be continued</i> 😅
      </div>
    </Stack.Column>
  );
}

function Row({ year, children }: { year: number; children: React.ReactNode }) {
  return (
    <Stack.ResponsiveRow align="center" gap="m">
      <div className={styles.year}>{year}</div>
      <div>{children}</div>
    </Stack.ResponsiveRow>
  );
}

Page.meta = {
  title: 'About',
  description: 'A bit information about Radoslav Stankov.',
  image: paths.image.cover,
};
