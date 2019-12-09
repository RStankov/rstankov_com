import { useRouter } from 'next/router';

export default function useCurrentPath() {
  const router = useRouter();

  if (!router || !router.asPath) {
    return '';
  }

  return router.asPath;
}
