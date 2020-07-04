import * as React from 'react';

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

type IUseFilters = [
  IType[],
  (type: IType, options?: { include?: boolean }) => void,
];

export function useFilters(): IUseFilters {
  const [filters, setFilters] = React.useState<IType[]>([]);

  return [
    filters,
    (type: IType, options = {}) => {
      setFilters(toggleFilter(type, filters, options.include));
    },
  ];
}

function toggleFilter(type: IType, filters: IType[], include?: boolean) {
  if (filters.indexOf(type) !== -1) {
    return filters.filter(filter => filter !== type);
  }

  if (include) {
    return [...filters, type];
  }

  return [type];
}
