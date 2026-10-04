import Link from '~/components/Link';

const AVATAR_IMAGE = '/avatar.jpg';

export default function Page() {
  return (
    <>
      <div className="flex flex-row gap-5 items-center mt-6">
        <img
          src={AVATAR_IMAGE}
          className="rounded-full size-20 ring-2 ring-brand shadow-sm shrink-0"
          alt="Radoslav Stankov"
        />
        <div>
          <h1 className="text-3xl font-bold mb-1">Hey, I'm Rado 👋</h1>
          <p className="text-gray-500 text-sm">
            CTO · Product builder · Developer
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-lg pt-6 leading-relaxed">
        <div className="space-y-1">
          <div>
            I&apos;m CTO at{' '}
            <Link
              href="https://doczen.com"
              className="font-semibold hover:text-brand"
            >
              Doczen
            </Link>{' '}
            🚀, where we use AI to help companies automate and optimize their
            internal processes.
          </div>
          <div>
            Before that, I was Co-Founder &amp; CTO at{' '}
            <Link
              href="https://livo.me"
              className="font-semibold hover:text-brand"
            >
              LIVO
            </Link>{' '}
            and Head of Engineering at{' '}
            <Link
              href="https://www.producthunt.com"
              className="font-semibold hover:text-brand"
            >
              Product Hunt
            </Link>{' '}
            😺.
          </div>
          <div>
            I&apos;ve been building products since 2002. These days I lead
            teams and still ship features every day 💻.
          </div>
        </div>
        <div>
          On the side, I&apos;m:
          <ul className="list-disc pl-4 space-y-1">
            <li>
              Writing the{' '}
              <Link
                href="https://tips.rstankov.com"
                className="font-semibold hover:text-brand"
              >
                ✏️ Rado&apos;s tips
              </Link>{' '}
              newsletter.
            </li>
            <li>
              Speaking at{' '}
              <Link
                href="/appearances"
                className="font-semibold hover:text-brand"
              >
                📅 events
              </Link>{' '}
              and{' '}
              <Link
                href="/appearances"
                className="font-semibold hover:text-brand"
              >
                🎤 podcasts
              </Link>{' '}
              (
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/radoslavstankov/"
                className="font-semibold hover:text-brand"
              >
                ping me
              </Link>{' '}
              if you&apos;d like me as a guest on yours).
            </li>
            <li>
              Maintaining{' '}
              <Link href="/projects" className="font-semibold hover:text-brand">
                open source
              </Link>{' '}
              projects like{' '}
              <Link
                href="https://github.com/RStankov/SearchObject"
                className="font-semibold hover:text-brand"
              >
                🔎 SearchObject
              </Link>{' '}
              and{' '}
              <Link
                href="https://github.com/producthunt/kitty-policy"
                className="font-semibold hover:text-brand"
              >
                😸 KittyPolicy
              </Link>
              .
            </li>
          </ul>
        </div>
        <div>
          I love discussing AI, engineering, and product. Find me on{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/radoslavstankov/"
            className="font-semibold hover:text-brand"
          >
            LinkedIn
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://mastodon.social/@rstankov"
            className="font-semibold hover:text-brand"
          >
            Mastodon
          </Link>
          ,{' '}
          <Link
            target="_blank"
            href="https://www.threads.net/@rstankov"
            className="font-semibold hover:text-brand"
          >
            Threads
          </Link>
          , or{' '}
          <Link
            target="_blank"
            href="https://twitter.com/rstankov"
            className="font-semibold hover:text-brand"
          >
            Twitter
          </Link>
          .
        </div>
        <div>I&apos;m always glad to help 🙌</div>
      </div>
    </>
  );
}
