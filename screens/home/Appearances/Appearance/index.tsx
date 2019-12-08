import * as React from 'react';

export default function Appearance({ appearance }: any) {
  return (
    <div>
      <time>{appearance.date}</time>
      <i>{appearance.type}</i>
      <strong>{appearance.name}</strong>(
      <a href={appearance.event.url}>{appearance.event.name}</a>)
      <small>
        {appearance.links.map((link: any, index: number) => (
          <a key={index} href={link.url}>
            {link.type}
          </a>
        ))}
      </small>
    </div>
  );
}
