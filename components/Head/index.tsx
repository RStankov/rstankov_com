import { usePathname } from 'next/navigation';

interface IProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Head({
  title = 'rstankov',
  image = '/avatar.jpg',
  description,
}: IProps) {
  const url = `https://rstankov.com/${usePathname()}`;

  return (
    <>
      <meta charSet="UTF-8" />

      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="icon" href="/favicon.ico" />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}

      <meta property="og:url" content={url} />
      <meta name="twitter:site" content={url} />

      {image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
          <meta property="og:image" content={image} />
        </>
      )}

      <meta property="og:site_name" content="Radoslav Stankov" />
      <meta property="og:type" content="Website" />
      <meta
        property="copyright"
        content={`(c) ${new Date().getFullYear()} Copyright: Radoslav Stankov`}
      />
    </>
  );
}
