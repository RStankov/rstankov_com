import Link from '~/components/Link';
import tw from '~/types/tailwind';
import coverImage from './cover.jpg';
import IPaths from '~/types/paths';

export default function Page() {
  return (
    <div className={tw('flex flex-col gap-6')}>
      <img
        src={coverImage.src}
        className={tw('w-full h-72 object-cover rounded-md')}
        alt="Radoslav Stankov"
      />
      <div>
        <h1 className={tw('text-2xl font-bold mb-3')}>About me</h1>
        <div
          className={tw(
            'bg-white rounded-lg border border-gray-100 shadow-sm p-4 space-y-1',
          )}>
          <p className={tw('text-xs font-medium text-gray-400 -mt-1 mb-1')}>
            My mottos
          </p>
          <p className={tw('italic text-gray-600')}>
            I&apos;m always glad to help 🙌
          </p>
          <p className={tw('italic text-gray-600')}>I always deliver 🚀</p>
        </div>
      </div>
      <div>
        <Year year={2002}>
          Started with{' '}
          <HoverLink href="https://en.wikipedia.org/wiki/Adobe_Flash">
            Flash
          </HoverLink>{' '}
          at a local agency in my hometown of{' '}
          <HoverLink href="https://www.google.com/maps?q=Dobrich+Bulgaria">
            Dobrich, Bulgaria
          </HoverLink>
          . Quickly moved through PHP and JavaScript before discovering Ruby on
          Rails. 👨‍💻
        </Year>
        <Year year={2009}>
          First contribution to a major open source project -{' '}
          <HoverLink href="http://prototypejs.org/">Prototype.js</HoverLink>.
        </Year>
        <Year year={2010}>
          Finished my bachelor's in computer science from{' '}
          <HoverLink href="http://fs.tu-varna.bg/">
            Technical University Varna
          </HoverLink>
          <br />
          First talk at a conference -{' '}
          <HoverLink href="https://www.openfest.org/">OpenFest</HoverLink>
          <br />
          Joined a startup named{' '}
          <HoverLink href="https://www.crunchbase.com/organization/lookk">
            LOOKK
          </HoverLink>{' '}
          (<i>I became its CTO in 2012</i>) 🎓
        </Year>
        <Year year={2012}>
          Started a conference named{' '}
          <HoverLink href="http://varnaconf.com/">VarnaConf</HoverLink>
          <br />
          It is now part of{' '}
          <HoverLink href="http://it-tour.bg/">IT Tour</HoverLink> conferences.
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
          </HoverLink>{' '}
          🎶 📲
          <br />
          Open sourced{' '}
          <HoverLink href="https://github.com/RStankov/SearchObject">
            Search Object
          </HoverLink>
          💎
        </Year>
        <Year year={2014}>
          Joined{' '}
          <HoverLink href="https://www.producthunt.com/">
            Product Hunt
          </HoverLink>{' '}
          😸
        </Year>
        <Year year={2015}>
          Started blogging at{' '}
          <HoverLink href="https://blog.rstankov.com">
            blog.rstankov.com
          </HoverLink>{' '}
          📝
        </Year>
        <Year year={2016}>
          Started organizing{' '}
          <HoverLink href="https://www.meetup.com/React-Sofia">
            React Sofia Meetup
          </HoverLink>
          ⚛️
        </Year>
        <Year year={2017}>
          Started using{' '}
          <HoverLink href="https://graphql.org/">GraphQL</HoverLink> at{' '}
          <HoverLink href="https://www.producthunt.com/">
            Product Hunt
          </HoverLink>
          <br />
          First talk at an international conference -{' '}
          <HoverLink href="https://www.wearedevelopers.com/">
            WeAreDevelopers
          </HoverLink>
          🎤
          <br />
          <HoverLink href="https://www.producthunt.com/">
            Product Hunt
          </HoverLink>{' '}
          got acquired by{' '}
          <HoverLink href="https://angel.co/">AngelList</HoverLink>.
        </Year>
        <Year year={2018}>
          Became Head of Engineering at{' '}
          <HoverLink href="https://www.producthunt.com/">
            Product Hunt
          </HoverLink>
          <br />
          Wrote the{' '}
          <HoverLink href="https://www.howtographql.com/graphql-ruby/0-introduction/">
            Ruby
          </HoverLink>{' '}
          section on{' '}
          <HoverLink href="https://www.howtographql.com">
            HowToGraphQL.com
          </HoverLink>
          <br />
          Started organizing{' '}
          <HoverLink href="http://react-not-a-conf.com/">
            React.NotAConf
          </HoverLink>
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
          Started the{' '}
          <HoverLink href="https://tips.rstankov.com">Rado's tips</HoverLink>{' '}
          Newsletter ✏️ 📭
        </Year>
        <Year year={2025}>
          Angry Building rebranded as{' '}
          <HoverLink href="https://livo.me">LIVO</HoverLink> 🔲
        </Year>
        <Year year={2026}>
          Became CTO of <HoverLink href="https://doczen.com">Doczen</HoverLink>{' '}
          📦
        </Year>
      </div>
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
    <div className={tw('relative flex gap-5 pb-8 group')}>
      <div
        className={tw('absolute top-8 bottom-0 bg-gray-900 group-last:hidden')}
        style={{ left: 27, width: 2 }}
      />
      <div
        className={tw(
          'relative flex justify-center items-center bg-gray-900 w-14 h-8 rounded-lg font-bold text-gray-50 text-sm shrink-0',
        )}>
        {year}
      </div>
      <div className={tw('flex-1')} style={{ paddingTop: 4 }}>
        {children}
      </div>
    </div>
  );
}
