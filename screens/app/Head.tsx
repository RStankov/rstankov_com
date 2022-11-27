import NextHead from 'next/head';
import React from 'react';
import useCurrentPath from './useCurrentPath';

interface IProps {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export default function Head({ meta }: IProps) {
  const title = meta ? meta.title : 'Radoslav Stankov';
  const url = `https://rstankov.com/${useCurrentPath()}`;

  return (
    <NextHead>
      <meta charSet="UTF-8" />

      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="icon" href="/favicon.ico" />

      {meta && meta.description && (
        <>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
        </>
      )}

      <meta property="og:url" content={url} />
      <meta name="twitter:site" content={url} />

      {meta && meta.image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={meta.image} />
          <meta property="og:image" content={meta.image} />
        </>
      )}

      <meta property="og:site_name" content="Radoslav Stankov" />
      <meta property="og:type" content="Website" />
      <meta
        property="copyright"
        content={`(c) ${new Date().getFullYear()} Copyright: Radoslav Stankov`}
      />
    </NextHead>
  );
}
