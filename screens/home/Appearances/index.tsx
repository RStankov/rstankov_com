import Appearance from './Appearance';
import React from 'react';
import classNames from 'classnames';
import data from './data';
import styles from './styles.css';
import { groupBy, sortBy, uniq } from 'lodash';

interface IProps {}

interface IState {
  filters: any[];
}

export default class Appearances extends React.Component<IProps, IState> {
  state = {
    filters: [],
  };

  filterToggleHandler(type: any) {
    return (e: any) => {
      e.preventDefault();

      this.setState({
        filters: toggleFilter(type, this.state.filters),
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Appearances</h1>
        {getTypes(data.appearances).map(type => (
          <button
            key={type}
            onClick={this.filterToggleHandler(type)}
            className={classNames(styles.filterButton, {
              [styles.active]: (this.state.filters as any).indexOf(type) !== -1,
            })}>
            {type}s
          </button>
        ))}
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

function toggleFilter(type: any, filters: any[]) {
  if (filters.indexOf(type) === -1) {
    return [...filters, type];
  } else {
    return filters.filter(filter => filter !== type);
  }
}

function filterAppearances(appearances: any[], types: any) {
  if (types.length === 0) {
    return appearances;
  }
  return appearances.filter(({ type }) => types.indexOf(type) !== -1);
}

function groupAppearances(appearances: any[]) {
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

function getTypes(appearances: any[]): any[] {
  return uniq(appearances.map(({ type }) => type));
}
