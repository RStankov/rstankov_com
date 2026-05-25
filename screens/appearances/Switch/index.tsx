import cn from 'classnames';
import tw from '~/types/tailwind';

interface IProps {
  options: { value: string; label: string; count?: number }[];
  selected: string[];
  onSelect: (value: string, options?: { include?: boolean }) => void;
}

export default function Switch({ options, selected, onSelect }: IProps) {
  return (
    <div
      className={tw(
        'inline-flex rounded-lg border border-gray-200 divide-x divide-gray-200 overflow-hidden',
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => onSelect(option.value, { include: e.metaKey })}
          className={cn(
            tw('py-1.5 px-4 text-sm font-medium transition-colors'),
            selected.indexOf(option.value) !== -1
              ? tw('bg-gray-900 text-white')
              : tw('bg-white text-gray-600 hover:bg-gray-50'),
          )}
        >
          {option.count !== undefined
            ? `${option.label} (${option.count})`
            : option.label}
        </button>
      ))}
    </div>
  );
}
