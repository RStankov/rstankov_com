import * as React from 'react';
import IAppearance from '~/types/Appearance';
import { groupBy, sortBy } from 'lodash';

type IType = string;

export const TYPES = [
  {
    value: 'presentation',
    label: 'Presentations',
  },
  {
    value: 'podcast-episode',
    label: 'Podcasts',
  },
  {
    value: 'interview',
    label: 'Interviews',
  },
];

interface IAppearancesOfYear {
  year: string;
  appearances: IAppearance[];
}

type IUseFilters = [
  IType[],
  (type: IType, options?: { include?: boolean }) => void,
  IAppearancesOfYear[],
];

export function useFilters(data: IAppearance[]): IUseFilters {
  const [filters, setFilters] = React.useState<IType[]>([]);

  return [
    filters,
    (type: IType, options = {}) => {
      setFilters(toggleFilter(type, filters, options.include));
    },
    groupAppearances(filterAppearances(data, filters)),
  ];
}

function toggleFilter(type: IType, filters: IType[], include?: boolean) {
  if (filters.indexOf(type) !== -1) {
    return filters.filter((filter) => filter !== type);
  }

  if (include) {
    return [...filters, type];
  }

  return [type];
}

function filterAppearances(
  appearances: IAppearance[],
  types: any,
): IAppearance[] {
  if (types.length === 0) {
    return appearances;
  }
  return appearances.filter(({ type }) => types.indexOf(type) !== -1);
}

function groupAppearances(appearances: IAppearance[]): IAppearancesOfYear[] {
  return sortBy(
    Object.entries(
      groupBy(
        sortBy(appearances, 'date').reverse(),
        ({ date }) => date.split('/')[0],
      ),
    ),
    0,
  )
    .reverse()
    .map(([year, appearances]) => ({ year, appearances }));
}
