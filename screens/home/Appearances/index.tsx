import Appearance from './Appearance';
import IAppearance from '~/types/Appearance';
import React from 'react';
import Switch from './Switch';
import data from './data';
import { groupBy, sortBy } from 'lodash';

interface IProps {}

type IType = string;

interface IState {
  filters: IType[];
}

const TYPES = [
  {
    value: 'presentation',
    label: 'Presentations',
  },
  {
    value: 'podcast-episode',
    label: 'Podcast',
  },
];

export default class Appearances extends React.Component<IProps, IState> {
  state: IState = {
    filters: [],
  };

  filterToggleHandler = (type: IType) => {
    this.setState({
      filters: toggleFilter(type, this.state.filters),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Appearances</h1>
        <Switch
          options={TYPES}
          selected={this.state.filters}
          onSelect={this.filterToggleHandler}
        />
        {groupAppearances(
          filterAppearances(data.appearances, this.state.filters),
        ).map(([year, appearances]) => (
          <section key={year}>
            <h2>
              {year}
              <small>({appearances.length})</small>
            </h2>
            {appearances.map((appearance, index) => (
              <Appearance key={index} appearance={appearance} />
            ))}
          </section>
        ))}
      </React.Fragment>
    );
  }
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
