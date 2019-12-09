import * as React from 'react';
import IconPresentaion from './IconPresentaion';
import IconPodcast from './IconPodcast';
import IAppearance from '~/types/Appearance';
import styles from './styles.css';

interface IProps {
  appearance: IAppearance;
}

export default function Appearance({ appearance }: IProps) {
  return (
    <div>
      <time>{appearance.date}</time>
      <IconPodcast className={styles.icon} />
      <IconPresentaion className={styles.icon} />
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
