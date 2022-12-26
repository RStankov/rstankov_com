import Appearance from './Appearance';
import React from 'react';
import Switch from './Switch';
import data from './data';
import { useFilters, TYPES } from './utils';
import Link from '~/components/Link';
import tw from '~/types/tailwind';

export default function Page() {
  const [filters, setFilters, gropedAppearances] = useFilters(data);

  return (
    <div className={tw('flex flex-col gap-2')}>
      <header className={tw('flex flex-col md:flex-row gap-4')}>
        <h1 className={tw('text-lg font-bold flex-1')}>Appearances</h1>
        <Switch options={TYPES} selected={filters} onSelect={setFilters} />
      </header>
      <p>
        I love talking about technology, product, and process.
        <br />
        If you want me to speak on your event or podcast, reach out on{' '}
        <Link href="https://twitter.com/rstankov">Twitter</Link>.
      </p>
      {gropedAppearances.map(({ year, appearances }) => (
        <section key={year}>
          <header className={tw('flex items-center justify-center')}>
            <h2 className={tw('font-bold text-xl')}>{year}</h2>
            <small
              className={tw('rounded-full bg-gray-400 text-white px-2 ml-2')}>
              {appearances.length}
            </small>
            <hr className={tw('flex-1 border-gray-400')} />
          </header>
          <div className={tw('flex flex-col gap-4')}>
            {appearances.map((appearance, index) => (
              <Appearance key={index} appearance={appearance} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
