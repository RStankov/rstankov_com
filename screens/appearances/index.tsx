import Appearance from './Appearance';
import IAppearance from '~/types/Appearance';
import React from 'react';
import Switch from './Switch';
import data from './data';
import paths from '~/paths';
import styles from './styles.module.css';
import { groupBy, sortBy } from 'lodash';
import { useFilters, TYPES } from './utils';
import LinkExternal from '~/components/LinkExternal';
import Stack from '~/components/Stack';

export default function Page() {
  const [filters, setFilters] = useFilters();

  return (
    <Stack.Column gap="m">
      <Stack.ResponsiveRow tag="header" gap="m">
        <h1 className={styles.h1}>Appearances</h1>
        <Switch options={TYPES} selected={filters} onSelect={setFilters} />
      </Stack.ResponsiveRow>
      <p>
        I love talking about technology, product, and process.
        <br />
        If you want me to speak on your event or podcast, reach out on{' '}
        <LinkExternal href={paths.external.twitter}>Twitter</LinkExternal>.
      </p>
      {groupAppearances(filterAppearances(data, filters)).map(
        ([year, appearances]) => (
          <section key={year}>
            <header className={styles.sectionHeader}>
              <h2>{year}</h2>
              <small>{appearances.length}</small>
              <hr />
            </header>
            <Stack.Column gap="s">
              {appearances.map((appearance, index) => (
                <Appearance key={index} appearance={appearance} />
              ))}
            </Stack.Column>
          </section>
        ),
      )}
    </Stack.Column>
  );
}

Page.meta = {
  title: 'Appearances',
  description:
    'List of all appearances of Radoslav Stankov - presentations and podcasts.',
  image: paths.image.cover,
};

function filterAppearances(appearances: IAppearance[], types: any) {
  if (types.length === 0) {
    return appearances;
  }
  return appearances.filter(({ type }) => types.indexOf(type) !== -1);
}

function groupAppearances(appearances: IAppearance[]) {
  return sortBy(
    Object.entries(
      groupBy(
        sortBy(appearances, 'date').reverse(),
        ({ date }) => date.split('/')[0],
      ),
    ),
    0,
  ).reverse();
}
