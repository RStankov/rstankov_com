import * as React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface IProps {
  options: { value: string; label: string }[];
  selected: string[];
  onSelect: (value: string, options?: { include?: boolean }) => void;
}

export default function Switch({ options, selected, onSelect }: IProps) {
  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option.value}
          onClick={e => onSelect(option.value, { include: e.metaKey })}
          className={classNames(styles.button, {})}>
          {selected.indexOf(option.value) !== -1 ? '✅' : ''} {option.label}
        </button>
      ))}
    </div>
  );
}
