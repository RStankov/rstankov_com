import Appearance from './Appearance';
import IAppearance from '~/types/Appearance';
import React from 'react';
import Switch from './Switch';
import data from './data';
import paths from '~/paths';
import styles from './styles.module.css';
import { groupBy, sortBy } from 'lodash';
import { useFilters, TYPES } from './utils';

export default function Page() {
  const [filters, setFilters] = useFilters();

  return (
    <>
      <header className={styles.header}>
        <h1>Appearances</h1>
        <Switch options={TYPES} selected={filters} onSelect={setFilters} />
      </header>
      {groupAppearances(filterAppearances(data, filters)).map(
        ([year, appearances]) => (
          <section key={year}>
            <header className={styles.sectionHeader}>
              <h2>{year}</h2>
              <small>{appearances.length}</small>
              <hr />
            </header>
            {appearances.map((appearance, index) => (
              <Appearance key={index} appearance={appearance} />
            ))}
          </section>
        ),
      )}
    </>
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
