import Appearance from './Appearance';
import IAppearance from '~/types/Appearance';
import React from 'react';
import Switch from './Switch';
import data from './data';
import { groupBy, sortBy } from 'lodash';
import styles from './styles.module.css';

type IType = string;

const TYPES = [
  {
    value: 'presentation',
    label: 'Presentations',
  },
  {
    value: 'podcast-episode',
    label: 'Podcasts',
  },
];

const initialFilters = TYPES.map(type => type.value);

export default function Appearances() {
  const [filters, setFilters] = React.useState<IType[]>(initialFilters);

  return (
    <>
      <header className={styles.header}>
        <h1>Appearances</h1>
        <Switch
          options={TYPES}
          selected={filters}
          onSelect={type => setFilters(toggleFilter(type, filters))}
        />
      </header>
      {groupAppearances(filterAppearances(data.appearances, filters)).map(
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

function toggleFilter(type: IType, filters: IType[]) {
  if (filters.indexOf(type) === -1) {
    return [...filters, type];
  } else {
    return filters.filter(filter => filter !== type);
  }
}

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
