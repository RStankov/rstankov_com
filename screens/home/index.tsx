import Link from '~/components/Link';
import tw from '~/types/tailwind';

const AVATAR_IMAGE = '/avatar.jpg';

export default function Page() {
  return (
    <>
      <div className={tw('flex flex-col sm:flex-row gap-4 items-center')}>
        <img
          src={AVATAR_IMAGE}
          className={tw('rounded-full w-16 h-16')}
          alt="Radoslav Stankov"
        />
        <h1 className={tw('text-4xl font-bold')}>Hey, I'm Rado 👋</h1>
      </div>
      <div className={tw('flex flex-col gap-4 text-lg mt-4')}>
        <div>
          I'm CTO at{' '}
          <Link href="https://doczen.com" className={tw('font-semibold')}>
            Doczen
          </Link>{' '}
          🚀.
          <br />
          I'm writing a newsletter the{' '}
          <Link
            href="https://tips.rstankov.com"
            className={tw('font-semibold')}>
            Rado's tips
          </Link>{' '}
          newsletter ✏️ 📭.
          <br />
          Previously, I was Co-Founder/CTO at{' '}
          <Link
            href="https://www.producthunt.com"
            className={tw('font-semibold')}>
            LIVO
          </Link>{' '}
          and the Head of Engineering at{' '}
          <Link
            href="https://www.producthunt.com"
            className={tw('font-semibold')}>
            Product Hunt
          </Link>{' '}
          😺.
        </div>
        <div>
          In my spare time, I'm:
          <ul className={tw('list-disc pl-4 space-y-1')}>
            <li>
              Blogging at{' '}
              <Link
                href="https://blog.rstankov.com"
                className={tw('font-semibold')}>
                📝 blog.rstankov.com
              </Link>
            </li>
            <li>
              Speaking at various{' '}
              <Link href="/appearances" className={tw('font-semibold')}>
                📅 events
              </Link>{' '}
              and{' '}
              <Link href="/appearances" className={tw('font-semibold')}>
                🎤 podcasts
              </Link>
              .
            </li>
            <li>
              Supporting couple of{' '}
              <Link
                href="https://github.com/RStankov"
                className={tw('font-semibold')}>
                💻 open source
              </Link>{' '}
              projects like{' '}
              <Link
                href="https://github.com/RStankov/SearchObject"
                className={tw('font-semibold')}>
                🔎 SearchObject
              </Link>{' '}
              and{' '}
              <Link
                href="https://github.com/producthunt/kitty-policy"
                className={tw('font-semibold')}>
                😸 KittyPolicy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          You can ping me on{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/radoslavstankov/"
            className={tw('font-semibold')}>
            LinkedIn
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://mastodon.social/@rstankov"
            className={tw('font-semibold')}>
            Mastodon
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://www.threads.net/@rstankov"
            className={tw('font-semibold')}>
            Threads
          </Link>{' '}
          or{' '}
          <Link
            target="_blank"
            href="https://twitter.com/rstankov"
            className={tw('font-semibold')}>
            Twitter
          </Link>{' '}
          about anything related to GraphQL, React, JavaScript, Ruby,
          management, product development, remote work, or software engineering
          in general.
        </div>
        <div>I'm always glad to help 🙌</div>
      </div>
    </>
  );
}
