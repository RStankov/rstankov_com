// NOTE(rstankov): List only what is being used
//   - All properties can be found here - https://tailwindcss.com/docs/utility-first
//   - PurgeCSS text searches the app, so if a value is in this list it is included in bundle, however interpolation makes sure we don't include all colors
type ITailwindClassNames =
  | 'absolute'
  | 'antialiased'
  | 'border'
  | 'cursor-pointer'
  | 'decoration-2'
  | 'divide-y'
  | 'flex'
  | 'flex-1'
  | 'flex-col'
  | 'flex-row'
  | 'font-bold'
  | 'font-medium'
  | 'font-semibold'
  | 'group'
  | 'group-last:hidden'
  | 'hidden'
  | 'hover:no-underline'
  | 'inline-block'
  | 'italic'
  | 'inline-flex'
  | 'items-center'
  | 'items-start'
  | 'justify-center'
  | 'list-disc'
  | 'object-cover'
  | 'overflow-hidden'
  | 'relative'
  | 'rounded-full'
  | 'rounded-lg'
  | 'rounded-md'
  | 'self-stretch'
  | 'shadow-sm'
  | 'shrink-0'
  | 'text-center'
  | 'transition-colors'
  | 'underline'
  | 'underline-offset-4'
  | `${IBreakpoints}:flex`
  | `${IBreakpoints}:flex-row`
  | `${IBreakpoints}:hidden`
  | `${IBreakpoints}:inline`
  | `${IBreakpoints}:items-start`
  | `${IBreakpoints}:justify-end`
  | `${IBreakpoints}:h-${IDistanceWithFull}`
  | `${IBreakpoints}:w-${IDistanceWithFull}`
  | `bg-${IColors}`
  | `border-${IColors}`
  | `border-${IDirection}-${IColors}`
  | `border-${IDirection}-${IDistance}`
  | `border-${IDirection}`
  | `border-${IDistance}`
  | `bottom-${IDistance}`
  | `divide-${IColors}`
  | `gap-${IDistance}`
  | `h-${IDistanceWithFull}`
  | `hover:bg-${IColors}`
  | `hover:border-${IColors}`
  | `hover:text-${IColors}`
  | `left-${IDistance}`
  | `-m${IDirection}-${IDistance}`
  | `m${IDirection}-${IDistanceWithAuto}`
  | `m-${IDistanceWithAuto}`
  | `max-h-${IDistanceWithFull}`
  | `max-w-${IDistanceWithFull}`
  | `min-w-${IDistanceWithFull}`
  | `p${IDirection}-${IDistanceWithAuto}`
  | `p-${IDistanceWithAuto}`
  | `ring-${IColors}`
  | `ring-${IDistance}`
  | `size-${IDistance}`
  | `rounded-${IDirection}-md`
  | `space-y-${IDistance}`
  | `text-${IColors}`
  | `text-${ISize}`
  | `top-${IDistanceWithFull}`
  | `right-${IDistance}`
  | `w-${IDistanceWithFull}`
  | `z-${IZIndex}`;

type IColors =
  | 'brand'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-900'
  | 'white';

type IDirection = 'x' | 'y' | 't' | 'r' | 'b' | 'l';

type IDistance = 0 | '0.5' | 1 | '1.5' | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 12 | 14 | 16 | 24 | 40 | 72;
type IDistanceWithFull = 'full' | 'px' | IDistance | '3xl';
type IDistanceWithAuto = 'auto' | IDistance;

type ISize = 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '4xl';

type IBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type IZIndex = 0 | 10 | 20 | 30 | 40 | 50;

// NOTE(rstankov): Check if strings contains only Tailwind classes
//   Explanation how this works:
//     - https://www.kirillvasiltsov.com/writing/type-check-tailwind-css/
export type ITailwind<S> = S extends `${infer Class} ${infer Rest}`
  ? Class extends ITailwindClassNames
    ? `${Class} ${ITailwind<Rest>}`
    : never
  : S extends `${infer Class}`
  ? Class extends ITailwindClassNames
    ? S
    : never
  : never;

// NOTE(rstankov): Helper to verify class names listed match available Tailwind class names
export default function tw<S>(classes: ITailwind<S>) {
  return classes;
}
