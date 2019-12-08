import React from 'react';
import NextHead from 'next/head';

interface IProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function Head(props: IProps) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description} />
      <meta name="twitter:site" content={props.url} />
      {props.image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={props.image} />
          <meta property="og:image" content={props.image} />
        </>
      )}
      <meta property="og:site_name" content="Radoslav Stankov" />
      <meta property="og:type" content="Website" />
      <meta
        property="copyright"
        content="(c) 2018 Copyright: Radoslav Stankov"
      />
    </NextHead>
  );
}

Head.defaultProps = {
  title: 'Radoslav Stankov',
  description: 'Head of engineering at @ProductHunt',
  url: 'http://rstankov.com',
};
