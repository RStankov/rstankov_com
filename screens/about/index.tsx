import * as React from 'react';
import Link from '~/components/Link';
import tw from '~/types/tailwind';
import coverImage from './cover.jpg';
import IPaths from '~/types/paths';

export default function Page() {
  return (
    <div className={tw('flex flex-col gap-4')}>
      <img
        src={coverImage.src}
        className={tw('w-full rounded-md')}
        alt="Radoslav Stankov"
      />
      <h1 className={tw('text-lg font-bold')}>About me</h1>
      <Year year={2002}>
        Started web development with{' '}
        <HoverLink href="https://en.wikipedia.org/wiki/Adobe_Flash">
          Flash
        </HoverLink>{' '}
        in an agency in my home town of{' '}
        <HoverLink href="https://www.google.com/maps?q=Dobrich+Bulgaria">
          Dobrich, Bulgaria
        </HoverLink>
        . I quickly switched to PHP and JavaScript. Then moved to Ruby on Rails.
        👨‍💻
      </Year>
      <Year year={2009}>
        First contribution to major open source project -
        <HoverLink href="http://prototypejs.org/">Prototype.js</HoverLink>.
      </Year>
      <Year year={2010}>
        Finished my bachelor in computer science from{' '}
        <HoverLink href="http://fs.tu-varna.bg/">
          Technical University Varna
        </HoverLink>
        .<br />
        First talk at conference -{' '}
        <HoverLink href="https://www.openfest.org/">OpenFest</HoverLink>
        <br />
        Joined a startup named{' '}
        <HoverLink href="https://www.crunchbase.com/organization/lookk">
          LOOKK
        </HoverLink>
        . <i>I became its CTO in 2012.</i> 🎓
      </Year>
      <Year year={2012}>
        Started a conference named{' '}
        <HoverLink href="http://varnaconf.com/">VarnaConf</HoverLink>.{' '}
        <i>
          It is still going to this day as part of{' '}
          <HoverLink href="http://it-tour.bg/">IT Tour</HoverLink> conferences.
        </i>{' '}
        🎬
      </Year>
      <Year year={2013}>
        Created, together with{' '}
        <HoverLink href="https://twitter.com/DeVladinci">
          Vladimir Vladimir
        </HoverLink>
        , a music creation iOS app -{' '}
        <HoverLink href="https://www.producthunt.com/posts/4beats-music-creator">
          4Beats
        </HoverLink>
        . 🎶 📲
        <br />
        Open sourced{' '}
        <HoverLink href="https://github.com/RStankov/SearchObject">
          Search Object
        </HoverLink>
        💎
      </Year>
      <Year year={2014}>
        Joined{' '}
        <HoverLink href="https://www.producthunt.com/">Product Hunt</HoverLink>.
        😸
      </Year>
      <Year year={2015}>
        Started to blogging at{' '}
        <HoverLink href="https://blog.rstankov.com">
          blog.rstankov.com
        </HoverLink>
        .
      </Year>
      <Year year={2016}>
        Started to organize{' '}
        <HoverLink href="https://www.meetup.com/React-Sofia">
          React Sofia Meetup
        </HoverLink>
        . ⚛️
      </Year>
      <Year year={2017}>
        Started using <HoverLink href="https://graphql.org/">GraphQL</HoverLink>{' '}
        at{' '}
        <HoverLink href="https://www.producthunt.com/">Product Hunt</HoverLink>
        .
        <br />
        First talk at international conference{' '}
        <HoverLink href="https://www.wearedevelopers.com/">
          WeAreDevelopers
        </HoverLink>
        . 🎤
        <br />
        <HoverLink href="https://www.producthunt.com/">
          Product Hunt
        </HoverLink>{' '}
        got acquired by{' '}
        <HoverLink href="https://angel.co/">AngelList</HoverLink>.
      </Year>
      <Year year={2018}>
        Became Head of Engineering at{' '}
        <HoverLink href="https://www.producthunt.com/">Product Hunt</HoverLink>
        .<br />
        Wrote the{' '}
        <HoverLink href="https://www.howtographql.com/graphql-ruby/0-introduction/">
          Ruby
        </HoverLink>{' '}
        section on{' '}
        <HoverLink href="https://www.howtographql.com">
          HowToGraphQL.com
        </HoverLink>
        .
        <br />
        Started organizing{' '}
        <HoverLink href="http://react-not-a-conf.com/">
          React.NotAConf
        </HoverLink>
        .
        <br />
        <i>This was a busy year</i> 🤩
      </Year>
      <Year year={2020}>
        New <HoverLink href="https://rstankov.com">rstankov.com</HoverLink>
        <br />
        Beta Testing Your Stack at{' '}
        <HoverLink href="https://www.producthunt.com/">
          Product Hunt
        </HoverLink>{' '}
        🥞
        <br />
        Launched{' '}
        <HoverLink href="https://github.com/RStankov/FocusedTask">
          Focused Task
        </HoverLink>{' '}
        🎯
      </Year>
      <Year year={2021}>
        Started a side project called{' '}
        <HoverLink href="https://angrybuilding.com">Angry Building</HoverLink>{' '}
        🔥 📱
      </Year>
      <Year year={2023}>
        Left{' '}
        <HoverLink href="https://www.producthunt.com">Product Hunt</HoverLink>{' '}
        to become CTO of{' '}
        <HoverLink href="https://angrybuilding.com">Angry Building</HoverLink>{' '}
        🔥 🚀
      </Year>
      <Year year={2024}>
        Started the
        <HoverLink href="https://tips.rstankov.com">Rado's tips</HoverLink>{' '}
        Newsletter ✏️ 📭
      </Year>
      <div className={tw('text-center')}>
        <i>...to be continued</i> 😅
      </div>
    </div>
  );
}

function HoverLink({ href, children }: { href: IPaths; children: string }) {
  return (
    <Link
      target={href.startsWith('http') ? '_blank' : undefined}
      href={href}
      className={tw('underline hover:no-underline')}>
      {children}
    </Link>
  );
}

function Year({ year, children }: { year: number; children: React.ReactNode }) {
  return (
    <div className={tw('flex flex-col sm:flex-row gap-4 items-center')}>
      <div
        className={tw(
          'inline-flex justify-center items-center bg-gray-900 w-16 h-16 rounded-full font-bold text-gray-50',
        )}>
        {year}
      </div>
      <div className={tw('flex-1')}>{children}</div>
    </div>
  );
}
