import * as React from 'react';
import classNames from 'classnames';
import tw from '~/types/tailwind';

interface IProps {
  options: { value: string; label: string }[];
  selected: string[];
  onSelect: (value: string, options?: { include?: boolean }) => void;
}

export default function Switch({ options, selected, onSelect }: IProps) {
  return (
    <div className={tw('inline-flex items-center justify-center')}>
      {options.map((option, i) => (
        <button
          key={option.value}
          onClick={(e) => onSelect(option.value, { include: e.metaKey })}
          className={classNames(
            tw(
              `bg-gray-50 py-1 px-2 border border-gray-400 hover:bg-brand hover:border-brand hover:text-white`,
            ),
            i == 0 ? tw('rounded-l-md') : tw('border-l-0'),
            i == options.length - 1 && tw('rounded-r-md'),
          )}>
          {selected.indexOf(option.value) !== -1 ? '✅' : ''} {option.label}
        </button>
      ))}
    </div>
  );
}
