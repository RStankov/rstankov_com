import type { Metadata } from 'next';

interface IOptions {
  path?: string;
  title?: string;
  description?: string;
  image?: string;
}

const HOST = 'https://rstankov.com';

export default function buildMetadata({
  title = 'Radoslav Stankov',
  image = '/avatar.jpg',
  path,
  description,
}: IOptions = {}): Metadata {
  const url = `${HOST}/${path || ''}`;

  const images: Array<{ url: string }> = image
    ? [
        {
          url: `${HOST}${image}`,
        },
      ]
    : [];

  return {
    title,
    description,
    icons: [
      {
        rel: 'icon',
        url: `${HOST}/favicon.ico`,
      },
      {
        rel: 'apple-touch-icon',
        url: `${HOST}/apple-icon.png`,
      },
    ],
    twitter: {
      card: 'summary_large_image',
      creator: '@rstankov',
      title,
      description,
      images,
      site: 'Radoslav Stankov',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'Radoslav Stankov',
      images,
    },
    other: {
      copyright: `(c) ${new Date().getFullYear()} Copyright: Radoslav Stankov`,
    },
  };
}
