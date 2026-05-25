import Link from '~/components/Link';
import tw from '~/types/tailwind';

const AVATAR_IMAGE = '/avatar.jpg';

export default function Page() {
  return (
    <>
      <div className={tw('flex flex-row gap-5 items-center mt-6')}>
        <img
          src={AVATAR_IMAGE}
          className={tw(
            'rounded-full w-20 h-20 ring-2 ring-brand shadow-sm shrink-0',
          )}
          alt="Radoslav Stankov"
        />
        <div>
          <h1 className={tw('text-3xl font-bold mb-1')}>Hey, I'm Rado 👋</h1>
          <p className={tw('text-gray-500 text-sm')}>
            CTO · Developer · Speaker · Blogger
          </p>
        </div>
      </div>
      <div className={tw('flex flex-col gap-5 text-lg pt-6 leading-relaxed')}>
        <div className={tw('space-y-1')}>
          <div>
            I&apos;m CTO at{' '}
            <Link href="https://doczen.com" className={tw('font-semibold hover:text-brand')}>
              Doczen
            </Link>{' '}
            🚀.
          </div>
          <div>
            I write the{' '}
            <Link
              href="https://tips.rstankov.com"
              className={tw('font-semibold hover:text-brand')}>
              Rado&apos;s tips
            </Link>{' '}
            newsletter ✏️ 📭.
          </div>
          <div>
            Previously, I was Co-Founder/CTO at{' '}
            <Link href="https://livo.me" className={tw('font-semibold hover:text-brand')}>
              LIVO
            </Link>{' '}
            and Head of Engineering at{' '}
            <Link
              href="https://www.producthunt.com"
              className={tw('font-semibold hover:text-brand')}>
              Product Hunt
            </Link>{' '}
            😺.
          </div>
        </div>
        <div>
          In my spare time, I'm:
          <ul className={tw('list-disc pl-4 space-y-1')}>
            <li>
              Blogging at{' '}
              <Link
                href="https://blog.rstankov.com"
                className={tw('font-semibold hover:text-brand')}>
                📝 blog.rstankov.com
              </Link>
            </li>
            <li>
              Speaking at various{' '}
              <Link href="/appearances" className={tw('font-semibold hover:text-brand')}>
                📅 events
              </Link>{' '}
              and{' '}
              <Link href="/appearances" className={tw('font-semibold hover:text-brand')}>
                🎤 podcasts
              </Link>
              .
            </li>
            <li>
              Maintaining a couple of{' '}
              <Link
                href="https://github.com/RStankov"
                className={tw('font-semibold hover:text-brand')}>
                💻 open source
              </Link>{' '}
              projects like{' '}
              <Link
                href="https://github.com/RStankov/SearchObject"
                className={tw('font-semibold hover:text-brand')}>
                🔎 SearchObject
              </Link>{' '}
              and{' '}
              <Link
                href="https://github.com/producthunt/kitty-policy"
                className={tw('font-semibold hover:text-brand')}>
                😸 KittyPolicy.
              </Link>
            </li>
          </ul>
        </div>
        <div>
          I love discussing GraphQL, React, Ruby, engineering management, and
          remote work. Find me on{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/radoslavstankov/"
            className={tw('font-semibold hover:text-brand')}>
            LinkedIn
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://mastodon.social/@rstankov"
            className={tw('font-semibold hover:text-brand')}>
            Mastodon
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://www.threads.net/@rstankov"
            className={tw('font-semibold hover:text-brand')}>
            Threads
          </Link>
          , or{' '}
          <Link
            target="_blank"
            href="https://twitter.com/rstankov"
            className={tw('font-semibold hover:text-brand')}>
            Twitter
          </Link>
          .
        </div>
        <div>I&apos;m always glad to help 🙌</div>
      </div>
    </>
  );
}
