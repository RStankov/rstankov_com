// NOTE(rstankov): List only what is being used
//   - All properties can be found here - https://tailwindcss.com/docs/utility-first
//   - PurgeCSS text searches the app, so if a value is in this list it is included in bundle, however interpolation makes sure we don't include all colors
type ITailwindClassNames =
  | 'antialiased'
  | 'border'
  | 'flex'
  | 'flex-1'
  | 'flex-col'
  | 'font-bold'
  | 'font-semibold'
  | 'hidden'
  | 'inline-block'
  | 'inline-flex'
  | 'items-center'
  | 'items-start'
  | 'justify-center'
  | 'list-disc'
  | 'rounded-full'
  | 'rounded-md'
  | 'text-center'
  | `${IBreakpoints}:flex-row`
  | `${IBreakpoints}:inline`
  | `${IBreakpoints}:justify-end`
  | `bg-${IColors}`
  | `border-${IColors}`
  | `border-${IDirection}-${IColors}`
  | `border-${IDirection}-${IDistance}`
  | `border-${IDirection}`
  | `border-${IDistance}`
  | `gap-${IDistance}`
  | `h-${IDistanceWithFull}`
  | `hover:bg-${IColors}`
  | `hover:border-${IColors}`
  | `hover:text-${IColors}`
  | `m${IDirection}-${IDistanceWithAuto}`
  | `m-${IDistanceWithAuto}`
  | `max-h-${IDistanceWithFull}`
  | `max-w-${IDistanceWithFull}`
  | `p${IDirection}-${IDistanceWithAuto}`
  | `p-${IDistanceWithAuto}`
  | `rounded-${IDirection}-md`
  | `space-y-${IDistance}`
  | `text-${IColors}`
  | `text-${ISize}`
  | `w-${IDistanceWithFull}`;

type IColors = 'brand' | 'gray-50' | 'gray-400' | 'gray-900' | 'white';

type IDirection = 'x' | 'y' | 't' | 'r' | 'b' | 'l';

type IDistance = 0 | 1 | '1.5' | 2 | 4 | 5 | 6 | 8 | 12 | 16 | 40;
type IDistanceWithFull = 'full' | IDistance | '3xl';
type IDistanceWithAuto = 'auto' | IDistance;

type ISize = 'lg' | 'xl' | '4xl';

type IBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
