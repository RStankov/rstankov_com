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
    label: 'Interview',
  },
];

const initialFilters = TYPES.map(type => type.value);

export function useFilters(): [IType[], (type: IType) => void] {
  const [filters, setFilters] = React.useState<IType[]>(initialFilters);

  return [filters, (type: IType) => setFilters(toggleFilter(type, filters))];
}

function toggleFilter(type: IType, filters: IType[]) {
  if (filters.indexOf(type) === -1) {
    return [...filters, type];
  } else {
    return filters.filter(filter => filter !== type);
  }
}
