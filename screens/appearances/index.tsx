'use client';

import Appearance from './Appearance';
import Switch from './Switch';
import data from './data';
import { useFilters, TYPES } from './utils';
import Link from '~/components/Link';
import tw from '~/types/tailwind';

export default function Page() {
  const [filters, setFilters, gropedAppearances] = useFilters(data);

  const typeCounts = data.reduce(
    (acc, { type }) => ({ ...acc, [type]: (acc[type] || 0) + 1 }),
    {} as Record<string, number>,
  );

  return (
    <div className={tw('flex flex-col gap-6')}>
      <div>
        <h1 className={tw('text-2xl font-bold mb-1')}>Appearances</h1>
        <p className={tw('text-gray-600 mb-4')}>
          I&apos;ve given <strong>{typeCounts['presentation'] || 0}</strong>{' '}
          presentations, been on{' '}
          <strong>{typeCounts['podcast-episode'] || 0}</strong> podcasts, and
          had <strong>{typeCounts['interview'] || 0}</strong> interviews. I love
          talking about technology, product, and engineering - if you&apos;d
          like me to speak at your event or appear on your podcast, reach out on{' '}
          <Link href="https://www.linkedin.com/in/radoslavstankov/">
            LinkedIn
          </Link>
          .
        </p>
        <Switch options={TYPES} selected={filters} onSelect={setFilters} />
      </div>
      {gropedAppearances.map(({ year, appearances }) => (
        <section key={year}>
          <header className={tw('flex items-center gap-3 mb-3')}>
            <h2 className={tw('text-xl font-bold')}>{year}</h2>
            <span
              className={tw(
                'bg-gray-100 text-gray-600 text-xs font-medium size-5 flex items-center justify-center rounded-full border border-gray-300 shrink-0',
              )}>
              {appearances.length}
            </span>
          </header>
          <div
            className={tw(
              'bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100',
            )}>
            {appearances.map((appearance, index) => (
              <Appearance key={index} appearance={appearance} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
