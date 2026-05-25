import cn from 'classnames';

interface IProps {
  options: { value: string; label: string; count?: number }[];
  selected: string[];
  onSelect: (value: string, options?: { include?: boolean }) => void;
}

export default function Switch({ options, selected, onSelect }: IProps) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 divide-x divide-gray-200 overflow-hidden">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={(e) => onSelect(option.value, { include: e.metaKey })}
          className={cn(
            'py-1.5 px-4 text-sm font-medium transition-colors',
            selected.indexOf(option.value) !== -1
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50',
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
