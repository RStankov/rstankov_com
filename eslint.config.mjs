import tailwind from 'eslint-plugin-tailwindcss';
import tsParser from '@typescript-eslint/parser';

export default [
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'classnames', 'clsx'],
      },
    },
    rules: {
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classname': 'error',
    },
  },
];
