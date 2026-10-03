import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IAppearance } from './types';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

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
];

export function useFilters(): IUseFilters {
  const router = useRouter();
  const pathname = usePathname();
  const filters = useSearchParams()
    .getAll('type')
    .filter((type) => TYPES.some(({ value }) => value === type));

  return [
    filters,
    (type: IType, options = {}) => {
      const params = new URLSearchParams();
      toggleFilter(type, filters, options.include).forEach((filter) =>
        params.append('type', filter),
      );
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
  ];
}

export function filterAndGroupAppearances(
  appearances: IAppearance[],
  types: IType[],
): IAppearancesOfYear[] {
  return groupAppearances(filterAppearances(appearances, types));
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
  types: IType[],
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
