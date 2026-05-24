import cn from 'classnames';
import tw from '~/types/tailwind';

interface IProps {
  options: { value: string; label: string; count?: number }[];
  selected: string[];
  onSelect: (value: string, options?: { include?: boolean }) => void;
}

export default function Switch({ options, selected, onSelect }: IProps) {
  return (
    <div className={tw('flex gap-2')}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => onSelect(option.value, { include: e.metaKey })}
          className={cn(
            tw('py-1.5 px-3 text-sm font-medium rounded-full border transition-colors'),
            selected.indexOf(option.value) !== -1
              ? tw('bg-gray-900 border-gray-900 text-white')
              : tw('bg-white border-gray-300 text-gray-600 hover:bg-gray-50'),
          )}>
          {option.count !== undefined ? `${option.label} (${option.count})` : option.label}
        </button>
      ))}
    </div>
  );
}
